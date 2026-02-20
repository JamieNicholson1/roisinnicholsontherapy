import type { Metadata } from "next"
import { siteConfig } from "@/lib/constants"

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description:
    "Terms & Conditions for Roisin Nicholson Therapy, including therapy services, the Grief Support Course, and use of this website.",
}

export default function TermsConditionsPage() {
  return (
    <>
      <section className="pt-36 pb-16 md:pt-44 md:pb-20">
        <div className="mx-auto max-w-3xl px-6">
          <p className="font-body text-xs tracking-[0.2em] text-primary uppercase mb-4">
            Legal
          </p>
          <h1 className="font-heading text-4xl md:text-5xl text-foreground leading-tight mb-6">
            Terms &amp; Conditions
          </h1>
          <p className="font-body text-sm text-muted-foreground">
            Last updated: February 2026
          </p>
        </div>
      </section>

      <section className="pb-24 md:pb-32">
        <div className="mx-auto max-w-3xl px-6">
          <div className="space-y-10">
            {/* Introduction */}
            <div>
              <h2 className="font-heading text-2xl text-foreground mb-4">
                1. Introduction
              </h2>
              <div className="space-y-4">
                <p className="font-body text-sm text-muted-foreground leading-relaxed">
                  These Terms &amp; Conditions govern your use of the Roisin
                  Nicholson Therapy website ({siteConfig.url}), therapy services,
                  and the &ldquo;Life After Baby Loss: A Safe Space to
                  Land&rdquo; grief support course. By accessing our website or
                  using our services, you agree to be bound by these terms.
                </p>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">
                  All services are provided under the laws of England and Wales.
                </p>
              </div>
            </div>

            {/* ===== PART A: WEBSITE TERMS ===== */}
            <div className="border-t border-border/40 pt-10">
              <p className="font-body text-xs tracking-[0.2em] text-primary uppercase mb-6">
                Part A &mdash; Website Terms of Use
              </p>

              <div className="space-y-8">
                <div>
                  <h2 className="font-heading text-2xl text-foreground mb-4">
                    2. Use of This Website
                  </h2>
                  <div className="space-y-4">
                    <p className="font-body text-sm text-muted-foreground leading-relaxed">
                      This website is provided for informational purposes and to
                      facilitate access to our therapy services and grief support
                      course. You agree to use the website lawfully and not to:
                    </p>
                    <ul className="space-y-2 ml-4">
                      {[
                        "Use the website in any way that breaches applicable laws or regulations",
                        "Reproduce, duplicate or copy any content without written permission",
                        "Transmit any data or material that is harmful, threatening or abusive",
                        "Attempt to gain unauthorised access to any part of the website",
                      ].map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-3 font-body text-sm text-muted-foreground leading-relaxed"
                        >
                          <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div>
                  <h2 className="font-heading text-2xl text-foreground mb-4">
                    3. Intellectual Property
                  </h2>
                  <p className="font-body text-sm text-muted-foreground leading-relaxed">
                    All content on this website — including text, images, design,
                    logos and course materials — is the intellectual property of
                    Roisin Nicholson Therapy unless otherwise stated. You may not
                    reproduce, distribute or use any content without prior
                    written consent.
                  </p>
                </div>

                <div>
                  <h2 className="font-heading text-2xl text-foreground mb-4">
                    4. Disclaimer
                  </h2>
                  <div className="space-y-4">
                    <p className="font-body text-sm text-muted-foreground leading-relaxed">
                      The information on this website is provided for general
                      informational purposes only. It does not constitute medical
                      advice, diagnosis, crisis support or emergency services.
                    </p>
                    <div className="bg-accent/10 rounded-lg p-5 border border-accent/20">
                      <p className="font-body text-sm text-foreground leading-relaxed">
                        <strong>Important:</strong> If you are in immediate
                        danger or experiencing a mental health crisis, please
                        contact local emergency services (999) or a crisis
                        helpline such as Samaritans (116 123) without delay.
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <h2 className="font-heading text-2xl text-foreground mb-4">
                    5. External Links
                  </h2>
                  <p className="font-body text-sm text-muted-foreground leading-relaxed">
                    This website may contain links to external websites. We are
                    not responsible for the content, privacy practices or
                    availability of third-party sites. Linking to an external
                    site does not imply endorsement.
                  </p>
                </div>
              </div>
            </div>

            {/* ===== PART B: THERAPY SERVICES ===== */}
            <div className="border-t border-border/40 pt-10">
              <p className="font-body text-xs tracking-[0.2em] text-primary uppercase mb-6">
                Part B &mdash; Therapy Services
              </p>

              <div className="space-y-8">
                <div>
                  <h2 className="font-heading text-2xl text-foreground mb-4">
                    6. Therapy Services
                  </h2>
                  <div className="space-y-4">
                    <p className="font-body text-sm text-muted-foreground leading-relaxed">
                      Roisin Nicholson is a BACP Accredited person-centred
                      psychotherapist. Therapy sessions are provided online via
                      secure video. By engaging in therapy, you acknowledge the
                      following:
                    </p>
                    <ul className="space-y-2 ml-4">
                      {[
                        "All sessions are online only — no face-to-face appointments are available",
                        "Sessions are 60 minutes in duration",
                        "Therapy is not a substitute for medical or psychiatric care",
                        "Roisin is unable to work with clients based in the USA or Canada due to licensing requirements",
                        "This service does not provide crisis or emergency support",
                      ].map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-3 font-body text-sm text-muted-foreground leading-relaxed"
                        >
                          <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div>
                  <h2 className="font-heading text-2xl text-foreground mb-4">
                    7. Confidentiality
                  </h2>
                  <div className="space-y-4">
                    <p className="font-body text-sm text-muted-foreground leading-relaxed">
                      Everything discussed in therapy is confidential and held in
                      accordance with the BACP Ethical Framework. Confidentiality
                      may only be broken in exceptional circumstances, including:
                    </p>
                    <ul className="space-y-2 ml-4">
                      {[
                        "Where there is a serious risk of harm to yourself or others",
                        "Where there is a safeguarding concern involving a child or vulnerable adult",
                        "Where disclosure is required by law (e.g. terrorism, drug trafficking, money laundering)",
                      ].map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-3 font-body text-sm text-muted-foreground leading-relaxed"
                        >
                          <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                    <p className="font-body text-sm text-muted-foreground leading-relaxed">
                      Where possible, any breach of confidentiality will be
                      discussed with you first.
                    </p>
                  </div>
                </div>

                <div>
                  <h2 className="font-heading text-2xl text-foreground mb-4">
                    8. Fees &amp; Payment
                  </h2>
                  <div className="space-y-4">
                    <p className="font-body text-sm text-muted-foreground leading-relaxed">
                      Individual therapy sessions are &pound;80 per 60-minute
                      session. Payment is made in advance via bank transfer.
                      Payment details will be shared once we agree to work
                      together. All prices are in GBP (&pound;).
                    </p>
                    <p className="font-body text-sm text-muted-foreground leading-relaxed">
                      Fees may be reviewed periodically. You will be given
                      reasonable notice of any changes.
                    </p>
                  </div>
                </div>

                <div>
                  <h2 className="font-heading text-2xl text-foreground mb-4">
                    9. Cancellation Policy
                  </h2>
                  <div className="space-y-4">
                    <p className="font-body text-sm text-muted-foreground leading-relaxed">
                      We understand that life after loss can be unpredictable. If
                      you need to cancel or reschedule a session, please give at
                      least 24&nbsp;hours&apos; notice where possible.
                    </p>
                    <p className="font-body text-sm text-muted-foreground leading-relaxed">
                      Late cancellations (less than 24 hours) or missed sessions
                      may be charged at the full session rate. This policy is
                      always applied with compassion and individual circumstances
                      will be considered.
                    </p>
                  </div>
                </div>

                <div>
                  <h2 className="font-heading text-2xl text-foreground mb-4">
                    10. Ending Therapy
                  </h2>
                  <p className="font-body text-sm text-muted-foreground leading-relaxed">
                    You are free to end therapy at any time. Where possible, we
                    encourage a planned ending session to provide closure.
                    Roisin may also suggest ending therapy or referring you to
                    another professional if it is in your best interest.
                  </p>
                </div>

                <div>
                  <h2 className="font-heading text-2xl text-foreground mb-4">
                    11. Complaints
                  </h2>
                  <div className="space-y-4">
                    <p className="font-body text-sm text-muted-foreground leading-relaxed">
                      If you have a concern about the therapy service, please
                      raise it with Roisin directly at{" "}
                      <a
                        href={`mailto:${siteConfig.email}`}
                        className="text-primary underline underline-offset-2"
                      >
                        {siteConfig.email}
                      </a>
                      . If the matter cannot be resolved, you have the right to
                      contact BACP:
                    </p>
                    <div className="bg-secondary rounded-lg p-5 border border-border/40">
                      <p className="font-body text-sm text-foreground leading-relaxed">
                        <strong>
                          British Association for Counselling and Psychotherapy
                        </strong>
                        <br />
                        Website:{" "}
                        <a
                          href="https://www.bacp.co.uk"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary underline underline-offset-2"
                        >
                          bacp.co.uk
                        </a>
                        <br />
                        Phone: 01455 883 300
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* ===== PART C: GRIEF SUPPORT COURSE ===== */}
            <div className="border-t border-border/40 pt-10">
              <p className="font-body text-xs tracking-[0.2em] text-primary uppercase mb-6">
                Part C &mdash; Grief Support Course
              </p>

              <div className="space-y-8">
                <div>
                  <h2 className="font-heading text-2xl text-foreground mb-4">
                    12. Course Disclaimer &mdash; Educational Content Only
                  </h2>
                  <div className="space-y-4">
                    <p className="font-body text-sm text-muted-foreground leading-relaxed">
                      &ldquo;Life After Baby Loss: A Safe Space to Land&rdquo;
                      is an educational course designed to provide information,
                      tools and support for individuals navigating baby loss
                      grief. This course is <strong>not</strong> a substitute for
                      professional mental health treatment, medical care or
                      therapy.
                    </p>

                    <h3 className="font-heading text-lg text-foreground mt-6 mb-2">
                      What this course is:
                    </h3>
                    <ul className="space-y-2 ml-4">
                      {[
                        "Educational content about grief and trauma responses",
                        "Self-help tools and coping strategies",
                        "Guided meditations and mindfulness practices",
                        "Personal insights from lived experience",
                        "Information to help you better understand your grief journey",
                      ].map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-3 font-body text-sm text-muted-foreground leading-relaxed"
                        >
                          <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>

                    <h3 className="font-heading text-lg text-foreground mt-6 mb-2">
                      What this course is not:
                    </h3>
                    <ul className="space-y-2 ml-4">
                      {[
                        "Professional therapy or counselling sessions",
                        "Medical advice or treatment",
                        "Crisis intervention services",
                        "A substitute for professional mental health care",
                        "Individual clinical assessment or diagnosis",
                        "Emergency mental health support",
                      ].map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-3 font-body text-sm text-muted-foreground leading-relaxed"
                        >
                          <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div>
                  <h2 className="font-heading text-2xl text-foreground mb-4">
                    13. Professional Background
                  </h2>
                  <p className="font-body text-sm text-muted-foreground leading-relaxed">
                    Roisin is an accredited counsellor with professional training
                    in baby loss and pregnancy-after-loss support. However, this
                    course represents educational content and peer support based
                    on professional knowledge and lived experience, not
                    individual therapeutic treatment. Roisin&apos;s role in this
                    course is as an educator and guide, not as your therapist.
                    Participation in this course does not establish a therapeutic
                    relationship or client-counsellor contract.
                  </p>
                </div>

                <div>
                  <h2 className="font-heading text-2xl text-foreground mb-4">
                    14. When to Seek Professional Help
                  </h2>
                  <div className="space-y-4">
                    <p className="font-body text-sm text-muted-foreground leading-relaxed">
                      If you are in immediate danger or experiencing a mental
                      health crisis, please contact your local emergency
                      services before continuing with this course. Please seek
                      immediate professional support if you experience:
                    </p>
                    <ul className="space-y-2 ml-4">
                      {[
                        "Thoughts of harming others, self-harm or suicide",
                        "Severe depression that interferes with daily functioning",
                        "Panic attacks or severe anxiety",
                        "Substance abuse as a coping mechanism",
                        "Inability to care for yourself or others",
                        "Persistent sleep disturbances or loss of appetite",
                        "Social isolation lasting more than several weeks",
                        "Any mental health symptoms that feel worrying or unmanageable",
                      ].map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-3 font-body text-sm text-muted-foreground leading-relaxed"
                        >
                          <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>

                    <div className="bg-accent/10 rounded-lg p-5 border border-accent/20">
                      <h3 className="font-heading text-lg text-foreground mb-3">
                        Immediate Crisis Support (24/7)
                      </h3>
                      <div className="grid sm:grid-cols-2 gap-4">
                        {[
                          {
                            region: "United Kingdom",
                            lines: [
                              "Samaritans: 116 123",
                              "Crisis Text Line: Text HELLO to 741741",
                              "Emergency: 999",
                            ],
                          },
                          {
                            region: "Ireland",
                            lines: [
                              "Samaritans: 116 123",
                              "Pieta House: 1800 247 247",
                              "Emergency: 999 or 112",
                            ],
                          },
                          {
                            region: "Australia",
                            lines: [
                              "Lifeline: 13 11 14",
                              "Emergency: 000",
                            ],
                          },
                          {
                            region: "New Zealand",
                            lines: [
                              "Lifeline: 0800 543 354",
                              "Need to Talk?: 1737",
                              "Emergency: 111",
                            ],
                          },
                        ].map((item) => (
                          <div key={item.region}>
                            <p className="font-body text-sm text-foreground font-medium mb-1">
                              {item.region}
                            </p>
                            {item.lines.map((line) => (
                              <p
                                key={line}
                                className="font-body text-xs text-muted-foreground leading-relaxed"
                              >
                                {line}
                              </p>
                            ))}
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="bg-secondary rounded-lg p-5 border border-border/40">
                      <h3 className="font-heading text-lg text-foreground mb-3">
                        Specialised Baby Loss Support (UK)
                      </h3>
                      <div className="space-y-1">
                        {[
                          "Sands Baby Loss Helpline: 0808 164 3332",
                          "Tommy's Midwives: 0800 0147 800",
                          "The Miscarriage Association: 01924 200 799",
                          "Bliss (premature baby support): 0808 801 0322",
                        ].map((line) => (
                          <p
                            key={line}
                            className="font-body text-sm text-muted-foreground leading-relaxed"
                          >
                            {line}
                          </p>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h2 className="font-heading text-2xl text-foreground mb-4">
                    15. Course Participation Agreement
                  </h2>
                  <div className="space-y-4">
                    <h3 className="font-heading text-lg text-foreground mb-2">
                      15.1 Personal Responsibility
                    </h3>
                    <ul className="space-y-2 ml-4">
                      {[
                        "You understand this course is educational and not therapeutic treatment",
                        "You are responsible for your own wellbeing during course participation",
                        "You will seek professional help if you experience any concerning symptoms",
                        "You will stop engaging with content if it becomes overwhelming or harmful",
                        "You agree not to share or distribute course materials publicly or for commercial purposes without written permission",
                      ].map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-3 font-body text-sm text-muted-foreground leading-relaxed"
                        >
                          <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>

                    <h3 className="font-heading text-lg text-foreground mt-6 mb-2">
                      15.2 No Guarantees
                    </h3>
                    <ul className="space-y-2 ml-4">
                      {[
                        "While this course provides valuable tools and information, there are no guarantees about specific outcomes",
                        "Your experience may differ from others — and that's completely normal",
                        "Grief is individual — what works for others may not work for you and vice versa",
                      ].map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-3 font-body text-sm text-muted-foreground leading-relaxed"
                        >
                          <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>

                    <h3 className="font-heading text-lg text-foreground mt-6 mb-2">
                      15.3 Use of Information
                    </h3>
                    <ul className="space-y-2 ml-4">
                      {[
                        "You will use the information provided responsibly and in accordance with your own needs",
                        "You understand that advice given is general in nature and not personalised therapeutic recommendations",
                        "You will not use course content as a substitute for professional medical or mental health advice",
                      ].map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-3 font-body text-sm text-muted-foreground leading-relaxed"
                        >
                          <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div>
                  <h2 className="font-heading text-2xl text-foreground mb-4">
                    16. Medical Disclaimer
                  </h2>
                  <p className="font-body text-sm text-muted-foreground leading-relaxed">
                    This course is not intended to diagnose, treat, cure or
                    prevent any medical or mental health condition. Always
                    consult with qualified healthcare professionals for medical
                    concerns, including mental health symptoms. If you are
                    currently in therapy, working with a doctor or medical
                    professional, or taking medication for mental health
                    conditions, please discuss your participation in this course
                    with your healthcare provider.
                  </p>
                </div>

                <div>
                  <h2 className="font-heading text-2xl text-foreground mb-4">
                    17. Limitation of Liability
                  </h2>
                  <div className="space-y-4">
                    <h3 className="font-heading text-lg text-foreground mb-2">
                      Course creator&apos;s responsibilities:
                    </h3>
                    <ul className="space-y-2 ml-4">
                      {[
                        "To provide educational content created with care and professional knowledge",
                        "To clearly communicate the educational (non-therapeutic) nature of the course",
                        "To provide crisis resources and guidance on when to seek professional help",
                        "To maintain appropriate boundaries as an educator rather than therapist",
                      ].map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-3 font-body text-sm text-muted-foreground leading-relaxed"
                        >
                          <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>

                    <h3 className="font-heading text-lg text-foreground mt-6 mb-2">
                      Course creator&apos;s limitations:
                    </h3>
                    <ul className="space-y-2 ml-4">
                      {[
                        "Cannot provide crisis intervention or emergency support",
                        "Cannot offer personalised therapeutic recommendations",
                        "Cannot guarantee specific outcomes or results",
                        "Cannot replace professional mental health care",
                      ].map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-3 font-body text-sm text-muted-foreground leading-relaxed"
                        >
                          <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>

                    <p className="font-body text-sm text-muted-foreground leading-relaxed">
                      By participating in this course, you acknowledge that you
                      understand these limitations and agree not to hold the
                      course creator liable for any adverse outcomes that may
                      occur. This limitation of liability applies to the fullest
                      extent permitted by law and shall survive completion or
                      termination of your access to the course.
                    </p>
                  </div>
                </div>

                <div>
                  <h2 className="font-heading text-2xl text-foreground mb-4">
                    18. Course Pacing &amp; Self-Care
                  </h2>
                  <ul className="space-y-2 ml-4">
                    {[
                      "You are encouraged to engage with course content at your own pace",
                      "You have permission to skip content that feels too overwhelming",
                      "You can pause or discontinue the course if needed for your wellbeing",
                      "All course materials remain accessible for lifetime learning",
                    ].map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-3 font-body text-sm text-muted-foreground leading-relaxed"
                      >
                        <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h2 className="font-heading text-2xl text-foreground mb-4">
                    19. Course Refund Policy
                  </h2>
                  <div className="space-y-4">
                    <p className="font-body text-sm text-muted-foreground leading-relaxed">
                      In compliance with UK consumer law, by purchasing digital
                      content with immediate access, you waive your 14-day right
                      to cancel under distance-selling regulations. Because this
                      is a self-paced digital course, you receive immediate
                      access to all materials upon purchase. For that reason, all
                      sales are final and non-refundable.
                    </p>
                    <p className="font-body text-sm text-muted-foreground leading-relaxed">
                      This policy helps protect the integrity of the course and
                      the time, care and professional experience that went into
                      creating it. If you experience any issues accessing
                      materials or feel uncertain about whether the course is
                      right for you, please reach out &mdash; we will always do
                      our best to ensure you receive the support and value you
                      need.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* ===== PART D: GENERAL ===== */}
            <div className="border-t border-border/40 pt-10">
              <p className="font-body text-xs tracking-[0.2em] text-primary uppercase mb-6">
                Part D &mdash; General Terms
              </p>

              <div className="space-y-8">
                <div>
                  <h2 className="font-heading text-2xl text-foreground mb-4">
                    20. Privacy &amp; Data Protection
                  </h2>
                  <p className="font-body text-sm text-muted-foreground leading-relaxed">
                    Your personal information will be handled in accordance with
                    UK GDPR and the Data Protection Act 2018, and will never be
                    shared with third parties without your consent except where
                    required by law. For full details, please refer to our{" "}
                    <a
                      href="/privacy-policy"
                      className="text-primary underline underline-offset-2"
                    >
                      Privacy Policy
                    </a>
                    .
                  </p>
                </div>

                <div>
                  <h2 className="font-heading text-2xl text-foreground mb-4">
                    21. Limitation of Liability (General)
                  </h2>
                  <div className="space-y-4">
                    <p className="font-body text-sm text-muted-foreground leading-relaxed">
                      To the fullest extent permitted by law, Roisin Nicholson
                      Therapy shall not be liable for any indirect, incidental,
                      special or consequential damages arising from the use of
                      this website, therapy services or the grief support course.
                    </p>
                    <p className="font-body text-sm text-muted-foreground leading-relaxed">
                      Nothing in these terms excludes or limits liability for
                      death or personal injury caused by negligence, fraud or
                      fraudulent misrepresentation, or any other liability that
                      cannot be excluded by law.
                    </p>
                  </div>
                </div>

                <div>
                  <h2 className="font-heading text-2xl text-foreground mb-4">
                    22. Changes to These Terms
                  </h2>
                  <p className="font-body text-sm text-muted-foreground leading-relaxed">
                    We may update these Terms &amp; Conditions from time to time.
                    Any changes will be posted on this page with an updated
                    &ldquo;last updated&rdquo; date. Significant changes will be
                    communicated to affected clients. Continued use of our
                    website or services following any changes constitutes
                    acceptance of the revised terms.
                  </p>
                </div>

                <div>
                  <h2 className="font-heading text-2xl text-foreground mb-4">
                    23. Governing Law
                  </h2>
                  <p className="font-body text-sm text-muted-foreground leading-relaxed">
                    These Terms &amp; Conditions are governed by and construed in
                    accordance with the laws of England and Wales. Any disputes
                    arising from these terms shall be subject to the exclusive
                    jurisdiction of the courts of England and Wales.
                  </p>
                </div>

                <div>
                  <h2 className="font-heading text-2xl text-foreground mb-4">
                    24. Contact
                  </h2>
                  <p className="font-body text-sm text-muted-foreground leading-relaxed">
                    If you have any questions about these Terms &amp; Conditions,
                    please contact us at{" "}
                    <a
                      href={`mailto:${siteConfig.email}`}
                      className="text-primary underline underline-offset-2"
                    >
                      {siteConfig.email}
                    </a>
                    .
                  </p>
                </div>
              </div>
            </div>

            {/* Final Note */}
            <div className="border-t border-border/40 pt-10">
              <div className="bg-secondary rounded-lg p-6 border border-border/40">
                <p className="font-body text-sm text-muted-foreground leading-relaxed italic">
                  Remember: seeking professional help is a sign of strength, not
                  weakness. You deserve comprehensive support. If you need help
                  finding a qualified therapist specialising in baby loss, please
                  contact Roisin directly.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
