import { Link } from "react-router"

import { usePageMeta } from "@/hooks/use-page-meta"

import { BLOG_POSTS } from "@/data"

export function BlogPage() {
  usePageMeta("Writing | Advaith Krishna A")

  return (
    <main className="mx-auto w-full max-w-3xl px-6 pt-32 pb-24">
      <h1 className="text-3xl font-semibold tracking-tight">Writing</h1>
      <div className="mt-8 flex flex-col gap-1">
        {BLOG_POSTS.map((post) => (
          <Link
            key={post.uid}
            to={post.link}
            className="-mx-3 rounded-xl px-3 py-3 transition-colors hover:bg-muted/60 focus-visible:ring-2 focus-visible:ring-ring/40 focus-visible:outline-none"
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
