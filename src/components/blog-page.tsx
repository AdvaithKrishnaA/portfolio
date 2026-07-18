import { Link } from "react-router"

import { usePageMeta } from "@/hooks/use-page-meta"

import { BLOG_POSTS } from "@/data"

export function BlogPage() {
  usePageMeta("Writing | Advaith Krishna A")

  return (
    <main className="mx-auto w-full max-w-xl px-6 pt-32 pb-24">
      <h1 className="text-center text-3xl font-semibold tracking-tight">Writing</h1>
      <div className="mt-8 flex flex-col gap-4">
        {BLOG_POSTS.map((post) => (
          <Link
            key={post.uid}
            to={post.link}
            className="rounded-2xl border border-border bg-card p-5 transition-all hover:bg-muted/40 focus-visible:ring-2 focus-visible:ring-ring/40 focus-visible:outline-none"
          >
            <h2 className="font-medium">{post.title}</h2>
            <p className="mt-1 text-sm text-muted-foreground">
              {post.description}
            </p>
          </Link>
        ))}
      </div>
    </main>
  )
}
