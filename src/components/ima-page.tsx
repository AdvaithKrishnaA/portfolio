import { useCallback, useEffect, useRef, useState } from 'react'
import { motion } from 'motion/react'
import { ChevronDown, XIcon } from 'lucide-react'
import imaPreview from '@/assets/ima-preview.webp'
import { usePageMeta } from "@/hooks/use-page-meta"

function ImaLogo({ className }: { className?: string }) {
  return (
    <svg
      width="153"
      height="84"
      viewBox="0 0 153 84"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      role="img"
      aria-label="Ima Logo"
    >
      <path d="M68.8831 0H15.8961C7.11693 0 0 7.05152 0 15.75V68.25C0 76.9485 7.11693 84 15.8961 84H68.8831C77.6623 84 84.7792 76.9485 84.7792 68.25V15.75C84.7792 7.05152 77.6623 0 68.8831 0Z" fill="#CB1B45" />
      <path d="M58.0808 27.6683C57.2409 24.0843 55.1984 20.8888 52.2872 18.6046C49.376 16.3203 45.7687 15.0826 42.0552 15.0938C38.3417 15.105 34.7421 16.3646 31.8451 18.6664C28.948 20.9682 26.9251 24.1759 26.1073 27.765C22.2575 28.7764 18.9107 31.1412 16.6914 34.418C14.4721 37.6948 13.532 41.6598 14.0466 45.573C14.5612 49.4861 16.4952 53.0801 19.4878 55.6841C22.4803 58.2882 26.3269 59.7244 30.3098 59.7247C31.2613 59.7241 32.2109 59.6399 33.1475 59.4733C35.675 60.9287 38.5498 61.6868 41.4731 61.6691V67.79C41.4731 68.0243 41.5668 68.248 41.7336 68.4134C41.9003 68.5788 42.1266 68.6713 42.3625 68.6713C42.5983 68.6713 42.8246 68.5788 42.9913 68.4134C43.1581 68.248 43.2518 68.0243 43.2518 67.79V61.6446C46.1211 61.5862 48.9339 60.844 51.4524 59.4807C53.808 59.8902 56.2256 59.7833 58.535 59.1674C60.8445 58.5515 62.9896 57.4415 64.8193 55.9157C66.6491 54.3898 68.1194 52.4852 69.1262 50.3358C70.1329 48.1863 70.6522 45.8444 70.6469 43.4747C70.6383 39.8271 69.3958 36.2876 67.118 33.4222C64.8399 30.5567 61.6579 28.5308 58.0808 27.6683ZM41.9027 59.9184C36.0377 59.9184 31.716 57.4574 29.7332 52.9896C27.9775 49.0328 29.1958 43.9615 29.732 42.1488C31.9687 42.6043 34.0901 43.5004 35.9705 44.7839C36.0757 44.8556 36.1952 44.9041 36.321 44.926C36.4468 44.9479 36.5759 44.9426 36.6994 44.9107C36.823 44.8787 36.9382 44.8208 37.0371 44.7408C37.136 44.6608 37.2164 44.5606 37.2728 44.4471C38.3702 42.295 39.8654 40.3661 41.6809 38.7605C43.763 40.4662 45.4545 42.5917 46.643 44.9956C46.7012 45.1131 46.7851 45.2162 46.8885 45.2976C46.992 45.379 47.1124 45.4365 47.2411 45.466C47.3698 45.4954 47.5035 45.4962 47.6325 45.4681C47.7615 45.4401 47.8826 45.3838 47.987 45.3036C50.0294 43.7503 52.3991 42.6733 54.9197 42.1528C55.4061 43.9807 56.4762 48.9863 54.9232 53.031C54.129 55.1018 51.2686 59.9184 41.9027 59.9184ZM54.2466 57.9623C54.026 57.9623 53.8053 57.9563 53.5848 57.9463C54.9119 56.7705 55.9403 55.3011 56.5865 53.6574C58.7411 48.0446 56.5008 41.1804 56.4047 40.8909C56.3406 40.6989 56.2117 40.5345 56.0397 40.4253C55.8678 40.3162 55.6633 40.2689 55.4603 40.2915C52.6907 40.6866 50.0518 41.7148 47.7522 43.2945C46.3781 40.7898 44.4684 38.6128 42.1565 36.9158C42.0024 36.8092 41.8182 36.7537 41.6304 36.7573C41.4425 36.7608 41.2606 36.8232 41.1107 36.9355C39.0961 38.5599 37.4101 40.5474 36.1414 42.7931C34.0348 41.4873 31.6746 40.6349 29.2139 40.2911C29.0156 40.2685 28.8153 40.3129 28.6456 40.4171C28.4758 40.5213 28.3466 40.6793 28.2788 40.8654C28.17 41.1607 25.6493 48.1644 28.105 53.6984C28.8046 55.2997 29.8266 56.7427 31.1084 57.9391C30.8435 57.9533 30.5775 57.962 30.31 57.962C26.7151 57.9616 23.2463 56.6493 20.566 54.2754C17.8858 51.9016 16.1821 48.6328 15.7802 45.0932C15.3784 41.5537 16.3065 37.9915 18.3874 35.087C20.4682 32.1825 23.5561 30.1393 27.0611 29.3476C27.2303 29.3096 27.3846 29.2235 27.5051 29.0997C27.6256 28.9759 27.7069 28.82 27.7391 28.6511C28.3707 25.3414 30.1466 22.3533 32.7612 20.2006C35.3759 18.0479 38.6659 16.8653 42.0654 16.856C45.4649 16.8468 48.7614 18.0116 51.388 20.15C54.0145 22.2885 55.8069 25.2669 56.4568 28.5731C56.4902 28.7445 56.5742 28.9022 56.6982 29.0262C56.8223 29.1502 56.9807 29.2349 57.1534 29.2695C60.7067 29.984 63.8654 31.9806 66.0169 34.8722C68.1685 37.7638 69.1593 41.344 68.797 44.9185C68.4347 48.4929 66.7458 51.8066 64.0572 54.2168C61.3686 56.627 57.8723 57.9618 54.2466 57.9623Z" fill="white" stroke="white" strokeWidth="1.5" />
      <path d="M96.8179 56.1094C96.394 56.1094 96.182 55.9554 96.182 55.6474C96.182 55.3954 96.3655 55.2274 96.7331 55.1434L97.7081 54.9754C98.3015 54.8634 98.683 54.7094 98.8526 54.5134C99.0506 54.3174 99.1493 53.9254 99.1493 53.3374V28.6414C99.1493 28.0534 99.0506 27.6614 98.8526 27.4654C98.683 27.2694 98.3015 27.1154 97.7081 27.0034L96.7331 26.8354C96.3655 26.7514 96.182 26.5834 96.182 26.3314C96.182 26.0234 96.394 25.8694 96.8179 25.8694H104.49C104.914 25.8694 105.126 26.0234 105.126 26.3314C105.126 26.5834 104.943 26.7514 104.575 26.8354L103.6 27.0034C103.007 27.1154 102.611 27.2694 102.413 27.4654C102.244 27.6614 102.159 28.0534 102.159 28.6414V53.3374C102.159 53.9254 102.244 54.3174 102.413 54.5134C102.611 54.7094 103.007 54.8634 103.6 54.9754L104.575 55.1434C104.943 55.2274 105.126 55.3954 105.126 55.6474C105.126 55.9554 104.914 56.1094 104.49 56.1094H96.8179ZM107.205 56.1094C106.781 56.1094 106.569 55.9554 106.569 55.6474C106.569 55.3954 106.752 55.2274 107.12 55.1434L107.629 55.0594C108.222 54.9474 108.604 54.7794 108.773 54.5554C108.97 54.3034 109.07 53.8834 109.07 53.2954V39.1834C109.07 38.6794 108.985 38.3434 108.815 38.1754C108.674 37.9794 108.405 37.8534 108.01 37.7974L107.12 37.6714C106.752 37.6434 106.569 37.4894 106.569 37.2094C106.569 36.9854 106.795 36.8314 107.247 36.7474C108.123 36.6074 108.787 36.3834 109.239 36.0754C109.72 35.7674 110.214 35.3894 110.723 34.9414C110.977 34.6894 111.189 34.5634 111.359 34.5634C111.613 34.5634 111.74 34.7314 111.74 35.0674V36.9574C111.74 37.1534 111.825 37.3074 111.995 37.4194C112.164 37.5034 112.348 37.4474 112.546 37.2514C113.704 36.1594 114.708 35.4174 115.555 35.0254C116.431 34.6334 117.307 34.4374 118.184 34.4374C119.003 34.4374 119.723 34.6614 120.345 35.1094C120.995 35.5294 121.475 36.1734 121.787 37.0414C121.871 37.2654 122.013 37.4054 122.211 37.4614C122.436 37.4894 122.648 37.4054 122.846 37.2094C124.005 36.1454 125.008 35.4174 125.856 35.0254C126.704 34.6334 127.566 34.4374 128.442 34.4374C129.629 34.4374 130.589 34.8854 131.324 35.7814C132.087 36.6494 132.469 37.9374 132.469 39.6454V53.2954C132.469 53.8834 132.554 54.3034 132.723 54.5554C132.921 54.7794 133.317 54.9334 133.91 55.0174L134.843 55.1434C135.153 55.1994 135.309 55.3674 135.309 55.6474C135.309 55.9554 135.139 56.1094 134.8 56.1094H127.552C127.156 56.1094 126.958 55.9554 126.958 55.6474C126.958 55.3674 127.113 55.1994 127.424 55.1434L128.018 55.0594C128.668 54.9754 129.092 54.8074 129.289 54.5554C129.487 54.3034 129.586 53.8834 129.586 53.2954V40.1074C129.586 38.7354 129.332 37.7694 128.823 37.2094C128.342 36.6494 127.679 36.3694 126.831 36.3694C125.983 36.3694 125.206 36.6354 124.5 37.1674C123.821 37.6714 123.27 38.3574 122.846 39.2254C122.423 40.0654 122.211 41.0033 122.211 42.0394V53.2954C122.211 53.8834 122.309 54.3034 122.507 54.5554C122.705 54.7794 123.115 54.9334 123.737 55.0174L124.669 55.1434C124.98 55.1994 125.135 55.3674 125.135 55.6474C125.135 55.9554 124.966 56.1094 124.627 56.1094H117.421C117.024 56.1094 116.826 55.9554 116.826 55.6474C116.826 55.3674 116.982 55.1994 117.293 55.1434L117.887 55.0594C118.48 54.9754 118.862 54.8074 119.031 54.5554C119.229 54.3034 119.328 53.8834 119.328 53.2954V40.1074C119.328 38.7354 119.074 37.7694 118.565 37.2094C118.084 36.6494 117.421 36.3694 116.573 36.3694C115.725 36.3694 114.947 36.6354 114.241 37.1674C113.563 37.6714 113.012 38.3574 112.588 39.2254C112.164 40.0654 111.952 41.0033 111.952 42.0394V53.2954C111.952 53.8834 112.037 54.3034 112.207 54.5554C112.404 54.8074 112.8 54.9614 113.394 55.0174L114.538 55.1434C114.849 55.1994 115.004 55.3534 115.004 55.6054C115.004 55.9414 114.792 56.1094 114.368 56.1094H107.205ZM140.866 56.4874C139.679 56.4874 138.704 56.1234 137.941 55.3954C137.178 54.6394 136.797 53.6454 136.797 52.4134C136.797 51.2094 137.178 50.0753 137.941 49.0114C138.704 47.9194 139.75 46.9394 141.078 46.0714C142.406 45.2034 143.918 44.5034 145.614 43.9714C145.981 43.8594 146.165 43.6214 146.165 43.2574V39.4354C146.165 38.0914 145.953 37.1394 145.529 36.5794C145.105 35.9914 144.525 35.6974 143.791 35.6974C143.084 35.6974 142.434 36.0194 141.841 36.6634C141.276 37.2794 140.866 38.3294 140.612 39.8134C140.471 40.7094 140.159 41.3674 139.679 41.7874C139.227 42.1794 138.76 42.3754 138.28 42.3754C137.489 42.3754 137.093 41.9834 137.093 41.1994C137.093 40.3874 137.319 39.5894 137.772 38.8054C138.252 37.9934 138.874 37.2654 139.637 36.6214C140.4 35.9494 141.234 35.4174 142.138 35.0254C143.042 34.6334 143.947 34.4374 144.851 34.4374C147.648 34.4374 149.047 36.0474 149.047 39.2674V52.1194C149.047 53.2954 149.344 53.8834 149.937 53.8834C150.305 53.8834 150.644 53.6454 150.955 53.1694C151.265 52.6654 151.421 51.8254 151.421 50.6494C151.421 50.2014 151.604 49.9774 151.972 49.9774C152.311 49.9774 152.481 50.2154 152.481 50.6914C152.481 52.7354 152.113 54.2194 151.379 55.1434C150.672 56.0394 149.866 56.4874 148.962 56.4874C148.284 56.4874 147.747 56.2214 147.352 55.6894C146.956 55.1294 146.687 54.4714 146.546 53.7154C146.518 53.4354 146.391 53.2954 146.165 53.2954C145.967 53.2674 145.769 53.3934 145.571 53.6734C144.893 54.5974 144.201 55.2974 143.494 55.7734C142.787 56.2494 141.912 56.4874 140.866 56.4874ZM142.01 54.5554C142.745 54.5554 143.423 54.3034 144.045 53.7994C144.667 53.2674 145.176 52.5674 145.571 51.6994C145.967 50.8314 146.165 49.8514 146.165 48.7594V45.6934C146.165 45.1614 145.868 45.0074 145.274 45.2314C143.55 45.8474 142.209 46.7014 141.247 47.7934C140.315 48.8574 139.849 50.1454 139.849 51.6574C139.849 53.5894 140.569 54.5554 142.01 54.5554Z" className="fill-black dark:fill-white" />
    </svg>
  )
}

function DownloadModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const closeButtonRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    if (isOpen) {
      closeButtonRef.current?.focus()

      const handleEscape = (e: KeyboardEvent) => {
        if (e.key === 'Escape') onClose()
      }
      document.addEventListener('keydown', handleEscape)
      return () => document.removeEventListener('keydown', handleEscape)
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div className="fixed inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose} />
      <div className="relative z-10 mx-4 w-full max-w-md rounded-2xl bg-white p-6 shadow-xl dark:bg-zinc-900">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-zinc-400 transition-colors hover:text-zinc-600 focus-visible:text-zinc-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-500 rounded-sm dark:hover:text-zinc-200 dark:focus-visible:text-zinc-200"
          aria-label="Close modal"
        >
          <XIcon className="h-5 w-5" aria-hidden="true" />
        </button>
        <h3 id="modal-title" className="mb-4 text-lg font-medium text-zinc-900 dark:text-zinc-100">Opening Ima</h3>
        <div className="space-y-3 text-sm text-zinc-600 dark:text-zinc-400">
          <p>Since Ima is not notarized by Apple, macOS may block it from opening.</p>
          <p>If the app doesn&apos;t open:</p>
          <ol className="list-decimal space-y-2 pl-5">
            <li>Go to <span className="font-medium text-zinc-900 dark:text-zinc-100">System Settings → Privacy & Security</span></li>
            <li>Scroll down to the Security section</li>
            <li>You&apos;ll see a message about Ima being blocked</li>
            <li>Click <span className="font-medium text-zinc-900 dark:text-zinc-100">Open Anyway</span></li>
          </ol>
        </div>
        <button
          ref={closeButtonRef}
          onClick={onClose}
          className="mt-6 w-full rounded-lg bg-zinc-900 py-2.5 text-sm font-medium text-white transition-colors hover:bg-zinc-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-500 focus-visible:ring-offset-2 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-300"
        >
          Got it
        </button>
      </div>
    </div>
  )
}


const IMA_RED = '#CB1B45'

const FADING_TASKS = [
  'Water the bonsai',
  'Reply to that one email',
  'Stretch for ten minutes',
  'Call home',
  'Read 5 pages',
]

/** A task that lives, drains, and fades — the whole product in one chip. */
function FadingTask() {
  const [cycle, setCycle] = useState(0)

  return (
    <div className="flex flex-col items-center gap-4">
      <motion.div
        key={cycle}
        initial={{ opacity: 0, y: 10, filter: 'blur(4px)' }}
        animate={{
          opacity: [0, 1, 1, 0],
          y: [10, 0, 0, -8],
          filter: ['blur(4px)', 'blur(0px)', 'blur(0px)', 'blur(6px)'],
        }}
        transition={{ duration: 8, times: [0, 0.06, 0.88, 1], ease: 'easeInOut' }}
        onAnimationComplete={() => setCycle((c) => c + 1)}
        className="w-72 overflow-hidden rounded-2xl border bg-card shadow-sm"
      >
        <div className="flex items-center gap-3 px-4 py-3.5">
          <span
            className="size-4 shrink-0 rounded-full border-2"
            style={{ borderColor: IMA_RED }}
            aria-hidden
          />
          <span className="text-sm">{FADING_TASKS[cycle % FADING_TASKS.length]}</span>
        </div>
        <motion.div
          className="h-0.5"
          style={{ backgroundColor: IMA_RED, originX: 0 }}
          initial={{ scaleX: 1 }}
          animate={{ scaleX: 0 }}
          transition={{ duration: 8, ease: 'linear' }}
        />
      </motion.div>
      <p className="text-xs text-muted-foreground">
        Tasks in Ima fade like this. For real.
      </p>
    </div>
  )
}

function Principle({ n, title, body }: { n: string; title: string; body: string }) {
  return (
    <div className="rounded-2xl border bg-card p-5">
      <span className="font-mono text-xs" style={{ color: IMA_RED }}>
        {n}
      </span>
      <h3 className="mt-2 font-medium">{title}</h3>
      <p className="mt-1.5 text-sm text-muted-foreground">{body}</p>
    </div>
  )
}

function QA({ q, children }: { q: string; children: React.ReactNode }) {
  return (
    <details className="group border-b py-4">
      <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-medium [&::-webkit-details-marker]:hidden">
        {q}
        <ChevronDown
          className="size-4 shrink-0 text-muted-foreground transition-transform duration-200 group-open:rotate-180"
          aria-hidden
        />
      </summary>
      <div className="mt-3 space-y-3 text-sm leading-relaxed text-muted-foreground">
        {children}
      </div>
    </details>
  )
}

const fadeUp = {
  initial: { opacity: 0, y: 16, filter: 'blur(6px)' },
  whileInView: { opacity: 1, y: 0, filter: 'blur(0px)' },
  viewport: { once: true, amount: 0.3 },
  transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const },
}

export default function ImaPage() {
  usePageMeta(
    "Ima | Manage Tasks that Matter",
    "A quiet macOS app where tasks exist only for the time you decide they deserve",
  )
  const [showModal, setShowModal] = useState(false)

  const handleCloseModal = useCallback(() => setShowModal(false), [])

  const handleDownload = useCallback(() => {
    const link = document.createElement('a')
    link.href = '/Ima.zip'
    link.download = 'Ima.zip'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
    setShowModal(true)
  }, [])

  const downloadButton = (
    <button
      onClick={handleDownload}
      className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-white shadow-lg transition-transform hover:scale-[1.03] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#CB1B45]/50 focus-visible:ring-offset-2"
      style={{ backgroundColor: IMA_RED }}
    >
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M18.71 19.5C17.88 20.74 17 21.95 15.66 21.97C14.32 22 13.89 21.18 12.37 21.18C10.84 21.18 10.37 21.95 9.09997 22C7.78997 22.05 6.79997 20.68 5.95997 19.47C4.24997 17 2.93997 12.45 4.69997 9.39C5.56997 7.87 7.12997 6.91 8.81997 6.88C10.1 6.86 11.32 7.75 12.11 7.75C12.89 7.75 14.37 6.68 15.92 6.84C16.57 6.87 18.39 7.1 19.56 8.82C19.47 8.88 17.39 10.1 17.41 12.63C17.44 15.65 20.06 16.66 20.09 16.67C20.06 16.74 19.67 18.11 18.71 19.5ZM13 3.5C13.73 2.67 14.94 2.04 15.94 2C16.07 3.17 15.6 4.35 14.9 5.19C14.21 6.04 13.07 6.7 11.95 6.61C11.8 5.46 12.36 4.26 13 3.5Z" /></svg>
      Download on macOS
    </button>
  )

  return (
    <main id="main-content" className="overflow-hidden">
      <DownloadModal isOpen={showModal} onClose={handleCloseModal} />

      {/* Hero */}
      <section className="relative flex min-h-[75svh] flex-col items-center justify-center px-6 text-center">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-10"
          style={{
            background:
              'radial-gradient(ellipse 60% 45% at 50% 38%, rgba(203, 27, 69, 0.09), transparent 70%)',
          }}
        />
        <span
          aria-hidden
          className="pointer-events-none absolute top-1/2 left-1/2 -z-10 -translate-x-1/2 -translate-y-1/2 text-[11rem] font-bold text-[#CB1B45]/[0.05] select-none sm:text-[17rem] dark:text-[#CB1B45]/[0.08]"
        >
          いま
        </span>

        <motion.div
          initial={{ opacity: 0, scale: 0.94, filter: 'blur(6px)' }}
          animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <ImaLogo className="mx-auto h-auto w-28" />
        </motion.div>

        <motion.h1
          {...fadeUp}
          whileInView={undefined}
          animate={fadeUp.whileInView}
          transition={{ ...fadeUp.transition, delay: 0.15 }}
          className="mt-8 max-w-xl text-4xl font-semibold tracking-tight text-balance sm:text-5xl"
        >
          Only what matters, now.
        </motion.h1>

        <motion.p
          {...fadeUp}
          whileInView={undefined}
          animate={fadeUp.whileInView}
          transition={{ ...fadeUp.transition, delay: 0.28 }}
          className="mt-4 max-w-md text-muted-foreground"
        >
          A quiet macOS app where tasks exist only for the time you decide they
          deserve.
        </motion.p>

        <motion.div
          {...fadeUp}
          whileInView={undefined}
          animate={fadeUp.whileInView}
          transition={{ ...fadeUp.transition, delay: 0.4 }}
          className="mt-8"
        >
          {downloadButton}
        </motion.div>
      </section>

      {/* Live demo */}
      <motion.section {...fadeUp} className="px-6 py-10">
        <FadingTask />
      </motion.section>

      {/* Manifesto */}
      <motion.section {...fadeUp} className="mx-auto max-w-2xl px-6 py-20 text-center">
        <p className="text-2xl font-medium tracking-tight text-balance sm:text-3xl">
          Attention is finite.{' '}
          <span style={{ color: IMA_RED }}>Time is a choice.</span>
        </p>
        <p className="mt-6 text-muted-foreground">
          <span className="italic">Ima</span> (いま) comes from Japanese, and
          means <span className="italic">"now."</span> When you create a task,
          you also choose how long it's worth caring about — hours or days, up
          to a maximum of seven. When that time ends, the task disappears.
        </p>
      </motion.section>

      {/* Principles */}
      <motion.section {...fadeUp} className="mx-auto max-w-3xl px-6 pb-20">
        <div className="grid gap-4 sm:grid-cols-3">
          <Principle
            n="01"
            title="No backlog."
            body="When the time window ends, the task disappears. Ima does not keep things alive by default."
          />
          <Principle
            n="02"
            title="No carryover."
            body="The maximum time is intentionally capped. If something matters longer, it must be re-chosen, consciously."
          />
          <Principle
            n="03"
            title="No guilt."
            body="Setting a task and its time is a moment of honesty. If that honesty no longer holds, the task is allowed to fade."
          />
        </div>
      </motion.section>

      {/* Preview */}
      <motion.section {...fadeUp} className="mx-auto max-w-3xl px-6 pb-20">
        <img
          src={imaPreview}
          alt="Ima app preview"
          className="w-full rounded-2xl border shadow-xl"
        />
      </motion.section>

      {/* Philosophy Q&A */}
      <motion.section {...fadeUp} className="mx-auto max-w-2xl px-6 pb-24">
        <h2 className="mb-4 text-lg font-medium">The fine print, quietly</h2>

        <QA q="Why is there no edit or delete?">
          <p>
            Once a task is created and time is set, the only choices are: do it
            and mark it complete, or let it go.
          </p>
          <p>
            Editing and deleting often become ways to renegotiate intention,
            postpone clarity, or keep tasks around without deciding.
          </p>
        </QA>

        <QA q="Why are there no recurring tasks or insights (yet)?">
          <p>
            Repeating tasks often outlive their importance simply because they
            repeat. Recurring tasks will only be added if they can exist
            without stacking missed instances, creating invisible pressure, or
            extending attention by default. Each instance must earn its time.
          </p>
          <p>
            Beyond simple counters, the app does not interpret behaviour or
            suggest patterns. Insight systems often turn attention into
            performance. The goal is clarity, not optimisation.
          </p>
        </QA>

        <QA q="What is Ima not?">
          <p>
            Not a task manager for everything. Not a system for long-term
            planning. Not a place to store intentions indefinitely.
          </p>
          <p>Ima is a small space for what matters within the time you choose.</p>
        </QA>
      </motion.section>

      {/* Closing CTA */}
      <motion.section {...fadeUp} className="flex flex-col items-center gap-6 px-6 pb-28 text-center">
        <p className="text-lg font-medium">Choose what deserves your now.</p>
        {downloadButton}
      </motion.section>
    </main>
  )
}
