import { Contrast } from "lucide-react"

import { Button } from "@/components/ui/button"
import { useTheme } from "@/components/theme-provider"

export function ModeToggle() {
  const { setTheme } = useTheme()

  const toggleTheme = () => {
    // Toggle based on what's actually rendered (handles "system" too).
    const isDark = document.documentElement.classList.contains("dark")
    setTheme(isDark ? "light" : "dark")
  }

  return (
    <Button
      variant="ghost"
      size="icon"
      className="rounded-full"
      onClick={toggleTheme}
      aria-label="Toggle theme"
    >
      <Contrast className="size-5" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}
