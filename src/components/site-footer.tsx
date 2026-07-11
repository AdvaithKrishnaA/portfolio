import { useEffect, useState } from "react"
import { useLocation } from "react-router"

import { useTheme } from "@/components/theme-provider"
import { cn } from "@/lib/utils"

const WCB_SCRIPT_ID = "wcb-script"

export function SiteFooter() {
  const { pathname } = useLocation()
  const { theme } = useTheme()

  // Track the OS scheme reactively so the badge follows live changes
  // while theme is "system" (a render-time matchMedia check would go stale).
  const [systemDark, setSystemDark] = useState(
    () => window.matchMedia("(prefers-color-scheme: dark)").matches,
  )
  useEffect(() => {
    const mq = window.matchMedia("(prefers-color-scheme: dark)")
    const onChange = (e: MediaQueryListEvent) => setSystemDark(e.matches)
    mq.addEventListener("change", onChange)
    return () => mq.removeEventListener("change", onChange)
  }, [])

  const isDark = theme === "dark" || (theme === "system" && systemDark)

  // The badge script looks for #wcb when it runs, so it must load after the
  // footer has mounted — hence dynamic injection instead of an index.html tag.
  useEffect(() => {
    if (document.getElementById(WCB_SCRIPT_ID)) return
    const script = document.createElement("script")
    script.id = WCB_SCRIPT_ID
    script.src = "https://unpkg.com/website-carbon-badges@1.1.3/b.min.js"
    script.defer = true
    document.body.appendChild(script)
  }, [])

  // Burn is a full-screen immersive experience — no site chrome.
  if (pathname === "/burn") return null

  return (
    <footer className="mx-auto flex w-full max-w-5xl flex-col items-center gap-4 border-t px-6 pt-8 pb-10 text-center">
      <div id="wcb" className={cn("carbonbadge", isDark && "wcb-d")} />
      <p className="text-sm text-muted-foreground">
        © {new Date().getFullYear()} Advaith Krishna A.
      </p>
    </footer>
  )
}
