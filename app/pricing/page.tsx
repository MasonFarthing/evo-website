import { Button } from "@/components/ui/button"
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { CheckCircle, ArrowRight, Zap, Rocket } from "lucide-react"
import Link from "next/link"
import { SiteHeader } from "@/components/site-header"
import { SIGN_UP_URL } from "@/lib/links"

// The two subscriptions, as the app itself describes them when you subscribe.
// Keep these in step with the app.
const plans = [
  {
    name: "Basic",
    price: 20,
    tagline: "Everything you need to start",
    icon: Rocket,
    accent: false,
    points: [
      "Monthly usage for learning with the teacher",
      "20 plan credits a month, for drafting new learning plans",
      "Teacher settings: Low and Medium",
      "The Learning Tool",
    ],
  },
  {
    name: "Pro",
    price: 50,
    tagline: "More room, and the most capable teacher",
    icon: Zap,
    accent: true,
    points: [
      "3× the monthly usage of the $20 plan",
      "50 plan credits a month, for drafting new learning plans",
      "Teacher settings: Low, Medium and Advanced",
      "The Learning Tool",
    ],
  },
]

export const metadata = {
  title: "Pricing - Evo",
}

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Space Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-purple-950/20 to-blue-950/30"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-transparent via-cyan-950/10 to-transparent"></div>

      {/* Stars */}
      <div className="absolute inset-0">
        <div className="absolute top-[10%] left-[20%] w-1 h-1 bg-white rounded-full animate-pulse"></div>
        <div className="absolute top-[20%] right-[15%] w-0.5 h-0.5 bg-blue-300 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
        <div className="absolute top-[40%] left-[10%] w-0.5 h-0.5 bg-purple-300 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-[60%] right-[25%] w-1 h-1 bg-cyan-300 rounded-full animate-pulse" style={{animationDelay: '1.5s'}}></div>
        <div className="absolute top-[80%] left-[30%] w-0.5 h-0.5 bg-white rounded-full animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>

      {/* Nebula Glow Effects */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-radial from-blue-600/10 via-purple-600/5 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-gradient-radial from-cyan-600/10 via-blue-600/5 to-transparent rounded-full blur-3xl"></div>

      <SiteHeader />

      {/* Pricing Cards */}
      <section className="py-32 relative">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {plans.map((plan) => (
              <Card
                key={plan.name}
                className={`bg-slate-800/50 backdrop-blur-sm hover:bg-slate-800/70 transition-all duration-300 relative flex flex-col h-full ${plan.accent ? "border-blue-600/50" : "border-slate-700/50"}`}
              >
                <CardHeader className="space-y-6 p-8 flex-grow">
                  <div className="flex items-center space-x-3">
                    <div className={`w-12 h-12 bg-gradient-to-br rounded-lg flex items-center justify-center ${plan.accent ? "from-blue-600 to-purple-600" : "from-blue-600 to-blue-700"}`}>
                      <plan.icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-white text-2xl">{plan.name}</CardTitle>
                      <CardDescription className="text-slate-400">{plan.tagline}</CardDescription>
                    </div>
                  </div>

                  <div className="flex items-baseline space-x-2">
                    <span className="text-4xl font-bold text-white">${plan.price}</span>
                    <span className="text-slate-400">/month</span>
                  </div>

                  <div className="space-y-4 flex-grow">
                    {plan.points.map((point) => (
                      <div key={point} className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-blue-400 shrink-0 mt-0.5" />
                        <span className="text-slate-300">{point}</span>
                      </div>
                    ))}
                  </div>

                  <Button
                    asChild
                    className={`w-full bg-gradient-to-r text-white mt-auto ${plan.accent ? "from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700" : "from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800"}`}
                  >
                    <a href={SIGN_UP_URL}>
                      Get Started
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </CardHeader>
              </Card>
            ))}
          </div>

          <p className="text-center text-slate-400 text-sm max-w-2xl mx-auto mt-12 leading-relaxed">
            You pick a plan after creating your account. Sales tax is added at checkout where it applies.
            Evo runs on laptops and desktops. See the{" "}
            <Link href="/terms" className="text-blue-400 hover:text-blue-300 underline">Terms of Service</Link>{" "}
            for billing and cancellation.
          </p>
        </div>
      </section>
    </div>
  )
}
