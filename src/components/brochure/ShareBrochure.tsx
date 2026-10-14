'use client';

import React, { useState } from 'react';
import { Share2, Copy, Check, MessageCircle, ExternalLink } from 'lucide-react';
import { shareContent } from '@/lib/utils/share';
import { COMPANY } from '@/config/company';

interface ShareBrochureProps {
  brochureUrl: string;
}

export function ShareBrochure({ brochureUrl }: ShareBrochureProps) {
  const [copied, setCopied] = useState(false);
  const [feedback, setFeedback] = useState<string | null>(null);

  const fullShareUrl =
    typeof window !== 'undefined'
      ? `${window.location.origin}${brochureUrl}`
      : `https://lifestyleelevators.in${brochureUrl}`;

  const handleNativeShare = async () => {
    setFeedback(null);
    const result = await shareContent({
      title: `${COMPANY.name} - Official Company Brochure`,
      text: `View elevator products and engineering services from ${COMPANY.name} (Bangalore, India):`,
      url: fullShareUrl,
    });

    if (result.canceled) {
      // User cancelled share dialog - do not show false success message
      return;
    }

    if (result.copiedToClipboard) {
      setCopied(true);
      setFeedback('Brochure link copied to clipboard!');
      setTimeout(() => {
        setCopied(false);
        setFeedback(null);
      }, 3500);
    } else if (result.error) {
      setFeedback(result.error);
    }
  };

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(fullShareUrl);
      setCopied(true);
      setFeedback('Brochure link copied to clipboard!');
      setTimeout(() => {
        setCopied(false);
        setFeedback(null);
      }, 3500);
    } catch {
      setFeedback('Could not copy link automatically. Please copy the URL from your browser bar.');
    }
  };

  const handleWhatsAppShare = () => {
    const text = encodeURIComponent(
      `${COMPANY.name} – Company Brochure\nView our elevator products and services:\n${fullShareUrl}`
    );
    window.open(`https://api.whatsapp.com/send?text=${text}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap items-center gap-3">
        {/* Native Web Share Button */}
        <button
          type="button"
          onClick={handleNativeShare}
          className="inline-flex items-center gap-2 rounded-lg bg-brand-blue-900 px-4 py-2.5 text-xs font-semibold text-white shadow-sm transition-colors hover:bg-brand-blue-800 sm:text-sm"
        >
          <Share2 className="h-4 w-4 text-brand-gold-400" />
          <span>Share Brochure</span>
        </button>

        {/* Direct WhatsApp Share Button */}
        <button
          type="button"
          onClick={handleWhatsAppShare}
          className="inline-flex items-center gap-2 rounded-lg bg-[#25D366] px-4 py-2.5 text-xs font-semibold text-white shadow-sm transition-colors hover:bg-[#20ba59] sm:text-sm"
        >
          <MessageCircle className="h-4 w-4 fill-current" />
          <span>Share via WhatsApp</span>
        </button>

        {/* Copy Link Button */}
        <button
          type="button"
          onClick={handleCopyLink}
          className="inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-4 py-2.5 text-xs font-medium text-slate-700 shadow-sm transition-colors hover:bg-slate-50 sm:text-sm"
        >
          {copied ? (
            <>
              <Check className="h-4 w-4 text-emerald-600" />
              <span className="font-semibold text-emerald-700">Copied!</span>
            </>
          ) : (
            <>
              <Copy className="h-4 w-4 text-slate-500" />
              <span>Copy Link</span>
            </>
          )}
        </button>
      </div>

      {/* Dynamic Feedback Message */}
      {feedback && (
        <p className="animate-fade-in inline-block rounded-lg border border-brand-blue-200 bg-brand-blue-50 px-3 py-2 text-xs font-medium text-brand-blue-900">
          {feedback}
        </p>
      )}

      {/* Permanent stable URL fallback for search engines and direct sharing */}
      <div className="flex items-center gap-1.5 pt-1 text-xs text-slate-500">
        <span>Permanent public URL:</span>
        <a
          href={brochureUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 font-mono text-brand-blue-900 underline hover:text-brand-gold-600"
        >
          <span>{brochureUrl}</span>
          <ExternalLink className="h-3 w-3" />
        </a>
      </div>
    </div>
  );
}
