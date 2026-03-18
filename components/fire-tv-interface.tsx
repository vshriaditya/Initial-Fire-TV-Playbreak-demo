"use client"

import { useState } from "react"
import {
  Clapperboard,
  Film,
  Gamepad2,
  Grid2x2,
  House,
  Menu,
  MonitorPlay,
  Search,
  Tv,
} from "lucide-react"

interface FireTVInterfaceProps {
  onPlaybreakClick: () => void
}

const contentRows = [
  {
    title: "Continue Watching",
    items: [
      { title: "Landman", image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=320&h=180&fit=crop", hasProgress: true, service: "Paramount+" },
      { title: "F1", image: "https://images.unsplash.com/photo-1517649763962-0c623066013b?w=320&h=180&fit=crop", service: "Apple TV+" },
      { title: "Dan Wolf", image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=320&h=180&fit=crop", service: "prime" },
      { title: "The Pitt", image: "https://images.unsplash.com/photo-1516849841032-87cbac4d88f7?w=320&h=180&fit=crop", service: "max" },
      { title: "All Her Fault", image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=320&h=180&fit=crop", service: "Hulu" },
      { title: "Drive", image: "https://images.unsplash.com/photo-1493238792000-8113da705763?w=320&h=180&fit=crop", service: "MGM+" },
    ],
  },
]

const appBadges = [
  { label: "NETFLIX", bg: "#ffffff", fg: "#db131f" },
  { label: "prime video", bg: "#0f6fff", fg: "#ffffff" },
  { label: "tv", bg: "#050505", fg: "#ffffff", prefix: "apple " },
  { label: "YouTube", bg: "#ffffff", fg: "#d91d26" },
  { label: "Disney+", bg: "#0d3457", fg: "#d7ecff" },
  { label: "tubi", bg: "#6d0dca", fg: "#ffe83f" },
  { label: "Paramount+", bg: "#1182df", fg: "#ffffff" },
  { label: "hulu", bg: "#10281f", fg: "#72ea6f" },
  { label: "STARZ", bg: "#161616", fg: "#ffffff" },
  { label: "HBO MAX", bg: "#1f1f28", fg: "#ffffff" },
]

export function FireTVInterface({ onPlaybreakClick }: FireTVInterfaceProps) {
  const [playbreakHovered, setPlaybreakHovered] = useState(false)

  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#e7dfd6] px-6 py-8 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.55),transparent_34%),linear-gradient(180deg,#e9e0d6_0%,#ded4ca_100%)]" />

      <div className="relative aspect-[16/9] w-full max-w-[1480px] rounded-[12px] border border-[#202020] bg-[#050607] p-3 shadow-[0_30px_80px_rgba(0,0,0,0.45)]">
        <div className="absolute inset-3 rounded-[10px] border border-white/10 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.04)]" />
        <div className="absolute bottom-0 left-1/2 h-[6px] w-24 -translate-x-1/2 translate-y-4 rounded-full bg-[#0b0b0b] shadow-[0_5px_20px_rgba(0,0,0,0.55)]" />

        <div className="relative h-full overflow-hidden rounded-[8px] bg-[#0b0f12]">
          <nav className="absolute left-0 right-0 top-0 z-20 flex items-start justify-between px-16 pt-12">
            <div className="flex items-start gap-7">
              <TopIcon icon={Menu} />
              <TopIcon icon={Search} />
              <TopIcon icon={House} active label="Home" />
              <TopIcon icon={Grid2x2} />
              <TopIcon icon={MonitorPlay} />
              <TopIcon icon={Film} />
              <TopIcon icon={Clapperboard} />
              <TopIcon icon={Tv} />
            </div>
            <div className="pt-1">
              <FireTVLogo />
            </div>
          </nav>

          <div className="relative h-[52%] overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1516849841032-87cbac4d88f7?w=1920&h=1080&fit=crop"
              alt="Featured content"
              className="h-full w-full object-cover object-[center_30%]"
            />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_right,rgba(255,214,104,0.18),transparent_28%),linear-gradient(90deg,rgba(7,8,10,0.94)_0%,rgba(7,8,10,0.75)_28%,rgba(7,8,10,0.18)_56%,rgba(7,8,10,0.15)_100%)]" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0b0f12] via-transparent to-transparent" />

            <div className="absolute left-16 top-[116px] max-w-[480px]">
              <div className="mb-2 text-[106px] font-black italic leading-[0.9] tracking-[-0.06em] text-[#d0ab57]">
                Fallout
              </div>
              <div className="mb-8 flex items-center gap-4">
                <PrimeVideoLogo compact />
                <div className="h-8 w-px bg-white/25" />
                <div className="text-[18px] font-semibold uppercase tracking-tight text-white/94">
                  Season Two
                  <div className="text-[16px] font-medium text-white/78">Watch Now</div>
                </div>
              </div>
              <button className="rounded-full bg-[#4b5261] px-9 py-3 text-[18px] font-medium text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.1)]">
                Learn more
              </button>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 px-16 pb-10">
            <div className="space-y-6">
              <ContentRow title={contentRows[0].title} items={contentRows[0].items} />

              <div className="flex gap-4 overflow-x-auto pb-1 scrollbar-hide">
                {appBadges.map((app) => (
                  <AppBadge key={app.label} {...app} />
                ))}
              </div>

              <div>
                <p className="mb-2 text-[15px] font-medium tracking-wide text-white/36">SPONSORED</p>

                <button
                  className={`relative w-full overflow-hidden rounded-[12px] border border-white/25 bg-[#22252b] transition-all duration-300 ${
                    playbreakHovered
                      ? "scale-[1.01] shadow-[0_0_0_2px_rgba(255,255,255,0.22),0_18px_40px_rgba(0,0,0,0.38)]"
                      : "shadow-[0_12px_24px_rgba(0,0,0,0.25)]"
                  }`}
                  onMouseEnter={() => setPlaybreakHovered(true)}
                  onMouseLeave={() => setPlaybreakHovered(false)}
                  onClick={onPlaybreakClick}
                >
                  <div className="relative flex h-[116px] items-center bg-[linear-gradient(90deg,#08172d_0%,#0e2748_34%,#243854_35%,#2a2a2a_36%,#2e2d2a_100%)]">
                    <div className="relative h-full w-[310px] flex-shrink-0 overflow-hidden">
                      <img
                        src="https://images.unsplash.com/photo-1581540222194-0def2dda95b8?w=640&h=280&fit=crop"
                        alt="Toyota RAV4"
                        className="h-full w-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-[#071120]/40 via-transparent to-[#081c36]/70" />
                    </div>

                    <div className="flex min-w-0 flex-1 items-center gap-5 px-8">
                      <div className="min-w-0">
                        <div className="mb-2 flex items-center gap-3">
                          <BrandHeader />
                        </div>
                        <p className="max-w-[560px] text-[28px] font-semibold leading-[1.1] tracking-tight text-white">
                          Which Toyota SUV was rated
                        </p>
                        <p className="max-w-[560px] text-[28px] font-semibold leading-[1.1] tracking-tight text-white">
                          America&apos;s Most Loved in 2025?
                        </p>
                      </div>
                    </div>

                    <div className="flex h-full w-[320px] flex-shrink-0 items-center justify-end gap-5 px-8 text-right">
                      <div>
                        <p className="text-[18px] font-medium leading-tight text-white/84">Play to win</p>
                        <p className="text-[18px] font-semibold leading-tight text-white">$500 off MSRP</p>
                      </div>
                      <Gamepad2 className="h-8 w-8 text-[#f07a3c]" />
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#efefef] text-[15px] font-bold text-[#222]">
                        10s
                      </div>
                    </div>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function ContentRow({
  title,
  items,
}: {
  title: string
  items: { title: string; image: string; hasProgress?: boolean }[]
}) {
  return (
    <div>
      <h2 className="mb-3 text-[18px] font-normal tracking-tight text-white/68">{title}</h2>
      <div className="flex gap-4 overflow-x-auto pb-1 scrollbar-hide">
        {items.map((item, index) => (
          <MovieThumbnail key={index} {...item} />
        ))}
      </div>
    </div>
  )
}

function MovieThumbnail({
  title,
  image,
  hasProgress,
  service,
}: {
  title: string
  image: string
  hasProgress?: boolean
  service?: string
}) {
  return (
    <div className="group relative w-[238px] flex-shrink-0 cursor-pointer overflow-hidden rounded-[12px] border border-white/6 bg-white/5 transition-all hover:border-white/18 hover:shadow-[0_10px_28px_rgba(0,0,0,0.35)]">
      <div className="relative aspect-video">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/5 to-transparent" />
        {service && (
          <span className="absolute right-2 top-2 rounded bg-black/50 px-2 py-1 text-[10px] font-medium uppercase tracking-wide text-white/72">
            {service}
          </span>
        )}
        <span className="absolute bottom-2 left-3 right-2 truncate text-[14px] font-semibold tracking-tight text-white/92">
          {title}
        </span>
        {hasProgress && (
          <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-white/18">
            <div className="h-full w-1/3 bg-white/80" />
          </div>
        )}
      </div>
    </div>
  )
}

function AppBadge({
  label,
  bg,
  fg,
  prefix,
}: {
  label: string
  bg: string
  fg: string
  prefix?: string
}) {
  return (
    <div
      className="flex h-[72px] min-w-[136px] flex-shrink-0 items-center justify-center rounded-[16px] px-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]"
      style={{ backgroundColor: bg, color: fg }}
    >
      <span className="text-[18px] font-bold tracking-tight">
        {prefix && <span className="font-medium">{prefix}</span>}
        {label}
      </span>
    </div>
  )
}

function TopIcon({
  icon: Icon,
  active,
  label,
}: {
  icon: typeof House
  active?: boolean
  label?: string
}) {
  return (
    <div className="flex flex-col items-center gap-2">
      <div
        className={`flex h-14 w-14 items-center justify-center rounded-2xl transition-colors ${
          active ? "bg-white text-[#101317]" : "text-white/70"
        }`}
      >
        <Icon className="h-7 w-7 stroke-[2.2]" />
      </div>
      {label && <span className="text-[16px] font-semibold text-white">{label}</span>}
    </div>
  )
}

function FireTVLogo() {
  return (
    <div className="flex items-end gap-[2px] text-white">
      <span className="text-[16px] font-semibold tracking-tight">fire</span>
      <span className="text-[22px] font-light leading-none tracking-tight">tv</span>
      <svg viewBox="0 0 42 12" className="-ml-7 mb-[-8px] h-3 w-10 text-white">
        <path
          d="M2 2.5c5 5 20 6.5 37 1.5"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeWidth="2"
        />
      </svg>
    </div>
  )
}

function PrimeVideoLogo({ compact }: { compact?: boolean }) {
  return (
    <div
      className={`flex items-center rounded-[6px] ${
        compact ? "px-0 py-0 shadow-none" : "bg-[#1d2635]/85 px-2.5 py-1 shadow-[inset_0_0_0_1px_rgba(88,184,255,0.24)]"
      }`}
    >
      <div className="relative">
        <span className={`${compact ? "text-[20px]" : "text-[13px]"} font-medium tracking-tight text-[#2e8dff]`}>
          prime
          {!compact && " video"}
        </span>
        <svg viewBox="0 0 44 12" className="absolute -bottom-[7px] left-[7px] h-3 w-10 text-[#2ea7ff]">
          <path
            d="M2 2.5c4.5 4 20 6 40 1"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeWidth="2"
          />
        </svg>
      </div>
    </div>
  )
}

function BrandHeader() {
  return (
    <div className="flex items-center gap-3">
      <div className="flex h-7 w-7 items-center justify-center rounded-sm bg-[#e51b23]">
        <svg viewBox="0 0 100 70" className="h-4 w-4 fill-current text-white">
          <ellipse cx="50" cy="35" rx="45" ry="30" fill="none" stroke="currentColor" strokeWidth="5" />
          <ellipse cx="50" cy="35" rx="28" ry="18" fill="none" stroke="currentColor" strokeWidth="5" />
          <ellipse cx="50" cy="35" rx="10" ry="30" fill="none" stroke="currentColor" strokeWidth="5" />
        </svg>
      </div>
      <span className="text-[14px] font-bold tracking-wide text-white">TOYOTA</span>
    </div>
  )
}
