import { lazy, Suspense, useEffect, type ComponentType } from "react"
import { Navigate, Route, Routes, useLocation } from "react-router"

import { ThemeProvider } from "@/components/theme-provider"
import { SiteNav } from "@/components/site-nav"
import { Hero } from "@/components/hero"
import { ProjectsSection } from "@/components/projects-section"
import { AboutSection } from "@/components/about-section"
import { BlogPostPage } from "@/components/blog-post-page"

function lazyPage<K extends string>(
  loader: () => Promise<Record<K, ComponentType>>,
  name: K,
) {
  return lazy(() => loader().then((m) => ({ default: m[name] })))
}

const BlogPage = lazyPage(() => import("@/components/blog-page"), "BlogPage")
const ParcelPage = lazyPage(
  () => import("@/components/parcel-page"),
  "default",
)
const BurnPage = lazyPage(() => import("@/components/burn-page"), "default")
const ImaPage = lazyPage(() => import("@/components/ima-page"), "default")
const EngineerGamePage = lazyPage(
  () => import("@/components/engineer-game-page"),
  "default",
)

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    // Keep the body braced: scrollTo can return a value in some browsers
    // (extension patches), and React would treat it as a cleanup function.
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

function HomePage() {
  return (
    <main>
      <Hero />
      <ProjectsSection />
      <AboutSection />
    </main>
  )
}

function App() {
  return (
    <ThemeProvider defaultTheme="system" storageKey="portfolio-theme">
      <ScrollToTop />
      <SiteNav />
      <Suspense fallback={null}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:slug" element={<BlogPostPage />} />
          <Route path="/parcel" element={<ParcelPage />} />
          <Route path="/burn" element={<BurnPage />} />
          <Route path="/ima" element={<ImaPage />} />
          <Route path="/engineer-game" element={<EngineerGamePage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Suspense>
    </ThemeProvider>
  )
}

export default App
