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
  const [submitted, setSubmitted] = useState(false);
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

    const waConfig = getWhatsAppConfig();
    const result = buildWhatsAppUrl(text);

    if (result.success && result.url && waConfig.isConfigured) {
      window.open(result.url, '_blank', 'noopener,noreferrer');
    }

    setSubmitted(true);
    setIsSubmitting(false);
    reset();
  };

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

      {submitted ? (
        <div className="animate-fade-in space-y-4 rounded-2xl border border-emerald-200 bg-emerald-50 p-6 text-center">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
            <CheckCircle2 className="h-6 w-6" />
          </div>
          <div>
            <h4 className="text-base font-bold text-emerald-950">Enquiry Received</h4>
            <p className="mx-auto mt-1 max-w-md text-xs text-emerald-800">
              Thank you for reaching out to Lifestyle Elevators. Our engineering desk will review
              your message and contact you on the provided number.
            </p>
          </div>
          <div className="flex justify-center gap-3 pt-2">
            <button
              type="button"
              onClick={() => setSubmitted(false)}
              className="text-xs font-semibold text-brand-blue-900 underline hover:text-brand-gold-600"
            >
              Submit Another Message
            </button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
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
              placeholder="e.g. Suresh Gowda"
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
