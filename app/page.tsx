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
            <Link href="#deep-dive" className="text-slate-700 hover:text-blue-600 transition-colors text-sm uppercase tracking-wider font-medium">
              Deep Dive
            </Link>
            <Link href="#resources" className="text-slate-700 hover:text-blue-600 transition-colors text-sm uppercase tracking-wider font-medium">
              Resources
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
            <Button variant="outline" asChild className="border-blue-600 text-blue-600 hover:bg-blue-50">
              <Link href="/signup">
                Get Started
              </Link>
            </Button>
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
                  Humanity knows remarkably little about how human potential works, leaving us unable to educate people effectively. Solving this critical gap is essential to supercharging human flourishing and advancement.
                </p>
              </div>


              {/* CTA Buttons */}
              <div className="flex justify-center gap-6">
                <Button size="lg" className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white shadow-lg shadow-blue-500/25 px-12 py-6 text-xl rounded-full">
                  Get Started
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
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
            
            {/* Document Outline Placeholder */}
            <div className="max-w-3xl mx-auto flex-1 flex items-center justify-center pb-16">
              <div className="border-2 border-slate-400 rounded-2xl min-h-[600px] w-full">
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
              <div className="border-2 border-black rounded-lg p-8 min-h-[600px]">
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

      {/* Resources Section */}
      <section id="resources" className="pt-16 pb-16 relative bg-gradient-to-br from-blue-50 to-slate-100 min-h-[460vh]">
        <div className="container mx-auto px-4 lg:px-6 h-full">
          <div className="text-center mb-16">
            <h2 className="text-5xl lg:text-6xl font-bold text-slate-800">
              Resources
            </h2>
          </div>
          
          <div className="flex flex-col h-full space-y-0">
            {/* Top black line */}
            <div className="w-full h-1 bg-black"></div>
            
            {/* Section 1 */}
            <div className="flex-1 flex flex-col justify-center items-center py-80">
              <div className="max-w-md w-full">
                <div className="group cursor-pointer">
                  <div className="bg-white border-2 border-blue-200 rounded-2xl p-8 h-32 flex flex-col justify-center items-center text-center transition-all duration-300 hover:border-blue-500 hover:shadow-2xl hover:scale-105 hover:bg-gradient-to-br hover:from-blue-50 hover:to-white">
                    <div className="space-y-3">
                      <h3 className="text-2xl font-bold text-slate-800 group-hover:text-blue-700 transition-colors duration-300">
                        Find a Mentor
                      </h3>
                      <p className="text-base text-slate-600 leading-relaxed group-hover:text-slate-700 transition-colors duration-300">
                        Tool to connect with mentors who have real experience and cultivated experience
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Black line divider */}
            <div className="w-full h-1 bg-black"></div>
            
            {/* Section 2 */}
            <div className="flex-1 flex flex-col justify-center items-center py-80">
              <div className="text-center">
                <h3 className="text-3xl font-bold text-slate-800 mb-4">Section 2</h3>
                <p className="text-lg text-slate-600">Content for section 2 goes here</p>
              </div>
            </div>
            
            {/* Black line divider */}
            <div className="w-full h-1 bg-black"></div>
            
            {/* Section 3 */}
            <div className="flex-1 flex flex-col justify-center items-center py-80">
              <div className="text-center">
                <h3 className="text-3xl font-bold text-slate-800 mb-4">Section 3</h3>
                <p className="text-lg text-slate-600">Content for section 3 goes here</p>
              </div>
            </div>
            
            {/* Black line divider */}
            <div className="w-full h-1 bg-black"></div>
            
            {/* Section 4 */}
            <div className="flex-1 flex flex-col justify-center items-center py-80">
              <div className="text-center">
                <h3 className="text-3xl font-bold text-slate-800 mb-4">Section 4</h3>
                <p className="text-lg text-slate-600">Content for section 4 goes here</p>
              </div>
            </div>
            
            {/* Bottom black line */}
            <div className="w-full h-1 bg-black"></div>
          </div>
        </div>
      </section>

    </div>
  );
}
