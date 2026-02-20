import Link from "next/link"

export default function NotFound() {
  return (
    <section className="min-h-[70vh] flex items-center justify-center pt-28">
      <div className="mx-auto max-w-xl px-6 text-center">
        <div className="w-12 h-px bg-accent mx-auto mb-8" />
        <h1 className="font-heading text-4xl md:text-5xl text-foreground leading-tight mb-6">
          Page Not Found
        </h1>
        <p className="font-body text-base text-muted-foreground leading-relaxed mb-10 max-w-md mx-auto">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
          Let me help you find your way.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-sm bg-primary px-8 py-3.5 font-body text-sm font-medium text-primary-foreground hover:bg-primary-dark transition-all duration-200 hover:shadow-md"
          >
            Back to Home
          </Link>
          <Link
            href="/about"
            className="inline-flex items-center justify-center rounded-sm border border-border bg-card/50 px-8 py-3.5 font-body text-sm text-foreground hover:bg-card transition-all duration-200"
          >
            About Roisin
          </Link>
        </div>
        <div className="w-12 h-px bg-accent mx-auto mt-12" />
      </div>
    </section>
  )
}
