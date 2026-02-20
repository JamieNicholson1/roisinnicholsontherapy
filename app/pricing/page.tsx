import type { Metadata } from "next"
import { CTASection } from "@/components/cta-section"
import { CheckIcon } from "@/components/icons"

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Transparent pricing for online baby loss therapy and pregnancy after loss counselling. Sessions available with Roisin Nicholson Therapy.",
}

export default function PricingPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-36 pb-16 md:pt-44 md:pb-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="max-w-3xl">
            <p className="font-body text-xs tracking-[0.2em] text-primary uppercase mb-4">
              Pricing
            </p>
            <h1 className="font-heading text-4xl md:text-5xl text-foreground leading-tight mb-6">
              Simple, Transparent Pricing
            </h1>
            <p className="font-body text-lg text-muted-foreground leading-relaxed">
              Investing in your mental health is one of the most important things
              you can do. Here&apos;s what to expect.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing card */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="max-w-lg mx-auto">
            <div className="bg-card rounded-lg border border-border/40 p-8 md:p-10 flex flex-col">
              <p className="font-body text-xs tracking-[0.2em] text-primary uppercase mb-3">
                One-to-One
              </p>
              <h2 className="font-heading text-3xl text-foreground mb-2">
                Individual Therapy
              </h2>
              <p className="font-body text-sm text-muted-foreground leading-relaxed mb-8">
                A 60-minute one-to-one therapy session held online via secure
                video.
              </p>

              <div className="mb-8">
                <span className="font-heading text-4xl text-foreground">
                  &pound;80
                </span>
                <span className="font-body text-sm text-muted-foreground ml-1">
                  per session
                </span>
              </div>

              <ul className="space-y-3 mb-10 flex-grow">
                {[
                  "60-minute session via secure video",
                  "Person-centred approach",
                  "Specialist baby loss support",
                  "Practical tools and strategies",
                  "Flexible scheduling",
                  "Weekly or fortnightly options",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 font-body text-sm text-muted-foreground"
                  >
                    <CheckIcon className="shrink-0 mt-0.5 text-primary" />
                    {item}
                  </li>
                ))}
              </ul>

              <a
                href="#waitlist"
                className="inline-flex items-center justify-center rounded-sm bg-primary px-8 py-3.5 font-body text-sm font-medium text-primary-foreground hover:bg-primary-dark transition-all duration-200 hover:shadow-md w-full"
              >
                Join the Waitlist
              </a>
            </div>
          </div>

          {/* Note */}
          <div className="max-w-2xl mx-auto mt-10 text-center">
            <div className="bg-primary/5 rounded-lg p-6 border border-primary/15">
              <p className="font-body text-sm text-foreground leading-relaxed">
                The waitlist is now open — join below and I&apos;ll be in touch
                as soon as a space becomes available. In the meantime, check out
                my{" "}
                <a
                  href="/grief-course"
                  className="text-primary underline underline-offset-2 hover:text-primary-dark transition-colors font-medium"
                >
                  Grief Support Course
                </a>{" "}
                which is available now.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What's included & policies */}
      <section className="py-16 md:py-24 bg-secondary">
        <div className="mx-auto max-w-6xl px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-heading text-3xl md:text-4xl text-foreground leading-tight mb-10 text-center">
              Good to Know
            </h2>
            <div className="grid sm:grid-cols-2 gap-8">
              <div className="bg-card rounded-lg p-6 border border-border/40">
                <h3 className="font-heading text-xl text-foreground mb-4">
                  What&apos;s Included
                </h3>
                <ul className="space-y-3">
                  {[
                    "Full 60-minute therapeutic session",
                    "Secure, confidential video platform",
                    "Person-centred specialist support",
                    "Practical tools to use between sessions",
                    "Flexible scheduling around your life",
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 font-body text-sm text-muted-foreground leading-relaxed"
                    >
                      <span className="mt-1.5 h-2 w-2 rounded-full bg-primary shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-card rounded-lg p-6 border border-border/40">
                <h3 className="font-heading text-xl text-foreground mb-4">
                  Cancellation Policy
                </h3>
                <div className="space-y-3">
                  <p className="font-body text-sm text-muted-foreground leading-relaxed">
                    I understand that life after loss can be unpredictable. If
                    you need to cancel or reschedule, please give at least
                    24&nbsp;hours&apos; notice where possible.
                  </p>
                  <p className="font-body text-sm text-muted-foreground leading-relaxed">
                    Late cancellations or missed sessions may be charged at the
                    full session rate. I will always work with you
                    compassionately around this.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 bg-card rounded-lg p-6 border border-border/40">
              <h3 className="font-heading text-xl text-foreground mb-4">
                Payment
              </h3>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">
                Payment is made in advance of each session via bank transfer.
                Payment details will be shared once we agree to work together.
                All prices are in GBP (&pound;).
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        heading="Ready to Get Started?"
        description="Join the waitlist and I'll be in touch as soon as a space opens up. In the meantime, my Grief Support Course is available now."
        compact
      />
    </>
  )
}
