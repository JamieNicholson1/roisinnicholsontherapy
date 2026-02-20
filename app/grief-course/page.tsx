import type { Metadata } from "next"
import { siteConfig } from "@/lib/constants"

export const metadata: Metadata = {
  title: "Grief Support Course",
  description:
    "A supportive grief course for parents who have experienced baby loss. Learn practical tools for managing grief, anxiety and the journey of life after loss. Created by a therapist who truly understands.",
}

export default function GriefCoursePage() {
  return (
    <>
      {/* Hero — high-impact, emotional */}
      <section className="pt-36 pb-20 md:pt-44 md:pb-28 bg-primary relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-white/[0.03] -translate-y-1/2 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-white/[0.03] translate-y-1/2 -translate-x-1/3" />

        <div className="relative mx-auto max-w-6xl px-6">
          <div className="max-w-3xl">
            <p className="font-body text-xs tracking-[0.2em] text-white/60 uppercase mb-4">
              Grief Support Course — Now Live
            </p>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl text-white leading-[1.1] mb-6">
              You Don&apos;t Have to Navigate This Grief Alone
            </h1>
            <p className="font-body text-lg md:text-xl text-white/80 leading-relaxed mb-8 max-w-2xl">
              A gentle, guided course designed specifically for parents grieving
              the loss of a baby. Created by a therapist who has walked this
              path herself.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={siteConfig.griefCourse}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-sm bg-white px-10 py-4 font-body text-sm font-semibold text-[#3B3329] hover:bg-white/90 transition-all duration-200 hover:shadow-xl"
              >
                Join the Course Now
              </a>
              <a
                href="#what-you-get"
                className="inline-flex items-center justify-center rounded-sm border border-white/30 px-8 py-4 font-body text-sm text-white hover:bg-white/10 transition-all duration-200"
              >
                See What&apos;s Included
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Social proof / trust strip */}
      <section className="py-10 md:py-12 border-b border-border/30 bg-secondary">
        <div className="mx-auto max-w-6xl px-6">
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
            {[
              { label: "Created by", sublabel: "A Therapist Who Gets It" },
              { label: "Self-Paced", sublabel: "Go At Your Own Speed" },
              { label: "Practical Tools", sublabel: "You Can Use Today" },
              { label: "Accessible", sublabel: "From Anywhere" },
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

      {/* The problem — empathy-led */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-heading text-3xl md:text-4xl text-foreground leading-tight mb-8">
              If Any of This Feels Familiar&hellip;
            </h2>
            <div className="grid sm:grid-cols-2 gap-4 text-left mb-12">
              {[
                "You feel isolated in your grief because no one around you truly understands",
                "The world has moved on, but you haven't — and you don't know how to",
                "You're struggling with anxiety, flashbacks, or intrusive thoughts",
                "You feel guilty for grieving, or guilty for having moments of joy",
                "You want practical support but waiting lists for therapy feel impossibly long",
                "You need something now — not in 6 months' time",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3 bg-secondary rounded-lg p-5 border border-border/40"
                >
                  <span className="mt-1 h-2 w-2 rounded-full bg-accent shrink-0" />
                  <p className="font-body text-sm text-foreground leading-relaxed">
                    {item}
                  </p>
                </div>
              ))}
            </div>
            <div className="bg-card rounded-lg p-8 border border-border/40">
              <p className="font-heading text-xl md:text-2xl text-foreground leading-relaxed text-balance">
                Then this course was made for you. I created it because I know
                what it feels like to search for support and find nothing that
                truly understands.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What you get — the offer */}
      <section id="what-you-get" className="py-20 md:py-28 bg-secondary">
        <div className="mx-auto max-w-6xl px-6">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <p className="font-body text-xs tracking-[0.2em] text-primary uppercase mb-4">
                What&apos;s Inside
              </p>
              <h2 className="font-heading text-3xl md:text-4xl text-foreground leading-tight">
                Everything You Need to Start Feeling Supported
              </h2>
            </div>

            <div className="space-y-4">
              {[
                {
                  num: "01",
                  title: "Understanding Your Grief",
                  text: "Explore the unique nature of baby loss grief — why it feels different, why it can be so isolating, and why there's no \"right\" way to grieve. You'll finally feel seen.",
                },
                {
                  num: "02",
                  title: "Managing Anxiety & Trauma Responses",
                  text: "Learn practical grounding techniques and strategies for when the anxiety, flashbacks and trauma responses hit. Tools you can use immediately — not in theory, but in real life.",
                },
                {
                  num: "03",
                  title: "Navigating Relationships After Loss",
                  text: "Understand how grief affects your relationships and learn communication strategies for the people around you — partners, family, friends, colleagues.",
                },
                {
                  num: "04",
                  title: "Self-Compassion & Sustainable Self-Care",
                  text: "Build a self-care practice that honours your grief rather than trying to push past it. Learn to be gentle with yourself through the hardest days.",
                },
                {
                  num: "05",
                  title: "Finding Meaning & Carrying Hope",
                  text: "Explore how to carry your baby's memory forward while also making space for hope, joy and new beginnings — without guilt.",
                },
              ].map((item) => (
                <div
                  key={item.num}
                  className="bg-card rounded-lg p-6 md:p-8 border border-border/40 hover:border-primary/20 transition-colors duration-200"
                >
                  <div className="flex items-start gap-5">
                    <span className="font-heading text-3xl text-primary/30 shrink-0 leading-none mt-1">
                      {item.num}
                    </span>
                    <div>
                      <h3 className="font-heading text-xl text-foreground mb-2">
                        {item.title}
                      </h3>
                      <p className="font-body text-sm text-muted-foreground leading-relaxed">
                        {item.text}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Who it's for */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-heading text-3xl md:text-4xl text-foreground leading-tight mb-4 text-center">
              Who Is This Course For?
            </h2>
            <p className="font-body text-sm md:text-base text-muted-foreground leading-relaxed mb-10 text-center max-w-2xl mx-auto">
              This course is for anyone carrying the weight of baby loss who
              wants practical, compassionate support — right now.
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                "Parents who have experienced miscarriage",
                "Parents who have experienced stillbirth",
                "Those navigating pregnancy after loss",
                "Partners and family members affected by baby loss",
                "Anyone who feels their grief is misunderstood or unseen",
                "Those looking for support alongside or instead of one-to-one therapy",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3 bg-card rounded-lg p-5 border border-border/40"
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    aria-hidden="true"
                    className="shrink-0 mt-0.5 text-primary"
                  >
                    <path
                      d="M13.5 4.5L6.5 11.5L3 8"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <p className="font-body text-sm text-foreground leading-relaxed">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What you'll walk away with */}
      <section className="py-20 md:py-28 bg-secondary">
        <div className="mx-auto max-w-6xl px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-heading text-3xl md:text-4xl text-foreground leading-tight mb-12">
              What You&apos;ll Walk Away With
            </h2>
            <div className="grid sm:grid-cols-3 gap-8">
              {[
                {
                  title: "Practical Tools",
                  text: "Real strategies for managing grief and anxiety day to day — not vague advice, but things that actually help.",
                },
                {
                  title: "Deep Understanding",
                  text: "A deeper understanding of your grief, why it shows up the way it does, and why you're not \"broken\" for feeling this way.",
                },
                {
                  title: "Feeling Seen",
                  text: "The experience of being truly understood — created by someone who has lived this loss and supports others through it every day.",
                },
              ].map((item) => (
                <div key={item.title} className="p-6">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-5">
                    <div className="h-3 w-3 rounded-full bg-primary" />
                  </div>
                  <h3 className="font-heading text-xl text-foreground mb-3">
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

      {/* Why this course — from Roisin */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <div className="max-w-2xl mx-auto">
            <div className="bg-card rounded-lg p-8 md:p-12 border border-border/40 text-center">
              <div className="w-12 h-px bg-accent mx-auto mb-8" />
              <blockquote className="font-heading text-xl md:text-2xl text-foreground leading-relaxed text-balance mb-6">
                &ldquo;I created this course because I remember searching for
                support after my loss and finding nothing that truly understood
                what I was going through. I wanted to create something
                different — something that meets you exactly where you are, with
                compassion, honesty and real, practical help.&rdquo;
              </blockquote>
              <p className="font-body text-sm text-primary font-medium">
                — Roisin Nicholson, MBACP (Accred)
              </p>
              <div className="w-12 h-px bg-accent mx-auto mt-8" />
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA — high-converting */}
      <section className="py-24 md:py-32 bg-primary relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-white/[0.03] -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-72 h-72 rounded-full bg-white/[0.03] translate-y-1/2 -translate-x-1/2" />

        <div className="relative mx-auto max-w-6xl px-6">
          <div className="max-w-2xl mx-auto text-center">
            <p className="font-body text-xs tracking-[0.2em] text-white/60 uppercase mb-4">
              Don&apos;t wait any longer
            </p>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-white leading-tight text-balance mb-6">
              Your Grief Deserves Support — Starting Today
            </h2>
            <p className="font-body text-base md:text-lg text-white/80 leading-relaxed mb-4 max-w-lg mx-auto">
              You&apos;ve already been carrying this alone for long enough. This
              course gives you the tools, understanding and compassion you need
              to start feeling supported — at your own pace, in your own time.
            </p>
            <p className="font-body text-sm text-white/60 leading-relaxed mb-10 max-w-md mx-auto">
              No waiting lists. No referrals needed. Just immediate access to
              support created by someone who truly understands.
            </p>

            <a
              href={siteConfig.griefCourse}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-sm bg-white px-12 py-5 font-body text-base font-semibold text-[#3B3329] hover:bg-white/90 transition-all duration-200 hover:shadow-2xl hover:scale-[1.02]"
            >
              Join the Grief Support Course
            </a>

            <p className="font-body text-xs text-white/40 mt-6">
              Immediate access &middot; Go at your own pace &middot; Created
              with compassion
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
