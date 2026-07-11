import { useEffect, useRef, useState } from "react"
import {
  motion,
  LayoutGroup,
  useScroll,
  useMotionValueEvent,
} from "motion/react"

import { ArrowDown } from "lucide-react"
import { Link } from "react-router"

import { PROJECTS, type Project } from "@/data"
import { Button } from "@/components/ui/button"

const STACK = PROJECTS.slice(0, 5)
const FRONT = 1 // the second card leads the stack
const CARD_W = 360
const CARD_H = 216
const PEEK = 56 // horizontal reveal (px) between stacked cards
const LIFT = 20 // vertical rise (px) of the leading card

const spring = { type: "spring" as const, stiffness: 300, damping: 30 }

const entrance = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
}

const entranceItem = {
  hidden: { opacity: 0, y: 16, filter: "blur(6px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const },
  },
}

function CardLink({
  project,
  children,
}: {
  project: Project
  children: React.ReactNode
}) {
  if (!project.link) return <>{children}</>
  if (project.link.startsWith("/")) {
    return (
      <Link to={project.link} className="block h-full w-full">
        {children}
      </Link>
    )
  }
  if (project.link.startsWith("mailto:")) {
    return (
      <a href={project.link} className="block h-full w-full">
        {children}
      </a>
    )
  }
  return (
    <a
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      className="block h-full w-full"
    >
      {children}
    </a>
  )
}

function ProjectCard({
  project,
  expanded,
}: {
  project: Project
  expanded: boolean
}) {
  if (expanded) {
    return (
      <div className="flex h-full w-full flex-col overflow-hidden rounded-2xl border bg-card shadow-sm">
        <div className="aspect-video w-full overflow-hidden bg-muted">
          <img
            src={project.image}
            alt={project.name}
            draggable={false}
            className="h-full w-full object-cover"
          />
        </div>
        <div className="flex flex-col gap-1 p-4">
          <h3 className="text-sm font-medium">{project.name}</h3>
          <p className="line-clamp-2 text-xs text-muted-foreground">
            {project.description}
          </p>
        </div>
      </div>
    )
  }

  return (
    <div className="relative h-full w-full overflow-hidden rounded-2xl border bg-card shadow-xl ring-1 ring-black/5">
      <img
        src={project.image}
        alt={project.name}
        draggable={false}
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/75 via-black/25 to-transparent p-3 pt-10">
        <h3 className="text-sm font-medium text-white">{project.name}</h3>
      </div>
    </div>
  )
}

export function ProjectsSection() {
  // Mobile skips the stack animation entirely and renders the grid directly.
  const [expanded, setExpanded] = useState(
    () => window.matchMedia("(max-width: 639px)").matches,
  )

  // One-way morph: expand once the heading rises to 65% of the viewport,
  // and never revert. If the page loads already past that point (very tall
  // screens with nothing to scroll), expand immediately.
  const sentinelRef = useRef<HTMLHeadingElement>(null)
  const { scrollYProgress } = useScroll({
    target: sentinelRef,
    offset: ["start end", "start 0.65"],
  })
  useMotionValueEvent(scrollYProgress, "change", (v) => {
    if (v >= 1) setExpanded(true)
  })
  useEffect(() => {
    const scrollRoom =
      document.documentElement.scrollHeight - window.innerHeight
    if (scrollYProgress.get() >= 1 || scrollRoom < 200) setExpanded(true)
  }, [scrollYProgress])

  const stackWidth = CARD_W + (STACK.length - 1) * PEEK

  return (
    <motion.section
      id="projects"
      variants={entrance}
      initial="hidden"
      animate="visible"
      className="mx-auto w-full max-w-5xl px-6 pt-6 pb-24"
    >
      <motion.div
        variants={entranceItem}
        className="mb-8 flex items-center justify-start gap-3 sm:justify-center"
      >
        <h2
          ref={sentinelRef}
          className="scroll-mt-24 text-2xl font-semibold tracking-tight"
        >
          Ideas in Motion
        </h2>
        {!expanded && (
          <Button
            variant="outline"
            size="icon-sm"
            className="rounded-full"
            onClick={() => {
              setExpanded(true)
              sentinelRef.current?.scrollIntoView({ behavior: "smooth" })
            }}
            aria-label="Expand into grid"
          >
            <ArrowDown className="size-4" />
          </Button>
        )}
      </motion.div>

      <motion.div variants={entranceItem}>
        <LayoutGroup>
        {expanded ? (
          <motion.div
            layout
            className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
          >
            {PROJECTS.map((project) => (
              <motion.div
                key={project.id}
                layout
                layoutId={project.id}
                transition={spring}
              >
                <CardLink project={project}>
                  <ProjectCard project={project} expanded />
                </CardLink>
              </motion.div>
            ))}
          </motion.div>
        ) : (
          <div
            className="relative mx-auto"
            style={{ width: stackWidth, height: CARD_H + LIFT }}
          >
            {STACK.map((project, i) => {
              const isFront = i === FRONT
              return (
                <motion.div
                  key={project.id}
                  layout
                  layoutId={project.id}
                  className="absolute"
                  style={{
                    left: i * PEEK,
                    top: LIFT,
                    width: CARD_W,
                    height: CARD_H,
                    zIndex: isFront ? STACK.length + 1 : STACK.length - i,
                  }}
                  animate={{
                    y: isFront ? -LIFT : 0,
                    rotate: isFront ? 0 : (i - FRONT) * 2,
                    scale: isFront ? 1.02 : 0.97,
                  }}
                  transition={spring}
                >
                  <CardLink project={project}>
                    <ProjectCard project={project} expanded={false} />
                  </CardLink>
                </motion.div>
              )
            })}
          </div>
        )}
        </LayoutGroup>
      </motion.div>
    </motion.section>
  )
}
