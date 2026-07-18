const FACTS = [
  "Graduated from IIT Guwahati (Class of '24)",
  "Building AI/ML Products for Ad-Tech at Media.net",
  "Currently based in Mumbai; grew up in Kerala",
  "Curious about consumer psychology; socially an ambivert who appreciates the right kind of interactions",
]

export function AboutSection() {
  return (
    <section id="about" className="mx-auto w-full max-w-3xl px-6 pb-24">
      <h2 className="mb-8 text-center text-2xl font-semibold tracking-tight">
        More About Me
      </h2>
      <ul className="mx-auto max-w-sm space-y-3 text-muted-foreground">
        {FACTS.map((fact) => (
          <li key={fact} className="flex gap-3">
            <span aria-hidden className="select-none">
              •
            </span>
            <span>{fact}</span>
          </li>
        ))}
      </ul>
    </section>
  )
}
