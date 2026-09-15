'use client';

import type { ChangeEvent } from 'react';

interface SegmentedFieldProps {
  legend: string;
  name: string;
  value: string;
  options: readonly string[];
  idPrefix: string;
  hint?: string;
  disabled?: boolean;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

/**
 * Accessible segmented (radio-toggle) control - real radio inputs styled as
 * pills. Keyboard, focus, and selected states are all wired; the native input
 * is visually hidden but remains the focus + a11y target.
 */
export function SegmentedField({
  legend,
  name,
  value,
  options,
  idPrefix,
  hint,
  disabled = false,
  onChange,
}: SegmentedFieldProps): React.ReactElement {
  return (
    <fieldset className="lp-seg-group">
      <legend className="lp-label">{legend}</legend>
      <div className="lp-seg">
        {options.map((option) => {
          const id = `${idPrefix}-${name}-${option}`;
          const selected = value === option;
          return (
            <label
              key={option}
              htmlFor={id}
              className={`lp-seg-option${selected ? ' is-selected' : ''}`}
            >
              <input
                type="radio"
                id={id}
                name={name}
                value={option}
                checked={selected}
                disabled={disabled}
                onChange={onChange}
                className="lp-seg-input"
              />
              <span>{option}</span>
            </label>
          );
        })}
      </div>
      {hint ? <p className="lp-hint">{hint}</p> : null}
    </fieldset>
  );
}
