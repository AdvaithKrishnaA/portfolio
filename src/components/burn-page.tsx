import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { Flame } from 'lucide-react'
import { BurnInfoDialog } from '@/components/burn-info-dialog'
import { usePageMeta } from "@/hooks/use-page-meta"

function BurnLogo({ className }: { className?: string }) {
    return (
        <svg
            width="282"
            height="100"
            viewBox="0 0 282 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
            role="img"
            aria-label="Burn Logo"
        >
            <path d="M10.7794 36.615L10.7694 36.625L10.7494 36.64L10.6994 36.68C10.4824 36.8447 10.2722 37.0182 10.0693 37.2C9.54582 37.6637 9.042 38.1491 8.5592 38.655C7.35911 39.92 5.81898 41.8 4.37387 44.315C1.46364 49.39 -0.981554 56.955 0.393555 67.07C1.74866 77.055 5.94399 85.4 13.0346 91.22C20.1051 97.02 29.6759 100 41.2518 100C53.1877 100 62.7185 95.525 69.024 87.85C75.2745 80.245 78.0647 69.87 77.3996 58.53C76.7596 47.65 70.8341 39.395 65.5987 32.105L64.1036 30.02C58.3931 21.96 53.8878 14.535 54.9829 4.145C55.0383 3.62208 54.983 3.09335 54.8208 2.59315C54.6586 2.09294 54.393 1.63245 54.0412 1.24157C53.6894 0.850684 53.2593 0.538147 52.7789 0.324251C52.2985 0.110354 51.7785 -0.000120688 51.2526 9.89395e-08C49.3424 9.89395e-08 47.1523 0.59 45.0421 1.48C42.5986 2.52755 40.2928 3.87092 38.1765 5.48C33.5512 8.97 28.9258 14.23 26.4606 21.26C24.0004 28.27 25.2505 34.95 27.0507 39.815C28.2358 43.01 26.9507 46.165 25.0155 47.085C24.1921 47.4745 23.25 47.5307 22.3862 47.2418C21.5223 46.953 20.8036 46.3414 20.3801 45.535L16.3498 37.88C16.0976 37.3998 15.7441 36.98 15.3139 36.6496C14.8837 36.3192 14.3869 36.0861 13.8578 35.9663C13.3287 35.8465 12.7799 35.8429 12.2493 35.9558C11.7187 36.0686 11.2189 36.2953 10.7844 36.62" fill="#FF4527" />
            <path d="M106.415 89.7959V30.9682H128.674C130.555 30.9682 132.54 31.0727 134.63 31.2816C136.72 31.421 138.74 31.7693 140.691 32.3265C142.711 32.8838 144.522 33.7546 146.125 34.9388C147.727 36.0533 148.981 37.551 149.887 39.4318C150.862 41.3127 151.35 43.6811 151.35 46.5371C151.35 48.7663 150.897 50.8561 149.991 52.8065C149.155 54.6874 147.588 56.2199 145.289 57.4041C143.059 58.5883 139.785 59.2501 135.466 59.3894V59.8073C140.412 59.877 144.209 60.5736 146.856 61.8971C149.573 63.2207 151.454 64.9622 152.499 67.1216C153.544 69.2114 154.067 71.545 154.067 74.1225C154.067 77.0482 153.544 79.4863 152.499 81.4367C151.454 83.3176 150.061 84.8152 148.319 85.9298C146.578 87.0444 144.627 87.8803 142.467 88.4376C140.308 88.9948 138.078 89.378 135.779 89.5869C133.55 89.7263 131.46 89.7959 129.51 89.7959H106.415ZM114.984 82.6906H128.778C131.774 82.6906 134.491 82.5165 136.929 82.1682C139.367 81.7502 141.318 80.8446 142.781 79.4514C144.313 78.0582 145.08 75.9336 145.08 73.0776C145.08 70.0125 144.279 67.7834 142.676 66.3902C141.144 64.9274 139.089 63.9869 136.511 63.569C133.933 63.0814 131.077 62.8376 127.942 62.8376H114.984V82.6906ZM114.984 56.0457H127.629C130.485 56.0457 133.028 55.8716 135.257 55.5233C137.556 55.175 139.367 54.4087 140.691 53.2245C142.014 51.9706 142.676 50.0201 142.676 47.3731C142.676 44.4473 141.98 42.3576 140.586 41.1037C139.193 39.7801 137.347 38.979 135.048 38.7004C132.819 38.3521 130.38 38.178 127.733 38.178H114.984V56.0457Z" fill="#FF4527" />
            <path d="M177.038 90.8408C174.182 90.8408 171.778 90.388 169.828 89.4824C167.947 88.5769 166.414 87.3578 165.23 85.8253C164.115 84.2928 163.279 82.5861 162.722 80.7053C162.165 78.8245 161.781 76.874 161.573 74.8539C161.364 72.8337 161.259 70.8833 161.259 69.0025V47.0596H169.828V69.0025C169.828 71.5102 170.072 73.8438 170.559 76.0033C171.047 78.0931 172.057 79.7997 173.59 81.1233C175.122 82.4468 177.387 83.1086 180.382 83.1086C183.308 83.1086 185.572 82.4468 187.175 81.1233C188.777 79.7301 189.891 77.9886 190.518 75.8988C191.215 73.809 191.598 71.6495 191.668 69.4204V47.0596H200.655V89.7959H193.235L191.772 80.9143H191.563C191.354 81.6109 190.936 82.5165 190.309 83.631C189.682 84.6759 188.812 85.7556 187.697 86.8702C186.582 87.9848 185.119 88.9252 183.308 89.6914C181.566 90.4577 179.477 90.8408 177.038 90.8408Z" fill="#FF4527" />
            <path d="M209.759 89.7959V47.0596H217.806L218.537 59.3894L218.433 68.5845V89.7959H209.759ZM218.433 70.5698L218.119 61.1657C218.189 59.6332 218.537 58.0659 219.164 56.4637C219.791 54.7918 220.731 53.2593 221.985 51.8661C223.309 50.4033 224.981 49.2539 227.001 48.418C229.091 47.5124 231.599 47.0596 234.525 47.0596H236.302V56.6727H234.421C231.286 56.6727 228.673 56.9861 226.583 57.6131C224.493 58.1703 222.856 59.0411 221.672 60.2253C220.488 61.4095 219.652 62.8724 219.164 64.6139C218.676 66.3554 218.433 68.3407 218.433 70.5698Z" fill="#FF4527" />
            <path d="M242.5 89.7959V47.0596H249.919L251.382 56.9861H251.591C251.661 56.7075 251.939 56.0457 252.427 55.0008C252.915 53.9559 253.716 52.8414 254.831 51.6571C255.945 50.4033 257.443 49.3235 259.324 48.418C261.205 47.5124 263.574 47.0596 266.43 47.0596C269.425 47.0596 271.864 47.5472 273.745 48.5224C275.695 49.428 277.228 50.6819 278.343 52.2841C279.527 53.8166 280.363 55.5581 280.851 57.5086C281.338 59.3894 281.652 61.3399 281.791 63.36C281.93 65.3105 282 67.1565 282 68.898V89.7959H273.536V68.7935C273.536 66.1464 273.257 63.778 272.7 61.6882C272.142 59.5287 271.132 57.8569 269.669 56.6727C268.206 55.4188 266.012 54.7918 263.086 54.7918C260.16 54.7918 257.826 55.4884 256.084 56.8816C254.412 58.2748 253.193 60.086 252.427 62.3151C251.73 64.4746 251.382 66.843 251.382 69.4204V89.7959H242.5Z" fill="#FF4527" />
        </svg>

    )
}

const ONBOARDING_LINES = [
  'Not all thoughts are helpful. Especially the negative ones.',
  'Release them. Forget. Repeat if needed.',
]
const LINE_MS = 4000
const ONBOARDING_EXIT_MS = 500
const BURN_MS = 5000 // input returns after the thought has burned
const PARTICLE_COUNT = 100
const TEXTAREA_MAX_HEIGHT = 300
const VISITED_KEY = 'burn_has_visited'

type Phase = 'onboarding' | 'ready' | 'burning'

const fireStyles = `
  .fire {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    pointer-events: none;
    filter: blur(2em);
  }
  .particle {
    animation: rise 1s ease-in infinite;
    background-image: radial-gradient(
      rgb(255, 150, 0) 30%,
      rgb(255, 110, 0) 50%,
      rgba(255, 80, 0, 0) 70%
    );
    mix-blend-mode: screen;
    opacity: 0;
    position: absolute;
    bottom: 0;
    width: 40em;
    height: 10em;
  }
  @keyframes rise {
    from {
      opacity: 0;
      transform: translateY(0) scale(1);
    }
    25% {
      opacity: 1;
    }
    to {
      opacity: 0;
      transform: translateY(-120vh) scale(0);
    }
  }
`

function FireParticles() {
  // Particle positions are randomised once, not on every render.
  const particles = useMemo(
    () =>
      Array.from({ length: PARTICLE_COUNT }, () => ({
        delay: Math.random(),
        left: 20 + (Math.random() - 0.5) * 150,
      })),
    [],
  )

  return (
    <div className="fire" aria-hidden>
      {particles.map((particle, i) => (
        <div
          key={i}
          className="particle"
          style={{
            animationDelay: `${particle.delay}s`,
            left: `${particle.left}%`,
          }}
        />
      ))}
    </div>
  )
}

function Onboarding({ onDone }: { onDone: () => void }) {
  const [line, setLine] = useState(0)

  useEffect(() => {
    const ms = line < ONBOARDING_LINES.length ? LINE_MS : ONBOARDING_EXIT_MS
    const timer = setTimeout(() => {
      if (line < ONBOARDING_LINES.length) setLine(line + 1)
      else onDone()
    }, ms)
    return () => clearTimeout(timer)
  }, [line, onDone])

  return (
    <main className="min-h-screen flex items-center justify-center px-4 dark:bg-[var(--color-burn-dark)]">
      <AnimatePresence mode="wait">
        <motion.div
          key={line}
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          className="text-center space-y-6 max-w-2xl flex items-center justify-center min-h-[200px]"
        >
          {line < ONBOARDING_LINES.length && (
            <p className="text-2xl text-foreground max-w-xl">
              {ONBOARDING_LINES[line]}
            </p>
          )}
        </motion.div>
      </AnimatePresence>
    </main>
  )
}

export default function BurnPage() {
  usePageMeta(
    "Burn | A Simple Way to Release Negative Thoughts",
    "Burn helps you release negative thoughts — write them down, watch them disappear, and get back to better vibes.",
  )
  const [phase, setPhase] = useState<Phase>('onboarding')
  const [text, setText] = useState('')
  const [hasVisited, setHasVisited] = useState(false)
  const textareaRef = useRef<HTMLTextAreaElement>(null)
  const burnTimer = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => {
    setHasVisited(Boolean(localStorage.getItem(VISITED_KEY)))
    return () => {
      if (burnTimer.current) clearTimeout(burnTimer.current)
    }
  }, [])

  const finishOnboarding = useCallback(() => {
    localStorage.setItem(VISITED_KEY, 'true')
    setPhase('ready')
  }, [])

  const handleInput = useCallback(
    (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      setText(e.target.value)
      // Auto-resize: grow with content, never shrink mid-typing.
      const el = e.target
      const currentHeight = el.offsetHeight
      el.style.height = 'auto'
      el.style.height =
        Math.max(currentHeight, Math.min(el.scrollHeight, TEXTAREA_MAX_HEIGHT)) +
        'px'
    },
    [],
  )

  const handleBurn = useCallback(() => {
    if (!text.trim()) return
    setPhase('burning')
    burnTimer.current = setTimeout(() => {
      setText('')
      setPhase('ready')
      textareaRef.current?.focus()
    }, BURN_MS)
  }, [text])

  if (phase === 'onboarding') {
    return <Onboarding onDone={finishOnboarding} />
  }

  return (
    <main
      id="main-content"
      className="relative min-h-screen flex flex-col justify-end dark:bg-[var(--color-burn-dark)]"
    >
      <style>{fireStyles}</style>
      <AnimatePresence mode="wait">
        {phase === 'ready' ? (
          <motion.div
            key="input"
            initial={{ opacity: 0.6 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0"
          >
            {/* Logo centered */}
            <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
              <div className="pointer-events-auto">
                <BurnLogo className="w-full max-w-48 mx-auto" />
                {!hasVisited && (
                  <div className="mt-2 flex justify-center">
                    <BurnInfoDialog triggerText="Wait… what? Explain pls" />
                  </div>
                )}
              </div>
            </div>

            {/* Input at bottom */}
            <div className="absolute bottom-0 w-full flex justify-center pb-6 px-4 pointer-events-none">
              <div className="w-full max-w-2xl relative pointer-events-auto">
                {hasVisited && (
                  <div className="flex justify-end px-2">
                    <BurnInfoDialog triggerText="What's this?" iconTrigger />
                  </div>
                )}
                <textarea
                  ref={textareaRef}
                  autoFocus
                  aria-label="Your thought"
                  value={text}
                  onChange={handleInput}
                  placeholder="This thought won't stay long…"
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' && !e.shiftKey) {
                      e.preventDefault()
                      handleBurn()
                    }
                  }}
                  className="w-full rounded-3xl p-5 pr-16 text-md md:text-xl focus:outline-none bg-foreground/5 backdrop-blur-lg dark:text-white border-2 border-white/10 overflow-y-auto resize-none"
                  style={{ maxHeight: `${TEXTAREA_MAX_HEIGHT}px` }}
                />
                <button
                  onClick={handleBurn}
                  disabled={!text.trim()}
                  aria-label="Burn this thought"
                  className="absolute bottom-4 right-3 w-12 h-12 rounded-full flex items-center justify-center text-white transition disabled:opacity-40 hover:opacity-80"
                  style={{ backgroundColor: '#E23215' }}
                >
                  <Flame className="w-6 h-6" aria-hidden="true" />
                </button>
              </div>
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="burning"
            initial={{ opacity: 1 }}
            animate={{ opacity: 0 }}
            transition={{ duration: 6, ease: 'easeInOut' }}
            className="w-full flex flex-col items-center"
          >
            <FireParticles />
            <motion.div
              className="max-w-2xl mx-auto px-6 min-h-[6rem] text-2xl text-center break-words"
              initial={{ opacity: 1 }}
              animate={{ opacity: 0 }}
              transition={{ duration: 3, ease: 'easeInOut' }}
            >
              {text}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  )
}
