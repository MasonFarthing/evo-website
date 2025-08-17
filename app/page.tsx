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


              {/* CTA Button */}
              <div className="flex justify-center">
                <Button size="lg" className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white shadow-lg shadow-blue-500/25 px-12 py-6 text-xl rounded-full">
                  Get Started
                  <ArrowRight className="ml-2 h-5 w-5" />
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
                {/* Articles will go here */}
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
      <section id="resources" className="py-32 relative bg-gradient-to-br from-blue-50 to-slate-100">
        <div className="container mx-auto px-4 lg:px-6">
          {/* Section Header */}
          <div className="text-center mb-20">
            <div className="flex items-center justify-center mb-6">
              <BookOpen className="w-6 h-6 text-blue-600 mr-3" />
              <span className="text-blue-600 text-sm uppercase tracking-wider font-medium">Knowledge Hub</span>
              <BookOpen className="w-6 h-6 text-blue-600 ml-3" />
            </div>
            <h2 className="text-5xl lg:text-6xl font-bold text-slate-800 mb-6">
              Resources &
              <br />
              <span className="bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent">Learning Materials</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Access our comprehensive library of guides, tutorials, and tools to accelerate your growth journey
            </p>
          </div>

          {/* Resources Grid */}
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Getting Started Guide */}
            <div className="group relative">
              <div className="relative bg-white border border-blue-200 rounded-2xl p-8 hover:border-blue-400 transition-all duration-300 shadow-lg hover:shadow-xl">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center mb-6">
                  <Rocket className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-slate-800 mb-4">Getting Started Guide</h3>
                <p className="text-slate-600 leading-relaxed mb-6">
                  Complete beginner's guide to unlock your potential with step-by-step instructions and best practices.
                </p>
                <Link href="/guide" className="text-blue-600 hover:text-blue-700 font-semibold flex items-center">
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>

            {/* Video Tutorials */}
            <div className="group relative">
              <div className="relative bg-white border border-blue-200 rounded-2xl p-8 hover:border-blue-400 transition-all duration-300 shadow-lg hover:shadow-xl">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center mb-6">
                  <Play className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-slate-800 mb-4">Video Tutorials</h3>
                <p className="text-slate-600 leading-relaxed mb-6">
                  Watch comprehensive video tutorials covering all features and advanced techniques for maximum growth.
                </p>
                <Link href="/tutorials" className="text-blue-600 hover:text-blue-700 font-semibold flex items-center">
                  Watch Now <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>

            {/* API Documentation */}
            <div className="group relative">
              <div className="relative bg-white border border-blue-200 rounded-2xl p-8 hover:border-blue-400 transition-all duration-300 shadow-lg hover:shadow-xl">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center mb-6">
                  <BookOpen className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-slate-800 mb-4">API Documentation</h3>
                <p className="text-slate-600 leading-relaxed mb-6">
                  Complete API reference for developers looking to integrate and build custom solutions.
                </p>
                <Link href="/docs" className="text-blue-600 hover:text-blue-700 font-semibold flex items-center">
                  View Docs <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>

            {/* Community Forum */}
            <div className="group relative">
              <div className="relative bg-white border border-blue-200 rounded-2xl p-8 hover:border-blue-400 transition-all duration-300 shadow-lg hover:shadow-xl">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center mb-6">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-slate-800 mb-4">Community Forum</h3>
                <p className="text-slate-600 leading-relaxed mb-6">
                  Join thousands of creators sharing experiences, tips, and supporting each other's growth journey.
                </p>
                <Link href="/community" className="text-blue-600 hover:text-blue-700 font-semibold flex items-center">
                  Join Community <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>

            {/* Success Stories */}
            <div className="group relative">
              <div className="relative bg-white border border-blue-200 rounded-2xl p-8 hover:border-blue-400 transition-all duration-300 shadow-lg hover:shadow-xl">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center mb-6">
                  <Star className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-slate-800 mb-4">Success Stories</h3>
                <p className="text-slate-600 leading-relaxed mb-6">
                  Read inspiring stories from users who transformed their lives and achieved exponential growth.
                </p>
                <Link href="/stories" className="text-blue-600 hover:text-blue-700 font-semibold flex items-center">
                  Read Stories <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>

            {/* Support Center */}
            <div className="group relative">
              <div className="relative bg-white border border-blue-200 rounded-2xl p-8 hover:border-blue-400 transition-all duration-300 shadow-lg hover:shadow-xl">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center mb-6">
                  <Shield className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-slate-800 mb-4">Support Center</h3>
                <p className="text-slate-600 leading-relaxed mb-6">
                  Get help when you need it with our comprehensive support center and responsive help team.
                </p>
                <Link href="/support" className="text-blue-600 hover:text-blue-700 font-semibold flex items-center">
                  Get Support <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer - Command Center */}
      <footer className="bg-slate-950/90 border-t border-cyan-500/20 py-16 relative">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="grid md:grid-cols-4 gap-12">
            <div className="space-y-6">
              <Link href="/" className="flex items-center space-x-2">
                <svg viewBox="0 0 170 80" className="w-24 h-14" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <linearGradient id="quantumShellFooter" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" style={{stopColor:"#00ffff", stopOpacity:1}} />
                      <stop offset="50%" style={{stopColor:"#0080ff", stopOpacity:1}} />
                      <stop offset="100%" style={{stopColor:"#0040ff", stopOpacity:1}} />
                    </linearGradient>
                    
                    <filter id="stellarGlowFooter" x="-100%" y="-100%" width="300%" height="300%">
                      <feGaussianBlur stdDeviation="6" result="coloredBlur"/>
                      <feMerge>
                        <feMergeNode in="coloredBlur"/>
                        <feMergeNode in="SourceGraphic"/>
                      </feMerge>
                    </filter>
                  </defs>
                  
                  <g filter="url(#stellarGlowFooter)" transform="translate(-180, -210)">
                    <g transform="translate(180, 250)">
                      <rect x="0" y="-30" width="35" height="8" fill="url(#quantumShellFooter)"/>
                      <rect x="0" y="-6" width="28" height="6" fill="url(#quantumShellFooter)"/>
                      <rect x="0" y="22" width="35" height="8" fill="url(#quantumShellFooter)"/>
                      <rect x="0" y="-30" width="8" height="60" fill="url(#quantumShellFooter)"/>
                    </g>
                    
                    <g transform="translate(230, 250)">
                      <polygon points="0,-30 6,-30 18,30 12,30" fill="url(#quantumShellFooter)"/>
                      <polygon points="32,-30 38,-30 26,30 18,30" fill="url(#quantumShellFooter)"/>
                    </g>
                    
                    <g transform="translate(290, 250)">
                      <circle cx="19" cy="0" r="28" fill="none" stroke="url(#quantumShellFooter)" strokeWidth="8"/>
                      <circle cx="19" cy="0" r="15" fill="none" stroke="url(#quantumShellFooter)" strokeWidth="2" opacity="0.7">
                        <animate attributeName="r" values="15;18;15" dur="4s" repeatCount="indefinite"/>
                      </circle>
                    </g>
                  </g>
                </svg>
              </Link>
              <p className="text-slate-400 leading-relaxed">
                Fueling the fire inside every creator, builder, explorer, and dreamer through exponential growth partnerships and unlimited potential unleashing.
              </p>
            </div>

            <div className="space-y-6">
              <h3 className="text-white font-semibold text-lg uppercase tracking-wider">Systems</h3>
              <div className="space-y-3">
                <Link href="#features" className="block text-slate-400 hover:text-cyan-400 transition-colors">
                  Evolution Tools
                </Link>
                <Link href="/pricing" className="block text-slate-400 hover:text-cyan-400 transition-colors">
                  Access Levels
                </Link>
                <Link href="#" className="block text-slate-400 hover:text-cyan-400 transition-colors">
                  API Interface
                </Link>
                <Link href="#" className="block text-slate-400 hover:text-cyan-400 transition-colors">
                  Integrations
                </Link>
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-white font-semibold text-lg uppercase tracking-wider">Mission</h3>
              <div className="space-y-3">
                <Link href="#vision" className="block text-slate-400 hover:text-cyan-400 transition-colors">
                  Our Vision
                </Link>
                <Link href="#" className="block text-slate-400 hover:text-cyan-400 transition-colors">
                  Research
                </Link>
                <Link href="#" className="block text-slate-400 hover:text-cyan-400 transition-colors">
                  Careers
                </Link>
                <Link href="#" className="block text-slate-400 hover:text-cyan-400 transition-colors">
                  Contact
                </Link>
              </div>
            </div>


          </div>
          
          <div className="border-t border-slate-800/50 mt-12 pt-8 text-center">
            <p className="text-slate-500 text-sm">
              © 2024 Evo. Advancing human potential through exponential growth technology.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
