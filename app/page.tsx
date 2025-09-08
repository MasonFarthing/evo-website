import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  BookOpen,
  Brain,
  Users,
  Zap,
  ArrowRight,
  Play,
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
  Sparkles,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"

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
          <nav className="hidden md:flex items-center justify-center flex-1 space-x-16">
            <Link href="#mission" className="text-slate-700 hover:text-blue-600 transition-colors text-sm uppercase tracking-wider font-medium">
              Our Mission
            </Link>
            <Link href="#how-it-works" className="text-slate-700 hover:text-blue-600 transition-colors text-sm uppercase tracking-wider font-medium">
              How It Works
            </Link>
            <Link href="#deep-dive" className="text-slate-700 hover:text-blue-600 transition-colors text-sm uppercase tracking-wider font-medium">
              Deep Dive
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
                <Button size="lg" asChild className="bg-gradient-to-r from-gray-100 to-white hover:from-gray-200 hover:to-gray-100 text-slate-700 shadow-lg shadow-gray-300/25 px-12 py-6 text-xl rounded-full border border-gray-200 hover:border-gray-300">
                  <Link href="/demo">
                    Watch Demo
                    <Play className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-32 relative bg-gradient-to-br from-white via-slate-50 to-gray-100">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl lg:text-6xl font-bold text-slate-800 mb-8">
              <span className="bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent">How It Works</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Our approach combines cutting-edge research with personalized learning pathways
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto">
            {/* Step 1 */}
            <div className="text-center group">
              <div className="bg-gradient-to-br from-blue-100 to-blue-200 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <span className="text-2xl font-bold text-blue-700">1</span>
              </div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4">Let Evo Get to Know You</h3>
              <p className="text-slate-600 leading-relaxed">
                Go through the beginner orientation and assessment to get familiar with the platform and Evo to get familiar with your unique situation and goals.
              </p>
            </div>

            {/* Step 2 */}
            <div className="text-center group">
              <div className="bg-gradient-to-br from-blue-100 to-blue-200 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <span className="text-2xl font-bold text-blue-700">2</span>
              </div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4">Accelerated Learning</h3>
              <p className="text-slate-600 leading-relaxed">
                Experience our scientifically-backed methods that unlock rapid skill acquisition and deep understanding across multiple domains.
              </p>
            </div>

            {/* Step 3 */}
            <div className="text-center group">
              <div className="bg-gradient-to-br from-blue-100 to-blue-200 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <span className="text-2xl font-bold text-blue-700">3</span>
              </div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4">Grow</h3>
              <p className="text-slate-600 leading-relaxed">
                Cultivate your human potential and grow along your unique journey to excellence. Build real world skills, unlock real world resources, and become the smartest and most capable person you know.
              </p>
            </div>
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

      {/* Deep Dive Section */}
      <section id="deep-dive" className="py-32 relative bg-gradient-to-br from-slate-50 via-gray-50 to-blue-50">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="grid lg:grid-cols-7 gap-8 items-start">
            {/* Left Column - Title and Subtitle */}
            <div className="lg:col-span-2">
              <h2 className="text-5xl lg:text-6xl font-bold text-slate-800 mb-6">
                <span className="bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent">Deep Dive</span>
              </h2>
              <p className="text-xl text-slate-600">
                Explore comprehensive analyses, detailed methodologies, and cutting-edge research that powers our mission
              </p>
            </div>
            
            {/* Right Column - Content Area */}
            <div className="lg:col-span-5 relative">
              <div className="border-2 border-black rounded-lg p-8 min-h-[400px]">
                {/* Articles Grid - 3x3 Layout */}
                <div className="grid grid-cols-3 gap-6 h-full">
                  {/* Article 1 - Top Left */}
                  <Link href="https://t.co/zJ8fNDWAwj" target="_blank" rel="noopener noreferrer" className="group cursor-pointer">
                    <div className="h-full hover:text-blue-600 transition-colors duration-300">
                      <h3 className="text-lg font-bold text-gray-900 leading-tight group-hover:text-blue-600 transition-colors font-serif" style={{transform: 'scaleY(1.5)'}}>
                        Why we stopped making einsteins
                      </h3>
                    </div>
                  </Link>
                  
                  {/* Placeholder slots */}
                  {[...Array(8)].map((_, i) => (
                    <div key={i} className="group cursor-default">
                      <div className="h-full flex items-center justify-center border-2 border-dashed border-gray-300 rounded-lg p-4 bg-gray-50/50">
                        <div className="text-center">
                          <div className="text-gray-400 mb-2">
                            <Sparkles className="h-6 w-6 mx-auto" />
                          </div>
                          <p className="text-sm text-gray-500 font-medium">Coming Soon</p>
                        </div>
                      </div>
                    </div>
                  ))}
                  
                </div>
              </div>
              
              {/* Next Tab Arrow */}
              <button className="absolute right-4 top-1/2 -translate-y-1/2 bg-white border-2 border-black rounded-full p-3 hover:bg-gray-50 transition-colors">
                <ArrowRight className="h-6 w-6 text-black" />
              </button>
            </div>
          </div>
        </div>
      </section>


    </div>
  );
}
