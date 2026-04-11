import Link from "next/link"
import { siteConfig } from "@/lib/constants"
import { InstagramIcon } from "@/components/icons"
import { WaitlistForm } from "@/components/waitlist-form"

interface CTASectionProps {
  heading?: string
  description?: string
  compact?: boolean
}

export function CTASection({
  heading = "Ready to Take the First Step?",
  description = "Join the waitlist and I\u2019ll be in touch as soon as a space opens up.",
  compact = false,
}: CTASectionProps) {
  const waitlistFull = siteConfig.waitlistFull

  return (
    <section
      id="waitlist"
      className={`relative bg-primary overflow-hidden ${
        compact ? "py-16 md:py-20" : "py-24 md:py-32"
      }`}
    >
      {/* Subtle decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-white/[0.03] -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-72 h-72 rounded-full bg-white/[0.03] translate-y-1/2 -translate-x-1/2" />

      <div className="relative mx-auto max-w-6xl px-6">
        <div className="max-w-xl mx-auto text-center mb-10">
          <h2
            className={`font-heading text-white leading-tight text-balance mb-4 ${
              compact ? "text-2xl md:text-3xl" : "text-3xl md:text-4xl"
            }`}
          >
            {heading}
          </h2>

          <p className="font-body text-sm md:text-base text-white/75 leading-relaxed max-w-md mx-auto">
            {waitlistFull
              ? "The therapy waitlist is currently full — but you don\u2019t have to wait for support."
              : description}
          </p>
        </div>

        {waitlistFull && (
          <div className="max-w-lg mx-auto mb-10 rounded-lg bg-white/15 border border-white/25 p-8 text-center">
            <p className="font-heading text-xl md:text-2xl text-white leading-snug mb-3">
              You Don&apos;t Have to Wait
            </p>
            <p className="font-body text-sm text-white/75 leading-relaxed mb-6 max-w-md mx-auto">
              My Grief Support Course is available now, with immediate access to
              practical tools and guidance created specifically for parents
              navigating baby loss.
            </p>
            <Link
              href="/grief-course"
              className="inline-flex items-center justify-center rounded-sm bg-white px-10 py-4 font-body text-sm font-semibold text-[#3B3329] hover:bg-white/90 transition-all duration-200 hover:shadow-xl"
            >
              Explore the Grief Support Course
            </Link>
          </div>
        )}

        {/* Before You Enquire — important info */}
        <div className={`max-w-lg mx-auto mb-10 rounded-lg bg-white/10 border border-white/20 p-6 ${waitlistFull ? "opacity-45" : ""}`}>
          <h3 className="font-heading text-lg text-white mb-3 text-center">
            Before You Enquire
          </h3>
          <ul className="space-y-2.5">
            {[
              "All sessions are online only (via secure video)",
              "I am unable to work with clients based in the USA or Canada due to licensing requirements",
              "I do not provide crisis or emergency support",
              "Therapy is not a substitute for medical or psychiatric care",
            ].map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 font-body text-sm text-white/80 leading-relaxed"
              >
                <span className="mt-1.5 h-2 w-2 rounded-full bg-white/40 shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        <WaitlistForm variant="dark" disabled={waitlistFull} />

        <div className="text-center mt-10">
          <a
            href={siteConfig.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 font-body text-sm text-white/60 hover:text-white transition-colors"
          >
            <InstagramIcon />
            Follow on Instagram for updates
          </a>
        </div>
      </div>
    </section>
  )
}
