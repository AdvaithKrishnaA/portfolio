import { useEffect, useState } from 'react'
import { motion } from 'motion/react'
import { Lock, LockOpen, Puzzle, Share2, ShieldCheck } from 'lucide-react'
import { usePageMeta } from "@/hooks/use-page-meta"

function Logo({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 1527 400" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M221.739 19.373H268.479V38.7461H294.565V58.1201H321.739V77.4932H348.913V98.0059H376.087V136.752H400V214.245H376.087V254.131H348.913V273.504H321.739V292.878H294.565V312.251H268.479V331.624H221.739V350.997H128.261L64.1309 400H0V0H221.739V19.373ZM35.8691 156.125L148.692 156.4V137.3H129.615V118.2H110.538V80H148.692V99.0996H167.77V118.2H186.846V137.3H205.923V156.4H225V194.6H205.923V213.7H186.846V232.8H167.77V251.9H148.692V271H110.538V232.8H129.615V213.7H148.692V194.6L35.8691 194.872V312.251H202.174V292.878H229.348V273.504H255.435V254.131H282.608V214.245H307.608V136.752H282.608V98.0059H255.435V77.4932H229.348V58.1201H202.174V38.7461H35.8691V156.125Z" fill="currentColor" />
      <path d="M1123.92 95.9004C1140.72 95.9004 1155.62 98.6001 1168.62 104C1181.82 109.4 1193.32 116.8 1203.12 126.2L1171.62 158C1166.02 152 1159.22 147.3 1151.22 143.9C1143.42 140.5 1134.32 138.8 1123.92 138.8C1114.72 138.8 1106.22 140.4 1098.42 143.6C1090.82 146.6 1084.22 151 1078.62 156.8C1073.22 162.6 1068.92 169.6 1065.72 177.8C1062.72 186 1061.22 195 1061.22 204.8C1061.22 214.8 1062.72 223.9 1065.72 232.1C1068.92 240.299 1073.22 247.3 1078.62 253.1C1084.22 258.899 1090.82 263.4 1098.42 266.6C1106.22 269.8 1114.72 271.4 1123.92 271.4C1134.72 271.4 1144.12 269.7 1152.12 266.3C1160.12 262.9 1167.02 258.2 1172.82 252.2L1204.62 284C1194.42 293.4 1182.72 300.8 1169.52 306.2C1156.52 311.6 1141.42 314.3 1124.22 314.3C1108.42 314.3 1093.72 311.6 1080.12 306.2C1066.72 300.6 1054.92 292.8 1044.72 282.8C1034.72 272.8 1026.92 261.2 1021.32 248C1015.72 234.6 1012.92 220.2 1012.92 204.8C1012.92 189.4 1015.72 175.1 1021.32 161.9C1026.92 148.5 1034.72 136.9 1044.72 127.1C1054.72 117.3 1066.42 109.7 1079.82 104.3C1093.42 98.6999 1108.12 95.9004 1123.92 95.9004Z" fill="currentColor" />
      <path fillRule="evenodd" clipRule="evenodd" d="M578.9 99.2002C592.3 99.2002 604.4 101.9 615.2 107.3C626 112.7 634.5 120.5 640.7 130.7C647.1 140.7 650.3 152.6 650.3 166.4C650.3 180.2 647.1 192.2 640.7 202.4C634.5 212.4 626 220.2 615.2 225.8C604.4 231.2 592.3 233.9 578.9 233.9H537.5V311H490.4V99.2002H578.9ZM537.5 197.3H572C577.8 197.3 583.1 196.1 587.9 193.7C592.7 191.3 596.5 187.8 599.3 183.2C602.1 178.6 603.5 173 603.5 166.4C603.5 160 602.1 154.5 599.3 149.9C596.5 145.301 592.7 141.8 587.9 139.4C583.1 137 577.8 135.8 572 135.8H537.5V197.3Z" fill="currentColor" />
      <path fillRule="evenodd" clipRule="evenodd" d="M840.88 311H791.08L777.188 272.6H694.169L680.08 311H631.18L715.18 99.2002H757.779L840.88 311ZM708.258 234.2H763.296L735.97 158.668L708.258 234.2Z" fill="currentColor" />
      <path fillRule="evenodd" clipRule="evenodd" d="M934.69 99.2002C948.69 99.2002 960.991 101.9 971.591 107.3C982.191 112.5 990.49 119.8 996.49 129.2C1002.49 138.6 1005.49 149.4 1005.49 161.6C1005.49 174 1002.49 184.9 996.49 194.3C990.49 203.5 982.091 210.7 971.291 215.9C965.266 218.801 958.648 220.891 951.44 222.174L1019.29 311H963.49L900.312 223.7H895.391V311H848.291V99.2002H934.69ZM895.391 188.9H928.99C938.39 188.9 945.591 186.5 950.591 181.7C955.791 176.9 958.391 170.4 958.391 162.2C958.391 154.6 955.891 148.3 950.891 143.3C945.891 138.3 938.691 135.8 929.291 135.8H895.391V188.9Z" fill="currentColor" />
      <path d="M1366.16 139.7H1262.66V183.2H1357.16V222.5H1262.66V270.2H1367.66V311H1215.56V99.2002H1366.16V139.7Z" fill="currentColor" />
      <path d="M1432.23 269.6H1526.13V311H1385.13V99.2002H1432.23V269.6Z" fill="currentColor" />
    </svg>
  );
}


const PARCEL_BLUE = '#2563eb'

const SECRET = 'wifi-pass: correct·horse·battery'
const GLYPHS = '!<>-_\\/[]{}=+*^?#░▒▓'

/** A note that scrambles itself — client-side encryption, visualised. */
function EncryptDemo() {
  const [locked, setLocked] = useState(false)
  const [display, setDisplay] = useState(SECRET)

  useEffect(() => {
    const toggle = setInterval(() => setLocked((l) => !l), 3200)
    return () => clearInterval(toggle)
  }, [])

  useEffect(() => {
    let frame = 0
    const totalFrames = 16
    const tick = setInterval(() => {
      frame++
      setDisplay(
        SECRET.split('')
          .map((ch, i) => {
            if (ch === ' ') return ' '
            const revealAt = (i / SECRET.length) * totalFrames
            const settled = frame > revealAt
            if (locked) {
              return settled
                ? GLYPHS[Math.floor(Math.random() * GLYPHS.length)]
                : ch
            }
            return settled
              ? ch
              : GLYPHS[Math.floor(Math.random() * GLYPHS.length)]
          })
          .join(''),
      )
      if (frame >= totalFrames + 2) clearInterval(tick)
    }, 45)
    return () => clearInterval(tick)
  }, [locked])

  return (
    <div className="flex flex-col items-center gap-4">
      <div className="flex w-full max-w-sm items-center gap-3 rounded-2xl border bg-card px-4 py-3.5 shadow-sm">
        <span
          className="flex size-8 shrink-0 items-center justify-center rounded-full"
          style={{ backgroundColor: `${PARCEL_BLUE}1a`, color: PARCEL_BLUE }}
          aria-hidden
        >
          {locked ? <Lock className="size-4" /> : <LockOpen className="size-4" />}
        </span>
        <code className="truncate font-mono text-sm">{display}</code>
      </div>
      <p className="text-xs text-muted-foreground">
        Locked on your device before it ever reaches the cloud.
      </p>
    </div>
  )
}

const FEATURES = [
  {
    icon: ShieldCheck,
    title: 'Truly Private',
    body: 'Everything is locked on your device before it ever reaches the cloud. Nobody can see your saved links or notes.',
  },
  {
    icon: Share2,
    title: 'Share Securely',
    body: 'Send bundles of links and secrets to others safely. Only the person with your shared link and key can unlock them.',
  },
  {
    icon: Puzzle,
    title: 'Everywhere you go',
    body: 'Save effortlessly as you browse with the companion browser extension.',
  },
]

const fadeUp = {
  initial: { opacity: 0, y: 16, filter: 'blur(6px)' },
  whileInView: { opacity: 1, y: 0, filter: 'blur(0px)' },
  viewport: { once: true, amount: 0.3 },
  transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const },
}

const githubButton = (
  <a
    href="https://github.com/AdvaithKrishnaA/parcel"
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-white shadow-lg transition-transform hover:scale-[1.03] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/50 focus-visible:ring-offset-2"
    style={{ backgroundColor: PARCEL_BLUE }}
  >
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.748-1.025 2.748-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.161 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
    </svg>
    View on GitHub
  </a>
)

export default function ParcelPage() {
  usePageMeta(
    "Parcel | Secure Collection Manager",
    "A simple app to save and share links, notes, and secrets securely",
  )

  return (
    <main id="main-content" className="overflow-hidden">
      {/* Hero */}
      <section className="relative flex min-h-[75svh] flex-col items-center justify-center px-6 text-center">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-10"
          style={{
            background:
              'radial-gradient(ellipse 60% 45% at 50% 38%, rgba(37, 99, 235, 0.10), transparent 70%)',
          }}
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.94, filter: 'blur(6px)' }}
          animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <Logo className="mx-auto h-auto w-44 text-zinc-900 dark:text-zinc-100" />
        </motion.div>

        <motion.p
          {...fadeUp}
          whileInView={undefined}
          animate={fadeUp.whileInView}
          transition={{ ...fadeUp.transition, delay: 0.15 }}
          className="mt-6 max-w-md text-muted-foreground"
        >
          A simple app to save and share links, notes, and secrets securely.
        </motion.p>

        <motion.div
          {...fadeUp}
          whileInView={undefined}
          animate={fadeUp.whileInView}
          transition={{ ...fadeUp.transition, delay: 0.3 }}
          className="mt-8"
        >
          {githubButton}
        </motion.div>
      </section>

      {/* Live demo */}
      <motion.section {...fadeUp} className="px-6 py-10">
        <EncryptDemo />
      </motion.section>

      {/* Why Parcel */}
      <motion.section {...fadeUp} className="mx-auto max-w-3xl px-6 py-20">
        <h2 className="mb-8 text-center text-2xl font-semibold tracking-tight">
          Why Parcel?
        </h2>
        <div className="grid gap-4 sm:grid-cols-3">
          {FEATURES.map((feature) => (
            <div key={feature.title} className="rounded-2xl border bg-card p-5">
              <feature.icon
                className="size-5"
                style={{ color: PARCEL_BLUE }}
                aria-hidden
              />
              <h3 className="mt-3 font-medium">{feature.title}</h3>
              <p className="mt-1.5 text-sm text-muted-foreground">
                {feature.body}
              </p>
            </div>
          ))}
        </div>
      </motion.section>

      {/* Arcade walkthrough */}
      <motion.section {...fadeUp} className="mx-auto max-w-3xl px-6 pb-20">
        <h2 className="mb-6 text-center text-2xl font-semibold tracking-tight">
          See it in action
        </h2>
        <div className="overflow-hidden rounded-2xl border shadow-xl">
          <iframe
            src="https://demo.arcade.software/IMI2hsPKpcfxKgA6pZq6?embed&embed_mobile=inline&embed_desktop=inline&show_copy_link=true"
            title="Share Data Securely with PARCEL"
            loading="lazy"
            allowFullScreen
            allow="clipboard-write"
            className="w-full"
            style={{ aspectRatio: '100 / 56.8587', colorScheme: 'light' }}
          />
        </div>
      </motion.section>

      {/* Closing CTA */}
      <motion.section {...fadeUp} className="flex flex-col items-center gap-6 px-6 pb-28 text-center">
        <p className="text-lg font-medium">Your links. Your notes. Your keys.</p>
        {githubButton}
      </motion.section>
    </main>
  )
}
