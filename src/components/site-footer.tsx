import { useLocation } from "react-router"

function CarbonBadge() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-y-1.5 text-sm">
      <span className="rounded-l-md border border-r-0 border-border px-2.5 py-1">
        0.02g of CO<sub>2</sub>/view
      </span>
      <a
        href="https://websitecarbon.com"
        target="_blank"
        rel="noopener noreferrer"
        className="rounded-r-md bg-foreground px-2.5 py-1 font-semibold text-background transition-opacity hover:opacity-85"
      >
        Website Carbon
      </a>
      <span className="ml-3 text-muted-foreground">
        Cleaner than 96% of pages tested
      </span>
    </div>
  )
}

export function SiteFooter() {
  const { pathname } = useLocation()

  // Burn is a full-screen immersive experience, so no site chrome.
  if (pathname === "/burn") return null

  return (
    <footer className="mx-auto flex w-full max-w-5xl flex-col items-center gap-4 border-t px-6 pt-8 pb-10 text-center">
      <CarbonBadge />
      <p className="text-sm text-muted-foreground">
        © {new Date().getFullYear()} Advaith Krishna A.
      </p>
    </footer>
  )
}
