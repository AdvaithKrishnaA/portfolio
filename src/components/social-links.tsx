import type { ReactNode } from "react"
import { motion } from "motion/react"
import { ArrowUpRight, CalendarDays, Mail } from "lucide-react"

import { EMAIL } from "@/data"

type Social = {
  label: string
  href: string
  /** When set, the pill shows this icon instead of the label text. */
  icon?: ReactNode
}

const socials: Social[] = [
  {
    label: "Book a call",
    href: "https://cal.com/meetadvaith/secret",
    icon: <CalendarDays className="size-4" />,
  },
  {
    label: "Email me",
    href: `mailto:${EMAIL}`,
    icon: <Mail className="size-4" />,
  },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/advaithkrishnaa" },
  { label: "Letterboxd", href: "https://letterboxd.com/meetadvaith/" },
]

export function SocialLinks() {
  return (
    <div className="flex flex-wrap items-center justify-start gap-2 md:justify-center">
      {socials.map((social) => (
        <motion.a
          key={social.label}
          href={social.href}
          {...(social.href.startsWith("mailto:")
            ? {}
            : { target: "_blank", rel: "noopener noreferrer" })}
          aria-label={social.label}
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.96 }}
          transition={{ type: "spring", stiffness: 400, damping: 20 }}
          className="group inline-flex items-center gap-1 rounded-full bg-muted px-3 py-1.5 text-sm text-muted-foreground transition-colors hover:bg-foreground hover:text-background focus-visible:ring-2 focus-visible:ring-ring/40 focus-visible:outline-none"
        >
          {social.icon ?? (
            <>
              <span>{social.label}</span>
              <ArrowUpRight className="size-3.5 opacity-50 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100" />
            </>
          )}
        </motion.a>
      ))}
    </div>
  )
}
