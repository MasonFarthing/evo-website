import { Button } from "@/components/ui/button"
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
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
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function EvoLandingPage() {
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
        <div className="absolute top-[15%] left-[70%] w-0.5 h-0.5 bg-blue-400 rounded-full animate-pulse" style={{animationDelay: '0.3s'}}></div>
        <div className="absolute top-[45%] right-[40%] w-0.5 h-0.5 bg-purple-400 rounded-full animate-pulse" style={{animationDelay: '1.2s'}}></div>
        <div className="absolute top-[75%] left-[60%] w-1 h-1 bg-cyan-400 rounded-full animate-pulse" style={{animationDelay: '0.8s'}}></div>
      </div>
      
      {/* Nebula Glow Effects */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-radial from-blue-600/10 via-purple-600/5 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-gradient-radial from-cyan-600/10 via-blue-600/5 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-gradient-radial from-purple-600/10 via-pink-600/5 to-transparent rounded-full blur-3xl"></div>

      {/* Header */}
      <header className="border-b border-slate-800/50 backdrop-blur-sm bg-slate-950/80 sticky top-0 z-50">
        <div className="container mx-auto px-4 lg:px-6 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <svg viewBox="0 0 170 80" className="w-20 h-12" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="quantumShell" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{stopColor:"#00ffff", stopOpacity:1}} />
                  <stop offset="50%" style={{stopColor:"#0080ff", stopOpacity:1}} />
                  <stop offset="100%" style={{stopColor:"#8000ff", stopOpacity:1}} />
                </linearGradient>
                
                <filter id="stellarGlow" x="-100%" y="-100%" width="300%" height="300%">
                  <feGaussianBlur stdDeviation="8" result="coloredBlur"/>
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

          <nav className="hidden md:flex items-center space-x-8">
            <Link href="#features" className="text-slate-300 hover:text-blue-400 transition-colors">
              Features
            </Link>
            <Link href="#about" className="text-slate-300 hover:text-blue-400 transition-colors">
              About
            </Link>
            <Link href="/pricing" className="text-slate-300 hover:text-blue-400 transition-colors">
              Pricing
            </Link>
            <Link href="#contact" className="text-slate-300 hover:text-blue-400 transition-colors">
              Contact
            </Link>
          </nav>

          <div className="flex items-center space-x-4">
            <Button variant="ghost" asChild className="text-slate-300 hover:text-white hover:bg-slate-800">
              <Link href="/signin">Sign In</Link>
            </Button>
            <Button asChild className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white">
              <Link href="/signup">Get Started</Link>
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-transparent"></div>
        <div className="container mx-auto px-4 lg:px-6 relative">
          <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
            <div className="space-y-10">
              <div className="space-y-6">
                <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
                  <span className="text-white">The Future of</span>
                  <br />
                  <span className="bg-gradient-to-r from-blue-600 to-blue-900 bg-clip-text text-transparent">
                    Human Potential
                  </span>
                </h1>
                <p className="text-xl lg:text-2xl bg-gradient-to-r from-slate-300 via-slate-200 to-white bg-clip-text text-transparent leading-relaxed max-w-3xl mx-auto">
                  We fuel the fire inside every kid, visionary, creator, and founder by providing the tools to make anything possible, and enable exponential human growth.
                </p>
              </div>

              <div className="relative max-w-4xl mx-auto mt-12">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-3xl blur-3xl"></div>
                <div className="relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-3xl p-8">
                  <Image
                    src="/demo.png"
                    alt="Evo Platform Demo"
                    width={660}
                    height={440}
                    className="rounded-2xl w-full"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-slate-900/50">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-white">State Of The Art Human Evolution Tools</h2>
          </div>

          <div className="grid lg:grid-cols-12 gap-8 items-center">
            {/* Left side - Logo/Image (1/3 width) */}
            <div className="lg:col-span-4 flex justify-start -ml-24 lg:-ml-32">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-full blur-3xl w-[400px] h-[400px]"></div>
                <div className="relative bg-gradient-to-br from-slate-800/30 to-slate-900/30 backdrop-blur-sm border border-slate-700/30 rounded-full p-12 w-[400px] h-[400px] flex items-center justify-center">
                  <Image
                    src="/logo.png"
                    alt="Evo Logo"
                    width={400}
                    height={400}
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
            </div>

            {/* Right side - Features (2/3 width) */}
            <div className="lg:col-span-8 grid md:grid-cols-2 gap-6">
            <Card className="bg-slate-800/50 border-slate-700/50 backdrop-blur-sm hover:bg-slate-800/70 transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg flex items-center justify-center mb-4">
                  <Brain className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-white">AI Mentor</CardTitle>
                <CardDescription className="text-slate-400">
                  imagine having tiger woods golf coach or lebron james as you mentor, well now you can with your personal AI mentor, providing 24/7 state of the art guidence to unlock your full potential.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700/50 backdrop-blur-sm hover:bg-slate-800/70 transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg flex items-center justify-center mb-4">
                  <BookOpen className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-white">AI Learning</CardTitle>
                <CardDescription className="text-slate-400">
                  A system that learns with you, constantly updating its knowledge and approach to match your unique learning style and knowledge threshold.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700/50 backdrop-blur-sm hover:bg-slate-800/70 transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg flex items-center justify-center mb-4">
                  <Zap className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-white">Adaptability</CardTitle>
                <CardDescription className="text-slate-400">
                  Seamlessly adapts to your goals, from creative projects to scientific research, providing the right tools at the right time.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700/50 backdrop-blur-sm hover:bg-slate-800/70 transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg flex items-center justify-center mb-4">
                  <Database className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-white">Memory</CardTitle>
                <CardDescription className="text-slate-400">
                  Remembers your journey, conversations, and progress, creating a personalized and continuous growth experience.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700/50 backdrop-blur-sm hover:bg-slate-800/70 transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg flex items-center justify-center mb-4">
                  <TrendingUp className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-white">Scaled Output</CardTitle>
                <CardDescription className="text-slate-400">
                  Amplify your creative and intellectual output, helping you produce more, faster, and at a higher quality than ever before.
                </CardDescription>
              </CardHeader>
            </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Our Vision Section */}
      <section id="vision" className="py-20">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="grid lg:grid-cols-1 gap-12 items-center">
            <div className="space-y-6">
              <Badge className="bg-blue-600/20 text-blue-400 border-blue-600/30">Our Vision</Badge>
              <h2 className="text-3xl lg:text-5xl font-bold text-white">
                A World Where Every Dream Becomes Reality
              </h2>
              <p className="text-lg bg-gradient-to-r from-slate-300 via-slate-200 to-white bg-clip-text text-transparent leading-relaxed">
                We envision a future where the industrial education system becomes obsolete. Where every kid, creator, builder, explorer, and dreamer has access to exponential growth through AI mentorship that rivals the world's elite advisors. This isn't just about learning - it's about unleashing the god given unlimited human potential thats inside everybody.
              </p>

              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-blue-400" />
                  <span className="text-slate-300">Break free from grade-capped potential and artificial limits</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-blue-400" />
                  <span className="text-slate-300">Transform every human into their highest creative potential</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-blue-400" />
                  <span className="text-slate-300">Make elite-level mentorship accessible to everyone</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-blue-400" />
                  <span className="text-slate-300">Enable exponential human development from age 5 to 95</span>
                </div>
              </div>

              <Button className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white">
                Join Our Vision
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 border-t border-slate-800/50 py-12">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <Link href="/" className="flex items-center space-x-2">
                <svg viewBox="0 0 170 80" className="w-20 h-12" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <linearGradient id="quantumShellFooter" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" style={{stopColor:"#00ffff", stopOpacity:1}} />
                      <stop offset="50%" style={{stopColor:"#0080ff", stopOpacity:1}} />
                      <stop offset="100%" style={{stopColor:"#8000ff", stopOpacity:1}} />
                    </linearGradient>
                    
                    <filter id="stellarGlowFooter" x="-100%" y="-100%" width="300%" height="300%">
                      <feGaussianBlur stdDeviation="8" result="coloredBlur"/>
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
              <p className="text-slate-400">
                We fuel the fire inside every creator, builder, explorer, dreamer through growth partnerships and potential unleashing.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-white font-semibold">Product</h3>
              <div className="space-y-2">
                <Link href="#" className="block text-slate-400 hover:text-blue-400 transition-colors">
                  Features
                </Link>
                <Link href="/pricing" className="block text-slate-400 hover:text-blue-400 transition-colors">
                  Pricing
                </Link>
                <Link href="#" className="block text-slate-400 hover:text-blue-400 transition-colors">
                  API
                </Link>
                <Link href="#" className="block text-slate-400 hover:text-blue-400 transition-colors">
                  Integrations
                </Link>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-white font-semibold">Company</h3>
              <div className="space-y-2">
                <Link href="#" className="block text-slate-400 hover:text-blue-400 transition-colors">
                  About
                </Link>
                <Link href="#" className="block text-slate-400 hover:text-blue-400 transition-colors">
                  Blog
                </Link>
                <Link href="#" className="block text-slate-400 hover:text-blue-400 transition-colors">
                  Careers
                </Link>
                <Link href="#" className="block text-slate-400 hover:text-blue-400 transition-colors">
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
