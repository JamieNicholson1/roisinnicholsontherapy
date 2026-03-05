import type { Metadata, Viewport } from 'next'
import Script from 'next/script'
import { Cormorant_Garamond, DM_Sans } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { BannerProvider } from '@/components/banner-provider'
import { WaitlistBanner } from '@/components/waitlist-banner'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import './globals.css'

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  variable: '--font-cormorant',
  display: 'swap',
  weight: ['300', '400', '500', '600', '700'],
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
  display: 'swap',
  weight: ['300', '400', '500', '600', '700'],
})

export const metadata: Metadata = {
  title: {
    default: 'Roisin Nicholson Therapy | Baby Loss Therapist',
    template: '%s | Roisin Nicholson Therapy',
  },
  description:
    'Online therapy for parents who have experienced baby loss, miscarriage, and stillbirth. BACP accredited person-centred therapist specialising in pregnancy after loss. A safe space where none of your feelings are too much.',
  keywords: [
    'baby loss therapist',
    'miscarriage counselling',
    'pregnancy after loss',
    'stillbirth support',
    'online therapy UK',
    'BACP accredited counsellor',
    'person-centred therapy',
  ],
}

export const viewport: Viewport = {
  themeColor: '#6B7F5E',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${dmSans.variable}`}>
      <head>
        <Script id="meta-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '1279422240732056');
            fbq('track', 'PageView');
          `}
        </Script>
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: 'none' }}
            src="https://www.facebook.com/tr?id=1279422240732056&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
      </head>
      <body className="font-body antialiased">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:bg-primary focus:text-white focus:px-4 focus:py-2 focus:rounded-md"
        >
          Skip to main content
        </a>
        <BannerProvider>
          <WaitlistBanner />
          <Header />
          <main id="main-content">
            {children}
          </main>
        </BannerProvider>
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}
