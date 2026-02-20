import Image from "next/image"
import Link from "next/link"
import { Heart, Baby, Shield } from "lucide-react"
import { ServiceCard } from "@/components/service-card"
import { CTASection } from "@/components/cta-section"
import { InstagramIcon } from "@/components/icons"
import { siteConfig } from "@/lib/constants"

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[100svh] flex items-center pt-28">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero-bg.jpg"
            alt=""
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-background/80" />
        </div>

        <div className="relative z-10 mx-auto max-w-6xl px-6 py-24 md:py-32 w-full">
          <div className="max-w-2xl">
            {/* Italicised quote */}
            <p className="font-heading italic text-lg md:text-xl text-primary mb-6 leading-relaxed">
              &ldquo;It&apos;s possible to feel both grief and hope at once.
              I&apos;m here to help you hold both.&rdquo;
            </p>

            {/* Main heading */}
            <h1 className="font-heading text-4xl md:text-5xl lg:text-[3.5rem] leading-[1.15] text-foreground text-balance mb-6">
              Hi, I&apos;m Roisin &mdash;{" "}
              <span className="text-primary">
                Your Compassionate &amp; Understanding Psychotherapist Who Gets
                it.
              </span>
            </h1>

            {/* Sub-copy */}
            <p className="font-body text-base md:text-lg text-muted-foreground leading-relaxed mb-8 max-w-xl">
              I offer a space where none of your feelings are too much, too
              complicated or too difficult to hold.
            </p>

            {/* Brief intro */}
            <p className="font-body text-sm text-muted-foreground leading-relaxed mb-10 max-w-xl">
              I provide online therapy for parents who have experienced baby loss
              and those navigating pregnancy after loss. As someone who has lived
              this journey, I understand the complex reality of grief, anxiety
              and hope.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#waitlist"
                className="inline-flex items-center justify-center rounded-sm bg-primary px-8 py-4 font-body text-sm font-medium text-primary-foreground hover:bg-primary-dark transition-all duration-200 hover:shadow-lg"
              >
                Join the Waitlist
              </a>
              <Link
                href="/about"
                className="inline-flex items-center justify-center rounded-sm border border-border bg-card/50 px-8 py-4 font-body text-sm text-foreground hover:bg-card transition-all duration-200"
              >
                Learn More About Me
              </Link>
            </div>

            {/* Instagram link */}
            <div className="mt-8 flex items-center gap-3">
              <a
                href={siteConfig.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-body text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <InstagramIcon />
                Follow {siteConfig.instagramHandle} for more supportive content and resources
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Trust indicators */}
      <section className="py-12 md:py-16 border-y border-border/30">
        <div className="mx-auto max-w-6xl px-6">
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
            {[
              { label: "BACP Accredited", sublabel: "Psychotherapist" },
              { label: "Online Sessions", sublabel: "From Your Safe Space" },
              { label: "Specialist", sublabel: "Baby Loss & PAL" },
              { label: "Grief Course", sublabel: "Now Available" },
            ].map((item) => (
              <div
                key={item.label}
                className="flex items-center gap-3 text-center md:text-left"
              >
                <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <div className="h-2 w-2 rounded-full bg-primary" />
                </div>
                <div>
                  <p className="font-heading text-base text-foreground leading-tight">
                    {item.label}
                  </p>
                  <p className="font-body text-xs text-muted-foreground">
                    {item.sublabel}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center mb-4">
            <p className="font-body text-xs tracking-[0.2em] text-primary uppercase mb-2">
              Welcome!
            </p>
          </div>
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-4xl text-foreground text-balance">
              My Therapy Services
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            <ServiceCard
              title="Baby Loss Support"
              description="Therapy for baby loss with someone who gets it. A compassionate space to process your grief, at your own pace, with someone who truly understands."
              href="/therapy"
              icon={
                <Heart className="h-7 w-7" strokeWidth={1.5} />
              }
            />
            <ServiceCard
              title="Pregnancy After Loss"
              description="Are you anxiously pregnant again after loss? Support to turn your FEAR into HOPE, one gentle step at a time."
              href="/therapy"
              icon={
                <Baby className="h-7 w-7" strokeWidth={1.5} />
              }
            />
            <ServiceCard
              title="Parenting After Loss"
              description="If you are parenting after loss and struggling with anxiety, intrusive thoughts or maybe even guilt — support is available to you."
              href="/therapy"
              icon={
                <Shield className="h-7 w-7" strokeWidth={1.5} />
              }
            />
          </div>
        </div>
      </section>

      {/* About preview section */}
      <section className="py-24 md:py-32 bg-secondary">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Image column */}
            <div className="relative">
              <div className="relative rounded-lg overflow-hidden aspect-[4/5] shadow-lg">
                <Image
                  src="/images/roisin-portrait.jpg"
                  alt="Roisin Nicholson - Baby Loss Therapist"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Text column */}
            <div>
              <p className="font-body text-xs tracking-[0.2em] text-primary uppercase mb-4">
                About Roisin
              </p>
              <h2 className="font-heading text-3xl md:text-4xl text-foreground leading-tight mb-8">
                Welcome! I&apos;m R&oacute;is&iacute;n (Row-sheen) 🫶
              </h2>

              <div className="space-y-5">
                <p className="font-body text-sm md:text-base text-muted-foreground leading-relaxed">
                  As a mum who parents both living children and carries the
                  memory of my stillborn baby, I understand the complex reality
                  of life after loss.
                </p>
                <p className="font-body text-sm md:text-base text-muted-foreground leading-relaxed">
                  The anxiety that spikes when your baby or toddler sleeps too
                  quietly, the intrusive thoughts that ambush you during ordinary
                  moments, the guilt that creeps in when grief resurfaces
                  &mdash; I&apos;ve been there!
                </p>
                <p className="font-body text-sm md:text-base text-muted-foreground leading-relaxed">
                  I&apos;m a person-centred psychotherapist (MBACP Accred)
                  specialising in baby loss and pregnancy after loss. Your grief
                  doesn&apos;t vanish when you parent living children.
                </p>
              </div>

              <div className="mt-10 flex flex-col sm:flex-row gap-4">
                <Link
                  href="/about"
                  className="inline-flex items-center justify-center rounded-sm bg-primary px-8 py-3.5 font-body text-sm font-medium text-primary-foreground hover:bg-primary-dark transition-all duration-200 hover:shadow-md"
                >
                  Learn more about me here
                </Link>
                <a
                  href={siteConfig.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2.5 rounded-sm border border-border bg-card/50 px-6 py-3.5 font-body text-sm text-foreground hover:bg-card transition-all duration-200"
                >
                  <InstagramIcon />
                  {siteConfig.instagramHandle}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quote break */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <div className="w-12 h-px bg-accent mx-auto mb-8" />
          <blockquote className="font-heading text-2xl md:text-3xl lg:text-4xl text-foreground leading-snug text-balance">
            &ldquo;It&apos;s possible to feel both grief and hope at
            once.&rdquo;
          </blockquote>
          <p className="font-heading italic text-lg text-primary mt-6">
            &mdash; I&apos;m here to help you hold both.
          </p>
          <div className="w-12 h-px bg-accent mx-auto mt-8" />
        </div>
      </section>

      {/* CTA */}
      <CTASection />
    </>
  )
}
