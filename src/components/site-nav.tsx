import { useState } from "react"
import { motion } from "motion/react"
import { Link, useLocation } from "react-router"

import avatar from "@/assets/avatar.webp"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { ModeToggle } from "@/components/mode-toggle"

const projects = [
  { label: "High On Product", href: "https://highonproduct.com", external: true },
  { label: "Ima", href: "/ima" },
  { label: "Parcel", href: "/parcel" },
  { label: "Burn", href: "/burn" },
  { label: "Engineer #099", href: "/engineer-game" },
]

export function SiteNav() {
  const { pathname } = useLocation()
  const [openItem, setOpenItem] = useState<string | null>(null)
  const closeMenu = () => setOpenItem(null)

  if (pathname === "/burn") return null

  return (
    <motion.nav
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="fixed inset-x-0 top-4 z-50 mx-auto flex w-fit items-center gap-1 rounded-full border bg-background/70 p-1.5 shadow-lg backdrop-blur-md supports-[backdrop-filter]:bg-background/60"
    >
      {pathname !== "/" && (
        <Avatar className="ml-0.5 size-8">
          <AvatarImage src={avatar} alt="Advaith" />
          <AvatarFallback>Advaith</AvatarFallback>
        </Avatar>
      )}

      <NavigationMenu value={openItem} onValueChange={setOpenItem}>
        <NavigationMenuList className="gap-0.5">
          <NavigationMenuItem>
            <NavigationMenuLink render={<Link to="/" />}>
              Home
            </NavigationMenuLink>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuLink render={<Link to="/blog" />}>
              Writing
            </NavigationMenuLink>
          </NavigationMenuItem>

          <NavigationMenuItem value="projects">
            <NavigationMenuTrigger>Projects</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-44 gap-0.5">
                {projects.map((project) => (
                  <li key={project.label}>
                    {project.external ? (
                      <NavigationMenuLink
                        href={project.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={closeMenu}
                      >
                        {project.label}
                      </NavigationMenuLink>
                    ) : (
                      <NavigationMenuLink
                        render={<Link to={project.href} />}
                        onClick={closeMenu}
                      >
                        {project.label}
                      </NavigationMenuLink>
                    )}
                  </li>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>

      <div className="mx-0.5 h-5 w-px bg-border" />

      <ModeToggle />
    </motion.nav>
  )
}
