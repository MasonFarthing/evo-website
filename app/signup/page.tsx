"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, Mail, Lock, CheckCircle, User, Rocket, Shield, Sparkles } from "lucide-react"
import Link from "next/link"
import { supabase } from "@/lib/supabaseClient"

export default function SignUpPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

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

    const { error } = await supabase.auth.signUp({
      email: formData.email,
      password: formData.password,
      options: {
        data: {
          full_name: formData.name,
        },
      },
    })

    if (error) {
      console.error("Supabase sign-up error:", error.message)
      alert(error.message)
      setIsSubmitting(false)
      return
    }

    setIsSubmitting(false)
    setIsSuccess(true)
  }

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Space Background for Left Side */}
      <div className="absolute inset-0 lg:w-1/2">
        {/* Deep Space Gradients */}
        <div className="absolute top-[-100px] left-[-100px] w-[600px] h-[600px] bg-gradient-radial from-blue-600/15 via-purple-600/8 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-[-150px] left-[-150px] w-[700px] h-[700px] bg-gradient-radial from-cyan-600/12 via-blue-600/6 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute top-1/3 left-[-50px] w-[500px] h-[500px] bg-gradient-radial from-purple-600/10 via-indigo-600/5 to-transparent rounded-full blur-3xl"></div>
        
        {/* Star Field */}
        <div className="absolute inset-0">
          {/* Bright stars */}
          <div className="absolute top-[15%] left-[10%] w-1.5 h-1.5 bg-white rounded-full animate-pulse shadow-lg shadow-white/50"></div>
          <div className="absolute top-[25%] left-[80%] w-1 h-1 bg-cyan-300 rounded-full animate-pulse" style={{animationDelay: '0.3s'}}></div>
          <div className="absolute top-[35%] left-[20%] w-1 h-1 bg-blue-400 rounded-full animate-pulse" style={{animationDelay: '0.8s'}}></div>
          <div className="absolute top-[45%] left-[70%] w-1.5 h-1.5 bg-purple-300 rounded-full animate-pulse shadow-lg shadow-purple-300/50" style={{animationDelay: '1.2s'}}></div>
          <div className="absolute top-[55%] left-[15%] w-1 h-1 bg-white rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
          <div className="absolute top-[65%] left-[85%] w-1 h-1 bg-cyan-400 rounded-full animate-pulse" style={{animationDelay: '1.8s'}}></div>
          <div className="absolute top-[75%] left-[25%] w-1 h-1 bg-blue-300 rounded-full animate-pulse" style={{animationDelay: '2.1s'}}></div>
          <div className="absolute top-[85%] left-[60%] w-1.5 h-1.5 bg-purple-400 rounded-full animate-pulse shadow-lg shadow-purple-400/50" style={{animationDelay: '0.7s'}}></div>
          <div className="absolute top-[20%] left-[50%] w-1 h-1 bg-white rounded-full animate-pulse" style={{animationDelay: '1.5s'}}></div>
          <div className="absolute top-[40%] left-[40%] w-1 h-1 bg-cyan-300 rounded-full animate-pulse" style={{animationDelay: '0.9s'}}></div>
          <div className="absolute top-[60%] left-[75%] w-1 h-1 bg-blue-400 rounded-full animate-pulse" style={{animationDelay: '1.3s'}}></div>
          <div className="absolute top-[80%] left-[35%] w-1 h-1 bg-purple-300 rounded-full animate-pulse" style={{animationDelay: '0.4s'}}></div>
          <div className="absolute top-[30%] left-[65%] w-1 h-1 bg-white rounded-full animate-pulse" style={{animationDelay: '1.9s'}}></div>
          <div className="absolute top-[50%] left-[30%] w-1 h-1 bg-cyan-400 rounded-full animate-pulse" style={{animationDelay: '1.1s'}}></div>
          <div className="absolute top-[70%] left-[55%] w-1 h-1 bg-blue-300 rounded-full animate-pulse" style={{animationDelay: '0.6s'}}></div>
          <div className="absolute top-[90%] left-[45%] w-1 h-1 bg-purple-400 rounded-full animate-pulse" style={{animationDelay: '1.6s'}}></div>
          <div className="absolute top-[10%] left-[75%] w-1 h-1 bg-cyan-300 rounded-full animate-pulse" style={{animationDelay: '0.2s'}}></div>
          <div className="absolute top-[95%] left-[20%] w-1 h-1 bg-white rounded-full animate-pulse" style={{animationDelay: '1.4s'}}></div>
        </div>
        
        {/* Subtle floating orbital rings */}
        <div className="absolute top-[20%] left-[15%] w-32 h-32 border border-blue-500/8 rounded-full animate-spin opacity-20" style={{animationDuration: '25s'}}></div>
        <div className="absolute bottom-[25%] left-[70%] w-24 h-24 border border-cyan-500/6 rounded-full animate-spin opacity-15" style={{animationDuration: '18s', animationDirection: 'reverse'}}></div>
        <div className="absolute top-[60%] left-[25%] w-40 h-40 border border-purple-500/5 rounded-full animate-spin opacity-10" style={{animationDuration: '30s'}}></div>
      </div>

      {/* Main Content Layout */}
      <div className="min-h-screen flex">
        {/* Left Side - Translucent White Signup Area over Space */}
        <div className="w-full lg:w-1/2 relative flex items-center justify-center">
          {/* Translucent white overlay with gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/85 via-white/80 to-white/75 backdrop-blur-sm"></div>
          
          <div className="max-w-md w-full px-8 py-12 relative z-10">
            {/* Logo */}
            <div className="flex justify-center mb-12">
              <Link href="/" className="group">
                <svg viewBox="0 0 170 80" className="w-20 h-12 group-hover:scale-105 transition-transform duration-300" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <linearGradient id="quantumShell" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" style={{stopColor:"#00ffff", stopOpacity:1}} />
                      <stop offset="50%" style={{stopColor:"#0080ff", stopOpacity:1}} />
                      <stop offset="100%" style={{stopColor:"#0040ff", stopOpacity:1}} />
                    </linearGradient>
                    
                    <filter id="stellarGlow" x="-100%" y="-100%" width="300%" height="300%">
                      <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
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
            </div>
            
            {/* Header */}
            <div className="text-center mb-10">
              <div className="flex items-center justify-center mb-4">
                <Sparkles className="w-5 h-5 text-blue-500 mr-2 animate-pulse" />
                <h1 className="text-3xl font-bold text-slate-900">The Future of Human Potential</h1>
                <Sparkles className="w-5 h-5 text-cyan-500 ml-2 animate-pulse" style={{animationDelay: '0.5s'}} />
              </div>
              <p className="text-slate-600">
                Join thousands of creators, builders, and visionaries unlocking <span className="text-blue-600 font-semibold">human potential through AI-powered growth</span>
              </p>
            </div>
            
            {isSuccess ? (
              <div className="text-center space-y-6">
                <div className="relative mx-auto w-20 h-20">
                  <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-full blur-lg"></div>
                  <div className="relative bg-gradient-to-r from-green-500 to-emerald-500 rounded-full w-20 h-20 flex items-center justify-center">
                    <CheckCircle className="h-10 w-10 text-white" />
                  </div>
                </div>
                <div className="space-y-3">
                  <h3 className="text-2xl font-bold text-slate-900">Welcome to Evo!</h3>
                  <p className="text-slate-600">
                    Your account has been created successfully. Check your email to verify your account.
                  </p>
                </div>
                <Button 
                  asChild
                  className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white py-3 px-8 shadow-lg"
                >
                  <Link href="/signin">
                    <Rocket className="mr-2 h-4 w-4" />
                    Continue to Sign In
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Field */}
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-slate-700">
                    Full Name
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-slate-400" />
                    <input
                      type="text"
                      name="name"
                      id="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Enter your full name"
                      required
                      className="w-full rounded-lg border border-slate-300 bg-white pl-10 pr-4 py-3 text-slate-900 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
                    />
                  </div>
                </div>

                {/* Email Field */}
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-slate-700">
                    Email Address
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-slate-400" />
                    <input
                      type="email"
                      name="email"
                      id="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="your@email.com"
                      required
                      className="w-full rounded-lg border border-slate-300 bg-white pl-10 pr-4 py-3 text-slate-900 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
                    />
                  </div>
                </div>

                {/* Password Field */}
                <div className="space-y-2">
                  <label htmlFor="password" className="text-sm font-medium text-slate-700">
                    Password
                  </label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-slate-400" />
                    <input
                      type="password"
                      name="password"
                      id="password"
                      value={formData.password}
                      onChange={handleInputChange}
                      placeholder="Create a secure password"
                      required
                      className="w-full rounded-lg border border-slate-300 bg-white pl-10 pr-4 py-3 text-slate-900 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
                    />
                  </div>
                </div>

                {/* Terms Checkbox */}
                <div className="flex items-start space-x-3">
                  <input
                    type="checkbox"
                    id="terms"
                    required
                    className="h-4 w-4 mt-1 rounded border-slate-300 text-blue-600 focus:ring-blue-500"
                  />
                  <label htmlFor="terms" className="text-sm text-slate-600 leading-relaxed">
                    I agree to the <Link href="#" className="text-blue-600 hover:text-blue-700 underline">Terms of Service</Link> and <Link href="#" className="text-blue-600 hover:text-blue-700 underline">Privacy Policy</Link>
                  </label>
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-semibold py-3 rounded-lg relative overflow-hidden group transition-all duration-300 shadow-lg shadow-blue-500/25"
                  disabled={isSubmitting}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-cyan-400/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                  {isSubmitting ? (
                    <div className="flex items-center justify-center relative z-10">
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin mr-3"></div>
                      Creating Account...
                    </div>
                  ) : (
                    <div className="flex items-center justify-center relative z-10">
                      <Rocket className="mr-2 h-5 w-5" />
                      Create Account
                      <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                    </div>
                  )}
                </Button>
              </form>
            )}

            {/* Footer */}
            <div className="mt-8 pt-6 border-t border-slate-200 text-center">
              <p className="text-slate-600 text-sm">
                Already have an account?{" "}
                <Link href="/signin" className="text-blue-600 hover:text-blue-700 font-medium transition-colors">
                  Sign in here
                </Link>
              </p>
              <Link href="/" className="inline-flex items-center text-slate-500 hover:text-slate-600 transition-colors text-sm mt-2">
                ← Back to home
              </Link>
            </div>
          </div>
        </div>
        
        {/* Right Side - Full Logo Image */}
        <div className="hidden lg:block lg:w-1/2 relative">
          <img 
            src="/fulllogo.png" 
            alt="Evo Logo" 
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  )
} 
