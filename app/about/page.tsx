import type { Metadata } from "next"
import Image from "next/image"
import { CTASection } from "@/components/cta-section"
import { InstagramIcon } from "@/components/icons"
import { siteConfig } from "@/lib/constants"

export const metadata: Metadata = {
  title: "About Roisin",
  description:
    "Meet Roisin Nicholson — a BACP accredited person-centred psychotherapist specialising in baby loss and pregnancy after loss. With lived experience and 8 years of therapeutic practice.",
}

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-36 pb-16 md:pt-44 md:pb-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="max-w-3xl">
            <p className="font-body text-xs tracking-[0.2em] text-primary uppercase mb-4">
              About Me
            </p>
            <h1 className="font-heading text-4xl md:text-5xl text-foreground leading-tight mb-6">
              Hi, I&apos;m R&oacute;is&iacute;n (Row-sheen) 🫶
            </h1>
            <p className="font-body text-lg text-muted-foreground leading-relaxed">
              Person-centred psychotherapist (MBACP Accred) specialising in baby
              loss and pregnancy after loss.
            </p>
          </div>
        </div>
      </section>

      {/* Introduction - Image Right */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <h2 className="font-heading text-3xl md:text-4xl text-foreground leading-tight mb-8">
                Welcome to My Space
              </h2>
              <div className="space-y-5">
                <p className="font-body text-sm md:text-base text-muted-foreground leading-relaxed">
                  I&apos;m a person-centred psychotherapist specialising in baby
                  loss and pregnancy after loss. This is a space where none of
                  your feelings are too much, too complicated or too difficult to
                  hold.
                </p>
                <p className="font-body text-sm md:text-base text-muted-foreground leading-relaxed">
                  Whether you&apos;re processing the loss of your baby, navigating
                  the anxiety of pregnancy after loss, or struggling with the
                  complexities of parenting after loss — I&apos;m here for you.
                </p>
              </div>
            </div>
            <div className="relative rounded-lg overflow-hidden aspect-[3/4] shadow-lg">
              <Image
                src="/images/roisin-portrait.jpg"
                alt="Roisin Nicholson — Person-centred Psychotherapist"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Personal Story - Image Left */}
      <section className="py-16 md:py-24 bg-secondary">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="relative rounded-lg overflow-hidden aspect-[3/4] shadow-lg md:order-first">
              <Image
                src="/images/roisin-outdoor.jpg"
                alt="Roisin outdoors in nature"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="font-heading text-3xl md:text-4xl text-foreground leading-tight mb-8">
                My Story
              </h2>
              <div className="space-y-5">
                <p className="font-body text-sm md:text-base text-muted-foreground leading-relaxed">
                  My first baby, my son, was stillborn. I later experienced a
                  miscarriage. I now have two living children — my rainbow babies
                  — and I parent them alongside the memory of the babies I lost.
                </p>
                <p className="font-body text-sm md:text-base text-muted-foreground leading-relaxed">
                  I understand the pregnancy anxiety, the fear of every
                  appointment, the difficulty bonding with a new baby when
                  you&apos;re carrying grief for another. I know what it feels
                  like when someone asks &ldquo;Is this your first?&rdquo; and
                  you don&apos;t know how to answer.
                </p>
                <p className="font-body text-sm md:text-base text-muted-foreground leading-relaxed">
                  This lived experience, combined with my professional training,
                  means I don&apos;t just understand intellectually — I
                  understand in my bones.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* My Approach */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-heading text-3xl md:text-4xl text-foreground leading-tight mb-8 text-center">
              My Approach
            </h2>
            <div className="space-y-5 mb-12">
              <p className="font-body text-sm md:text-base text-muted-foreground leading-relaxed">
                I work in a person-centred way, which means you lead the way.
                You won&apos;t find me telling you to &ldquo;move on&rdquo; or
                that &ldquo;everything happens for a reason.&rdquo; I believe
                your grief is as unique as the love you have for your baby, and
                therapy should honour that.
              </p>
              <p className="font-body text-sm md:text-base text-muted-foreground leading-relaxed">
                Alongside creating a safe, compassionate space for you to
                explore your feelings, I also offer practical tools for managing
                grief and anxiety. This might include grounding techniques,
                strategies for navigating medical appointments, or support with
                bonding during pregnancy after loss.
              </p>
            </div>

            {/* Approach cards */}
            <div className="grid sm:grid-cols-2 gap-5">
              {[
                {
                  title: "You Lead the Way",
                  text: "Person-centred therapy means there's no agenda — you choose what we work on.",
                },
                {
                  title: "No Toxic Positivity",
                  text: 'You won\'t hear "move on" or "everything happens for a reason" from me.',
                },
                {
                  title: "Practical Tools",
                  text: "Grounding techniques, anxiety management, and strategies for difficult situations.",
                },
                {
                  title: "Bonding Support",
                  text: "Help connecting with a new pregnancy while honouring your loss.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="bg-card rounded-lg p-6 border border-border/40"
                >
                  <h3 className="font-heading text-lg text-foreground mb-2">
                    {item.title}
                  </h3>
                  <p className="font-body text-sm text-muted-foreground leading-relaxed">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Credentials */}
      <section className="py-16 md:py-24 bg-secondary">
        <div className="mx-auto max-w-6xl px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-heading text-3xl md:text-4xl text-foreground leading-tight mb-12">
              My Credentials
            </h2>
            <div className="grid sm:grid-cols-2 gap-6 text-left">
              {[
                "8 years of therapeutic experience",
                "Accredited member of BACP",
                "MA in Person-Centred Experiential Counselling",
                "Foundation for Infant Loss certified",
                "Background in schools, youth groups and charity sector",
                "Experience supporting survivors of sexual violence",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <div className="mt-1.5 h-2 w-2 rounded-full bg-primary shrink-0" />
                  <p className="font-body text-sm text-muted-foreground leading-relaxed">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Outside of Work */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <h2 className="font-heading text-3xl md:text-4xl text-foreground leading-tight mb-8">
                Outside of Work
              </h2>
              <p className="font-body text-sm md:text-base text-muted-foreground leading-relaxed mb-6">
                When I&apos;m not working, you&apos;ll find me:
              </p>
              <ul className="space-y-3">
                {[
                  "Outdoors with my kids, come rain or shine",
                  "At the gym or out hiking",
                  "Nose deep in a good book",
                  "Planning our next family adventure",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 font-body text-sm text-muted-foreground leading-relaxed"
                  >
                    <span className="mt-1.5 h-2 w-2 rounded-full bg-accent shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative rounded-lg overflow-hidden aspect-square shadow-lg">
              <Image
                src="/images/roisin-lifestyle.jpg"
                alt="Roisin outdoors with family"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Let's Connect + Important Notice */}
      <section className="py-16 md:py-24 bg-secondary">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
            {/* Let's Connect */}
            <div>
              <h2 className="font-heading text-3xl md:text-4xl text-foreground leading-tight mb-6">
                Let&apos;s Connect
              </h2>
              <p className="font-body text-sm md:text-base text-muted-foreground leading-relaxed mb-4">
                The waitlist is now open — join below and I&apos;ll be in touch
                as soon as a space becomes available. Follow me on Instagram for
                updates on availability and helpful content.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <a
                  href="#waitlist"
                  className="inline-flex items-center justify-center rounded-sm bg-primary px-8 py-3.5 font-body text-sm font-medium text-primary-foreground hover:bg-primary-dark transition-all duration-200 hover:shadow-md"
                >
                  Join the Waitlist
                </a>
                <a
                  href={siteConfig.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-sm border border-border bg-card/50 px-6 py-3.5 font-body text-sm text-foreground hover:bg-card transition-all duration-200"
                >
                  <InstagramIcon />
                  {siteConfig.instagramHandle}
                </a>
              </div>
            </div>

            {/* Before You Enquire */}
            <div className="bg-card rounded-lg p-8 border border-border/40">
              <h3 className="font-heading text-2xl text-foreground mb-6">
                Before You Enquire
              </h3>
              <p className="font-body text-sm text-muted-foreground leading-relaxed mb-5">
                There are a few important things to know:
              </p>
              <ul className="space-y-4">
                {[
                  "All sessions are online only (via secure video)",
                  "I am unable to work with clients based in the USA or Canada due to licensing requirements",
                  "I do not provide crisis or emergency support",
                  "Therapy is not a substitute for medical or psychiatric care",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 font-body text-sm text-muted-foreground leading-relaxed"
                  >
                    <span className="mt-1.5 h-2 w-2 rounded-full bg-accent shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection compact />
    </>
  )
}
