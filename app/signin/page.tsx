"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, Mail, Lock, CheckCircle, Eye, EyeOff, Zap, Shield, Rocket } from "lucide-react"
import Link from "next/link"
import { supabase } from "@/lib/supabaseClient"

export default function SignInPage() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [showPassword, setShowPassword] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    const { error } = await supabase.auth.signInWithPassword({
      email: formData.email,
      password: formData.password,
    })

    if (error) {
      console.error("Supabase sign-in error:", error.message)
      alert(error.message)
      setIsSubmitting(false)
      return
    }

    // Wait for Supabase to persist the session (it triggers a SIGNED_IN event)
    const { data: listener } = supabase.auth.onAuthStateChange((event) => {
      if (event === "SIGNED_IN") {
        listener.subscription.unsubscribe()
        setIsSubmitting(false)
        window.location.href = "https://dashboard.evo6b.xyz"
      }
    })
  }

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Dynamic Space Grid Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-black"></div>
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `
              linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '80px 80px'
          }}
        ></div>
        {/* Animated grid overlay */}
        <div 
          className="absolute inset-0 opacity-10 animate-pulse"
          style={{
            backgroundImage: `
              linear-gradient(rgba(0, 255, 255, 0.2) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0, 255, 255, 0.2) 1px, transparent 1px)
            `,
            backgroundSize: '160px 160px',
            animationDuration: '4s'
          }}
        ></div>
      </div>

      {/* Floating Holographic Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Top left constellation */}
        <div className="absolute top-20 left-20 w-32 h-32">
          <div className="absolute top-0 left-0 w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
          <div className="absolute top-8 left-12 w-1 h-1 bg-blue-400 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
          <div className="absolute top-16 left-4 w-1.5 h-1.5 bg-cyan-300 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 128 128">
            <path d="M8 8 L48 32 L16 64" stroke="rgba(59, 130, 246, 0.3)" strokeWidth="1" fill="none"/>
          </svg>
        </div>

        {/* Bottom right orbital rings */}
        <div className="absolute bottom-20 right-20 w-48 h-48">
          <div className="absolute inset-0 border border-cyan-500/20 rounded-full animate-spin" style={{animationDuration: '20s'}}></div>
          <div className="absolute inset-4 border border-blue-500/15 rounded-full animate-spin" style={{animationDuration: '15s', animationDirection: 'reverse'}}></div>
          <div className="absolute inset-8 border border-cyan-400/10 rounded-full animate-spin" style={{animationDuration: '25s'}}></div>
        </div>

        {/* Floating data streams */}
        <div className="absolute top-1/4 right-10 flex flex-col space-y-2">
          {[...Array(6)].map((_, i) => (
            <div 
              key={i}
              className="h-px bg-gradient-to-r from-transparent via-cyan-500/40 to-transparent animate-pulse"
              style={{
                width: `${60 + i * 10}px`,
                animationDelay: `${i * 0.3}s`,
                animationDuration: '2s'
              }}
            ></div>
          ))}
        </div>
      </div>

      {/* Main Interface */}
      <div className="min-h-screen flex">
        {/* Left Panel - Branding & Info */}
        <div className="flex-1 flex flex-col justify-center items-start p-12 lg:p-20 relative">
          {/* Logo */}
          <Link href="/" className="mb-16 group">
            <svg viewBox="0 0 170 80" className="w-24 h-16 group-hover:scale-105 transition-transform duration-300" xmlns="http://www.w3.org/2000/svg">
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
          </Link>

          {/* Hero Content */}
          <div className="space-y-8 max-w-lg">
            <div>
              <h1 className="text-6xl lg:text-7xl font-bold leading-tight mb-6">
                <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-300 bg-clip-text text-transparent">
                  Welcome
                </span>
                <br />
                <span className="text-white">Back</span>
              </h1>
              <p className="text-xl text-slate-300 leading-relaxed">
                Access your evolution dashboard and continue your journey to 
                <span className="text-cyan-400 font-semibold"> exponential growth</span>
              </p>
            </div>

            {/* Status Indicators */}
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-sm text-slate-400">Systems Online</span>
              </div>
              <div className="flex items-center space-x-2">
                <Shield className="w-4 h-4 text-cyan-400" />
                <span className="text-sm text-slate-400">Secure Connection</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Panel - Authentication Interface */}
        <div className="flex-1 flex items-center justify-center p-8 relative">
          {/* Holographic Interface Border */}
          <div className="absolute inset-8 border border-cyan-500/20 rounded-2xl">
            <div className="absolute -top-px -left-px w-8 h-8 border-t-2 border-l-2 border-cyan-400 rounded-tl-2xl"></div>
            <div className="absolute -top-px -right-px w-8 h-8 border-t-2 border-r-2 border-cyan-400 rounded-tr-2xl"></div>
            <div className="absolute -bottom-px -left-px w-8 h-8 border-b-2 border-l-2 border-cyan-400 rounded-bl-2xl"></div>
            <div className="absolute -bottom-px -right-px w-8 h-8 border-b-2 border-r-2 border-cyan-400 rounded-br-2xl"></div>
          </div>

          {/* Authentication Panel */}
          <div className="w-full max-w-md relative z-10">
            {isSuccess ? (
              <div className="text-center space-y-8">
                <div className="relative mx-auto w-24 h-24">
                  <div className="absolute inset-0 bg-gradient-to-r from-green-500/30 to-emerald-500/30 rounded-full blur-xl animate-pulse"></div>
                  <div className="relative bg-gradient-to-r from-green-500 to-emerald-500 rounded-full w-24 h-24 flex items-center justify-center">
                    <CheckCircle className="h-12 w-12 text-white" />
                  </div>
                </div>
                <div className="space-y-4">
                  <h3 className="text-3xl font-bold text-white">Access Granted</h3>
                  <p className="text-slate-400">
                    Initializing dashboard interface...
                  </p>
                  <div className="w-full bg-slate-800 rounded-full h-2">
                    <div className="bg-gradient-to-r from-cyan-500 to-blue-500 h-2 rounded-full animate-pulse" style={{width: '100%'}}></div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="space-y-8">
                {/* Interface Header */}
                <div className="text-center space-y-4">
                  <div className="flex items-center justify-center space-x-2">
                    <Zap className="w-6 h-6 text-cyan-400" />
                    <h2 className="text-2xl font-bold text-white">Authentication Required</h2>
                  </div>
                  <p className="text-slate-400">Enter your credentials to access the system</p>
                </div>

                {/* Authentication Form */}
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Email Field */}
                  <div className="space-y-2">
                    <label htmlFor="email" className="block text-sm font-medium text-cyan-400 uppercase tracking-wider">
                      Email Address
                    </label>
                    <div className="relative group">
                      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-lg blur opacity-0 group-focus-within:opacity-100 transition-opacity duration-300"></div>
                      <div className="relative flex items-center">
                        <Mail className="absolute left-4 w-5 h-5 text-slate-500 group-focus-within:text-cyan-400 transition-colors blur-[0.5px]" />
                        <input
                          type="email"
                          name="email"
                          id="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="your@email.com"
                          required
                          className="w-full bg-slate-900/50 border border-slate-700/50 rounded-lg pl-12 pr-4 py-4 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500 backdrop-blur-sm transition-all duration-300"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Password Field */}
                  <div className="space-y-2">
                    <label htmlFor="password" className="block text-sm font-medium text-cyan-400 uppercase tracking-wider">
                      Password
                    </label>
                    <div className="relative group">
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-lg blur opacity-0 group-focus-within:opacity-100 transition-opacity duration-300"></div>
                      <div className="relative flex items-center">
                        <Lock className="absolute left-4 w-5 h-5 text-slate-500 group-focus-within:text-cyan-400 transition-colors blur-[0.5px]" />
                        <input
                          type={showPassword ? "text" : "password"}
                          name="password"
                          id="password"
                          value={formData.password}
                          onChange={handleInputChange}
                          placeholder="Enter your password"
                          required
                          className="w-full bg-slate-900/50 border border-slate-700/50 rounded-lg pl-12 pr-12 py-4 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500 backdrop-blur-sm transition-all duration-300"
                        />
                        <button
                          type="button"
                          onClick={() => setShowPassword(!showPassword)}
                          className="absolute right-4 text-slate-500 hover:text-cyan-400 transition-colors"
                        >
                          {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Options */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        id="remember"
                        className="h-4 w-4 rounded border-slate-600 bg-slate-800/50 text-cyan-600 focus:ring-cyan-500/50 focus:ring-offset-0"
                      />
                      <label htmlFor="remember" className="text-sm text-slate-400">
                        Remember session
                      </label>
                    </div>
                    <Link href="#" className="text-sm text-cyan-400 hover:text-cyan-300 transition-colors">
                      Reset access?
                    </Link>
                  </div>

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white font-semibold py-4 rounded-lg relative overflow-hidden group transition-all duration-300 shadow-lg shadow-cyan-500/25"
                    disabled={isSubmitting}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 to-blue-400/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                    {isSubmitting ? (
                      <div className="flex items-center justify-center relative z-10">
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin mr-3"></div>
                        Authenticating...
                      </div>
                    ) : (
                      <div className="flex items-center justify-center relative z-10">
                        <Rocket className="mr-2 h-5 w-5" />
                        Initialize Access
                        <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                      </div>
                    )}
                  </Button>
                </form>

                {/* Footer Links */}
                <div className="text-center space-y-4 pt-6 border-t border-slate-700/30">
                  <p className="text-slate-400 text-sm">
                    New to the system?{" "}
                    <Link href="/signup" className="text-cyan-400 hover:text-cyan-300 transition-colors font-medium">
                      Request access
                    </Link>
                  </p>
                  <Link href="/" className="inline-flex items-center text-slate-500 hover:text-slate-400 transition-colors text-sm">
                    ← Return to main interface
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}