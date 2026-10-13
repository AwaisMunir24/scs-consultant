"use client";
import { useState } from "react";

// Set this to your form handler (API route, Formspree, etc.).
// While empty, the form validates and shows the success message only.
const FORM_ENDPOINT = "";

const field =
  "w-full rounded-2xl bg-white px-4 py-3 text-ink-900 placeholder:text-ink-600/60 border-2 border-ice-200 focus:border-berry-500 focus:outline-none transition";
const label = "block text-sm font-bold text-ink-700 mb-1.5";

const services = [
  "Bookkeeping",
  "Accounts preparation",
  "Income and expense records",
  "Business expense organisation",
  "Invoice / payment records",
  "General accounting support",
  "Tax return information preparation",
  "Other",
];

function Field({ name, text, required, type = "text", placeholder, children }) {
  return (
    <div>
      <label htmlFor={name} className={label}>
        {text} {required && <span className="text-blush-500">*</span>}
      </label>
      {children || (
        <input id={name} name={name} type={type} required={required} placeholder={placeholder} className={field} />
      )}
    </div>
  );
}

export default function AccountingForm() {
  const [status, setStatus] = useState("idle"); // idle | sending | done | error

  async function onSubmit(e) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const payload = Object.fromEntries(data.entries());
    payload.servicesRequired = data.getAll("servicesRequired");
    setStatus("sending");
    try {
      if (FORM_ENDPOINT) {
        const res = await fetch(FORM_ENDPOINT, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ subject: "Business Accounting Enquiry", ...payload }),
        });
        if (!res.ok) throw new Error("Request failed");
      }
      form.reset();
      setStatus("done");
    } catch {
      setStatus("error");
    }
  }

  if (status === "done") {
    return (
      <div className="glass soft rounded-3xl p-10 text-center">
        <div className="mx-auto w-16 h-16 rounded-full grad-berry text-white text-3xl font-bold flex items-center justify-center">✓</div>
        <h3 className="mt-5 text-2xl font-extrabold">Thank you, we have your enquiry</h3>
        <p className="mt-2 text-ink-600">Our team will be in touch soon to talk about your accounting needs.</p>
        <button onClick={() => setStatus("idle")} className="btn-berry mt-6 px-7 py-3 rounded-full font-extrabold">
          Send another enquiry
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="glass soft rounded-3xl p-5 md:p-8 grid gap-5">
      <div className="grid sm:grid-cols-2 gap-4">
        <Field name="businessName" text="Business name" required />
        <Field name="contactName" text="Your name" required />
        <Field name="email" text="Email" type="email" required />
        <Field name="telephone" text="Telephone" type="tel" required />
      </div>

      <Field name="businessType" text="Business type" placeholder="e.g. Limited company, sole trader, shop" />

      <div>
        <span className={label}>Services required <span className="font-semibold text-ink-600">(select all that apply)</span></span>
        <div className="grid sm:grid-cols-2 gap-2">
          {services.map((s) => (
            <label key={s} className="flex items-center gap-3 rounded-2xl bg-white px-4 py-3 border-2 border-ice-200 cursor-pointer font-semibold text-ink-700 has-[:checked]:border-berry-500 has-[:checked]:bg-ice-50 transition">
              <input type="checkbox" name="servicesRequired" value={s} className="w-5 h-5 accent-berry-600" />
              {s}
            </label>
          ))}
        </div>
      </div>

      <Field name="message" text="Additional information">
        <textarea id="message" name="message" rows={4} className={field} placeholder="Anything else we should know about your business?" />
      </Field>

      {status === "error" && (
        <p role="alert" className="rounded-2xl bg-blush-100 text-ink-900 font-semibold px-4 py-3">
          Something went wrong sending your enquiry. Please try again, or use the Contact page.
        </p>
      )}

      <button
        type="submit"
        disabled={status === "sending"}
        className="btn-berry w-full sm:w-auto sm:justify-self-start px-10 py-4 rounded-full font-extrabold text-lg disabled:opacity-60"
      >
        {status === "sending" ? "Sending…" : "Request Accounting Support"}
      </button>
    </form>
  );
}