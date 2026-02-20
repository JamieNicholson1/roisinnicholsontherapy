"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { navLinks } from "@/lib/constants"
import { useBanner } from "@/components/banner-provider"

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()
  const { isBannerVisible } = useBanner()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [isOpen])

  return (
    <header
      className={`fixed left-0 right-0 z-50 transition-all duration-300 ${
        isBannerVisible ? "top-[37px]" : "top-0"
      } ${
        scrolled
          ? "bg-background/95 backdrop-blur-md shadow-sm"
          : "bg-background/80 backdrop-blur-sm"
      }`}
    >
      <div className="mx-auto max-w-6xl flex items-center justify-between px-6 py-4 lg:py-5">
        {/* Logo / Home link */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="flex flex-col">
            <span className="font-heading text-xl md:text-2xl tracking-tight text-foreground leading-tight">
              Roisin Nicholson
            </span>
            <span className="font-body text-[10px] text-muted-foreground tracking-[0.2em] uppercase">
              Therapy
            </span>
          </div>
        </Link>

        {/* Desktop navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className={`font-body text-sm transition-colors relative after:absolute after:bottom-[-2px] after:left-0 after:h-px after:w-0 hover:after:w-full after:bg-primary after:transition-all after:duration-300 ${
                pathname === link.href
                  ? "text-foreground after:w-full"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <a
            href="/#waitlist"
            className="inline-flex items-center justify-center rounded-sm bg-primary px-6 py-2.5 font-body text-sm text-primary-foreground hover:bg-primary-dark transition-all duration-200 hover:shadow-md"
          >
            Join Waitlist
          </a>
        </nav>

        {/* Mobile menu button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden text-foreground p-2 -mr-2"
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile slide-out menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="flex flex-col px-6 pb-6 gap-1 bg-background/95 backdrop-blur-md border-t border-border/30">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className={`font-body text-sm transition-colors py-3 border-b border-border/30 ${
                pathname === link.href
                  ? "text-foreground font-medium"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <a
            href="/#waitlist"
            className="inline-flex items-center justify-center rounded-sm bg-primary px-6 py-3 font-body text-sm text-primary-foreground hover:bg-primary-dark transition-colors mt-3 w-full"
          >
            Join Waitlist
          </a>
        </nav>
      </div>
    </header>
  )
}
