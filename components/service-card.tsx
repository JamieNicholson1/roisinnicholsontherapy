import Link from "next/link"
import { ArrowRightIcon } from "@/components/icons"

interface ServiceCardProps {
  title: string
  description: string
  href: string
  icon: React.ReactNode
}

export function ServiceCard({ title, description, href, icon }: ServiceCardProps) {
  return (
    <Link
      href={href}
      className="group block rounded-lg overflow-hidden bg-card border border-border/40 hover:border-primary/30 transition-all duration-300 hover:shadow-lg p-8 md:p-10"
    >
      <div className="mb-5 text-primary">{icon}</div>
      <h3 className="font-heading text-2xl text-foreground mb-3 group-hover:text-primary transition-colors duration-200">
        {title}
      </h3>
      <p className="font-body text-sm text-muted-foreground leading-relaxed mb-6">
        {description}
      </p>
      <span className="inline-flex items-center gap-2 font-body text-sm text-primary font-medium">
        Learn more
        <ArrowRightIcon className="transition-transform duration-200 group-hover:translate-x-1" />
      </span>
    </Link>
  )
}
