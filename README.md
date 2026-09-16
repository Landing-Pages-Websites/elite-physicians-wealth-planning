# elite-physicians-wealth-planning

## Homepage directions

Two approved directions for the client to choose between:

| Route | Direction |
|---|---|
| `/` | Review chooser |
| `/variant-a` | **The Consult Ledger** — deep navy and ivory, Cormorant display, one continuous gold coordination route |
| `/variant-b` | **The Decision Atlas** — bright clinical surfaces, Inter declarations, navy rails and calibration ticks |

Both close on a `#form` strategy-call section sharing one implementation
(`src/components/shared/strategy-call-form.tsx`), styled per direction via a
`tone` prop so the two cannot drift apart.

## Environment

`NEXT_PUBLIC_LEAD_ENDPOINT` — POST target for the strategy-call form.

While it is unset the form still validates, then hands the request off to the
practice's inbox via `mailto:` and says so. It never reports a success that did
not happen. Set the variable in Vercel to capture leads directly; on success the
form pushes `{ event: 'form_submission' }` to `window.dataLayer`.

