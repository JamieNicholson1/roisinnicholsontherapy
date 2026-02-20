"use client"

import { useState, type FormEvent } from "react"

interface WaitlistFormProps {
  variant?: "dark" | "light"
}

const insuranceOptions = [
  { id: "axa", label: "AXA Health" },
  { id: "bupa", label: "Bupa" },
  { id: "wpa", label: "WPA" },
  { id: "none", label: "None / Self-funding" },
]

export function WaitlistForm({ variant = "light" }: WaitlistFormProps) {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    country: "",
    insurance: "",
  })
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")
  const [message, setMessage] = useState("")

  const isDark = variant === "dark"

  const update = (field: string, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }))
    if (status === "error") setStatus("idle")
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()

    if (!form.firstName.trim() || !form.lastName.trim() || !form.email.trim() || !form.phone.trim() || !form.country.trim() || !form.insurance) {
      setStatus("error")
      setMessage("Please fill in all fields.")
      return
    }

    setStatus("loading")
    setMessage("")

    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      })

      const data = await res.json()

      if (data.success) {
        setStatus("success")
        setMessage(
          data.alreadySubscribed
            ? "You're already on the waitlist — I'll be in touch soon."
            : "You're on the waitlist! I'll be in touch as soon as a space opens up."
        )
      } else {
        setStatus("error")
        setMessage(data.error || "Something went wrong. Please try again.")
      }
    } catch {
      setStatus("error")
      setMessage("Something went wrong. Please try again.")
    }
  }

  // Shared input styles
  const inputBase = `w-full rounded-sm font-body text-sm transition-all duration-200 outline-none px-4 py-3 ${
    isDark
      ? "bg-white/10 border border-white/20 text-white placeholder:text-white/40 focus:border-white/50 focus:bg-white/15"
      : "bg-card border border-border text-foreground placeholder:text-muted-foreground focus:border-primary/50 focus:ring-2 focus:ring-primary/10"
  }`

  const labelClass = `block font-body text-xs font-medium mb-1.5 ${
    isDark ? "text-white/70" : "text-muted-foreground"
  }`

  if (status === "success") {
    return (
      <div
        className={`rounded-lg p-8 text-center ${
          isDark ? "bg-white/10" : "bg-primary/5 border border-primary/20"
        }`}
      >
        <div className="mb-3 text-2xl">✓</div>
        <p
          className={`font-heading text-xl mb-2 ${
            isDark ? "text-white" : "text-foreground"
          }`}
        >
          Thank you, {form.firstName}!
        </p>
        <p
          className={`font-body text-sm leading-relaxed ${
            isDark ? "text-white/75" : "text-muted-foreground"
          }`}
        >
          {message}
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-lg mx-auto">
      <div className="grid sm:grid-cols-2 gap-4 mb-4">
        {/* First Name */}
        <div>
          <label htmlFor="wl-first" className={labelClass}>
            First Name
          </label>
          <input
            id="wl-first"
            type="text"
            value={form.firstName}
            onChange={(e) => update("firstName", e.target.value)}
            placeholder="First name"
            required
            className={inputBase}
          />
        </div>

        {/* Last Name */}
        <div>
          <label htmlFor="wl-last" className={labelClass}>
            Last Name
          </label>
          <input
            id="wl-last"
            type="text"
            value={form.lastName}
            onChange={(e) => update("lastName", e.target.value)}
            placeholder="Last name"
            required
            className={inputBase}
          />
        </div>
      </div>

      {/* Email */}
      <div className="mb-4">
        <label htmlFor="wl-email" className={labelClass}>
          Email Address
        </label>
        <input
          id="wl-email"
          type="email"
          value={form.email}
          onChange={(e) => update("email", e.target.value)}
          placeholder="your@email.com"
          required
          className={inputBase}
        />
      </div>

      <div className="grid sm:grid-cols-2 gap-4 mb-4">
        {/* Phone */}
        <div>
          <label htmlFor="wl-phone" className={labelClass}>
            Phone Number
          </label>
          <input
            id="wl-phone"
            type="tel"
            value={form.phone}
            onChange={(e) => update("phone", e.target.value)}
            placeholder="+44 7700 000000"
            required
            className={inputBase}
          />
        </div>

        {/* Country */}
        <div>
          <label htmlFor="wl-country" className={labelClass}>
            Country
          </label>
          <input
            id="wl-country"
            type="text"
            value={form.country}
            onChange={(e) => update("country", e.target.value)}
            placeholder="United Kingdom"
            required
            className={inputBase}
          />
        </div>
      </div>

      {/* Insurance */}
      <div className="mb-6">
        <p className={labelClass}>
          Will you be claiming through insurance?
        </p>
        <div className="grid grid-cols-2 gap-2 mt-1">
          {insuranceOptions.map((opt) => (
            <label
              key={opt.id}
              className={`flex items-center gap-3 rounded-sm cursor-pointer transition-all duration-200 px-4 py-3 ${
                form.insurance === opt.id
                  ? isDark
                    ? "bg-white/20 border border-white/40"
                    : "bg-primary/10 border border-primary/30"
                  : isDark
                    ? "bg-white/5 border border-white/10 hover:bg-white/10"
                    : "bg-card border border-border hover:border-primary/20"
              }`}
            >
              <input
                type="radio"
                name="insurance"
                value={opt.id}
                checked={form.insurance === opt.id}
                onChange={(e) => update("insurance", e.target.value)}
                className="sr-only"
              />
              <div
                className={`h-4 w-4 rounded-full border-2 flex items-center justify-center shrink-0 transition-colors ${
                  form.insurance === opt.id
                    ? isDark
                      ? "border-white bg-white"
                      : "border-primary bg-primary"
                    : isDark
                      ? "border-white/30"
                      : "border-border"
                }`}
              >
                {form.insurance === opt.id && (
                  <div
                    className={`h-1.5 w-1.5 rounded-full ${
                      isDark ? "bg-primary-dark" : "bg-white"
                    }`}
                  />
                )}
              </div>
              <span
                className={`font-body text-sm ${
                  form.insurance === opt.id
                    ? isDark
                      ? "text-white"
                      : "text-foreground"
                    : isDark
                      ? "text-white/60"
                      : "text-muted-foreground"
                }`}
              >
                {opt.label}
              </span>
            </label>
          ))}
        </div>
      </div>

      {/* Error message */}
      {status === "error" && message && (
        <p
          className={`font-body text-xs mb-4 ${
            isDark ? "text-red-300" : "text-red-500"
          }`}
        >
          {message}
        </p>
      )}

      {/* Submit */}
      <button
        type="submit"
        disabled={status === "loading"}
        className={`w-full rounded-sm font-body text-sm font-medium transition-all duration-200 px-8 py-4 ${
          isDark
            ? "bg-white text-primary-dark hover:bg-white/90 hover:shadow-xl disabled:bg-white/60"
            : "bg-primary text-primary-foreground hover:bg-primary-dark hover:shadow-md disabled:bg-primary/60"
        } disabled:cursor-not-allowed`}
      >
        {status === "loading" ? (
          <span className="inline-flex items-center justify-center gap-2">
            <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
            </svg>
            Submitting…
          </span>
        ) : (
          "Join the Waitlist"
        )}
      </button>

      <p
        className={`font-body text-xs mt-4 text-center ${
          isDark ? "text-white/40" : "text-muted-foreground"
        }`}
      >
        Your information is kept completely confidential.
      </p>
    </form>
  )
}
