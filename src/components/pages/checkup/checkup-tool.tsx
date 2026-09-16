"use client";

import { useRef, useState } from "react";
import { submitSiteInquiry } from "@/lib/mega-submission";
import { ArrowRightIcon } from "@/components/site/icons";
import {
  EMPTY_REVIEW,
  ReviewForm,
  validateReview,
  type ReviewErrors,
  type ReviewValues,
} from "./review-form";
import { ResultsLedger, type CheckupOutcome } from "./results-ledger";

const REVIEW_COPY = {
  headline: "Answer high-level planning prompts.",
  body: "Each selection identifies an area for discussion. The tool should not collect sensitive documents or generate individualized advice.",
} as const;

const RESULTS_COPY = {
  headline: "Results should guide a conversation, not prescribe decisions.",
  body: "The result state groups areas into discussion priorities and links to relevant planning pages.",
  relatedLabel: "Review related services",
  relatedHref: "/services",
} as const;

function focusFirstError(
  form: HTMLFormElement | null,
  errors: ReviewErrors,
): void {
  if (!form) return;
  const name = errors.areas
    ? "planningAreas"
    : errors.primary
      ? "primaryConcern"
      : errors.email
        ? "email"
        : "privacyAcknowledged";
  form.querySelector<HTMLElement>(`[name="${name}"]:not(:disabled)`)?.focus();
}

function buildOutcome(values: ReviewValues): CheckupOutcome {
  return {
    primary: values.primary,
    others: values.areas.filter((name) => name !== values.primary),
    emailDelivery: "not-requested",
  };
}

/**
 * Sections 03 + 04 share the checkup state, so they live under one client
 * orchestrator: the interactive review collects high-level selections and the
 * results ledger shows the observable, non-advice outcome.
 */
export function CheckupTool(): React.JSX.Element {
  const formRef = useRef<HTMLFormElement>(null);
  const [values, setValues] = useState<ReviewValues>(EMPTY_REVIEW);
  const [errors, setErrors] = useState<ReviewErrors>({});
  const [submitting, setSubmitting] = useState(false);
  const [outcome, setOutcome] = useState<CheckupOutcome | null>(null);

  function toggleArea(name: string): void {
    setValues((prev) => {
      const selected = prev.areas.includes(name);
      return {
        ...prev,
        areas: selected
          ? prev.areas.filter((area) => area !== name)
          : [...prev.areas, name],
        primary: selected && prev.primary === name ? "" : prev.primary,
      };
    });
    setErrors((prev) => ({ ...prev, areas: undefined }));
  }

  function selectPrimary(name: string): void {
    setValues((prev) => ({ ...prev, primary: name }));
    setErrors((prev) => ({ ...prev, primary: undefined }));
  }

  function changeEmail(email: string): void {
    setValues((prev) => ({ ...prev, email }));
    setErrors((prev) => ({ ...prev, email: undefined }));
  }

  function acknowledge(acknowledged: boolean): void {
    setValues((prev) => ({ ...prev, acknowledged }));
    setErrors((prev) => ({ ...prev, acknowledged: undefined }));
  }

  /** Validate first, then hand the browser a real submit event. */
  function handleReview(): void {
    const found = validateReview(values);
    setErrors(found);
    if (Object.keys(found).length > 0) {
      focusFirstError(formRef.current, found);
      return;
    }
    formRef.current?.requestSubmit();
  }

  /** The email option routes through the site's lead pipeline when used. */
  async function deliverByEmail(next: CheckupOutcome): Promise<CheckupOutcome> {
    try {
      await submitSiteInquiry("financial-checkup-summary", {
        email: values.email.trim(),
        primaryConcern: next.primary,
        planningAreas: [next.primary, ...next.others].join(", "),
      });
      return { ...next, emailDelivery: "sent" };
    } catch {
      return { ...next, emailDelivery: "unavailable" };
    }
  }

  async function handleSubmit(
    event: React.FormEvent<HTMLFormElement>,
  ): Promise<void> {
    event.preventDefault();
    setSubmitting(true);
    let next = buildOutcome(values);
    if (values.email.trim()) {
      next = await deliverByEmail(next);
    }
    setOutcome(next);
    setSubmitting(false);
    document
      .getElementById("results-guidance")
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  function restart(): void {
    setValues(EMPTY_REVIEW);
    setErrors({});
    setOutcome(null);
    document
      .getElementById("interactive-review")
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  return (
    <>
      <InteractiveReview
        formRef={formRef}
        values={values}
        errors={errors}
        submitting={submitting}
        onToggleArea={toggleArea}
        onSelectPrimary={selectPrimary}
        onEmailChange={changeEmail}
        onAcknowledge={acknowledge}
        onReview={handleReview}
        onSubmit={handleSubmit}
      />
      <ResultsGuidance outcome={outcome} onRestart={restart} />
    </>
  );
}

interface InteractiveReviewProps {
  formRef: React.RefObject<HTMLFormElement | null>;
  values: ReviewValues;
  errors: ReviewErrors;
  submitting: boolean;
  onToggleArea: (name: string) => void;
  onSelectPrimary: (name: string) => void;
  onEmailChange: (email: string) => void;
  onAcknowledge: (acknowledged: boolean) => void;
  onReview: () => void;
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
}

/** 03-interactive-review — mist control surface with the hands photo edge. */
function InteractiveReview(props: InteractiveReviewProps): React.JSX.Element {
  return (
    <section
      id="interactive-review"
      aria-labelledby="interactive-review-heading"
      className="chk-review relative overflow-hidden"
    >
      <span aria-hidden="true" className="chk-seam top-0 h-10 lg:h-16" />
      <div className="relative z-10 va-shell py-16 lg:py-20">
        <div className="grid items-end gap-8 lg:grid-cols-[minmax(0,44%)_minmax(0,1fr)] lg:gap-14">
          <div>
            <h2
              id="interactive-review-heading"
              className="text-display-m font-display leading-[1.12] font-medium tracking-[-0.02em] text-balance text-ink"
            >
              {REVIEW_COPY.headline}
            </h2>
            <p className="mt-4 max-w-[52ch] font-body text-body-m leading-[1.62] text-charcoal/85 text-pretty">
              {REVIEW_COPY.body}
            </p>
          </div>
          <div className="relative hidden aspect-[736/260] overflow-hidden rounded-sm border border-ink/10 shadow-[0_18px_40px_-28px_rgba(11,31,58,0.5)] lg:block">
            <img
              src="/images/design/checkup/media/checkup-review-hands.jpg"
              alt=""
              aria-hidden="true"
              width={736}
              height={280}
              className="chk-review-media absolute inset-0 h-full w-full"
            />
          </div>
        </div>

        <div className="mt-10 rounded-sm border border-ink/10 bg-white p-6 shadow-[0_24px_60px_-40px_rgba(11,31,58,0.55)] sm:p-9">
          <ReviewForm {...props} />
        </div>
      </div>
      <span aria-hidden="true" className="chk-seam bottom-0 h-10 lg:h-16" />
    </section>
  );
}

/** 04-results-guidance — white ledger field; ledger fills on completion. */
function ResultsGuidance({
  outcome,
  onRestart,
}: {
  outcome: CheckupOutcome | null;
  onRestart: () => void;
}): React.JSX.Element {
  return (
    <section
      id="results-guidance"
      aria-labelledby="results-guidance-heading"
      className="chk-results relative overflow-hidden"
    >
      <span aria-hidden="true" className="chk-seam top-0 h-10 lg:h-16" />
      <div className="relative z-10 va-shell grid gap-10 py-16 lg:grid-cols-[minmax(0,40%)_minmax(0,1fr)] lg:gap-16 lg:py-20">
        <div>
          <h2
            id="results-guidance-heading"
            className="max-w-[20ch] text-display-m font-display leading-[1.12] font-medium tracking-[-0.02em] text-balance text-ink"
          >
            {RESULTS_COPY.headline}
          </h2>
          <p className="mt-4 max-w-[46ch] font-body text-body-m leading-[1.62] text-charcoal/85 text-pretty">
            {RESULTS_COPY.body}
          </p>
          <a
            href={RESULTS_COPY.relatedHref}
            className="va-link mt-7 text-ink"
          >
            {RESULTS_COPY.relatedLabel}
            <ArrowRightIcon className="h-3.5 w-3.5" />
          </a>
        </div>

        <div aria-live="polite">
          {outcome ? (
            <ResultsLedger outcome={outcome} onRestart={onRestart} />
          ) : (
            <div className="flex flex-col items-start gap-6 rounded-sm border border-ink/10 bg-ledger-warm p-6 sm:flex-row sm:items-center sm:p-8">
              <img
                src="/images/design/checkup/media/results-watercolor-ledgers.jpg"
                alt=""
                aria-hidden="true"
                width={269}
                height={305}
                className="w-40 shrink-0 rounded-[3px] border border-ink/10 sm:w-48"
              />
              <p className="max-w-[38ch] font-body text-body-m leading-[1.62] text-charcoal/75">
                Your discussion summary appears here once you answer the prompts
                above.
              </p>
            </div>
          )}
        </div>
      </div>
      <span aria-hidden="true" className="chk-seam bottom-0 h-10 lg:h-16" />
    </section>
  );
}
