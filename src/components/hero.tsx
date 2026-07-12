import { motion } from "motion/react"
import { BriefcaseBusiness, GraduationCap } from "lucide-react"

import avatar from "@/assets/avatar.webp"
import { Badge } from "@/components/ui/badge"
import { SocialLinks } from "@/components/social-links"

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.15 },
  },
}

const item = {
  hidden: { opacity: 0, y: 16, filter: "blur(6px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const },
  },
}

export function Hero() {
  return (
    <motion.section
      variants={container}
      initial="hidden"
      animate="visible"
      className="mx-auto flex sm:min-h-[min(75svh,680px)] max-w-3xl flex-col items-start justify-center px-6 py-12 pt-30 text-left sm:items-center sm:text-center"
    >
      <motion.h1
        variants={item}
        className="flex flex-wrap items-center justify-start gap-x-4 gap-y-3 text-4xl font-semibold tracking-tight text-balance sm:text-5xl sm:text-6xl"
      >
        <span>Hey, I'm Advaith.</span>
        <motion.img
          variants={item}
          src={avatar}
          alt="Advaith"
          width={96}
          height={96}
          draggable={false}
          drag
          dragSnapToOrigin
          dragElastic={0.5}
          dragMomentum={false}
          whileHover={{ scale: 1.05, rotate: -2 }}
          whileDrag={{ scale: 1.12, cursor: "grabbing" }}
          className="inline-block size-20 cursor-grab touch-none rounded-2xl object-cover shadow-sm ring-1 ring-border select-none active:cursor-grabbing sm:size-24 sm:rounded-3xl"
        />
      </motion.h1>

      <motion.p
        variants={item}
        className="mt-6 max-w-xl text-lg text-muted-foreground leading-relaxed sm:text-xl"
      >
        Compulsive Product Builder. <br /> Ex-Quizzer. Cinephile.
      </motion.p>

      <motion.div
        variants={item}
        className="mt-5 flex flex-wrap items-center justify-start gap-2 sm:justify-center"
      >
        <Badge
          variant="outline"
          className="gap-1.5 text-sm rounded-full bg-rose-50 text-rose-700 dark:bg-rose-950 dark:text-rose-300"
        >
          <BriefcaseBusiness className="size-6" aria-hidden />
          Media.net
        </Badge>
        <Badge
          variant="outline"
          className="gap-1.5 text-sm rounded-full bg-blue-50 text-blue-700 dark:bg-blue-950 dark:text-blue-300"
        >
          <GraduationCap className="size-6" aria-hidden />
          IIT Guwahati
        </Badge>
      </motion.div>

      <motion.div variants={item} className="mt-8">
        <SocialLinks />
      </motion.div>
    </motion.section>
  )
}
