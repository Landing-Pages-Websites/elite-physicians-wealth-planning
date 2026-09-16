"use client";

import { PLANNING_AREAS } from "./checkup-areas";

export interface ReviewValues {
  areas: readonly string[];
  primary: string;
  email: string;
  acknowledged: boolean;
}

export type ReviewErrors = Partial<
  Record<"areas" | "primary" | "email" | "acknowledged", string>
>;

export const EMPTY_REVIEW: ReviewValues = {
  areas: [],
  primary: "",
  email: "",
  acknowledged: false,
};

const PRIVACY_COPY =
  "Please do not submit sensitive personal, medical, tax, legal, or account information.";

export function validateReview(values: ReviewValues): ReviewErrors {
  const errors: ReviewErrors = {};
  if (values.areas.length === 0) {
    errors.areas = "Select at least one planning area.";
  }
  if (values.areas.length > 0 && !values.primary) {
    errors.primary = "Choose which selected area matters most right now.";
  }
  if (
    values.email.trim() &&
    !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(values.email.trim())
  ) {
    errors.email = "That email address looks incomplete.";
  }
  if (!values.acknowledged) {
    errors.acknowledged = "Please confirm the note above before continuing.";
  }
  return errors;
}

interface ReviewFormProps {
  values: ReviewValues;
  errors: ReviewErrors;
  submitting: boolean;
  onToggleArea: (name: string) => void;
  onSelectPrimary: (name: string) => void;
  onEmailChange: (email: string) => void;
  onAcknowledge: (acknowledged: boolean) => void;
  onReview: () => void;
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  formRef: React.RefObject<HTMLFormElement | null>;
}

const LEGEND =
  "font-body text-body-s font-semibold tracking-[0.12em] text-ink uppercase";
const HINT = "mt-1.5 font-body text-body-s leading-[1.5] text-charcoal/70";
const ERROR = "mt-2 block font-body text-[12px] font-medium text-danger";

function AreaToggles({
  values,
  errors,
  onToggleArea,
}: Pick<ReviewFormProps, "values" | "errors" | "onToggleArea">): React.JSX.Element {
  return (
    <fieldset aria-describedby={errors.areas ? "areas-error" : undefined}>
      <legend className={LEGEND}>Area toggles</legend>
      <p className={HINT}>Mark every area that feels less coordinated today.</p>
      <div className="mt-4 grid gap-1.5 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
        {PLANNING_AREAS.map((area) => (
          <label
            key={area.name}
            className="chk-option flex min-h-11 cursor-pointer items-center gap-3 rounded-[3px] px-3 py-2 font-body text-body-m text-charcoal"
          >
            <input
              type="checkbox"
              name="planningAreas"
              value={area.name}
              checked={values.areas.includes(area.name)}
              onChange={() => onToggleArea(area.name)}
              className="chk-box"
            />
            {area.name}
          </label>
        ))}
      </div>
      {errors.areas ? (
        <span id="areas-error" className={ERROR}>
          {errors.areas}
        </span>
      ) : null}
    </fieldset>
  );
}

function PrioritySelector({
  values,
  errors,
  onSelectPrimary,
}: Pick<ReviewFormProps, "values" | "errors" | "onSelectPrimary">): React.JSX.Element {
  return (
    <fieldset aria-describedby={errors.primary ? "primary-error" : undefined}>
      <legend className={LEGEND}>Priority selector</legend>
      <p className={HINT}>
        Of the areas you marked, choose the one that matters most right now.
      </p>
      <div className="mt-4 grid gap-1.5">
        {PLANNING_AREAS.map((area) => {
          const enabled = values.areas.includes(area.name);
          return (
            <label
              key={area.name}
              className={`chk-option flex min-h-11 items-center gap-3 rounded-[3px] px-3 py-2 font-body text-body-m text-charcoal ${
                enabled ? "cursor-pointer" : "cursor-not-allowed"
              }`}
            >
              <input
                type="radio"
                name="primaryConcern"
                value={area.name}
                checked={values.primary === area.name}
                disabled={!enabled}
                onChange={() => onSelectPrimary(area.name)}
                className="chk-dot"
              />
              {area.name}
            </label>
          );
        })}
      </div>
      {errors.primary ? (
        <span id="primary-error" className={ERROR}>
          {errors.primary}
        </span>
      ) : null}
    </fieldset>
  );
}

function EmailOption({
  values,
  errors,
  onEmailChange,
}: Pick<ReviewFormProps, "values" | "errors" | "onEmailChange">): React.JSX.Element {
  return (
    <div>
      <label htmlFor="checkup-email" className={LEGEND}>
        Email results option
      </label>
      <p className={HINT}>
        Optional. Include an email address and the team follows up on your
        summary personally.
      </p>
      <input
        id="checkup-email"
        name="email"
        type="email"
        inputMode="email"
        autoComplete="email"
        value={values.email}
        aria-invalid={Boolean(errors.email)}
        aria-describedby={errors.email ? "checkup-email-error" : undefined}
        onChange={(event) => onEmailChange(event.target.value)}
        className="mt-4 w-full rounded-[3px] border border-ink/25 bg-white px-4 py-3 font-body text-[15px] text-ink placeholder:text-charcoal/45 transition-colors duration-150 hover:border-ink/45 focus:border-ink focus:outline-none focus-visible:ring-2 focus-visible:ring-gold"
        placeholder="name@example.com"
      />
      {errors.email ? (
        <span id="checkup-email-error" className={ERROR}>
          {errors.email}
        </span>
      ) : null}
    </div>
  );
}

/**
 * 03-interactive-review's control surface: area toggles, priority selector,
 * optional email delivery, and the privacy acknowledgment — all live controls
 * with complete outcomes, per the manifest's interaction semantics.
 */
export function ReviewForm(props: ReviewFormProps): React.JSX.Element {
  const { values, errors, submitting, onAcknowledge, onReview, onSubmit } = props;
  return (
    <form ref={props.formRef} onSubmit={onSubmit} noValidate>
      <h3 className="text-center text-display-s font-display font-medium tracking-[-0.01em] text-ink">
        Financial checkup prompts.
      </h3>
      <div className="mt-8 grid gap-10 border-t border-ink/10 pt-8 lg:grid-cols-[1.2fr_1fr_1fr] lg:gap-12">
        <AreaToggles
          values={values}
          errors={errors}
          onToggleArea={props.onToggleArea}
        />
        <PrioritySelector
          values={values}
          errors={errors}
          onSelectPrimary={props.onSelectPrimary}
        />
        <EmailOption
          values={values}
          errors={errors}
          onEmailChange={props.onEmailChange}
        />
      </div>

      <div className="mt-9 flex flex-col gap-5 border-t border-ink/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
        <label className="flex max-w-[62ch] cursor-pointer items-start gap-3 font-body text-body-s leading-[1.55] text-charcoal">
          <input
            type="checkbox"
            name="privacyAcknowledged"
            checked={values.acknowledged}
            aria-describedby={errors.acknowledged ? "ack-error" : undefined}
            onChange={(event) => onAcknowledge(event.target.checked)}
            className="chk-box mt-0.5"
          />
          <span>
            {PRIVACY_COPY}
            {errors.acknowledged ? (
              <span id="ack-error" className={ERROR}>
                {errors.acknowledged}
              </span>
            ) : null}
          </span>
        </label>
        <button
          type="button"
          onClick={onReview}
          disabled={submitting}
          className="va-btn va-btn-navy shrink-0 justify-center disabled:cursor-not-allowed disabled:opacity-60"
        >
          {submitting ? "Preparing…" : "See my results summary"}
        </button>
      </div>
    </form>
  );
}
