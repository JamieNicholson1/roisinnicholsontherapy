import type { Metadata } from "next"
import { siteConfig } from "@/lib/constants"

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Privacy Policy for Roisin Nicholson Therapy. How we collect, use and protect your personal data in compliance with UK GDPR.",
}

export default function PrivacyPolicyPage() {
  return (
    <>
      <section className="pt-36 pb-16 md:pt-44 md:pb-20">
        <div className="mx-auto max-w-3xl px-6">
          <p className="font-body text-xs tracking-[0.2em] text-primary uppercase mb-4">
            Legal
          </p>
          <h1 className="font-heading text-4xl md:text-5xl text-foreground leading-tight mb-6">
            Privacy Policy
          </h1>
          <p className="font-body text-sm text-muted-foreground">
            Last updated: February 2026
          </p>
        </div>
      </section>

      <section className="pb-24 md:pb-32">
        <div className="mx-auto max-w-3xl px-6">
          <div className="prose-custom space-y-10">
            {/* Introduction */}
            <div>
              <h2 className="font-heading text-2xl text-foreground mb-4">
                1. Introduction
              </h2>
              <div className="space-y-4">
                <p className="font-body text-sm text-muted-foreground leading-relaxed">
                  Roisin Nicholson Therapy (&ldquo;we,&rdquo; &ldquo;us,&rdquo;
                  or &ldquo;our&rdquo;) is committed to protecting your privacy
                  and personal data. This Privacy Policy explains how we collect,
                  use, store and protect your information when you visit our
                  website ({siteConfig.url}), use our services, or interact with
                  us.
                </p>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">
                  We comply with the UK General Data Protection Regulation (UK
                  GDPR), the Data Protection Act 2018, and all applicable data
                  protection laws.
                </p>
              </div>
            </div>

            {/* Data Controller */}
            <div>
              <h2 className="font-heading text-2xl text-foreground mb-4">
                2. Data Controller
              </h2>
              <div className="space-y-4">
                <p className="font-body text-sm text-muted-foreground leading-relaxed">
                  The data controller responsible for your personal data is:
                </p>
                <div className="bg-secondary rounded-lg p-5 border border-border/40">
                  <p className="font-body text-sm text-foreground leading-relaxed">
                    <strong>Roisin Nicholson Therapy</strong>
                    <br />
                    Email:{" "}
                    <a
                      href={`mailto:${siteConfig.email}`}
                      className="text-primary underline underline-offset-2"
                    >
                      {siteConfig.email}
                    </a>
                  </p>
                </div>
              </div>
            </div>

            {/* What We Collect */}
            <div>
              <h2 className="font-heading text-2xl text-foreground mb-4">
                3. Information We Collect
              </h2>
              <div className="space-y-4">
                <p className="font-body text-sm text-muted-foreground leading-relaxed">
                  We may collect and process the following categories of personal
                  data:
                </p>

                <h3 className="font-heading text-lg text-foreground mt-6 mb-2">
                  3.1 Information you provide directly
                </h3>
                <ul className="space-y-2 ml-4">
                  {[
                    "Name (first and last) when joining the waitlist or making an enquiry",
                    "Email address",
                    "Phone number (if provided)",
                    "Country of residence",
                    "Insurance provider information (if provided)",
                    "Any information you share during therapy sessions",
                    "Correspondence via email or contact forms",
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 font-body text-sm text-muted-foreground leading-relaxed"
                    >
                      <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>

                <h3 className="font-heading text-lg text-foreground mt-6 mb-2">
                  3.2 Information collected automatically
                </h3>
                <ul className="space-y-2 ml-4">
                  {[
                    "Website usage data via Vercel Analytics (anonymised, no cookies)",
                    "Device type and browser information",
                    "Pages visited and time spent on site",
                    "Referring website or source",
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 font-body text-sm text-muted-foreground leading-relaxed"
                    >
                      <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* How We Use */}
            <div>
              <h2 className="font-heading text-2xl text-foreground mb-4">
                4. How We Use Your Information
              </h2>
              <div className="space-y-4">
                <p className="font-body text-sm text-muted-foreground leading-relaxed">
                  We use your personal data for the following purposes:
                </p>
                <ul className="space-y-2 ml-4">
                  {[
                    "To manage the therapy waitlist and contact you when a space becomes available",
                    "To provide and manage therapy services",
                    "To communicate with you about appointments and your care",
                    "To send you information you have requested (e.g. course details)",
                    "To improve our website and services",
                    "To comply with legal and professional obligations",
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 font-body text-sm text-muted-foreground leading-relaxed"
                    >
                      <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Legal Basis */}
            <div>
              <h2 className="font-heading text-2xl text-foreground mb-4">
                5. Legal Basis for Processing
              </h2>
              <div className="space-y-4">
                <p className="font-body text-sm text-muted-foreground leading-relaxed">
                  We process your personal data under the following legal bases:
                </p>
                <ul className="space-y-2 ml-4">
                  {[
                    "Consent — when you submit your details via the waitlist form or subscribe to communications",
                    "Contractual necessity — to provide therapy services you have engaged",
                    "Legitimate interest — to improve our services and respond to enquiries",
                    "Legal obligation — to comply with professional and regulatory requirements",
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 font-body text-sm text-muted-foreground leading-relaxed"
                    >
                      <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Third-Party Services */}
            <div>
              <h2 className="font-heading text-2xl text-foreground mb-4">
                6. Third-Party Services
              </h2>
              <div className="space-y-4">
                <p className="font-body text-sm text-muted-foreground leading-relaxed">
                  We use the following third-party services to operate our
                  business. Your data may be shared with these providers solely
                  for the purposes described:
                </p>
                <div className="space-y-3">
                  {[
                    {
                      name: "Mailchimp (Intuit)",
                      purpose:
                        "Email marketing and waitlist management. Your name, email, phone number, country and insurance preference are stored securely on Mailchimp servers.",
                    },
                    {
                      name: "Vercel",
                      purpose:
                        "Website hosting and anonymised analytics. No personally identifiable data is collected via analytics.",
                    },
                    {
                      name: "Secure Video Platform",
                      purpose:
                        "Online therapy sessions are conducted via an encrypted, GDPR-compliant video platform.",
                    },
                  ].map((service) => (
                    <div
                      key={service.name}
                      className="bg-secondary rounded-lg p-4 border border-border/40"
                    >
                      <p className="font-body text-sm text-foreground font-medium mb-1">
                        {service.name}
                      </p>
                      <p className="font-body text-sm text-muted-foreground leading-relaxed">
                        {service.purpose}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Data Retention */}
            <div>
              <h2 className="font-heading text-2xl text-foreground mb-4">
                7. Data Retention
              </h2>
              <div className="space-y-4">
                <p className="font-body text-sm text-muted-foreground leading-relaxed">
                  We retain your personal data only for as long as is necessary
                  for the purposes set out in this policy:
                </p>
                <ul className="space-y-2 ml-4">
                  {[
                    "Waitlist data — retained until you are contacted and either begin therapy or ask to be removed",
                    "Therapy records — retained for a minimum of 7 years after the end of the therapeutic relationship, in line with BACP and insurance requirements",
                    "Email correspondence — retained for as long as necessary for ongoing communication",
                    "Website analytics — anonymised data retained by Vercel in accordance with their data retention policy",
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 font-body text-sm text-muted-foreground leading-relaxed"
                    >
                      <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Your Rights */}
            <div>
              <h2 className="font-heading text-2xl text-foreground mb-4">
                8. Your Rights
              </h2>
              <div className="space-y-4">
                <p className="font-body text-sm text-muted-foreground leading-relaxed">
                  Under UK GDPR, you have the following rights regarding your
                  personal data:
                </p>
                <ul className="space-y-2 ml-4">
                  {[
                    "Right of access — request a copy of the personal data we hold about you",
                    "Right to rectification — request correction of inaccurate or incomplete data",
                    "Right to erasure — request deletion of your personal data (subject to legal obligations)",
                    "Right to restrict processing — request that we limit how we use your data",
                    "Right to data portability — request your data in a structured, machine-readable format",
                    "Right to object — object to processing based on legitimate interest",
                    "Right to withdraw consent — withdraw consent at any time where processing is based on consent",
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 font-body text-sm text-muted-foreground leading-relaxed"
                    >
                      <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">
                  To exercise any of these rights, please contact us at{" "}
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="text-primary underline underline-offset-2"
                  >
                    {siteConfig.email}
                  </a>
                  . We will respond within 30 days.
                </p>
              </div>
            </div>

            {/* Cookies */}
            <div>
              <h2 className="font-heading text-2xl text-foreground mb-4">
                9. Cookies
              </h2>
              <div className="space-y-4">
                <p className="font-body text-sm text-muted-foreground leading-relaxed">
                  This website uses minimal cookies and local storage:
                </p>
                <ul className="space-y-2 ml-4">
                  {[
                    "Banner dismissal preference — stored in your browser's local storage to remember if you have dismissed the waitlist banner. No personal data is collected.",
                    "We do not use tracking cookies, advertising cookies, or any third-party cookies.",
                    "Vercel Analytics operates without cookies and does not collect personally identifiable information.",
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 font-body text-sm text-muted-foreground leading-relaxed"
                    >
                      <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Data Security */}
            <div>
              <h2 className="font-heading text-2xl text-foreground mb-4">
                10. Data Security
              </h2>
              <div className="space-y-4">
                <p className="font-body text-sm text-muted-foreground leading-relaxed">
                  We take the security of your personal data seriously. We
                  implement appropriate technical and organisational measures to
                  protect your data, including:
                </p>
                <ul className="space-y-2 ml-4">
                  {[
                    "SSL/TLS encryption on all website communications",
                    "Encrypted video platform for therapy sessions",
                    "Secure, password-protected storage of client records",
                    "Limited access to personal data on a need-to-know basis",
                    "Regular review of data protection practices",
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 font-body text-sm text-muted-foreground leading-relaxed"
                    >
                      <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Children */}
            <div>
              <h2 className="font-heading text-2xl text-foreground mb-4">
                11. Children&apos;s Privacy
              </h2>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">
                Our services are intended for adults aged 18 and over. We do not
                knowingly collect personal data from children. If you believe we
                have inadvertently collected data from a child, please contact us
                immediately.
              </p>
            </div>

            {/* International Transfers */}
            <div>
              <h2 className="font-heading text-2xl text-foreground mb-4">
                12. International Data Transfers
              </h2>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">
                Some of our third-party service providers (such as Mailchimp and
                Vercel) may process data outside the UK. Where this occurs, we
                ensure appropriate safeguards are in place, including Standard
                Contractual Clauses or adequacy decisions, to protect your data
                in accordance with UK GDPR.
              </p>
            </div>

            {/* Complaints */}
            <div>
              <h2 className="font-heading text-2xl text-foreground mb-4">
                13. Complaints
              </h2>
              <div className="space-y-4">
                <p className="font-body text-sm text-muted-foreground leading-relaxed">
                  If you are unhappy with how we have handled your personal data,
                  you have the right to lodge a complaint with the Information
                  Commissioner&apos;s Office (ICO):
                </p>
                <div className="bg-secondary rounded-lg p-5 border border-border/40">
                  <p className="font-body text-sm text-foreground leading-relaxed">
                    <strong>Information Commissioner&apos;s Office</strong>
                    <br />
                    Website:{" "}
                    <a
                      href="https://ico.org.uk"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary underline underline-offset-2"
                    >
                      ico.org.uk
                    </a>
                    <br />
                    Helpline: 0303 123 1113
                  </p>
                </div>
              </div>
            </div>

            {/* Changes */}
            <div>
              <h2 className="font-heading text-2xl text-foreground mb-4">
                14. Changes to This Policy
              </h2>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">
                We may update this Privacy Policy from time to time. Any changes
                will be posted on this page with an updated &ldquo;last
                updated&rdquo; date. We encourage you to review this policy
                periodically.
              </p>
            </div>

            {/* Contact */}
            <div>
              <h2 className="font-heading text-2xl text-foreground mb-4">
                15. Contact Us
              </h2>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">
                If you have any questions about this Privacy Policy or how we
                handle your personal data, please contact us at{" "}
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="text-primary underline underline-offset-2"
                >
                  {siteConfig.email}
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
