"use client"

import { useState } from "react"
import { FireTVInterface } from "@/components/fire-tv-interface"
import { GameScreen } from "@/components/game-screen"
import { RewardScreen } from "@/components/reward-screen"

export type PlaybreakState = "browsing" | "playing" | "reward"

export interface GameData {
  id: string
  brand: string
  brandLogo: string
  brandColor: string
  type: "trivia"
  question: string
  options: string[]
  correctAnswer: number
  reward: string
  rewardAmount: string
}

const toyotaGame: GameData = {
  id: "toyota",
  brand: "Toyota",
  brandLogo: "",
  brandColor: "#EB0A1E",
  type: "trivia",
  question: "Which Toyota SUV was rated America's Most Loved in 2025?",
  options: ["RAV4", "Highlander", "4Runner", "Tacoma"],
  correctAnswer: 0,
  reward: "$500 off MSRP",
  rewardAmount: "$500",
}

export default function Home() {
  const [state, setState] = useState<PlaybreakState>("browsing")
  const [selectedGame, setSelectedGame] = useState<GameData | null>(null)

  const handlePlaybreakClick = () => {
    setSelectedGame(toyotaGame)
    setState("playing")
  }

  const handleGameComplete = (won: boolean) => {
    if (won) {
      setState("reward")
    } else {
      setState("browsing")
      setSelectedGame(null)
    }
  }

  const handleContinueBrowsing = () => {
    setState("browsing")
    setSelectedGame(null)
  }

  return (
    <main className="min-h-screen bg-background overflow-hidden">
      {state === "browsing" && (
        <FireTVInterface onPlaybreakClick={handlePlaybreakClick} />
      )}

      {state === "playing" && selectedGame && (
        <GameScreen game={selectedGame} onComplete={handleGameComplete} />
      )}

      {state === "reward" && selectedGame && (
        <RewardScreen game={selectedGame} onContinue={handleContinueBrowsing} />
      )}
    </main>
  )
}
