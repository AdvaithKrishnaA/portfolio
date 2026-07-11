export function Cover({
  src,
  alt,
  caption,
}: {
  src: string
  alt: string
  caption?: string
}) {
  return (
    <figure>
      <img src={src} alt={alt} className="rounded-xl" />
      {caption && <figcaption className="text-center">{caption}</figcaption>}
    </figure>
  )
}
