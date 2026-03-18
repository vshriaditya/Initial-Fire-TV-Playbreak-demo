"use client"

import { useState, useEffect } from "react"
import { Check, Gamepad2 } from "lucide-react"
import type { GameData } from "@/app/page"

interface GameScreenProps {
  game: GameData
  onComplete: (won: boolean) => void
}

export function GameScreen({ game, onComplete }: GameScreenProps) {
  const [timeLeft, setTimeLeft] = useState(10)
  const [gameState, setGameState] = useState<"playing" | "won" | "lost">("playing")
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
  const [focusedAnswer, setFocusedAnswer] = useState(0)

  useEffect(() => {
    if (gameState !== "playing") return

    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer)
          if (selectedAnswer === null) {
            setGameState("lost")
          }
          return 0
        }
        return prev - 1
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [gameState, selectedAnswer])

  useEffect(() => {
    if (gameState === "won" || gameState === "lost") {
      const won = gameState === "won"
      const timeout = setTimeout(() => {
        onComplete(won)
      }, 2500)
      return () => clearTimeout(timeout)
    }
  }, [gameState]) // eslint-disable-line react-hooks/exhaustive-deps

  const handleAnswer = (index: number) => {
    if (selectedAnswer !== null || gameState !== "playing") return
    setSelectedAnswer(index)

    if (index === game.correctAnswer) {
      setGameState("won")
    } else {
      setGameState("lost")
    }
  }

  const showResult = selectedAnswer !== null || gameState !== "playing"
  const isWin = gameState === "won"

  return (
    <div className="fixed inset-0 z-40">
      <div className="absolute inset-0 bg-[rgba(6,7,9,0.72)] backdrop-blur-[4px]" />

      <div className="absolute inset-0 flex items-center justify-center p-8">
        <div
          className="relative w-full max-w-[654px] overflow-hidden rounded-[24px] border border-white/35"
          style={{
            boxShadow: isWin
              ? "0 0 24px rgba(78, 233, 132, 0.1), 0 20px 44px rgba(0, 0, 0, 0.52)"
              : "0 20px 44px rgba(0, 0, 0, 0.52)",
          }}
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(56,88,134,0.18),transparent_32%),linear-gradient(180deg,#0d1721_0%,#0a1119_100%)]" />
          <div className="absolute inset-0 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]" />

          <div className="relative px-12 py-10">
            <div className="mb-8 flex items-center justify-between">
              <div className="flex items-center gap-16">
                <BrandHeader />
                <div className="flex items-center gap-2">
                  <span className="text-[18px] font-semibold text-white">Playbreak</span>
                  <Gamepad2 className="h-5 w-5 text-[#f07a3c]" />
                </div>
              </div>

              <div className="relative h-[74px] w-[74px]">
                {gameState === "playing" ? (
                  <>
                    <svg className="h-full w-full -rotate-90">
                      <circle
                        cx="37"
                        cy="37"
                        r="33"
                        fill="none"
                        stroke="rgba(72,116,167,0.26)"
                        strokeWidth="6"
                      />
                      <circle
                        cx="37"
                        cy="37"
                        r="33"
                        fill="none"
                        stroke="#2f97ff"
                        strokeWidth="6"
                        strokeLinecap="round"
                        strokeDasharray={2 * Math.PI * 33}
                        strokeDashoffset={(2 * Math.PI * 33) - (timeLeft / 10) * (2 * Math.PI * 33)}
                        className="transition-all duration-1000"
                      />
                    </svg>
                    <span className="absolute inset-0 flex items-center justify-center text-[34px] font-bold text-white">
                      {timeLeft}
                    </span>
                  </>
                ) : gameState === "won" ? (
                  <div className="flex h-full w-full items-center justify-center rounded-full border-[6px] border-[#39d576]">
                    <Check className="h-9 w-9 text-[#39d576]" />
                  </div>
                ) : (
                  <div className="flex h-full w-full items-center justify-center rounded-full border-[6px] border-[#ff5e60]">
                    <span className="text-[30px] font-bold text-[#ff5e60]">X</span>
                  </div>
                )}
              </div>
            </div>

            <h2 className="mx-auto mb-10 max-w-[520px] text-center text-[37px] font-semibold leading-[1.08] tracking-tight text-white">
              {game.question}
            </h2>

            <div className="mb-8 grid grid-cols-2 gap-5">
              {game.options.map((option, index) => {
                const isSelected = selectedAnswer === index
                const isCorrect = index === game.correctAnswer
                const isFocused = focusedAnswer === index && gameState === "playing"

                let buttonStyle =
                  "border border-white/5 bg-[#263140] text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]"

                if (showResult) {
                  if (isCorrect) {
                    buttonStyle =
                      "border border-[#3fe47a] bg-[#4ce17a] text-[#08141b] shadow-[0_0_0_2px_rgba(112,245,155,0.22),0_0_18px_rgba(54,233,117,0.22)]"
                  } else if (isSelected && !isCorrect) {
                    buttonStyle = "border border-transparent bg-[#526072]/58 text-white/45"
                  } else {
                    buttonStyle = "border border-transparent bg-[#526072]/58 text-white/45"
                  }
                } else if (isFocused) {
                  buttonStyle =
                    "border border-[#45a9ff] bg-[#2b3645] text-white shadow-[0_0_0_3px_rgba(35,153,255,0.35),0_0_14px_rgba(49,165,255,0.16)]"
                }

                return (
                  <button
                    key={index}
                    className={`relative min-h-[80px] rounded-[18px] px-6 py-4 text-center transition-all duration-200 ${buttonStyle}`}
                    onClick={() => handleAnswer(index)}
                    onMouseEnter={() => setFocusedAnswer(index)}
                    disabled={selectedAnswer !== null}
                  >
                    <div className="flex items-center justify-center gap-4">
                      {showResult && isCorrect && (
                        <Check className="h-8 w-8" />
                      )}
                      <span className="text-[27px] font-medium tracking-tight">{option}</span>
                    </div>
                  </button>
                )
              })}
            </div>

            {gameState !== "playing" && (
              <div className="text-center">
                {gameState === "won" ? (
                  <>
                    <p className="mb-2 text-[44px] font-semibold leading-none tracking-tight text-white">
                      That&apos;s correct!
                    </p>
                    <p className="text-[18px] font-medium text-[#58dd83]">Your reward is on its way...</p>
                  </>
                ) : (
                  <>
                    <p className="mb-2 text-[38px] font-semibold tracking-tight text-white">Sorry!</p>
                    <p className="text-[18px] text-white/78">
                      The correct answer is{" "}
                      <span className="font-semibold text-[#52df82]">{game.options[game.correctAnswer]}</span>
                    </p>
                    <p className="mt-1 text-[15px] text-white/58">
                      Visit the nearest dealership to see your favorite Toyota
                    </p>
                  </>
                )}
              </div>
            )}

            {gameState === "playing" && (
              <>
                <p className="text-center text-[16px] text-white/62">
                  Use D-pad to select or say your answer to Alexa
                </p>
                <div className="mt-7 text-center">
                  <p className="text-[16px] font-medium text-[#58dd83]">
                    Correct answer wins {game.reward}
                  </p>
                </div>
              </>
            )}
          </div>
        </div>
      </div>

      {gameState === "won" && (
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {[...Array(70)].map((_, i) => (
            <div
              key={i}
              className="absolute animate-confetti rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `-5%`,
                width: `${4 + Math.random() * 8}px`,
                height: `${4 + Math.random() * 8}px`,
                backgroundColor: ["#ffd76d", "#55e480", "#fefefe", "#77d0ff"][
                  Math.floor(Math.random() * 4)
                ],
                boxShadow: "0 0 10px rgba(255,255,255,0.25)",
                animationDelay: `${Math.random() * 0.8}s`,
                animationDuration: `${2.2 + Math.random() * 1.4}s`,
              }}
            />
          ))}
        </div>
      )}
    </div>
  )
}

function BrandHeader() {
  return (
    <div className="flex items-center gap-3">
      <div className="flex h-8 w-8 items-center justify-center rounded-sm bg-[#e51b23]">
        <svg viewBox="0 0 100 70" className="h-4 w-4 fill-current text-white">
          <ellipse cx="50" cy="35" rx="45" ry="30" fill="none" stroke="currentColor" strokeWidth="5" />
          <ellipse cx="50" cy="35" rx="28" ry="18" fill="none" stroke="currentColor" strokeWidth="5" />
          <ellipse cx="50" cy="35" rx="10" ry="30" fill="none" stroke="currentColor" strokeWidth="5" />
        </svg>
      </div>
      <span className="text-[16px] font-bold tracking-wide text-white">TOYOTA</span>
    </div>
  )
}
