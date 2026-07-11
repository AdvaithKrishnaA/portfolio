import { useEffect } from "react"

const DEFAULT_TITLE = "Advaith Krishna A - Product & Tech"
const DEFAULT_DESCRIPTION = "Personal website of Advaith Krishna A"

/**
 * SPA stand-in for Next's metadata: keeps document.title and the
 * description meta in sync with the active route, restoring the
 * site defaults on unmount.
 */
export function usePageMeta(title?: string, description?: string) {
  useEffect(() => {
    document.title = title ?? DEFAULT_TITLE
    const meta = document.querySelector<HTMLMetaElement>(
      'meta[name="description"]',
    )
    if (meta) meta.content = description ?? DEFAULT_DESCRIPTION
    return () => {
      document.title = DEFAULT_TITLE
      if (meta) meta.content = DEFAULT_DESCRIPTION
    }
  }, [title, description])
}
