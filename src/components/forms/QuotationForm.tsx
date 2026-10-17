'use client';

import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { quotationSchema, type QuotationSchemaType } from '@/lib/validation/quotation';
import { formatQuotationMessage, buildWhatsAppUrl } from '@/lib/whatsapp/buildMessage';
import { BUILDING_TYPES, PRODUCT_SERVICE_OPTIONS, type ProductServiceOption } from '@/types/quote';
import { COMPANY, getWhatsAppConfig } from '@/config/company';
import { MessageCircle, Phone, Mail, Copy, Check, AlertCircle, CheckCircle2 } from 'lucide-react';
import { cn } from '@/lib/utils/cn';

interface QuotationFormProps {
  initialProductOrService?: string;
  initialBuildingType?: string;
  initialRequirements?: string;
}

export function matchProductOrService(param?: string): ProductServiceOption {
  if (!param || !param.trim()) return 'Passenger Lift';
  const clean = param.trim().toLowerCase();

  // 1. Direct match
  const exact = PRODUCT_SERVICE_OPTIONS.find((opt) => opt.toLowerCase() === clean);
  if (exact) return exact;

  // 2. Intelligent fuzzy mapping
  if (clean.includes('hydraulic')) return 'Hydraulic Elevator';
  if (clean.includes('mrl') || clean.includes('machine room-less')) return 'MRL Elevator';
  if (clean.includes('hospital')) return 'Hospital Lift';
  if (clean.includes('home') || clean.includes('villa')) return 'Home Lift';
  if (clean.includes('goods') || clean.includes('freight')) return 'Goods Lift';
  if (clean.includes('passenger')) return 'Passenger Lift';
  if (clean.includes('manufacturing') || clean.includes('supply')) return 'Manufacturing & Supply';
  if (clean.includes('installation')) return 'Elevator Installation';
  if (clean.includes('repair') || clean.includes('maintenance support'))
    return 'Repair & Service Support';
  if (clean.includes('amc') || clean.includes('contract'))
    return 'Annual Maintenance Contract (AMC)';
  if (
    clean.includes('door') ||
    clean.includes('cabin') ||
    clean.includes('motor') ||
    clean.includes('controller') ||
    clean.includes('rope') ||
    clean.includes('schematic') ||
    clean.includes('drawing')
  ) {
    return 'Elevator Components & Modernisation';
  }

  return 'Other';
}

export function QuotationForm({
  initialProductOrService,
  initialBuildingType,
  initialRequirements,
}: QuotationFormProps) {
  const [submitting, setSubmitting] = useState(false);
  const [copied, setCopied] = useState(false);
  const [generatedMessage, setGeneratedMessage] = useState<string | null>(null);
  const [generatedUrl, setGeneratedUrl] = useState<string | null>(null);
  const [submissionStatus, setSubmissionStatus] = useState<
    'idle' | 'opened_whatsapp' | 'unconfigured_fallback'
  >('idle');

  const matchedInitial = matchProductOrService(initialProductOrService);
  const validBuildingType = (
    initialBuildingType &&
    BUILDING_TYPES.includes(initialBuildingType as (typeof BUILDING_TYPES)[number])
      ? initialBuildingType
      : 'Residential'
  ) as (typeof BUILDING_TYPES)[number];

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<QuotationSchemaType>({
    resolver: zodResolver(quotationSchema),
    defaultValues: {
      fullName: '',
      phoneNumber: '',
      productOrService: matchedInitial,
      buildingType: validBuildingType,
      projectLocation: '',
      requirements: initialRequirements || '',
    },
  });

  useEffect(() => {
    if (initialProductOrService) {
      const match = matchProductOrService(initialProductOrService);
      setValue('productOrService', match);
    }
    if (
      initialBuildingType &&
      BUILDING_TYPES.includes(initialBuildingType as (typeof BUILDING_TYPES)[number])
    ) {
      setValue('buildingType', initialBuildingType as (typeof BUILDING_TYPES)[number]);
    }
    if (initialRequirements !== undefined) {
      setValue('requirements', initialRequirements);
    }
  }, [initialProductOrService, initialBuildingType, initialRequirements, setValue]);

  const onSubmit = (data: QuotationSchemaType) => {
    setSubmitting(true);
    const message = formatQuotationMessage(data);
    setGeneratedMessage(message);

    const waConfig = getWhatsAppConfig();
    const result = buildWhatsAppUrl(message);

    if (result.success && result.url && waConfig.isConfigured) {
      setGeneratedUrl(result.url);
      setSubmissionStatus('opened_whatsapp');
      try {
        window.open(result.url, '_blank', 'noopener,noreferrer');
      } catch {
        // Fallback to manual link click
      }
    } else {
      setSubmissionStatus('unconfigured_fallback');
    }
    setSubmitting(false);
  };

  const copyMessageToClipboard = async () => {
    if (!generatedMessage) return;
    try {
      await navigator.clipboard.writeText(generatedMessage);
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    } catch {
      // Fallback
    }
  };

  return (
    <div className="mx-auto max-w-2xl rounded-3xl border border-slate-200/90 bg-white p-6 shadow-xl sm:p-10">
      <div className="mb-6 border-b border-slate-100 pb-6">
        <span className="text-xs font-bold uppercase tracking-wider text-brand-gold-600">
          Fast Technical Estimate
        </span>
        <h2 className="mt-1 text-2xl font-bold text-brand-blue-950">
          Request an Elevator Quotation
        </h2>
        <p className="mt-1 text-xs text-slate-600 sm:text-sm">
          Provide your project specifications below. We will calculate shaft dimensions and generate
          an official quotation lead.
        </p>

        {initialRequirements && (
          <div
            data-testid="calculator-prefill-banner"
            className="mt-4 flex items-start gap-2.5 rounded-xl border border-brand-gold-300 bg-brand-gold-50/80 p-3.5 text-xs text-brand-blue-950"
          >
            <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand-gold-600" />
            <div>
              <span className="font-bold">Dimensional Estimator Data Loaded:</span>
              <p className="mt-0.5 text-slate-700">
                Specifications from your hoistway selection have been pre-filled into the
                requirements field below.
              </p>
            </div>
          </div>
        )}
      </div>

      <form
        action="#"
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit(onSubmit)(e);
        }}
        className="space-y-6"
        noValidate
      >
        {/* Full Name */}
        <div>
          <label
            htmlFor="fullName"
            className="mb-2 block text-xs font-semibold uppercase tracking-wider text-slate-800"
          >
            Your Full Name <span className="text-rose-500">*</span>
          </label>
          <input
            id="fullName"
            type="text"
            placeholder="Enter your full name"
            {...register('fullName')}
            aria-invalid={errors.fullName ? 'true' : 'false'}
            aria-describedby={errors.fullName ? 'fullName-error' : undefined}
            className={cn(
              'w-full rounded-xl border px-4 py-3 text-sm text-slate-900 transition-all placeholder:text-slate-400 focus:outline-none focus:ring-2',
              errors.fullName
                ? 'border-rose-400 bg-rose-50/20 focus:ring-rose-200'
                : 'border-slate-200 bg-slate-50/50 focus:border-brand-blue-800 focus:ring-brand-blue-100'
            )}
          />
          {errors.fullName && (
            <p
              id="fullName-error"
              className="mt-1.5 flex items-center gap-1 text-xs font-medium text-rose-600"
            >
              <AlertCircle className="h-3.5 w-3.5" />
              <span>{errors.fullName.message}</span>
            </p>
          )}
        </div>

        {/* Phone Number */}
        <div>
          <label
            htmlFor="phoneNumber"
            className="mb-2 block text-xs font-semibold uppercase tracking-wider text-slate-800"
          >
            Contact Phone Number <span className="text-rose-500">*</span>
          </label>
          <input
            id="phoneNumber"
            type="tel"
            placeholder="e.g. +91 98765 43210"
            {...register('phoneNumber')}
            aria-invalid={errors.phoneNumber ? 'true' : 'false'}
            aria-describedby={errors.phoneNumber ? 'phoneNumber-error' : undefined}
            className={cn(
              'w-full rounded-xl border px-4 py-3 text-sm text-slate-900 transition-all placeholder:text-slate-400 focus:outline-none focus:ring-2',
              errors.phoneNumber
                ? 'border-rose-400 bg-rose-50/20 focus:ring-rose-200'
                : 'border-slate-200 bg-slate-50/50 focus:border-brand-blue-800 focus:ring-brand-blue-100'
            )}
          />
          {errors.phoneNumber && (
            <p
              id="phoneNumber-error"
              className="mt-1.5 flex items-center gap-1 text-xs font-medium text-rose-600"
            >
              <AlertCircle className="h-3.5 w-3.5" />
              <span>{errors.phoneNumber.message}</span>
            </p>
          )}
        </div>

        {/* Product / Service Selection */}
        <div>
          <label
            htmlFor="productOrService"
            className="mb-2 block text-xs font-semibold uppercase tracking-wider text-slate-800"
          >
            Selected Elevator or Service <span className="text-rose-500">*</span>
          </label>
          <select
            id="productOrService"
            {...register('productOrService')}
            value={watch('productOrService') || matchedInitial}
            onChange={(e) => {
              setValue('productOrService', e.target.value as ProductServiceOption, {
                shouldValidate: true,
                shouldDirty: true,
              });
            }}
            className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-3 text-sm text-slate-900 focus:border-brand-blue-800 focus:outline-none focus:ring-2 focus:ring-brand-blue-100"
          >
            {PRODUCT_SERVICE_OPTIONS.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
          {errors.productOrService && (
            <p className="mt-1.5 flex items-center gap-1 text-xs font-medium text-rose-600">
              <AlertCircle className="h-3.5 w-3.5" />
              <span>{errors.productOrService.message}</span>
            </p>
          )}
        </div>

        {/* Building Type & Project Location Grid */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div>
            <label
              htmlFor="buildingType"
              className="mb-2 block text-xs font-semibold uppercase tracking-wider text-slate-800"
            >
              Building Type
            </label>
            <select
              id="buildingType"
              {...register('buildingType')}
              className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-3 text-sm text-slate-900 focus:border-brand-blue-800 focus:outline-none focus:ring-2 focus:ring-brand-blue-100"
            >
              {BUILDING_TYPES.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label
              htmlFor="projectLocation"
              className="mb-2 block text-xs font-semibold uppercase tracking-wider text-slate-800"
            >
              Project Location / City
            </label>
            <input
              id="projectLocation"
              type="text"
              placeholder="e.g. Bangalore (Whitefield)"
              {...register('projectLocation')}
              className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-brand-blue-800 focus:outline-none focus:ring-2 focus:ring-brand-blue-100"
            />
          </div>
        </div>

        {/* Additional Requirements */}
        <div>
          <label
            htmlFor="requirements"
            className="mb-2 block text-xs font-semibold uppercase tracking-wider text-slate-800"
          >
            Specific Requirements (Floors, Capacity, Door Preferences)
          </label>
          <textarea
            id="requirements"
            rows={3}
            placeholder="e.g. 4 Stops (G+3), 6 Passenger capacity, SS Auto Center Opening doors with ARD battery backup."
            {...register('requirements')}
            className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-brand-blue-800 focus:outline-none focus:ring-2 focus:ring-brand-blue-100"
          />
        </div>

        {/* Privacy Note */}
        <p className="text-[11px] leading-relaxed text-slate-500">
          <strong>Privacy Note:</strong> Your contact details are strictly used to prepare your
          technical quotation and will never be shared with third parties.
        </p>

        {/* Submit Button */}
        <div>
          <button
            type="submit"
            disabled={submitting}
            className="inline-flex w-full items-center justify-center gap-2.5 rounded-xl bg-brand-gold-500 px-6 py-4 text-sm font-bold text-brand-blue-950 shadow-md transition-all hover:bg-brand-gold-400 hover:shadow-lg active:scale-[0.99] disabled:opacity-50 sm:text-base"
          >
            <MessageCircle className="h-5 w-5 fill-current" />
            <span>{submitting ? 'Preparing Details...' : 'Request Quotation via WhatsApp'}</span>
          </button>
        </div>
      </form>

      {/* SUCCESS: When WhatsApp quotation has been prepared */}
      {submissionStatus === 'opened_whatsapp' && (
        <div
          data-testid="whatsapp-success-banner"
          className="animate-fade-in mt-8 space-y-4 rounded-2xl border border-emerald-200 bg-emerald-50 p-6"
        >
          <div className="flex items-start gap-3">
            <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-600" />
            <div className="space-y-1">
              <h4 className="text-sm font-bold text-emerald-950">
                Quotation Message Ready to Send
              </h4>
              <p className="text-xs leading-relaxed text-emerald-900">
                Your quotation message is ready. WhatsApp will open so you can review and send your
                enquiry to Lifestyle Elevators. Please remember to press <strong>Send</strong>{' '}
                inside WhatsApp to transmit your specifications.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-2.5 pt-1">
            {generatedUrl && (
              <a
                href={generatedUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-lg bg-[#25D366] px-4 py-2 text-xs font-bold text-white shadow-sm transition-colors hover:bg-[#20ba59]"
              >
                <MessageCircle className="h-4 w-4 fill-current" />
                <span>Open in WhatsApp</span>
              </a>
            )}

            <button
              type="button"
              onClick={copyMessageToClipboard}
              className="inline-flex items-center gap-1.5 rounded-lg border border-emerald-300 bg-white px-3.5 py-2 text-xs font-semibold text-slate-700 transition-colors hover:bg-emerald-50"
            >
              {copied ? (
                <>
                  <Check className="h-4 w-4 text-emerald-600" />
                  <span className="font-bold text-emerald-700">Quotation Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="h-4 w-4 text-slate-500" />
                  <span>Copy Quotation Text</span>
                </>
              )}
            </button>
          </div>
        </div>
      )}

      {/* FALLBACK: When WhatsApp number is unconfigured or disabled */}
      {submissionStatus === 'unconfigured_fallback' && (
        <div
          data-testid="whatsapp-fallback-banner"
          className="animate-fade-in mt-8 space-y-4 rounded-2xl border border-amber-300 bg-amber-50/90 p-6"
        >
          <div className="flex items-start gap-2.5">
            <AlertCircle className="mt-0.5 h-5 w-5 shrink-0 text-amber-600" />
            <div>
              <h4 className="text-sm font-bold text-amber-900">Quotation Formatted &amp; Ready</h4>
              <p className="mt-1 text-xs leading-relaxed text-amber-800">
                WhatsApp messaging is currently unavailable. Your quotation details have been
                formatted below so you can copy the text or connect with our engineering team
                directly via telephone or email.
              </p>
            </div>
          </div>

          {/* Formatted Message Preview */}
          {generatedMessage && (
            <div className="whitespace-pre-wrap rounded-xl border border-amber-200 bg-white p-4 font-mono text-xs text-slate-800">
              {generatedMessage}
            </div>
          )}

          {/* Action Row */}
          <div className="flex flex-wrap items-center gap-2.5 pt-1">
            <button
              type="button"
              onClick={copyMessageToClipboard}
              className="inline-flex items-center gap-1.5 rounded-lg border border-slate-200 bg-white px-3.5 py-2 text-xs font-semibold text-slate-700 transition-colors hover:bg-slate-50"
            >
              {copied ? (
                <>
                  <Check className="h-4 w-4 text-emerald-600" />
                  <span className="font-bold text-emerald-700">Quotation Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="h-4 w-4 text-slate-500" />
                  <span>Copy Quotation Text</span>
                </>
              )}
            </button>

            <a
              href={COMPANY.phones[0].telUri}
              className="inline-flex items-center gap-1.5 rounded-lg bg-brand-blue-900 px-3.5 py-2 text-xs font-semibold text-white transition-colors hover:bg-brand-blue-800"
            >
              <Phone className="h-3.5 w-3.5 text-brand-gold-400" />
              <span>Call Primary ({COMPANY.phones[0].display})</span>
            </a>

            <a
              href={`mailto:${COMPANY.email.address}?subject=${encodeURIComponent(
                'Elevator Quotation Request'
              )}&body=${encodeURIComponent(generatedMessage || '')}`}
              className="inline-flex items-center gap-1.5 rounded-lg border border-slate-200 bg-white px-3.5 py-2 text-xs font-semibold text-slate-700 transition-colors hover:bg-slate-50"
            >
              <Mail className="h-3.5 w-3.5 text-brand-gold-500" />
              <span>Send via Email</span>
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
