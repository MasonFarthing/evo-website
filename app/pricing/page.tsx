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
            <Button variant="ghost" asChild className="text-slate-300 hover:text-white hover:bg-slate-800">
              <Link href="/signin">Sign In</Link>
            </Button>
            <Button 
              asChild
              className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white"
            >
              <Link href="/signup">Get Started</Link>
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
                  asChild
                  className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white mt-auto"
                >
                  <Link href="/signup">
                    Get Started
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
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
                  asChild
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white mt-auto"
                >
                  <Link href="/signup">
                    Get Started
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
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
                  asChild
                  className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white mt-auto"
                >
                  <Link href="/signup">
                    Get Started
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardHeader>
            </Card>

          </div>
        </div>
      </section>

      {/* Waitlist Dialog */}
      <WaitlistDialog isOpen={isDialogOpen} onClose={() => setIsDialogOpen(false)} />
      



    </div>
  );
} 