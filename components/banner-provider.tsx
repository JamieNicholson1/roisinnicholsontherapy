"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"

interface BannerContextType {
  isBannerVisible: boolean
  dismissBanner: () => void
}

const BannerContext = createContext<BannerContextType>({
  isBannerVisible: true,
  dismissBanner: () => {},
})

export function useBanner() {
  return useContext(BannerContext)
}

export function BannerProvider({ children }: { children: ReactNode }) {
  // Start hidden to avoid layout shift on hydration
  const [isBannerVisible, setIsBannerVisible] = useState(false)

  useEffect(() => {
    const dismissed = localStorage.getItem("waitlist-banner-dismissed")
    if (!dismissed) {
      setIsBannerVisible(true)
    }
  }, [])

  const dismissBanner = () => {
    setIsBannerVisible(false)
    localStorage.setItem("waitlist-banner-dismissed", "true")
  }

  return (
    <BannerContext.Provider value={{ isBannerVisible, dismissBanner }}>
      {children}
    </BannerContext.Provider>
  )
}
