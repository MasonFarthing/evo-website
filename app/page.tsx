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
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Advanced Space Grid Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-black"></div>
        <div 
          className="absolute inset-0 opacity-15"
          style={{
            backgroundImage: `
              linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px'
          }}
        ></div>
        {/* Animated secondary grid */}
        <div 
          className="absolute inset-0 opacity-8 animate-pulse"
          style={{
            backgroundImage: `
              linear-gradient(rgba(0, 255, 255, 0.15) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0, 255, 255, 0.15) 1px, transparent 1px)
            `,
            backgroundSize: '120px 120px',
            animationDuration: '6s'
          }}
        ></div>
      </div>

      {/* Floating Holographic Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Top constellation network */}
        <div className="absolute top-20 left-20 w-64 h-32">
          <div className="absolute top-0 left-0 w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
          <div className="absolute top-8 left-24 w-1 h-1 bg-blue-400 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
          <div className="absolute top-16 left-12 w-1.5 h-1.5 bg-cyan-300 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
          <div className="absolute top-4 left-48 w-1 h-1 bg-blue-300 rounded-full animate-pulse" style={{animationDelay: '1.5s'}}></div>
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 256 128">
            <path d="M8 8 L96 32 L48 64 L192 16" stroke="rgba(59, 130, 246, 0.3)" strokeWidth="1" fill="none"/>
            <path d="M96 32 L192 16 L240 32" stroke="rgba(0, 255, 255, 0.2)" strokeWidth="1" fill="none"/>
          </svg>
        </div>

        {/* Right side orbital system */}
        <div className="absolute top-32 right-20 w-56 h-56">
          <div className="absolute inset-0 border border-cyan-500/15 rounded-full animate-spin" style={{animationDuration: '30s'}}></div>
          <div className="absolute inset-6 border border-blue-500/12 rounded-full animate-spin" style={{animationDuration: '20s', animationDirection: 'reverse'}}></div>
          <div className="absolute inset-12 border border-cyan-400/8 rounded-full animate-spin" style={{animationDuration: '40s'}}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-cyan-400 rounded-full animate-pulse"></div>
        </div>

        {/* Bottom left data streams */}
        <div className="absolute bottom-32 left-16 flex flex-col space-y-3">
          {[...Array(8)].map((_, i) => (
            <div 
              key={i}
              className="h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent animate-pulse"
              style={{
                width: `${80 + i * 15}px`,
                animationDelay: `${i * 0.4}s`,
                animationDuration: '3s'
              }}
            ></div>
          ))}
        </div>

        {/* Floating tech elements */}
        <div className="absolute top-1/2 right-1/4 w-32 h-32 border border-blue-500/10 rounded-lg rotate-45 animate-pulse opacity-20"></div>
        <div className="absolute bottom-1/4 right-1/3 w-24 h-24 border border-cyan-500/15 rounded-full animate-spin opacity-25" style={{animationDuration: '25s'}}></div>
      </div>

      {/* Futuristic Header */}
      <header className="border-b border-cyan-500/20 backdrop-blur-sm bg-slate-950/90 sticky top-0 z-50">
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
            <Link href="#features" className="text-slate-300 hover:text-cyan-400 transition-colors text-sm uppercase tracking-wider font-medium">
              Systems
            </Link>
            <Link href="#vision" className="text-slate-300 hover:text-cyan-400 transition-colors text-sm uppercase tracking-wider font-medium">
              Mission
            </Link>
            <Link href="/pricing" className="text-slate-300 hover:text-cyan-400 transition-colors text-sm uppercase tracking-wider font-medium">
              Access
            </Link>
          </nav>

          {/* CTA Buttons */}
          <div className="flex items-center space-x-4">
            <Button variant="ghost" asChild className="text-slate-300 hover:text-white hover:bg-slate-800/50 border border-transparent hover:border-cyan-500/30">
              <Link href="/signin">Sign In</Link>
            </Button>
            <Button asChild className="bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white shadow-lg shadow-cyan-500/25">
              <Link href="/signup">
                <Rocket className="mr-2 h-4 w-4" />
                Get Started
              </Link>
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section - Space Command Center */}
      <section className="relative py-32 lg:py-40 overflow-hidden">
        <div className="container mx-auto px-4 lg:px-6 relative">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left - Hero Content */}
            <div className="space-y-12">
              <div className="space-y-8">
                <h1 className="text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight">
                  <span className="text-white">The Future of</span>
                  <br />
                  <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-300 bg-clip-text text-transparent">
                    Human Potential
                  </span>
                </h1>
                
                <p className="text-xl lg:text-2xl text-slate-300 leading-relaxed max-w-2xl">
                  We fuel the fire inside every kid, visionary, creator, and founder by providing the tools to make anything possible, and enable 
                  <span className="text-cyan-400 font-semibold"> exponential human growth</span>.
                </p>
              </div>

              {/* Status indicators */}
              <div className="flex items-center space-x-8">
                <div className="flex items-center space-x-2">
                  <Shield className="w-5 h-5 text-cyan-400" />
                  <span className="text-sm text-slate-400">Secure Platform</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Cpu className="w-5 h-5 text-blue-400" />
                  <span className="text-sm text-slate-400">AI Powered</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Infinity className="w-5 h-5 text-cyan-300" />
                  <span className="text-sm text-slate-400">Unlimited Growth</span>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white shadow-lg shadow-cyan-500/25 px-8 py-4">
                  <Rocket className="mr-2 h-5 w-5" />
                  Initialize Evolution
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button size="lg" variant="outline" className="border-cyan-500/30 text-cyan-400 hover:bg-cyan-500/10 px-8 py-4">
                  <Play className="mr-2 h-5 w-5" />
                  View Demo
                </Button>
              </div>
            </div>

            {/* Right - Holographic Interface */}
            <div className="relative">
              {/* Holographic border */}
              <div className="absolute inset-0 border border-cyan-500/20 rounded-2xl">
                <div className="absolute -top-px -left-px w-12 h-12 border-t-2 border-l-2 border-cyan-400 rounded-tl-2xl"></div>
                <div className="absolute -top-px -right-px w-12 h-12 border-t-2 border-r-2 border-cyan-400 rounded-tr-2xl"></div>
                <div className="absolute -bottom-px -left-px w-12 h-12 border-b-2 border-l-2 border-cyan-400 rounded-bl-2xl"></div>
                <div className="absolute -bottom-px -right-px w-12 h-12 border-b-2 border-r-2 border-cyan-400 rounded-br-2xl"></div>
              </div>
              
              {/* Demo interface */}
              <div className="relative bg-gradient-to-br from-slate-900/80 to-slate-800/80 backdrop-blur-xl rounded-2xl p-8 m-4">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-600/10 to-blue-600/10 rounded-xl blur-xl"></div>
                  <Image
                    src="/demo.png"
                    alt="Evo Platform Interface"
                    width={600}
                    height={400}
                    className="rounded-xl w-full relative z-10"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section - Tech Grid */}
      <section id="features" className="py-32 relative">
        <div className="container mx-auto px-4 lg:px-6">
          {/* Section Header */}
          <div className="text-center mb-20">
            <div className="flex items-center justify-center mb-6">
              <Sparkles className="w-6 h-6 text-cyan-400 mr-3" />
              <span className="text-cyan-400 text-sm uppercase tracking-wider font-medium">Evolution Systems</span>
              <Sparkles className="w-6 h-6 text-cyan-400 ml-3" />
            </div>
            <h2 className="text-5xl lg:text-6xl font-bold text-white mb-6">
              State-of-the-Art
              <br />
              <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Human Evolution Tools</span>
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Advanced AI systems designed to unlock unlimited human potential through personalized growth acceleration
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid lg:grid-cols-3 gap-8">
            {/* AI Mentor */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-600/10 to-blue-600/10 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative bg-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 hover:border-cyan-500/30 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-600 to-blue-600 rounded-xl flex items-center justify-center mb-6">
                  <Brain className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">AI Mentor</h3>
                <p className="text-slate-400 leading-relaxed">
                  Imagine having Tiger Woods' golf coach or LeBron James as your mentor. Now you can with your personal AI mentor, providing 24/7 state-of-the-art guidance to unlock your full potential.
                </p>
              </div>
            </div>

            {/* Adaptive Learning */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-cyan-600/10 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative bg-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 hover:border-cyan-500/30 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-xl flex items-center justify-center mb-6">
                  <BookOpen className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Adaptive Learning</h3>
                <p className="text-slate-400 leading-relaxed">
                  A system that learns with you, constantly updating its knowledge and approach to match your unique learning style and knowledge threshold.
                </p>
              </div>
            </div>

            {/* Quantum Adaptability */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-600/10 to-blue-600/10 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative bg-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 hover:border-cyan-500/30 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-600 to-blue-600 rounded-xl flex items-center justify-center mb-6">
                  <Zap className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Quantum Adaptability</h3>
                <p className="text-slate-400 leading-relaxed">
                  Seamlessly adapts to your goals, from creative projects to scientific research, providing the right tools at the right time.
                </p>
              </div>
            </div>

            {/* Neural Memory */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-cyan-600/10 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative bg-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 hover:border-cyan-500/30 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-xl flex items-center justify-center mb-6">
                  <Database className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Neural Memory</h3>
                <p className="text-slate-400 leading-relaxed">
                  Remembers your journey, conversations, and progress, creating a personalized and continuous growth experience.
                </p>
              </div>
            </div>

            {/* Exponential Output */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-600/10 to-blue-600/10 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative bg-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 hover:border-cyan-500/30 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-600 to-blue-600 rounded-xl flex items-center justify-center mb-6">
                  <TrendingUp className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Exponential Output</h3>
                <p className="text-slate-400 leading-relaxed">
                  Amplify your creative and intellectual output, helping you produce more, faster, and at a higher quality than ever before.
                </p>
              </div>
            </div>

            {/* Global Network */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-cyan-600/10 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative bg-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 hover:border-cyan-500/30 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-xl flex items-center justify-center mb-6">
                  <Globe className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Global Network</h3>
                <p className="text-slate-400 leading-relaxed">
                  Connect with a worldwide community of creators, builders, and visionaries all pushing the boundaries of human potential.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section - Mission Control */}
      <section id="vision" className="py-32 relative">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left - Vision Content */}
            <div className="space-y-8">
              <div className="flex items-center space-x-3">
                <Target className="w-6 h-6 text-cyan-400" />
                <Badge className="bg-cyan-600/20 text-cyan-400 border-cyan-600/30 px-4 py-2 text-sm uppercase tracking-wider">
                  Mission Directive
                </Badge>
              </div>
              
              <h2 className="text-5xl lg:text-6xl font-bold leading-tight">
                <span className="text-white">A World Where Every</span>
                <br />
                <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Dream Becomes Reality</span>
              </h2>
              
              <p className="text-xl text-slate-300 leading-relaxed">
                We envision a future where the industrial education system becomes obsolete. Where every kid, creator, builder, explorer, and dreamer has access to exponential growth through AI mentorship that rivals the world's elite advisors. This isn't just about learning - it's about unleashing the god-given unlimited human potential that's inside everybody.
              </p>

              {/* Mission Points */}
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="h-3 w-3 text-white" />
                  </div>
                  <span className="text-slate-300 text-lg">Break free from grade-capped potential and artificial limits</span>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="h-3 w-3 text-white" />
                  </div>
                  <span className="text-slate-300 text-lg">Transform every human into their highest creative potential</span>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="h-3 w-3 text-white" />
                  </div>
                  <span className="text-slate-300 text-lg">Make elite-level mentorship accessible to everyone</span>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="h-3 w-3 text-white" />
                  </div>
                  <span className="text-slate-300 text-lg">Enable exponential human development from age 5 to 95</span>
                </div>
              </div>

              <Button size="lg" className="bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white shadow-lg shadow-cyan-500/25 px-8 py-4">
                <Rocket className="mr-2 h-5 w-5" />
                Join Our Mission
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>

            {/* Right - Holographic Display */}
            <div className="relative">
              {/* Holographic frame */}
              <div className="absolute inset-0 border border-cyan-500/20 rounded-3xl">
                <div className="absolute -top-px -left-px w-16 h-16 border-t-2 border-l-2 border-cyan-400 rounded-tl-3xl"></div>
                <div className="absolute -top-px -right-px w-16 h-16 border-t-2 border-r-2 border-cyan-400 rounded-tr-3xl"></div>
                <div className="absolute -bottom-px -left-px w-16 h-16 border-b-2 border-l-2 border-cyan-400 rounded-bl-3xl"></div>
                <div className="absolute -bottom-px -right-px w-16 h-16 border-b-2 border-r-2 border-cyan-400 rounded-br-3xl"></div>
              </div>
              
              {/* Content */}
              <div className="relative bg-gradient-to-br from-slate-900/60 to-slate-800/60 backdrop-blur-xl rounded-3xl p-12 m-4">
                <div className="text-center space-y-8">
                  <div className="relative mx-auto w-24 h-24">
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/30 to-blue-500/30 rounded-full blur-xl animate-pulse"></div>
                    <div className="relative bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full w-24 h-24 flex items-center justify-center">
                      <Infinity className="h-12 w-12 text-white" />
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <h3 className="text-3xl font-bold text-white">Unlimited Potential</h3>
                    <p className="text-slate-400 text-lg">
                      Every human possesses infinite creative capacity. Our mission is to unlock it.
                    </p>
                  </div>
                  
                  {/* Stats */}
                  <div className="grid grid-cols-2 gap-6 pt-6">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-cyan-400">∞</div>
                      <div className="text-sm text-slate-500 uppercase tracking-wider">Growth Potential</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-blue-400">24/7</div>
                      <div className="text-sm text-slate-500 uppercase tracking-wider">AI Mentorship</div>
                    </div>
                  </div>
                </div>
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
