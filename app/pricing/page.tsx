"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  CheckCircle,
  ArrowRight,
  Star,
  Zap,
  Crown,
  Rocket,
  Users,
  Brain,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { WaitlistDialog } from "@/components/waitlist-dialog"

export default function PricingPage() {
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  const openWaitlist = () => {
    setIsDialogOpen(true)
  }

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

      {/* Header */}
      <header className="border-b border-slate-800/50 backdrop-blur-sm bg-slate-950/80 sticky top-0 z-50">
        <div className="container mx-auto px-4 lg:px-6 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Link href="/" className="flex items-center space-x-2">
              <svg viewBox="0 0 170 80" className="w-20 h-12" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id="quantumShellPricingFooter" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style={{stopColor:"#00ffff", stopOpacity:1}} />
                    <stop offset="50%" style={{stopColor:"#0080ff", stopOpacity:1}} />
                    <stop offset="100%" style={{stopColor:"#8000ff", stopOpacity:1}} />
                  </linearGradient>
                  
                  <filter id="stellarGlowPricingFooter" x="-100%" y="-100%" width="300%" height="300%">
                    <feGaussianBlur stdDeviation="6" result="coloredBlur"/>
                    <feMerge>
                      <feMergeNode in="coloredBlur"/>
                      <feMergeNode in="SourceGraphic"/>
                    </feMerge>
                  </filter>
                </defs>
                
                <g filter="url(#stellarGlowPricingFooter)" transform="translate(-180, -210)">
                  <g transform="translate(180, 250)">
                    <rect x="0" y="-25" width="30" height="6" fill="url(#quantumShellPricingFooter)"/>
                    <rect x="0" y="-5" width="24" height="5" fill="url(#quantumShellPricingFooter)"/>
                    <rect x="0" y="18" width="30" height="6" fill="url(#quantumShellPricingFooter)"/>
                    <rect x="0" y="-25" width="6" height="49" fill="url(#quantumShellPricingFooter)"/>
                  </g>
                  
                  <g transform="translate(220, 250)">
                    <polygon points="0,-25 5,-25 15,24 10,24" fill="url(#quantumShellPricingFooter)"/>
                    <polygon points="27,-25 32,-25 22,24 15,24" fill="url(#quantumShellPricingFooter)"/>
                  </g>
                  
                  <g transform="translate(270, 250)">
                    <circle cx="16" cy="0" r="23" fill="none" stroke="url(#quantumShellPricingFooter)" strokeWidth="6"/>
                    <circle cx="16" cy="0" r="12" fill="none" stroke="url(#quantumShellPricingFooter)" strokeWidth="2" opacity="0.7">
                      <animate attributeName="r" values="12;15;12" dur="4s" repeatCount="indefinite"/>
                    </circle>
                  </g>
                </g>
              </svg>
            </Link>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/#features" className="text-slate-300 hover:text-blue-400 transition-colors">
              Features
            </Link>
            <Link href="/#about" className="text-slate-300 hover:text-blue-400 transition-colors">
              About
            </Link>
            <Link href="/pricing" className="text-blue-400 font-medium">
              Pricing
            </Link>
            <Link href="/#contact" className="text-slate-300 hover:text-blue-400 transition-colors">
              Contact
            </Link>
          </nav>

          <div className="flex items-center space-x-4">
            <Button variant="ghost" className="text-slate-300 hover:text-white hover:bg-slate-800">
              Sign In
            </Button>
            <Button 
              className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white"
              onClick={openWaitlist}
            >
              Get Started
            </Button>
          </div>
        </div>
      </header>

      {/* Pricing Cards */}
      <section className="py-32">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            
            {/* Basic Plan - Left */}
            <Card className="bg-slate-800/50 border-slate-700/50 backdrop-blur-sm hover:bg-slate-800/70 transition-all duration-300 relative flex flex-col h-full">
              <CardHeader className="space-y-6 p-8 flex-grow">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg flex items-center justify-center">
                    <Rocket className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-white text-2xl">Basic</CardTitle>
                    <CardDescription className="text-slate-400">Essential growth tools</CardDescription>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <div className="flex items-baseline space-x-2">
                    <span className="text-4xl font-bold text-white">$20</span>
                    <span className="text-slate-400">/month</span>
                  </div>
                  <p className="text-slate-400">Start your potential unleashing journey</p>
                </div>

                <div className="space-y-4 flex-grow">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-blue-400" />
                    <span className="text-slate-300">AI Mentor</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-blue-400" />
                    <span className="text-slate-300">AI Learning</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-blue-400" />
                    <span className="text-slate-300">All Features (add ons not included)</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-blue-400" />
                    <span className="text-slate-300">Unlimited Medium Intelligence</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-blue-400" />
                    <span className="text-slate-300">Optional add on purchase</span>
                  </div>
                </div>

                <Button 
                  className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white mt-auto"
                  onClick={openWaitlist}
                >
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardHeader>
            </Card>

            {/* Pro Plan - Middle (Most Popular) */}
            <Card className="bg-slate-800/50 border-blue-600/50 backdrop-blur-sm hover:bg-slate-800/70 transition-all duration-300 relative flex flex-col h-full">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <Badge className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-4 py-1">
                  Most Popular
                </Badge>
              </div>
              
              <CardHeader className="space-y-6 p-8 flex-grow">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                    <Zap className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-white text-2xl">Pro</CardTitle>
                    <CardDescription className="text-slate-400">Basic + all add-ons</CardDescription>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <div className="flex items-baseline space-x-2">
                    <span className="text-4xl font-bold text-white">$50</span>
                    <span className="text-slate-400">/month</span>
                  </div>
                  <p className="text-slate-400">Everything in Basic + all add-ons</p>
                </div>

                <div className="space-y-4 flex-grow">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-blue-400" />
                    <span className="text-slate-300">AI Mentor</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-blue-400" />
                    <span className="text-slate-300">AI Learning</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-blue-400" />
                    <span className="text-slate-300">All Features</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-blue-400" />
                    <span className="text-slate-300">Add on bundle</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-blue-400" />
                    <span className="text-slate-300">Unlimited Medium Intelligence</span>
                  </div>
                </div>

                <Button 
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white mt-auto"
                  onClick={openWaitlist}
                >
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardHeader>
            </Card>

            {/* Premium Plan - Right */}
            <Card className="bg-slate-800/50 border-slate-700/50 backdrop-blur-sm hover:bg-slate-800/70 transition-all duration-300 relative flex flex-col h-full">
              <CardHeader className="space-y-6 p-8 flex-grow">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-pink-600 rounded-lg flex items-center justify-center">
                    <Crown className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-white text-2xl">Premium</CardTitle>
                    <CardDescription className="text-slate-400">Maximum intelligence</CardDescription>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <div className="flex items-baseline space-x-2">
                    <span className="text-4xl font-bold text-white">$100</span>
                    <span className="text-slate-400">/month</span>
                  </div>
                  <p className="text-slate-400">Ultimate AI experience</p>
                </div>

                <div className="space-y-4 flex-grow">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-purple-400" />
                    <span className="text-slate-300">AI Mentor</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-purple-400" />
                    <span className="text-slate-300">AI Learning</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-purple-400" />
                    <span className="text-slate-300">All Features</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-purple-400" />
                    <span className="text-slate-300">Add on bundle</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-purple-400" />
                    <span className="text-slate-300">Unlimited Max Intelligence</span>
                  </div>
                </div>

                <Button 
                  className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white mt-auto"
                  onClick={openWaitlist}
                >
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardHeader>
            </Card>

          </div>
        </div>
      </section>

      {/* Waitlist Dialog */}
      <WaitlistDialog isOpen={isDialogOpen} onClose={() => setIsDialogOpen(false)} />
      
      {/* Add-ons Section */}
      <section className="py-20 bg-black relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-950/20 via-purple-950/20 to-cyan-950/20"></div>
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-radial from-blue-600/10 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-radial from-purple-600/10 to-transparent rounded-full blur-3xl"></div>
        
        {/* Animated Border Lines */}
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent"></div>
        
        <div className="container mx-auto px-4 lg:px-6 relative z-10">
          {/* Header */}
          <div className="text-center mb-16 space-y-6">
            <div className="inline-flex items-center space-x-2 bg-slate-800/50 border border-slate-700/50 rounded-full px-6 py-2 backdrop-blur-sm">
              <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
              <span className="text-slate-300 text-sm font-medium">POWER-UPS</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold">
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Supercharge Your Growth
              </span>
            </h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
              Unlock elite capabilities with our premium add-ons. Each one designed to accelerate your exponential development journey.
            </p>
          </div>

          {/* Add-ons Grid */}
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            
            {/* Agent Factory */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-600/20 to-blue-700/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <Card className="relative bg-slate-900/80 border-slate-700/50 backdrop-blur-sm hover:border-cyan-500/50 transition-all duration-500 rounded-2xl overflow-hidden group-hover:transform group-hover:scale-[1.02]">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-600 to-blue-400"></div>
                <CardHeader className="p-8 space-y-6">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="relative">
                        <div className="w-16 h-16 bg-gradient-to-br from-cyan-600 to-blue-700 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <Rocket className="h-8 w-8 text-white" />
                        </div>
                        <div className="absolute -top-1 -right-1 w-4 h-4 bg-cyan-400 rounded-full animate-pulse"></div>
                      </div>
                      <div>
                        <CardTitle className="text-white text-2xl font-bold">Agent Factory</CardTitle>
                        <p className="text-slate-400 text-sm mt-1">Scale your output exponentially</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-3xl font-bold text-white">+$20</div>
                      <div className="text-slate-400 text-sm">/month</div>
                    </div>
                  </div>
                  
                  <div className="space-y-3 text-slate-300">
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                      <span>Create custom AI agents</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                      <span>Automate complex workflows</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                      <span>Scale output</span>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            </div>

            {/* Background Mentor */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/20 to-green-700/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <Card className="relative bg-slate-900/80 border-slate-700/50 backdrop-blur-sm hover:border-emerald-500/50 transition-all duration-500 rounded-2xl overflow-hidden group-hover:transform group-hover:scale-[1.02]">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-600 to-green-400"></div>
                <CardHeader className="p-8 space-y-6">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="relative">
                        <div className="w-16 h-16 bg-gradient-to-br from-emerald-600 to-green-700 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <Brain className="h-8 w-8 text-white" />
                        </div>
                        <div className="absolute -top-1 -right-1 w-4 h-4 bg-emerald-400 rounded-full animate-pulse"></div>
                      </div>
                      <div>
                        <CardTitle className="text-white text-2xl font-bold">Background Mentor</CardTitle>
                        <p className="text-slate-400 text-sm mt-1">24/7 autonomous assistance</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-3xl font-bold text-white">+$20</div>
                      <div className="text-slate-400 text-sm">/month</div>
                    </div>
                  </div>
                  
                  <div className="space-y-3 text-slate-300">
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                      <span>Works while you're offline</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                      <span>Researches & finds resources</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                      <span>Autonomous task completion</span>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            </div>

            {/* Vision+ */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-700/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <Card className="relative bg-slate-900/80 border-slate-700/50 backdrop-blur-sm hover:border-purple-500/50 transition-all duration-500 rounded-2xl overflow-hidden group-hover:transform group-hover:scale-[1.02]">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-600 to-pink-400"></div>
                <CardHeader className="p-8 space-y-6">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="relative">
                        <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-pink-700 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <svg className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                          </svg>
                        </div>
                        <div className="absolute -top-1 -right-1 w-4 h-4 bg-purple-400 rounded-full animate-pulse"></div>
                      </div>
                      <div>
                        <CardTitle className="text-white text-2xl font-bold">Vision+</CardTitle>
                        <p className="text-slate-400 text-sm mt-1">Adaptive visual intelligence</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-3xl font-bold text-white">+$10</div>
                      <div className="text-slate-400 text-sm">/month</div>
                    </div>
                  </div>
                  
                  <div className="space-y-3 text-slate-300">
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                      <span>Camera-based adaptation</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                      <span>Expression & gesture analysis</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                      <span>Faster, personalized experience</span>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            </div>

            {/* Path Finder */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-orange-600/20 to-yellow-700/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <Card className="relative bg-slate-900/80 border-slate-700/50 backdrop-blur-sm hover:border-orange-500/50 transition-all duration-500 rounded-2xl overflow-hidden group-hover:transform group-hover:scale-[1.02]">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-600 to-yellow-400"></div>
                <CardHeader className="p-8 space-y-6">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="relative">
                        <div className="w-16 h-16 bg-gradient-to-br from-orange-600 to-yellow-700 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <svg className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                          </svg>
                        </div>
                        <div className="absolute -top-1 -right-1 w-4 h-4 bg-orange-400 rounded-full animate-pulse"></div>
                      </div>
                      <div>
                        <CardTitle className="text-white text-2xl font-bold">Path Finder</CardTitle>
                        <p className="text-slate-400 text-sm mt-1">Career navigation autopilot</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-3xl font-bold text-white">+$10</div>
                      <div className="text-slate-400 text-sm">/month</div>
                    </div>
                  </div>
                  
                  <div className="space-y-3 text-slate-300">
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                      <span>Auto job discovery & applications</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                      <span>Personalized career roadmaps</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                      <span>Skill gap analysis & planning</span>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            </div>

          </div>
        </div>
      </section>

      {/* Divider Line */}
      <div className="border-t border-slate-700/50"></div>

      {/* FAQ Section */}
      <section className="py-32 bg-slate-900/50">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-white">Frequently Asked Questions</h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Everything you need to know about your growth journey
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-8">
            <Card className="bg-slate-800/50 border-slate-700/50 backdrop-blur-sm p-6">
              <h3 className="text-white font-semibold text-lg mb-3">What makes Evo different from other education platforms?</h3>
              <p className="text-slate-400">Evo breaks free from the broken industrial education system. Instead of grade-capped potential, we provide exponential development through AI mentorship that rivals elite advisors like Marc Andreessen and Peter Thiel.</p>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700/50 backdrop-blur-sm p-6">
              <h3 className="text-white font-semibold text-lg mb-3">Can I upgrade or downgrade my plan anytime?</h3>
              <p className="text-slate-400">Absolutely! Your growth journey is unique. You can change your plan at any time to match your evolving needs and ambitions.</p>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700/50 backdrop-blur-sm p-6">
              <h3 className="text-white font-semibold text-lg mb-3">Is this suitable for all ages?</h3>
              <p className="text-slate-400">Yes! Evo is designed for dreamers from age 5 to 95. Whether you're a young creator or an experienced visionary, we fuel the fire inside every explorer, builder, and dreamer.</p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600/10 to-purple-600/10">
        <div className="container mx-auto px-4 lg:px-6 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-3xl lg:text-5xl font-bold text-white">Ready to Start Your Journey?</h2>
            <p className="text-xl text-slate-400">
              Join thousands of creators, builders, explorers, and dreamers who are already unleashing their potential with Evo.
            </p>

            <div className="flex items-center justify-center space-x-2 pt-4">
              <div className="flex space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span className="text-slate-400">Trusted by growth-focused individuals worldwide</span>
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
                    <linearGradient id="quantumShellPricingFooter" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" style={{stopColor:"#00ffff", stopOpacity:1}} />
                      <stop offset="50%" style={{stopColor:"#0080ff", stopOpacity:1}} />
                      <stop offset="100%" style={{stopColor:"#8000ff", stopOpacity:1}} />
                    </linearGradient>
                    
                    <filter id="stellarGlowPricingFooter" x="-100%" y="-100%" width="300%" height="300%">
                      <feGaussianBlur stdDeviation="8" result="coloredBlur"/>
                      <feMerge>
                        <feMergeNode in="coloredBlur"/>
                        <feMergeNode in="SourceGraphic"/>
                      </feMerge>
                    </filter>
                  </defs>
                  
                  <g filter="url(#stellarGlowPricingFooter)" transform="translate(-180, -210)">
                    <g transform="translate(180, 250)">
                      <rect x="0" y="-30" width="35" height="8" fill="url(#quantumShellPricingFooter)"/>
                      <rect x="0" y="-6" width="28" height="6" fill="url(#quantumShellPricingFooter)"/>
                      <rect x="0" y="22" width="35" height="8" fill="url(#quantumShellPricingFooter)"/>
                      <rect x="0" y="-30" width="8" height="60" fill="url(#quantumShellPricingFooter)"/>
                    </g>
                    
                    <g transform="translate(230, 250)">
                      <polygon points="0,-30 6,-30 18,30 12,30" fill="url(#quantumShellPricingFooter)"/>
                      <polygon points="32,-30 38,-30 26,30 18,30" fill="url(#quantumShellPricingFooter)"/>
                    </g>
                    
                    <g transform="translate(290, 250)">
                      <circle cx="19" cy="0" r="28" fill="none" stroke="url(#quantumShellPricingFooter)" strokeWidth="8"/>
                      <circle cx="19" cy="0" r="15" fill="none" stroke="url(#quantumShellPricingFooter)" strokeWidth="2" opacity="0.7">
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
                <Link href="/" className="block text-slate-400 hover:text-blue-400 transition-colors">
                  Features
                </Link>
                <Link href="/pricing" className="block text-slate-400 hover:text-blue-400 transition-colors">
                  Pricing
                </Link>
                <Link href="#" className="block text-slate-400 hover:text-blue-400 transition-colors">
                  API
                </Link>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-white font-semibold">Company</h3>
              <div className="space-y-2">
                <Link href="/" className="block text-slate-400 hover:text-blue-400 transition-colors">
                  About
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