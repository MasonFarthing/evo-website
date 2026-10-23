import Link from "next/link"
import { SiteHeader } from "@/components/site-header"
import { PricingPlans } from "@/components/pricing-plans"

export const metadata = {
  title: "Pricing - Evo",
}

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-[#F3F6FB]">
      <SiteHeader />

      <main className="container mx-auto px-4 lg:px-6 py-20 lg:py-28">
        <div className="max-w-2xl mx-auto text-center mb-12">
          <h1 className="text-5xl lg:text-6xl font-bold tracking-tight text-[#0F1B3D]">Pricing</h1>
          <p className="mt-6 text-lg text-slate-600 leading-relaxed">
            Normal is what Evo costs to run. Basic keeps Evo open to people who can&apos;t do $50 a month, and Ultra is for people who want all of it.
          </p>
        </div>

        <PricingPlans />

        {/* Custom plan, coming later */}
        <section className="max-w-6xl mx-auto mt-16 rounded-2xl border border-dashed border-slate-300 p-8 lg:p-10 flex flex-col md:flex-row md:items-center gap-4 md:gap-10">
          <div className="flex items-center gap-3 shrink-0">
            <h2 className="text-2xl font-bold text-slate-900">Custom</h2>
            <span className="rounded-full bg-slate-200 px-3 py-1 text-sm text-slate-600">Coming soon</span>
          </div>
          <p className="text-slate-600 leading-relaxed">
            Pick only the features you want and see your monthly price. Somewhere between Basic and Ultra, built around how you use Evo.
          </p>
        </section>

        {/* How usage works */}
        <section className="max-w-6xl mx-auto mt-20">
          <h2 className="text-2xl font-bold text-[#0F1B3D] mb-8">How usage works</h2>
          <dl className="grid md:grid-cols-3 gap-8 text-slate-600 leading-relaxed">
            <div>
              <dt className="font-semibold text-slate-900 mb-2">Usage</dt>
              <dd>
                Covers your learning sessions with Thomas, in both Structured Learning and Curiosity Threads. Each plan has a daily and a monthly limit.
              </dd>
            </div>
            <div>
              <dt className="font-semibold text-slate-900 mb-2">Teacher settings</dt>
              <dd>
                Low, Medium and High choose the size of model Thomas runs on: small, medium or large. You change them in Settings.
              </dd>
            </div>
            <div>
              <dt className="font-semibold text-slate-900 mb-2">Learning plans and chat imports</dt>
              <dd>
                Creating learning plans and importing chats have their own allowances, shown on each plan. They don&apos;t count toward your usage.
              </dd>
            </div>
          </dl>
        </section>

        <p className="text-center text-slate-500 text-sm max-w-2xl mx-auto mt-20 leading-relaxed">
          You pick a plan after creating your account. Sales tax is added at checkout where it applies.
          Evo runs on laptops and desktops. See the{" "}
          <Link href="/terms" className="text-blue-700 hover:text-blue-800 underline">Terms of Service</Link>{" "}
          for billing and cancellation.
        </p>
      </main>
    </div>
  )
}
