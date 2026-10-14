export interface ShareDataPayload {
  title: string;
  text: string;
  url: string;
}

export interface ShareResult {
  shared: boolean;
  copiedToClipboard: boolean;
  canceled?: boolean;
  error?: string;
}

/**
 * Invokes browser Web Share API with safe fallback to clipboard copy.
 * Complies with PRD §8.1: Never claims shared if the user cancels.
 */
export async function shareContent(data: ShareDataPayload): Promise<ShareResult> {
  if (typeof window === 'undefined') {
    return { shared: false, copiedToClipboard: false };
  }

  // Attempt Web Share API first if supported
  if (navigator.share && typeof navigator.canShare === 'function' && navigator.canShare(data)) {
    try {
      await navigator.share(data);
      return { shared: true, copiedToClipboard: false };
    } catch (err: unknown) {
      // AbortError indicates user cancelled share sheet - do NOT mark as shared or copy to clipboard
      if (err instanceof Error && err.name === 'AbortError') {
        return { shared: false, copiedToClipboard: false, canceled: true };
      }
      // If genuine share error, fall through to clipboard
    }
  }

  // Fallback: Copy URL to clipboard
  try {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      await navigator.clipboard.writeText(data.url);
      return { shared: false, copiedToClipboard: true };
    }
  } catch {
    // Clipboard failed or permission denied
  }

  return {
    shared: false,
    copiedToClipboard: false,
    error: 'Sharing not supported on this device. Please copy the link manually.',
  };
}
