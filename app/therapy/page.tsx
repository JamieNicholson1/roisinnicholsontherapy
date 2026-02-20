import type { Metadata } from "next"
import Image from "next/image"
import { CTASection } from "@/components/cta-section"

export const metadata: Metadata = {
  title: "Therapy",
  description:
    "Online therapy for baby loss, miscarriage, stillbirth, and pregnancy after loss. Person-centred psychotherapy with practical tools for grief, anxiety and trauma.",
}

export default function TherapyPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-36 pb-16 md:pt-44 md:pb-20 bg-secondary">
        <div className="mx-auto max-w-6xl px-6">
          <div className="max-w-3xl">
            <p className="font-body text-xs tracking-[0.2em] text-primary uppercase mb-4">
              Therapy Services
            </p>
            <h1 className="font-heading text-4xl md:text-5xl text-foreground leading-tight mb-6">
              Therapy That Understands Your Loss
            </h1>
            <p className="font-body text-lg text-muted-foreground leading-relaxed">
              As someone who has experienced the devastating loss of a baby, I
              know that grief after baby loss is unlike anything else. I offer
              compassionate, experienced support for your unique journey.
            </p>
          </div>
        </div>
      </section>

      {/* Understanding You */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-heading text-3xl md:text-4xl text-foreground leading-tight mb-8">
              I Understand What You&apos;re Going Through
            </h2>
            <div className="space-y-5 mb-10">
              <p className="font-body text-sm md:text-base text-muted-foreground leading-relaxed">
                Whether your baby was stillborn, you experienced a miscarriage,
                or you&apos;re now pregnant again after loss — I see you. I know
                what it&apos;s like to love a baby that others may not have got
                to meet.
              </p>
              <p className="font-body text-sm md:text-base text-muted-foreground leading-relaxed">
                I understand the pregnancy anxiety, the fear that builds before
                every scan, the way your body tenses in waiting rooms, and the
                dread of every question — especially &ldquo;Is this your
                first?&rdquo;
              </p>
            </div>

            {/* What I understand list */}
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                "Loving a baby others may not have got to meet",
                "Feeling forgotten when the world moves on",
                "Fear bonding with another pregnancy",
                "The trauma of scan rooms and medical appointments",
                "Intrusive thoughts that ambush ordinary moments",
                "Guilt that resurfaces when you least expect it",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3 bg-secondary rounded-lg p-4"
                >
                  <span className="mt-1.5 h-2 w-2 rounded-full bg-primary shrink-0" />
                  <p className="font-body text-sm text-foreground leading-relaxed">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How I Help */}
      <section className="py-20 md:py-28 bg-secondary">
        <div className="mx-auto max-w-6xl px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-heading text-3xl md:text-4xl text-foreground leading-tight mb-8 text-center">
              How I Can Help
            </h2>
            <div className="space-y-4">
              {[
                {
                  title: "Process Previous Grief and Loss",
                  text: "A safe, compassionate space to explore your grief at your own pace, without judgement or pressure to \"move on.\"",
                },
                {
                  title: "Develop Practical Tools for Anxiety & Trauma",
                  text: "Grounding techniques, breathwork, and strategies to manage the waves of anxiety and trauma responses.",
                },
                {
                  title: "Learn to Advocate at Medical Appointments",
                  text: "Build confidence to communicate your needs and set boundaries in medical settings that may feel triggering.",
                },
                {
                  title: "Connect With Your Current Pregnancy While Honouring Loss",
                  text: "Tender support for bonding with your new baby while making space for the baby you lost.",
                },
                {
                  title: "Build Self-Compassion",
                  text: "Learn to be gentle with yourself through the complicated emotions of grief, hope, guilt and joy.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="bg-card rounded-lg p-6 md:p-8 border border-border/40"
                >
                  <h3 className="font-heading text-xl text-foreground mb-2">
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

      {/* FAQ-style sections */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-heading text-3xl md:text-4xl text-foreground leading-tight mb-12 text-center">
              You Might Be Wondering&hellip;
            </h2>
            <div className="space-y-8">
              {[
                {
                  question: "Can therapy really help with baby loss?",
                  answer:
                    "Yes. Therapy won't take away your grief — nothing can — but it can help you carry it in a way that feels more manageable. It can give you tools to navigate the hard days, process traumatic experiences, and find moments of peace alongside your pain.",
                },
                {
                  question: "I'm worried talking about it will make it worse",
                  answer:
                    "This is one of the most common concerns, and it's completely understandable. Therapy is done at your pace. You share only what you're ready to share. Many clients find that having a safe space to talk actually brings relief — it's often the silence and isolation that makes things harder.",
                },
                {
                  question: "How do I know if I'm ready for therapy?",
                  answer:
                    "There's no perfect time. If you're reading this page and something resonates, that's often a good indicator. You don't need to have it all figured out or even know what you want to talk about. That's what I'm here for.",
                },
                {
                  question: "What if we're not the right fit?",
                  answer:
                    "The therapeutic relationship matters. If after our first session you feel it's not quite right, that's completely okay. I'll always support you in finding the right therapist for your needs.",
                },
              ].map((item) => (
                <div
                  key={item.question}
                  className="border-b border-border/40 pb-8 last:border-0"
                >
                  <h3 className="font-heading text-xl md:text-2xl text-foreground mb-4">
                    &ldquo;{item.question}&rdquo;
                  </h3>
                  <p className="font-body text-sm md:text-base text-muted-foreground leading-relaxed">
                    {item.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* About Online Therapy */}
      <section className="py-20 md:py-28 bg-secondary">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center max-w-6xl mx-auto">
            {/* Image */}
            <div className="relative rounded-lg overflow-hidden aspect-square shadow-lg">
              <Image
                src="/images/roisin-therapy.jpg"
                alt="Roisin in her online therapy setting — comfortable, approachable and ready to listen"
                fill
                className="object-cover"
              />
            </div>

            {/* Text */}
            <div>
              <h2 className="font-heading text-3xl md:text-4xl text-foreground leading-tight mb-8">
                About Online Therapy
              </h2>
              <div className="space-y-5">
                <p className="font-body text-sm md:text-base text-muted-foreground leading-relaxed">
                  All my sessions are held online via secure video. For many of
                  my clients, this is actually preferred — you can have your
                  session from the comfort of your own safe space, wrapped in a
                  blanket on your sofa if that&apos;s what feels right.
                </p>
                <p className="font-body text-sm md:text-base text-muted-foreground leading-relaxed">
                  Medical settings can be deeply triggering after baby loss. Not
                  having to sit in a clinical waiting room before your therapy
                  session can make a real difference to how you feel.
                </p>
                <p className="font-body text-sm md:text-base text-muted-foreground leading-relaxed">
                  All you need is a quiet spot where you feel safe to talk
                  openly. And if the dog barks or life happens — that&apos;s
                  okay too. This is a real, human space.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        heading="Interested in Working Together?"
        description="The waitlist is now open. Pop your email in below and I'll be in touch as soon as a space becomes available."
      />
    </>
  )
}
