import Link from "next/link"
import { siteConfig } from "@/lib/constants"

export function Footer() {
  return (
    <footer className="bg-[#3B3329] pt-16 pb-8">
      <div className="mx-auto max-w-6xl px-6">
        {/* Crisis disclaimer */}
        <div className="bg-white/5 rounded-lg p-5 mb-12 border border-white/10">
          <p className="font-body text-sm text-white/70 leading-relaxed text-center">
            <strong className="text-white/90">Important:</strong> This website
            does not provide crisis or emergency support. If you are in
            immediate danger, contact local emergency services or a crisis line
            in your area without delay.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-10 md:gap-16 mb-12">
          {/* Brand */}
          <div>
            <div className="mb-4">
              <p className="font-heading text-xl text-white leading-tight">
                Roisin Nicholson
              </p>
              <p className="font-body text-[10px] text-white/40 tracking-[0.2em] uppercase">
                Therapy
              </p>
            </div>
            <p className="font-body text-sm text-white/50 leading-relaxed">
              Online therapy for parents who have experienced baby loss and those
              pregnant again after loss. A safe space where none of your feelings
              are too much.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <p className="font-body text-xs tracking-[0.2em] text-white/40 uppercase mb-5">
              Quick Links
            </p>
            <ul className="space-y-3">
              {[
                { label: "About Roisin", href: "/about" },
                { label: "Therapy", href: "/therapy" },
                { label: "Pricing", href: "/pricing" },
                { label: "Grief Support Course", href: "/grief-course" },
              ].map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="font-body text-sm text-white/60 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <p className="font-body text-xs tracking-[0.2em] text-white/40 uppercase mb-5">
              Connect
            </p>
            <ul className="space-y-3">
              <li>
                <a
                  href="/#waitlist"
                  className="font-body text-sm text-white/60 hover:text-white transition-colors"
                >
                  Join the Waitlist
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-body text-sm text-white/60 hover:text-white transition-colors"
                >
                  {siteConfig.instagramHandle}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="font-body text-sm text-white/60 hover:text-white transition-colors"
                >
                  {siteConfig.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4 text-center sm:text-left">
            <a
              href="/privacy-policy"
              className="font-body text-xs text-white/30 hover:text-white/60 transition-colors"
            >
              Privacy Policy
            </a>
            <span className="text-white/20">|</span>
            <a
              href="/terms-conditions"
              className="font-body text-xs text-white/30 hover:text-white/60 transition-colors"
            >
              Terms &amp; Conditions
            </a>
          </div>
          <p className="font-body text-xs text-white/30 text-center sm:text-right">
            All counselling services are provided under the laws of England and
            Wales.
          </p>
        </div>
      </div>
    </footer>
  )
}
