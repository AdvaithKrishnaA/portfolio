import { lazy, Suspense, useMemo } from "react"
import { BLOG_POSTS } from "@/data"
import { usePageMeta } from "@/hooks/use-page-meta"
import { Navigate, useParams } from "react-router"

// Each post becomes its own lazy-loaded chunk.
const modules = import.meta.glob("/src/blog/*.mdx")

export function BlogPostPage() {
  const { slug } = useParams()
  const post = BLOG_POSTS.find((p) => p.link === `/blog/${slug}`)
  usePageMeta(
    post ? `${post.title} | Advaith Krishna A` : undefined,
    post?.description,
  )
  const loader = modules[`/src/blog/${slug}.mdx`]
  const Post = useMemo(
    () =>
      loader
        ? lazy(loader as () => Promise<{ default: React.ComponentType }>)
        : null,
    [loader],
  )

  if (!Post) return <Navigate to="/blog" replace />

  return (
    <main className="mx-auto w-full max-w-3xl px-6 pt-32 pb-24">
      <article className="prose prose-neutral dark:prose-invert mx-auto">
        <Suspense fallback={null}>
          <Post />
        </Suspense>
      </article>
    </main>
  )
}
