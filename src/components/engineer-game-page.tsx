import { useCallback, useEffect, useRef, useState } from "react"

import { usePageMeta } from "@/hooks/use-page-meta"

// Pixel art patterns (8x8 grids, 1 = filled, 0 = transparent)
const PIXEL_PATTERNS = {
  player: [
    [0, 0, 1, 1, 1, 1, 0, 0],
    [0, 1, 1, 1, 1, 1, 1, 0],
    [0, 1, 0, 1, 1, 0, 1, 0],
    [0, 1, 1, 1, 1, 1, 1, 0],
    [0, 0, 1, 1, 1, 1, 0, 0],
    [0, 0, 1, 1, 1, 1, 0, 0],
    [0, 1, 0, 1, 1, 0, 1, 0],
    [0, 1, 0, 0, 0, 0, 1, 0],
  ],
  playerShield: [
    [1, 1, 1, 1, 1, 1, 1, 1],
    [1, 0, 1, 1, 1, 1, 0, 1],
    [1, 1, 0, 1, 1, 0, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1],
    [1, 0, 1, 1, 1, 1, 0, 1],
    [1, 0, 1, 1, 1, 1, 0, 1],
    [1, 1, 0, 1, 1, 0, 1, 1],
    [1, 1, 0, 0, 0, 0, 1, 1],
  ],
  meeting: [
    [1, 1, 1, 1, 0, 0, 0, 0],
    [1, 1, 1, 1, 0, 0, 0, 0],
    [1, 1, 0, 0, 0, 1, 0, 0],
    [1, 1, 0, 0, 0, 0, 1, 0],
    [1, 1, 0, 0, 0, 0, 1, 0],
    [1, 1, 0, 0, 0, 1, 0, 0],
    [1, 1, 1, 1, 0, 0, 0, 0],
    [1, 1, 1, 1, 0, 0, 0, 0],
  ],
  bug: [
    [0, 1, 0, 0, 0, 0, 1, 0],
    [0, 0, 1, 0, 0, 1, 0, 0],
    [1, 1, 1, 1, 1, 1, 1, 1],
    [0, 1, 0, 1, 1, 0, 1, 0],
    [0, 1, 0, 1, 1, 0, 1, 0],
    [1, 1, 1, 1, 1, 1, 1, 1],
    [0, 0, 1, 0, 0, 1, 0, 0],
    [0, 1, 0, 0, 0, 0, 1, 0],
  ],
  pay: [
    [0, 0, 1, 1, 1, 0, 0, 0],
    [0, 1, 1, 0, 0, 1, 1, 0],
    [0, 1, 1, 0, 0, 0, 0, 0],
    [0, 0, 1, 1, 1, 1, 0, 0],
    [0, 0, 0, 0, 0, 1, 1, 0],
    [0, 1, 1, 0, 0, 1, 1, 0],
    [0, 0, 1, 1, 1, 0, 0, 0],
    [0, 0, 0, 1, 1, 0, 0, 0],
  ],
  skill: [
    [1, 1, 1, 1, 1, 1, 1, 0],
    [1, 0, 0, 0, 0, 0, 1, 1],
    [1, 0, 1, 1, 1, 0, 1, 1],
    [1, 0, 1, 0, 1, 0, 1, 1],
    [1, 0, 1, 1, 1, 0, 1, 1],
    [1, 0, 0, 0, 0, 0, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1],
    [0, 1, 1, 1, 1, 1, 1, 0],
  ],
} as const

const PIXEL_SIZE = 5
const PLAYER_SIZE = 8 * PIXEL_SIZE
const ITEM_SIZE = 8 * PIXEL_SIZE
const CANVAS_WIDTH = 800
const CANVAS_HEIGHT = 400
const GROUND_HEIGHT = 60
const GROUND_Y = CANVAS_HEIGHT - GROUND_HEIGHT - PLAYER_SIZE
const MIN_SPAWN_DISTANCE = 200

// Physics/tuning. All rates are per 60fps-frame; the loop scales them by
// delta time, so the game plays identically at 60Hz, 120Hz, or 144Hz.
const GRAVITY = 0.5
const JUMP_FORCE = -12
const BASE_SPEED = 5
const SPEED_PER_LEVEL = 0.5 // world speeds up on each level
const MAX_SPEED = 11
const LEVEL_UP_SCORE = 1000 // level up every N points
const LEVEL_UP_BONUS = 100
const SHIELD_DURATION_MS = 8000
const PAYDAY_FRAMES = 180 // salary tick every ~3s
const OBSTACLE_SPAWN_RATE = 0.015
const PICKUP_SPAWN_RATE = 0.012
const MAX_DT = 3 // clamp huge frames (tab switch) to 3x a 60fps step

type Phase = "idle" | "running" | "paused" | "over"

interface Item {
  x: number
  y: number
  width: number
  height: number
  type: "meeting" | "bug" | "pay" | "skill"
}

interface GameState {
  player: {
    x: number
    y: number
    width: number
    height: number
    velocityY: number
    isJumping: boolean
  }
  obstacles: Item[]
  pickups: Item[]
  score: number
  pay: number
  level: number
  burnout: number
  streak: number
  monthTimer: number
  shieldMsLeft: number
  levelFlashMs: number
}

const initialState = (): GameState => ({
  player: {
    x: 80,
    y: GROUND_Y,
    width: PLAYER_SIZE,
    height: PLAYER_SIZE,
    velocityY: 0,
    isJumping: false,
  },
  obstacles: [],
  pickups: [],
  score: 0,
  pay: 0,
  level: 1,
  burnout: 0,
  streak: 0,
  monthTimer: 0,
  shieldMsLeft: 0,
  levelFlashMs: 0,
})

const overlaps = (a: Item | GameState["player"], b: Item) =>
  a.x < b.x + b.width &&
  a.x + a.width > b.x &&
  a.y < b.y + b.height &&
  a.y + a.height > b.y

const worldSpeed = (level: number) =>
  Math.min(BASE_SPEED + (level - 1) * SPEED_PER_LEVEL, MAX_SPEED)

export default function EngineerGamePage() {
  usePageMeta(
    "Engineer #99 Game | Advaith Krishna A",
    "A pixel-style endless runner game but for engineers in tech",
  )
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const stateRef = useRef<GameState>(initialState())
  const phaseRef = useRef<Phase>("idle")
  const [phase, setPhase] = useState<Phase>("idle")

  const transition = useCallback((next: Phase) => {
    phaseRef.current = next
    setPhase(next)
  }, [])

  const startGame = useCallback(() => {
    stateRef.current = initialState()
    transition("running")
  }, [transition])

  const togglePause = useCallback(() => {
    if (phaseRef.current === "running") transition("paused")
    else if (phaseRef.current === "paused") transition("running")
  }, [transition])

  const jump = useCallback(() => {
    const s = stateRef.current
    if (phaseRef.current !== "running") return
    if (!s.player.isJumping && s.player.y >= GROUND_Y - 2) {
      s.player.velocityY = JUMP_FORCE
      s.player.isJumping = true
    }
  }, [])

  // Advance the simulation by dt (measured in 60fps-frame units) and dtMs.
  const update = useCallback(
    (dt: number, dtMs: number) => {
      const s = stateRef.current
      const speed = worldSpeed(s.level)

      // Player physics
      s.player.velocityY += GRAVITY * dt
      s.player.y += s.player.velocityY * dt
      if (s.player.y >= GROUND_Y) {
        s.player.y = GROUND_Y
        s.player.velocityY = 0
        s.player.isJumping = false
      }

      // Move world
      for (const item of [...s.obstacles, ...s.pickups]) item.x -= speed * dt
      s.obstacles = s.obstacles.filter((o) => o.x > -o.width)
      s.pickups = s.pickups.filter((p) => p.x > -p.width)

      // Spawns (probability scaled by dt so spawn density is fps-independent)
      const rightmostX = Math.max(
        0,
        ...s.obstacles.map((o) => o.x),
        ...s.pickups.map((p) => p.x),
      )
      const roomToSpawn = rightmostX < CANVAS_WIDTH - MIN_SPAWN_DISTANCE
      if (roomToSpawn && Math.random() < OBSTACLE_SPAWN_RATE * dt) {
        s.obstacles.push({
          x: CANVAS_WIDTH,
          y: CANVAS_HEIGHT - GROUND_HEIGHT - ITEM_SIZE,
          width: ITEM_SIZE,
          height: ITEM_SIZE,
          type: Math.random() < 0.5 ? "meeting" : "bug",
        })
      }
      if (roomToSpawn && Math.random() < PICKUP_SPAWN_RATE * dt) {
        const minY = CANVAS_HEIGHT - GROUND_HEIGHT - ITEM_SIZE - 100
        const maxY = CANVAS_HEIGHT - GROUND_HEIGHT - ITEM_SIZE - 30
        s.pickups.push({
          x: CANVAS_WIDTH,
          y: minY + Math.random() * (maxY - minY),
          width: ITEM_SIZE,
          height: ITEM_SIZE,
          type: Math.random() < 0.88 ? "pay" : "skill",
        })
      }

      // Obstacle collisions
      const hasShield = s.shieldMsLeft > 0
      for (const obstacle of [...s.obstacles]) {
        if (!overlaps(s.player, obstacle)) continue
        s.obstacles = s.obstacles.filter((o) => o !== obstacle)
        if (hasShield) {
          s.shieldMsLeft = 0
          continue
        }
        if (obstacle.type === "meeting") {
          s.burnout += 20
        } else {
          s.pay = Math.max(0, s.pay - 20 * s.level)
          s.burnout += 25
        }
        s.streak = 0
      }

      // Pickup collisions
      for (const pickup of [...s.pickups]) {
        if (!overlaps(s.player, pickup)) continue
        s.pickups = s.pickups.filter((p) => p !== pickup)
        const multiplier = Math.floor(s.streak / 10) + 1
        if (pickup.type === "pay") {
          s.pay += 100 * multiplier * s.level
          s.score += 50 * multiplier
        } else {
          s.shieldMsLeft = SHIELD_DURATION_MS
        }
        s.streak += 1
      }

      // Score, leveling, salary, decay
      s.score += dt
      const level = Math.floor(s.score / LEVEL_UP_SCORE) + 1
      if (level > s.level) {
        s.level = level
        s.pay += LEVEL_UP_BONUS
        s.levelFlashMs = 1500
      }
      s.monthTimer += dt
      if (s.monthTimer >= PAYDAY_FRAMES) {
        s.pay += s.level * 10
        s.monthTimer = 0
      }
      s.burnout = Math.max(0, s.burnout - 0.05 * dt)
      s.shieldMsLeft = Math.max(0, s.shieldMsLeft - dtMs)
      s.levelFlashMs = Math.max(0, s.levelFlashMs - dtMs)

      if (s.burnout >= 100) transition("over")
    },
    [transition],
  )

  const draw = useCallback(() => {
    const ctx = canvasRef.current?.getContext("2d")
    if (!ctx) return
    const s = stateRef.current
    const currentPhase = phaseRef.current

    ctx.imageSmoothingEnabled = false
    const isDark = document.documentElement.classList.contains("dark")
    const bg = isDark ? "#09090b" : "#ffffff"
    const fg = isDark ? "#ffffff" : "#000000"

    ctx.fillStyle = bg
    ctx.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT)

    // Ground
    ctx.fillStyle = fg
    ctx.fillRect(0, CANVAS_HEIGHT - GROUND_HEIGHT, CANVAS_WIDTH, GROUND_HEIGHT)
    ctx.fillStyle = bg
    for (let x = 0; x < CANVAS_WIDTH; x += 20) {
      ctx.fillRect(x, CANVAS_HEIGHT - GROUND_HEIGHT + 5, 10, 2)
    }

    const drawPattern = (
      pattern: readonly (readonly number[])[],
      x: number,
      y: number,
    ) => {
      ctx.fillStyle = fg
      for (let row = 0; row < pattern.length; row++) {
        for (let col = 0; col < pattern[row].length; col++) {
          if (pattern[row][col] === 1) {
            ctx.fillRect(
              x + col * PIXEL_SIZE,
              y + row * PIXEL_SIZE,
              PIXEL_SIZE,
              PIXEL_SIZE,
            )
          }
        }
      }
    }

    drawPattern(
      s.shieldMsLeft > 0 ? PIXEL_PATTERNS.playerShield : PIXEL_PATTERNS.player,
      s.player.x,
      s.player.y,
    )
    for (const o of s.obstacles) drawPattern(PIXEL_PATTERNS[o.type], o.x, o.y)
    for (const p of s.pickups) drawPattern(PIXEL_PATTERNS[p.type], p.x, p.y)

    // HUD
    if (currentPhase !== "idle") {
      ctx.fillStyle = fg
      ctx.font = "bold 14px monospace"
      ctx.fillText(`SCORE: ${Math.floor(s.score)}`, 20, 25)
      ctx.fillText(`PAY: $${s.pay}`, 20, 45)
      ctx.fillText(`LEVEL: ${s.level}`, 160, 25)
      ctx.fillText(`STREAK: ${s.streak}x`, 160, 45)

      const meterWidth = 100
      const meterHeight = 12
      const meterX = CANVAS_WIDTH - meterWidth - 15
      ctx.strokeStyle = fg
      ctx.lineWidth = 2
      ctx.strokeRect(meterX, 15, meterWidth, meterHeight)
      ctx.fillRect(
        meterX + 2,
        17,
        (s.burnout / 100) * (meterWidth - 4),
        meterHeight - 4,
      )
      ctx.font = "10px monospace"
      ctx.fillText("BURNOUT", meterX, 39)

      if (s.shieldMsLeft > 0) {
        ctx.font = "12px monospace"
        ctx.fillText("◈ SHIELD", 300, 25)
      }

      if (s.levelFlashMs > 0 && currentPhase === "running") {
        ctx.font = "bold 22px monospace"
        ctx.textAlign = "center"
        ctx.fillText(`LEVEL ${s.level}!`, CANVAS_WIDTH / 2, 80)
        ctx.textAlign = "left"
      }
    }

    const overlay = (title: string, subtitle: string, alpha: number) => {
      ctx.fillStyle = isDark
        ? `rgba(9, 9, 11, ${alpha})`
        : `rgba(255, 255, 255, ${alpha})`
      ctx.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT)
      ctx.fillStyle = fg
      ctx.textAlign = "center"
      ctx.font = "bold 36px monospace"
      ctx.fillText(title, CANVAS_WIDTH / 2, CANVAS_HEIGHT / 2 - 50)
      ctx.font = "14px monospace"
      ctx.fillText(subtitle, CANVAS_WIDTH / 2, CANVAS_HEIGHT / 2 + 50)
      ctx.textAlign = "left"
    }

    if (currentPhase === "over") {
      overlay("BURNOUT!", "TAP OR PRESS [R] TO RESTART", 0.95)
      ctx.fillStyle = fg
      ctx.textAlign = "center"
      ctx.font = "18px monospace"
      ctx.fillText(
        `SCORE: ${Math.floor(s.score)}  |  PAY: $${s.pay}  |  LEVEL: ${s.level}`,
        CANVAS_WIDTH / 2,
        CANVAS_HEIGHT / 2,
      )
      ctx.textAlign = "left"
    } else if (currentPhase === "paused") {
      overlay("PAUSED", "PRESS [P] TO CONTINUE", 0.8)
    }
  }, [])

  // Game loop — delta-time based so speed is identical on any refresh rate.
  useEffect(() => {
    let raf = 0
    let last = performance.now()
    const loop = (now: number) => {
      const dtMs = now - last
      last = now
      // dt is in units of one 60fps frame; clamped so a background tab
      // doesn't fast-forward the game on return.
      const dt = Math.min(dtMs / (1000 / 60), MAX_DT)
      if (phaseRef.current === "running") update(dt, dtMs)
      draw()
      raf = requestAnimationFrame(loop)
    }
    raf = requestAnimationFrame(loop)
    return () => cancelAnimationFrame(raf)
  }, [update, draw])

  // Controls — subscribed once; handlers read refs.
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.code === "Space" || e.code === "ArrowUp") {
        e.preventDefault()
        if (e.repeat) return
        if (phaseRef.current === "idle" || phaseRef.current === "over")
          startGame()
        else jump()
      } else if (e.code === "Enter" && phaseRef.current === "idle") {
        startGame()
      } else if (e.code === "KeyR") {
        startGame()
      } else if (e.code === "KeyP") {
        togglePause()
      }
    }

    const onTouch = (e: TouchEvent) => {
      const target = e.target as HTMLElement
      if (target.closest("button") || target.closest("a")) return
      e.preventDefault()
      if (phaseRef.current === "idle" || phaseRef.current === "over")
        startGame()
      else jump()
    }

    window.addEventListener("keydown", onKeyDown)
    document.addEventListener("touchstart", onTouch, { passive: false })
    return () => {
      window.removeEventListener("keydown", onKeyDown)
      document.removeEventListener("touchstart", onTouch)
    }
  }, [startGame, jump, togglePause])

  return (
    <main
      id="main-content"
      className="min-h-screen bg-white dark:bg-zinc-950 flex flex-col items-center pt-24 pb-8 px-4"
    >
      <div className="mb-4 text-center">
        <h1 className="mb-8 text-lg md:text-xl font-bold text-zinc-900 dark:text-zinc-100 font-mono">
          ▓▒░ ENGINEER #099 ░▒▓
        </h1>
      </div>

      {phase !== "idle" && (
        <div className="mb-2 flex gap-2">
          <button
            onClick={togglePause}
            className="px-3 py-1 bg-zinc-200 dark:bg-zinc-700 text-zinc-900 dark:text-zinc-100 font-mono text-xs hover:bg-zinc-300 dark:hover:bg-zinc-600 transition-colors"
          >
            {phase === "paused" ? "RESUME (P)" : "PAUSE (P)"}
          </button>
          <button
            onClick={startGame}
            className="px-3 py-1 bg-zinc-200 dark:bg-zinc-700 text-zinc-900 dark:text-zinc-100 font-mono text-xs hover:bg-zinc-300 dark:hover:bg-zinc-600 transition-colors"
          >
            RESTART (R)
          </button>
        </div>
      )}

      <div className="relative w-full max-w-3xl">
        <canvas
          ref={canvasRef}
          width={CANVAS_WIDTH}
          height={CANVAS_HEIGHT}
          className="block border border-zinc-300 dark:border-zinc-700 touch-none w-full h-auto"
          style={{ imageRendering: "pixelated" }}
          tabIndex={0}
        />

        {phase === "idle" && (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-white/95 dark:bg-zinc-950/95 p-4">
            <GameLegend size={20} />
            <button
              onClick={startGame}
              className="mt-8 px-5 py-2 bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 font-mono font-bold text-xs hover:bg-zinc-700 dark:hover:bg-zinc-300 transition-colors"
            >
              START GAME
            </button>
            <p className="mt-2 text-[10px] text-zinc-500 font-mono">
              TAP or SPACE to jump · LEVEL UP every {LEVEL_UP_SCORE} points
            </p>
          </div>
        )}
      </div>

      {phase !== "idle" && (
        <div className="mt-4 w-full max-w-3xl px-2">
          <GameLegend size={16} />
        </div>
      )}
    </main>
  )
}

function GameLegend({ size }: { size: number }) {
  return (
    <div className="grid grid-cols-2 gap-4 font-mono text-[10px] md:text-xs max-w-md w-full">
      <div>
        <div className="font-bold mb-1 text-zinc-900 dark:text-zinc-100">
          ✓ REWARDS
        </div>
        <div className="space-y-1 text-zinc-700 dark:text-zinc-300">
          <div className="flex items-center gap-1">
            <PixelIcon pattern={PIXEL_PATTERNS.pay} size={size} />
            <span>PAY</span>
          </div>
          <div className="flex items-center gap-1">
            <PixelIcon pattern={PIXEL_PATTERNS.skill} size={size} />
            <span>SKILLS (TEMP SHIELD)</span>
          </div>
        </div>
      </div>
      <div>
        <div className="font-bold mb-1 text-zinc-900 dark:text-zinc-100">
          ✗ OBSTACLES
        </div>
        <div className="space-y-1 text-zinc-700 dark:text-zinc-300">
          <div className="flex items-center gap-1">
            <PixelIcon pattern={PIXEL_PATTERNS.meeting} size={size} />
            <span>MEETING</span>
          </div>
          <div className="flex items-center gap-1">
            <PixelIcon pattern={PIXEL_PATTERNS.bug} size={size} />
            <span>BUG</span>
          </div>
        </div>
      </div>
    </div>
  )
}

function PixelIcon({
  pattern,
  size = 24,
}: {
  pattern: readonly (readonly number[])[]
  size?: number
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const ctx = canvasRef.current?.getContext("2d")
    if (!ctx) return
    ctx.imageSmoothingEnabled = false
    ctx.clearRect(0, 0, size, size)
    ctx.fillStyle = document.documentElement.classList.contains("dark")
      ? "#ffffff"
      : "#000000"
    const scale = size / 8
    for (let row = 0; row < pattern.length; row++) {
      for (let col = 0; col < pattern[row].length; col++) {
        if (pattern[row][col] === 1) {
          ctx.fillRect(col * scale, row * scale, scale, scale)
        }
      }
    }
  }, [pattern, size])

  return (
    <canvas
      ref={canvasRef}
      width={size}
      height={size}
      className="shrink-0"
      style={{ imageRendering: "pixelated" }}
    />
  )
}
