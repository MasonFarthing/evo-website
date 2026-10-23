"use client"

import { useEffect, useId, useRef, useState } from "react"
import { Info } from "lucide-react"
import { SIGN_UP_URL } from "@/lib/links"

type Billing = "monthly" | "quarterly"

type Point = {
  text: string
  // Extra detail shown when the info dot next to the point is opened.
  info?: string
}

type Plan = {
  name: string
  summary: string
  monthly: number
  // Price for 3 months paid up front, when the plan offers it.
  quarterly?: { price: number; save: number }
  points: (billing: Billing) => Point[]
  // The plan Evo actually costs; shown filled and centered.
  anchor?: boolean
}

// Keep these in step with the app's plans and limits.
const plans: Plan[] = [
  {
    name: "Basic",
    summary: "For anyone who can't do $50 a month yet. The core of Evo, without the pricier features.",
    monthly: 20,
    points: () => [
      {
        text: "Basic usage, with daily and monthly limits",
        info: "Using mostly Low, with Medium now and then, lasts the full month of Structured Learning.",
      },
      {
        text: "Teacher settings: Low, and limited Medium",
        info: "Low uses small models and Medium uses medium-sized models. High isn't included.",
      },
      {
        text: "20 plan credits a month",
        info: "For making learning plans: shorter plans take ½ credit, longer ones 1.",
      },
      {
        text: "No Curiosity Threads",
        info: "If you've already imported your chats on Normal or Ultra, you keep the threads you have when you switch to Basic, but you can't import new chats on it.",
      },
    ],
  },
  {
    name: "Normal",
    summary: "What Evo actually costs to run. We'd rather be upfront about it.",
    monthly: 50,
    quarterly: { price: 120, save: 20 },
    anchor: true,
    points: (billing) => [
      {
        text: "3× Basic's usage, with daily and monthly limits",
        info: "Shared across Structured Learning and Curiosity Threads.",
      },
      {
        text: "Teacher settings: near-unlimited Low and Medium, with more limited High",
        info: "High uses large models. Near-unlimited isn't guaranteed; you could still reach your limits.",
      },
      {
        text: "50 plan credits a month",
        info: "For making learning plans: shorter plans take ½ credit, longer ones 1.",
      },
      {
        text: "Curiosity Threads, from your ChatGPT and Claude chats",
        info: "The first import takes a while: about 16 hours for 300 chats and 36 hours for 600. After that, new chats are added quickly.",
      },
      billing === "quarterly"
        ? {
            text: "Free chat import",
            info: "Importing your full history is included when you pay for 3 months. Adding new chats later is always included.",
          }
        : {
            text: "Chat import: $10 for up to 300 chats, or free with 3 months",
            info: "Importing your full history is expensive to run, so it's charged once, when you import. Up to 300 chats is $10; past that it's the same rate by the chat, so 450 chats is $15. Newer chats you add later are free, up to 500 a month.",
          },
      { text: "Access to most new features as Evo grows" },
    ],
  },
  {
    name: "Ultra",
    summary: "Everything Evo has, as much as you want.",
    monthly: 100,
    quarterly: { price: 195, save: 35 },
    points: () => [
      {
        text: "Ultra usage: daily and monthly limits that are basically unlimited",
        info: "Shared across Structured Learning and Curiosity Threads. Unlimited is the goal, but it isn't guaranteed.",
      },
      { text: "Teacher settings: near-unlimited Low, Medium and High" },
      {
        text: "Unlimited learning plans",
        info: "Guaranteed, within reasonable use.",
      },
      { text: "Curiosity Threads, with free chat import however many chats you have" },
      { text: "Full access to everything new as Evo grows, including Ultra-only upgrades" },
    ],
  },
]

// Info dot with a tooltip. Shows on hover and keyboard focus; on touch screens,
// tapping the dot toggles it and tapping anywhere else closes it.
function InfoTooltip({ info, anchor }: { info: string; anchor?: boolean }) {
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLSpanElement>(null)
  const id = useId()

  useEffect(() => {
    if (!open) return
    const close = (event: PointerEvent) => {
      if (!ref.current?.contains(event.target as Node)) setOpen(false)
    }
    document.addEventListener("pointerdown", close)
    return () => document.removeEventListener("pointerdown", close)
  }, [open])

  return (
    <span ref={ref} className="group relative mt-0.5 shrink-0">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        onKeyDown={(event) => event.key === "Escape" && setOpen(false)}
        aria-describedby={id}
        aria-label="More details"
        className={`block rounded-full focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${
          anchor
            ? "text-blue-200 hover:text-white focus-visible:outline-white"
            : "text-slate-400 hover:text-blue-700 focus-visible:outline-blue-700"
        }`}
      >
        <Info className="h-4 w-4" />
      </button>
      <span
        id={id}
        role="tooltip"
        className={`pointer-events-none absolute bottom-full right-0 z-20 mb-3 w-64 rounded-lg px-4 py-3 text-sm leading-relaxed shadow-lg transition-opacity duration-150 group-hover:opacity-100 group-focus-within:opacity-100 ${
          open ? "opacity-100" : "opacity-0"
        } ${anchor ? "bg-white text-slate-700" : "bg-[#0F1B3D] text-white"}`}
      >
        {info}
        <span
          aria-hidden="true"
          className={`absolute -bottom-1 right-1 h-2 w-2 rotate-45 ${anchor ? "bg-white" : "bg-[#0F1B3D]"}`}
        />
      </span>
    </span>
  )
}

function PlanPoint({ point, anchor }: { point: Point; anchor?: boolean }) {
  return (
    <li className="py-3">
      <div className="flex items-start justify-between gap-3">
        <span>{point.text}</span>
        {point.info && <InfoTooltip info={point.info} anchor={anchor} />}
      </div>
    </li>
  )
}

export function PricingPlans() {
  const [billing, setBilling] = useState<Billing>("monthly")

  return (
    <div>
      {/* Billing switch */}
      <div className="flex justify-center mb-12">
        <div role="radiogroup" aria-label="Billing period" className="inline-flex rounded-full border border-slate-300 bg-white p-1">
          {([
            ["monthly", "Monthly"],
            ["quarterly", "3 months"],
          ] as const).map(([value, label]) => (
            <button
              key={value}
              type="button"
              role="radio"
              aria-checked={billing === value}
              onClick={() => setBilling(value)}
              className={`rounded-full px-5 py-2 text-sm font-medium transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-700 ${
                billing === value ? "bg-[#0F1B3D] text-white" : "text-slate-600 hover:text-slate-900"
              }`}
            >
              {label}
              {value === "quarterly" && (
                <span className="ml-2 rounded-full bg-emerald-100 px-2 py-0.5 text-xs font-semibold text-emerald-800">
                  Save up to 35%
                </span>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Plans */}
      <div className="grid lg:grid-cols-3 gap-6 lg:gap-0 items-stretch max-w-6xl mx-auto">
        {plans.map((plan) => {
          const quarterly = billing === "quarterly" ? plan.quarterly : undefined

          return (
            <section
              key={plan.name}
              aria-labelledby={`plan-${plan.name}`}
              className={`flex flex-col p-8 lg:p-10 ${
                plan.anchor
                  ? "bg-[#0F1B3D] text-white rounded-2xl lg:-my-6 lg:py-16 lg:z-10 shadow-xl shadow-[#0F1B3D]/20"
                  : "bg-white text-slate-700 border border-slate-200 rounded-2xl lg:first:rounded-r-none lg:last:rounded-l-none lg:first:border-r-0 lg:last:border-l-0"
              }`}
            >
              <div className="flex items-center justify-between gap-4">
                <h2 id={`plan-${plan.name}`} className={`text-2xl font-bold ${plan.anchor ? "text-white" : "text-slate-900"}`}>
                  {plan.name}
                </h2>
                {quarterly && (
                  <span className="rounded-full bg-emerald-100 px-3 py-1 text-sm font-semibold text-emerald-800">
                    Save {quarterly.save}%
                  </span>
                )}
              </div>
              <p className={`mt-3 leading-relaxed ${plan.anchor ? "text-blue-100" : "text-slate-500"}`}>{plan.summary}</p>

              <div className="mt-8 min-h-[5.5rem]">
                <div className="flex items-baseline gap-2">
                  {quarterly && (
                    <s className={`text-2xl font-semibold tabular-nums ${plan.anchor ? "text-blue-300" : "text-slate-400"}`}>
                      <span className="sr-only">Was </span>${plan.monthly}
                    </s>
                  )}
                  <span className={`text-6xl font-bold tracking-tight tabular-nums ${plan.anchor ? "text-white" : "text-slate-900"}`}>
                    ${quarterly ? quarterly.price / 3 : plan.monthly}
                  </span>
                  <span className={plan.anchor ? "text-blue-200" : "text-slate-500"}>/month</span>
                </div>
                <p className={`mt-2 text-sm ${plan.anchor ? "text-blue-200" : "text-slate-500"}`}>
                  {quarterly
                    ? `$${quarterly.price} paid up front for 3 months`
                    : billing === "quarterly"
                      ? "Billed monthly only"
                      : "Billed monthly"}
                </p>
              </div>

              <a
                href={SIGN_UP_URL}
                className={`mt-8 block rounded-full py-3 text-center font-semibold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${
                  plan.anchor
                    ? "bg-white text-[#0F1B3D] hover:bg-blue-50 focus-visible:outline-white"
                    : "bg-blue-700 text-white hover:bg-blue-800 focus-visible:outline-blue-700"
                }`}
              >
                Get started
              </a>

              <ul className={`mt-8 divide-y ${plan.anchor ? "divide-white/15" : "divide-slate-200"}`}>
                {plan.points(billing).map((point) => (
                  <PlanPoint key={point.text} point={point} anchor={plan.anchor} />
                ))}
              </ul>
            </section>
          )
        })}
      </div>
    </div>
  )
}
