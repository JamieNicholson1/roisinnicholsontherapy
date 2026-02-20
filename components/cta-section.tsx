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
            {description}
          </p>
        </div>

        <WaitlistForm variant="dark" />

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
