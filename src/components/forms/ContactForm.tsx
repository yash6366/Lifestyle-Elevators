'use client';

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { contactSchema, type ContactSchemaType } from '@/lib/validation/contact';
import { COMPANY, getWhatsAppConfig } from '@/config/company';
import { buildWhatsAppUrl } from '@/lib/whatsapp/buildMessage';
import { Send, CheckCircle2, AlertCircle } from 'lucide-react';
import { cn } from '@/lib/utils/cn';

export function ContactForm() {
  const [submissionStatus, setSubmissionStatus] = useState<
    'idle' | 'opened_whatsapp' | 'unconfigured_fallback'
  >('idle');
  const [generatedText, setGeneratedText] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactSchemaType>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: '',
      contactNumber: '',
      email: '',
      subject: '',
      message: '',
    },
  });

  const onSubmit = (data: ContactSchemaType) => {
    setIsSubmitting(true);
    const text = [
      `Hello ${COMPANY.name},`,
      '',
      'I am reaching out via your website contact form.',
      '',
      `Name: ${data.name.trim()}`,
      `Phone: ${data.contactNumber.trim()}`,
      data.email ? `Email: ${data.email.trim()}` : '',
      `Subject: ${data.subject.trim()}`,
      `Message: ${data.message.trim()}`,
      '',
      'Thank you.',
    ]
      .filter(Boolean)
      .join('\n');

    setGeneratedText(text);

    const waConfig = getWhatsAppConfig();
    const result = buildWhatsAppUrl(text);

    if (result.success && result.url && waConfig.isConfigured) {
      setSubmissionStatus('opened_whatsapp');
      window.open(result.url, '_blank', 'noopener,noreferrer');
    } else {
      setSubmissionStatus('unconfigured_fallback');
    }

    setIsSubmitting(false);
  };

  const copyToClipboard = async () => {
    if (!generatedText) return;
    try {
      await navigator.clipboard.writeText(generatedText);
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    } catch {
      // Ignore clipboard fallback
    }
  };

  const mailtoUri = generatedText
    ? `mailto:${COMPANY.email.address}?subject=${encodeURIComponent(
        'Website Enquiry - Lifestyle Elevators'
      )}&body=${encodeURIComponent(generatedText)}`
    : COMPANY.email.mailtoUri;

  return (
    <div className="rounded-3xl border border-slate-200/90 bg-white p-6 shadow-lg sm:p-10">
      <div className="mb-6 border-b border-slate-100 pb-5">
        <h3 className="text-xl font-bold text-brand-blue-950 sm:text-2xl">
          Send Us a Direct Message
        </h3>
        <p className="mt-1 text-xs text-slate-600 sm:text-sm">
          Have an inquiry regarding lift modernisation, component procurement, or maintenance? Send
          us your query.
        </p>
      </div>

      {submissionStatus === 'opened_whatsapp' && (
        <div className="animate-fade-in space-y-4 rounded-2xl border border-emerald-200 bg-emerald-50 p-6 text-center">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
            <CheckCircle2 className="h-6 w-6" />
          </div>
          <div>
            <h4 className="text-base font-bold text-emerald-950">WhatsApp Opened</h4>
            <p className="mx-auto mt-1 max-w-md text-xs text-emerald-800">
              Your inquiry has been formatted and opened in WhatsApp. Please tap &quot;Send&quot; in
              your WhatsApp application to reach our engineering desk directly.
            </p>
          </div>
          <div className="flex justify-center gap-3 pt-2">
            <button
              type="button"
              onClick={() => {
                setSubmissionStatus('idle');
                reset();
              }}
              className="text-xs font-semibold text-brand-blue-900 underline hover:text-brand-gold-600"
            >
              Submit Another Message
            </button>
          </div>
        </div>
      )}

      {submissionStatus === 'unconfigured_fallback' && (
        <div className="animate-fade-in space-y-5 rounded-2xl border border-brand-gold-200 bg-brand-gold-50/50 p-6">
          <div className="flex items-start gap-3">
            <CheckCircle2 className="mt-0.5 h-6 w-6 shrink-0 text-brand-gold-600" />
            <div>
              <h4 className="text-base font-bold text-brand-blue-950">Enquiry Formatted & Ready</h4>
              <p className="mt-1 text-xs leading-relaxed text-slate-700">
                WhatsApp automated messaging is currently unavailable. Your inquiry has been
                formatted below so you can copy the text or connect with us immediately:
              </p>
            </div>
          </div>

          {generatedText && (
            <div className="rounded-xl border border-slate-200 bg-white p-4">
              <pre className="whitespace-pre-wrap font-mono text-xs text-slate-700">
                {generatedText}
              </pre>
            </div>
          )}

          <div className="flex flex-wrap items-center gap-3">
            <button
              type="button"
              onClick={copyToClipboard}
              className="inline-flex items-center gap-1.5 rounded-xl bg-brand-blue-900 px-4 py-2.5 text-xs font-bold text-white shadow-sm transition-colors hover:bg-brand-blue-800"
            >
              <Send className="h-3.5 w-3.5" />
              <span>{copied ? 'Copied to Clipboard!' : 'Copy Enquiry Text'}</span>
            </button>

            <a
              href={mailtoUri}
              className="inline-flex items-center gap-1.5 rounded-xl border border-brand-blue-200 bg-white px-4 py-2.5 text-xs font-bold text-brand-blue-900 shadow-sm transition-colors hover:bg-slate-50"
            >
              <span>Email to {COMPANY.email.address}</span>
            </a>

            <a
              href={COMPANY.phones[0].telUri}
              className="inline-flex items-center gap-1.5 rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-xs font-semibold text-slate-700 hover:bg-slate-50"
            >
              <span>Call {COMPANY.phones[0].display}</span>
            </a>
          </div>

          <div className="border-t border-brand-gold-200/60 pt-3">
            <button
              type="button"
              onClick={() => {
                setSubmissionStatus('idle');
                reset();
              }}
              className="text-xs font-semibold text-brand-blue-900 underline hover:text-brand-gold-600"
            >
              ← Clear & Submit Another Message
            </button>
          </div>
        </div>
      )}

      {submissionStatus === 'idle' && (
        <form
          action="#"
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit(onSubmit)(e);
          }}
          className="space-y-5"
          noValidate
        >
          <div>
            <label
              htmlFor="contact-name"
              className="mb-2 block text-xs font-semibold uppercase tracking-wider text-slate-800"
            >
              Your Name <span className="text-rose-500">*</span>
            </label>
            <input
              id="contact-name"
              type="text"
              placeholder="Enter your name"
              {...register('name')}
              aria-invalid={errors.name ? 'true' : 'false'}
              className={cn(
                'w-full rounded-xl border bg-slate-50/50 px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2',
                errors.name
                  ? 'border-rose-400 focus:ring-rose-200'
                  : 'border-slate-200 focus:ring-brand-blue-100'
              )}
            />
            {errors.name && (
              <p className="mt-1.5 flex items-center gap-1 text-xs text-rose-600">
                <AlertCircle className="h-3.5 w-3.5" />
                <span>{errors.name.message}</span>
              </p>
            )}
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label
                htmlFor="contact-phone"
                className="mb-2 block text-xs font-semibold uppercase tracking-wider text-slate-800"
              >
                Phone Number <span className="text-rose-500">*</span>
              </label>
              <input
                id="contact-phone"
                type="tel"
                placeholder="e.g. +91 98765 43210"
                {...register('contactNumber')}
                aria-invalid={errors.contactNumber ? 'true' : 'false'}
                className={cn(
                  'w-full rounded-xl border bg-slate-50/50 px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2',
                  errors.contactNumber
                    ? 'border-rose-400 focus:ring-rose-200'
                    : 'border-slate-200 focus:ring-brand-blue-100'
                )}
              />
              {errors.contactNumber && (
                <p className="mt-1.5 flex items-center gap-1 text-xs text-rose-600">
                  <AlertCircle className="h-3.5 w-3.5" />
                  <span>{errors.contactNumber.message}</span>
                </p>
              )}
            </div>

            <div>
              <label
                htmlFor="contact-email"
                className="mb-2 block text-xs font-semibold uppercase tracking-wider text-slate-800"
              >
                Email Address (Optional)
              </label>
              <input
                id="contact-email"
                type="email"
                placeholder="e.g. name@example.com"
                {...register('email')}
                className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-blue-100"
              />
              {errors.email && (
                <p className="mt-1.5 flex items-center gap-1 text-xs text-rose-600">
                  <AlertCircle className="h-3.5 w-3.5" />
                  <span>{errors.email.message}</span>
                </p>
              )}
            </div>
          </div>

          <div>
            <label
              htmlFor="contact-subject"
              className="mb-2 block text-xs font-semibold uppercase tracking-wider text-slate-800"
            >
              Enquiry Subject <span className="text-rose-500">*</span>
            </label>
            <input
              id="contact-subject"
              type="text"
              placeholder="e.g. Inquiring about AMC for 4-passenger lift in Jayanagar"
              {...register('subject')}
              className={cn(
                'w-full rounded-xl border bg-slate-50/50 px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2',
                errors.subject
                  ? 'border-rose-400 focus:ring-rose-200'
                  : 'border-slate-200 focus:ring-brand-blue-100'
              )}
            />
            {errors.subject && (
              <p className="mt-1.5 flex items-center gap-1 text-xs text-rose-600">
                <AlertCircle className="h-3.5 w-3.5" />
                <span>{errors.subject.message}</span>
              </p>
            )}
          </div>

          <div>
            <label
              htmlFor="contact-message"
              className="mb-2 block text-xs font-semibold uppercase tracking-wider text-slate-800"
            >
              Your Message <span className="text-rose-500">*</span>
            </label>
            <textarea
              id="contact-message"
              rows={4}
              placeholder="Describe your elevator requirement, site condition, or building specifications..."
              {...register('message')}
              className={cn(
                'w-full rounded-xl border bg-slate-50/50 px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2',
                errors.message
                  ? 'border-rose-400 focus:ring-rose-200'
                  : 'border-slate-200 focus:ring-brand-blue-100'
              )}
            />
            {errors.message && (
              <p className="mt-1.5 flex items-center gap-1 text-xs text-rose-600">
                <AlertCircle className="h-3.5 w-3.5" />
                <span>{errors.message.message}</span>
              </p>
            )}
          </div>

          <div className="pt-2">
            <button
              type="submit"
              disabled={isSubmitting}
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-brand-blue-900 px-6 py-3.5 text-sm font-bold text-white shadow transition-all hover:bg-brand-blue-800 active:scale-[0.99] disabled:opacity-50 sm:text-base"
            >
              <Send className="h-4 w-4" />
              <span>{isSubmitting ? 'Sending Message...' : 'Submit Enquiry'}</span>
            </button>
          </div>
        </form>
      )}
    </div>
  );
}
