import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  BookOpen,
  Brain,
  Users,
  Zap,
  ArrowRight,
  ArrowUpRight,
  Star,
  CheckCircle,
  Globe,
  Smartphone,
  Database,
  TrendingUp,
  Rocket,
  Shield,
  Cpu,
  Target,
  Infinity,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"

// Curated list shown in the Required Reading section. Add new entries here.
// Categories:
//   Foundations - aligned thinking on cultivating human potential
//   Signals     - the world coming around to our view
//   Frontier    - ambitious thinking beyond education that still fits
const readingItems = [
  {
    category: "Foundations",
    title: "Why We Stopped Making Einsteins",
    source: "Erik Hoel, The Intrinsic Perspective",
    description:
      "How aristocratic tutoring produced a disproportionate share of history's geniuses, and why its disappearance matters for how we learn today.",
    href: "https://t.co/zJ8fNDWAwj",
  },
  {
    category: "Signals",
    title: "Tech Companies Launching Their Own Programs to Train Grads Because They 'Can't Rely' on Ivy Leagues",
    source: "Lydia Moynihan, New York Post",
    description:
      "Palantir and other tech companies are building their own education programs because even elite degrees no longer guarantee top talent.",
    href: "https://nypost.com/2026/10/01/tech/tech-companies-launching-their-own-programs-to-train-grads-because-they-cant-rely-on-ivy-leagues/",
  },
  {
    category: "Frontier",
    title: "Casey Handmer",
    source: "Read anything by him",
    description:
      "Physicist and founder of Terraform Industries, writing on energy, space, and building ambitious things from first principles.",
    href: "https://caseyhandmer.wordpress.com/",
  },
]

export default function EvoLandingPage() {
  return (
    <div className="min-h-screen bg-white relative overflow-hidden">

      {/* Header */}
      <header className="border-b border-blue-200 backdrop-blur-sm bg-white/90 sticky top-0 z-50">
        <div className="container mx-auto px-4 lg:px-6 h-20 flex items-center justify-between">
          {/* Logo with enhanced glow */}
          <div className="flex items-center space-x-2">
            <svg viewBox="0 0 170 80" className="w-24 h-14" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="quantumShell" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{stopColor:"#00ffff", stopOpacity:1}} />
                  <stop offset="50%" style={{stopColor:"#0080ff", stopOpacity:1}} />
                  <stop offset="100%" style={{stopColor:"#0040ff", stopOpacity:1}} />
                </linearGradient>
                
                <filter id="stellarGlow" x="-100%" y="-100%" width="300%" height="300%">
                  <feGaussianBlur stdDeviation="6" result="coloredBlur"/>
                  <feMerge>
                    <feMergeNode in="coloredBlur"/>
                    <feMergeNode in="SourceGraphic"/>
                  </feMerge>
                </filter>
              </defs>
              
              <g filter="url(#stellarGlow)" transform="translate(-180, -210)">
                <g transform="translate(180, 250)">
                  <rect x="0" y="-30" width="35" height="8" fill="url(#quantumShell)"/>
                  <rect x="0" y="-6" width="28" height="6" fill="url(#quantumShell)"/>
                  <rect x="0" y="22" width="35" height="8" fill="url(#quantumShell)"/>
                  <rect x="0" y="-30" width="8" height="60" fill="url(#quantumShell)"/>
                </g>
                
                <g transform="translate(230, 250)">
                  <polygon points="0,-30 6,-30 18,30 12,30" fill="url(#quantumShell)"/>
                  <polygon points="32,-30 38,-30 26,30 18,30" fill="url(#quantumShell)"/>
                </g>
                
                <g transform="translate(290, 250)">
                  <circle cx="19" cy="0" r="28" fill="none" stroke="url(#quantumShell)" strokeWidth="8"/>
                  <circle cx="19" cy="0" r="15" fill="none" stroke="url(#quantumShell)" strokeWidth="2" opacity="0.7">
                    <animate attributeName="r" values="15;18;15" dur="4s" repeatCount="indefinite"/>
                  </circle>
                </g>
              </g>
            </svg>
          </div>

          {/* Navigation with tech styling */}
          <nav className="hidden md:flex items-center justify-center flex-1 space-x-10">
            <Link href="#what-evo-does" className="text-slate-700 hover:text-blue-600 transition-colors text-sm uppercase tracking-wider font-medium">
              What Evo Does
            </Link>
            <Link href="#mission" className="text-slate-700 hover:text-blue-600 transition-colors text-sm uppercase tracking-wider font-medium">
              Our Mission
            </Link>
            <Link href="#deep-dive" className="text-slate-700 hover:text-blue-600 transition-colors text-sm uppercase tracking-wider font-medium">
              Deep Dive
            </Link>
            <Link href="#reading" className="text-slate-700 hover:text-blue-600 transition-colors text-sm uppercase tracking-wider font-medium">
              Required Reading
            </Link>
            <Link href="/pricing" className="text-slate-700 hover:text-blue-600 transition-colors text-sm uppercase tracking-wider font-medium">
              Pricing
            </Link>
          </nav>

          {/* CTA Buttons */}
          <div className="flex items-center space-x-4">
            <Button variant="ghost" asChild className="text-slate-700 hover:text-blue-600 hover:bg-blue-50 border border-transparent hover:border-blue-300">
              <Link href="/signin">Sign In</Link>
            </Button>
            <div className="relative">
              <Button variant="outline" asChild className="border-blue-600 text-blue-600 hover:bg-blue-50">
                <Link href="/signup">
                  Join Waitlist
                </Link>
              </Button>
              <Badge className="absolute -top-2 -right-2 bg-gradient-to-r from-orange-500 to-red-500 text-white px-1 py-0.5 text-xs font-bold">
                50% OFF
              </Badge>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-32 lg:py-40 overflow-hidden bg-gradient-to-br from-slate-50 via-blue-100 to-blue-200">
        <div className="container mx-auto px-4 lg:px-6 relative">
          <div className="flex justify-center items-center min-h-[60vh]">
            <div className="text-center space-y-12 max-w-4xl">
              <div className="space-y-8">
                <h1 className="text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight">
                  <span className="text-slate-800">The Future of</span>
                  <br />
                  <span className="bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 bg-clip-text text-transparent">
                    Human Potential
                  </span>
                </h1>
                
                <p className="text-lg lg:text-xl text-slate-600 leading-relaxed max-w-4xl mx-auto">
                  Transform your potential into reality. Whether you seek intellect, power, creativity, wealth, knowledge, influence, discovery, or status: Evo accelerates your growth with results 3x better than traditional schooling, and 7x better for students dedicated to pursuing excellence.
                </p>
              </div>


              {/* CTA Buttons */}
              <div className="flex justify-center gap-6">
                <div className="relative">
                  <Button size="lg" className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white shadow-lg shadow-blue-500/25 px-12 py-6 text-xl rounded-full">
                    Join Waitlist
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                  <Badge className="absolute -top-4 -right-4 bg-gradient-to-r from-orange-500 to-red-500 text-white px-2 py-1 text-sm font-bold">
                    50% OFF
                  </Badge>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What Does Evo Do Section - brief overview of the software */}
      <section id="what-evo-does" className="py-32 relative bg-gradient-to-br from-white via-slate-50 to-gray-100">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-5xl lg:text-6xl font-bold text-slate-800 mb-8">
              <span className="bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent">What Does Evo Do?</span>
            </h2>
            {/* TODO: short overview paragraph and a few one-line points */}
          </div>
        </div>
      </section>

      {/* Our Mission Section */}
      <section id="mission" className="relative bg-gradient-to-br from-gray-100 via-slate-100 to-blue-100 min-h-screen">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center max-w-4xl mx-auto">
            <div className="pt-16 pb-12">
              <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-blue-600 via-blue-500 to-blue-700 bg-clip-text text-transparent">
                  Our Mission
                </span>
              </h2>
            </div>
            
            {/* Mission Content */}
            <div className="max-w-3xl mx-auto text-left pb-16">
              <div className="prose prose-lg max-w-none text-slate-700">
                <p className="text-lg leading-relaxed mb-8">
                  The education system hasn't fundamentally changed since 1840, and in fact it has actually gotten worse for middle class and rich families since 400 CE. We think this is insane. Education is directly tied to human potential, which is directly tied to human flourishing. So not only have people gotten less intelligent over the past 1600 years, but they have also experienced less flourishing. This seems insane when you consider our unprecedented access to food, water, shelter, transportation, and technology.
                </p>
                
                <p className="text-xl font-bold text-slate-800 mb-8">
                  Our goal is to make education 10x better for 10x less cost, providing the resources needed for anyone who truly wants to pursue excellence and human flourishing to achieve it.
                </p>
                
                <h3 className="text-2xl font-bold text-slate-800 mb-6 mt-12">
                  How We're Doing This
                </h3>
                
                <div className="space-y-8">
                  <div>
                    <h4 className="text-xl font-bold text-blue-600 mb-3">AI-Powered Learning Platform</h4>
                    <p className="leading-relaxed">
                      We've built an AI-powered educational platform that we estimate performs 3x better than traditional schooling on average, and 7x better for students dedicated to excellence. We believe we can scale this to 10x better on average and possibly 20x better for those pursuing excellence. This platform will continue to evolve and remain central to our mission.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="text-xl font-bold text-blue-600 mb-3">Advancing the Science of Eudaimonia</h4>
                    <p className="leading-relaxed">
                      We're furthering research into eudaimonia—the intersection of excellence, virtue, well-being, human flourishing, and human potential. By advancing our understanding of what truly enables people to thrive, we're creating knowledge that people can directly apply to live better lives.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="text-xl font-bold text-blue-600 mb-3">Real-World Infrastructure</h4>
                    <p className="leading-relaxed">
                      We're building physical spaces and communities so people aren't limited by geography. These will be places of beauty and meaning that foster cultures of excellence—whether intellectual, creative, innovative, scientific, or philosophical. Whatever form of excellence appeals to you, you'll find others pursuing it alongside you.
                    </p>
                  </div>
                </div>
                
                <p className="text-lg font-medium text-slate-800 mt-8">
                  Together, these three pillars will transform how humans learn, grow, and reach their full potential.
                </p>
              </div>
            </div>
            
            {/* Space for additional content */}
            <div className="text-xl text-slate-700 leading-relaxed pb-16">
              {/* Additional content can go here */}
            </div>
          </div>
        </div>
      </section>

      {/* Deep Dive Section - thorough breakdown of the software */}
      <section id="deep-dive" className="py-32 relative bg-gradient-to-br from-white via-slate-50 to-gray-100">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-5xl lg:text-6xl font-bold text-slate-800 mb-8">
              <span className="bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent">Deep Dive</span>
            </h2>
            {/* TODO: subtitle and detailed breakdown of features, how a session works, etc. */}
          </div>
        </div>
      </section>

      {/* Required Reading Section */}
      <section id="reading" className="py-32 relative bg-gradient-to-br from-slate-50 via-gray-50 to-blue-50">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="grid lg:grid-cols-7 gap-8 items-start">
            {/* Left Column - Title and Subtitle */}
            <div className="lg:col-span-2">
              <h2 className="text-5xl lg:text-6xl font-bold text-slate-800 mb-6">
                <span className="bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent">Required Reading</span>
              </h2>
              <p className="text-xl text-slate-600">
                The essays, research, and headlines that shape how we think about education, ambition, and human potential. Some inspired Evo, some prove the point, and some are just too good to leave out.
              </p>
            </div>

            {/* Right Column - Curated Content List */}
            <div className="lg:col-span-5">
              <ul className="divide-y divide-slate-200 border-y border-slate-200">
                {readingItems.map((item) => (
                  <li key={item.href}>
                    <Link href={item.href} target="_blank" rel="noopener noreferrer" className="group flex items-start justify-between gap-6 py-6">
                      <div>
                        <Badge variant="outline" className="mb-3 border-blue-300 text-blue-700 uppercase tracking-wider text-xs">
                          {item.category}
                        </Badge>
                        <h3 className="text-2xl font-bold text-slate-800 font-serif leading-tight group-hover:text-blue-600 transition-colors">
                          {item.title}
                        </h3>
                        <p className="text-sm uppercase tracking-wider text-slate-500 mt-2">{item.source}</p>
                        <p className="text-slate-600 leading-relaxed mt-3">{item.description}</p>
                      </div>
                      <ArrowUpRight className="h-6 w-6 shrink-0 text-slate-400 group-hover:text-blue-600 transition-colors" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-blue-200 bg-white py-8">
        <div className="container mx-auto px-4 lg:px-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-slate-500">
          <p>© {new Date().getFullYear()} Automatos Solutions LLC</p>
          <div className="flex items-center space-x-8">
            <Link href="/terms" className="hover:text-blue-600 transition-colors">
              Terms of Service
            </Link>
            <Link href="/privacy" className="hover:text-blue-600 transition-colors">
              Privacy Policy
            </Link>
          </div>
        </div>
      </footer>

    </div>
  );
}
