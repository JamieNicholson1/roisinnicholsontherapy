"use client"

import { X } from "lucide-react"
import { useBanner } from "@/components/banner-provider"

export function WaitlistBanner() {
  const { isBannerVisible, dismissBanner } = useBanner()

  if (!isBannerVisible) return null

  return (
    <div className="fixed top-0 left-0 right-0 z-[60] bg-primary/10 backdrop-blur-sm border-b border-primary/20">
      <div className="mx-auto max-w-6xl px-6 py-2.5 flex items-center justify-center gap-4">
        <p className="font-body text-xs md:text-sm text-foreground text-center">
          ✨ The waitlist is now open &mdash;{" "}
          <a
            href="/#waitlist"
            className="text-primary underline underline-offset-2 hover:text-primary-dark transition-colors font-medium"
          >
            secure your spot
          </a>
        </p>
        <button
          onClick={dismissBanner}
          className="shrink-0 text-muted-foreground hover:text-foreground transition-colors p-1"
          aria-label="Dismiss banner"
        >
          <X className="h-3.5 w-3.5" />
        </button>
      </div>
    </div>
  )
}
