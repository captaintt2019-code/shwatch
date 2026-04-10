"use client";

import { type FormEvent, useState } from "react";

import { sharedBrands, siteContent, type Locale } from "@/lib/i18n";

type BookingCopy = (typeof siteContent)[Locale]["booking"];

type BookingFormProps = {
  locale: Locale;
  copy: BookingCopy;
};

type FormState = {
  name: string;
  phone: string;
  brand: string;
  model: string;
  issue: string;
};

const initialFormState: FormState = {
  name: "",
  phone: "",
  brand: "",
  model: "",
  issue: "",
};

type StatusState =
  | { type: "idle"; message: string }
  | { type: "loading"; message: string }
  | { type: "success"; message: string }
  | { type: "error"; message: string };

function isPhoneValid(value: string) {
  return /^[+()\-\s\d]{6,20}$/.test(value.trim());
}

export function BookingForm({ locale, copy }: BookingFormProps) {
  const [form, setForm] = useState<FormState>(initialFormState);
  const [status, setStatus] = useState<StatusState>({ type: "idle", message: "" });

  function updateField(field: keyof FormState, value: string) {
    setForm((current) => ({
      ...current,
      [field]: value,
    }));
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!form.name.trim() || !form.phone.trim() || !isPhoneValid(form.phone)) {
      setStatus({ type: "error", message: copy.invalid });
      return;
    }

    setStatus({ type: "loading", message: copy.submitting });

    try {
      const response = await fetch("/api/book", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, locale }),
      });

      const result = (await response.json()) as { ok: boolean; error?: string };

      if (!response.ok || !result.ok) {
        const message =
          result.error === "mail_unconfigured" ? copy.unconfiguredError : result.error === "invalid_payload" ? copy.invalid : copy.serverError;
        setStatus({ type: "error", message });
        return;
      }

      setStatus({ type: "success", message: copy.success });
      setForm(initialFormState);
    } catch {
      setStatus({ type: "error", message: copy.serverError });
    }
  }

  return (
    <form className="booking-form" id="booking-form" onSubmit={handleSubmit} noValidate>
      <div className="form-group">
        <label htmlFor="name">{copy.fields.name}</label>
        <input
          id="name"
          name="name"
          type="text"
          autoComplete="name"
          value={form.name}
          onChange={(event) => updateField("name", event.target.value)}
          placeholder={copy.fields.namePlaceholder}
          aria-invalid={status.type === "error" && !form.name.trim()}
        />
      </div>

      <div className="form-group">
        <label htmlFor="phone">{copy.fields.phone}</label>
        <input
          id="phone"
          name="phone"
          type="tel"
          inputMode="tel"
          autoComplete="tel"
          value={form.phone}
          onChange={(event) => updateField("phone", event.target.value)}
          placeholder={copy.fields.phonePlaceholder}
          aria-invalid={status.type === "error" && (!form.phone.trim() || !isPhoneValid(form.phone))}
        />
      </div>

      <div className="form-group">
        <label htmlFor="brand">{copy.fields.brand}</label>
        <select
          id="brand"
          name="brand"
          value={form.brand}
          onChange={(event) => updateField("brand", event.target.value)}
        >
          <option value="">{copy.fields.brandPlaceholder}</option>
          {sharedBrands.map((brand) => (
            <option key={brand} value={brand}>
              {brand}
            </option>
          ))}
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="model">{copy.fields.model}</label>
        <input
          id="model"
          name="model"
          type="text"
          autoComplete="off"
          value={form.model}
          onChange={(event) => updateField("model", event.target.value)}
          placeholder={copy.fields.modelPlaceholder}
        />
      </div>

      <div className="form-group form-group-full">
        <label htmlFor="issue">{copy.fields.issue}</label>
        <textarea
          id="issue"
          name="issue"
          rows={5}
          value={form.issue}
          onChange={(event) => updateField("issue", event.target.value)}
          placeholder={copy.fields.issuePlaceholder}
        />
      </div>

      <div className="form-actions">
        <button className="button button-primary" type="submit" disabled={status.type === "loading"}>
          {status.type === "loading" ? copy.submitting : copy.submit}
        </button>
        <p
          className={[
            "form-status",
            status.type === "error" ? "is-error" : "",
            status.type === "success" ? "is-success" : "",
          ]
            .filter(Boolean)
            .join(" ")}
          role="status"
          aria-live="polite"
        >
          {status.message}
        </p>
      </div>
    </form>
  );
}
