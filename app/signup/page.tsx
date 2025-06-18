"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { ArrowRight, Mail, Lock, CheckCircle, User } from "lucide-react"
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
      {/* Space Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-purple-950/20 to-blue-950/30"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-transparent via-cyan-950/10 to-transparent"></div>
      
      {/* Stars - More stars for enhanced effect */}
      <div className="absolute inset-0">
        <div className="absolute top-[10%] left-[20%] w-1.5 h-1.5 bg-white rounded-full animate-pulse"></div>
        <div className="absolute top-[20%] right-[15%] w-1 h-1 bg-blue-300 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
        <div className="absolute top-[40%] left-[10%] w-1 h-1 bg-purple-300 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-[60%] right-[25%] w-2 h-2 bg-cyan-300 rounded-full animate-pulse" style={{animationDelay: '1.5s'}}></div>
        <div className="absolute top-[80%] left-[30%] w-1 h-1 bg-white rounded-full animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-[15%] left-[70%] w-1 h-1 bg-blue-400 rounded-full animate-pulse" style={{animationDelay: '0.3s'}}></div>
        <div className="absolute top-[45%] right-[40%] w-1 h-1 bg-purple-400 rounded-full animate-pulse" style={{animationDelay: '1.2s'}}></div>
        <div className="absolute top-[75%] left-[60%] w-1.5 h-1.5 bg-cyan-400 rounded-full animate-pulse" style={{animationDelay: '0.8s'}}></div>
        <div className="absolute top-[25%] left-[40%] w-1 h-1 bg-white rounded-full animate-pulse" style={{animationDelay: '1.7s'}}></div>
        <div className="absolute top-[55%] right-[20%] w-1.5 h-1.5 bg-blue-300 rounded-full animate-pulse" style={{animationDelay: '2.1s'}}></div>
        <div className="absolute top-[85%] left-[15%] w-1 h-1 bg-purple-300 rounded-full animate-pulse" style={{animationDelay: '1.4s'}}></div>
        <div className="absolute top-[35%] right-[35%] w-2 h-2 bg-cyan-300 rounded-full animate-pulse" style={{animationDelay: '0.7s'}}></div>
      </div>
      
      {/* Enhanced Nebula Glow Effects - Larger and more prominent */}
      <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-gradient-radial from-blue-600/20 via-purple-600/10 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-[700px] h-[700px] bg-gradient-radial from-cyan-600/20 via-blue-600/10 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-gradient-radial from-purple-600/15 via-pink-600/10 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/3 right-1/4 w-[400px] h-[400px] bg-gradient-radial from-blue-600/10 via-cyan-600/5 to-transparent rounded-full blur-3xl"></div>

      {/* Sign Up Section with Left-side Only Layout */}
      <div className="min-h-screen flex">
        {/* Left Half - White Background with Form Content */}
        <div className="w-full lg:w-1/2 bg-white flex items-center justify-center">
          <div className="max-w-3xl w-full px-12 py-16 lg:py-24">
            {/* Logo at top */}
            <div className="flex justify-center lg:justify-start mb-8">
              <Link href="/" className="flex items-center space-x-2">
                <svg viewBox="0 0 170 80" className="w-24 h-14" xmlns="http://www.w3.org/2000/svg">
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
              </Link>
            </div>
            
            {/* Creative form layout */}
            <div>
              {/* Large decorative header with animated elements */}
              <div className="relative mb-16">
                <div className="absolute -left-10 -top-10 w-36 h-36 bg-blue-50 rounded-full opacity-70"></div>
                <div className="absolute right-10 top-16 w-24 h-24 bg-blue-100 rounded-full opacity-50"></div>
                
                <h2 className="text-7xl text-slate-900 font-bold relative">Create</h2>
                <h2 className="text-7xl text-slate-900 font-bold mt-2 flex items-center relative">
                  Your <span className="relative ml-4 inline-flex">
                    <span className="absolute -inset-2 rounded-lg bg-blue-100"></span>
                    <span className="relative text-blue-600">Account</span>
                  </span>
                </h2>
                <div className="absolute -bottom-8 left-0 w-32 h-3 bg-blue-600 rounded-full"></div>
                <div className="absolute -bottom-8 left-36 w-10 h-3 bg-blue-400 rounded-full"></div>
              </div>
              
              {isSuccess ? (
                <div className="py-8">
                  <div className="mb-8 mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-blue-700">
                    <CheckCircle className="h-12 w-12 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">Welcome to Evo!</h3>
                  <p className="text-slate-700 text-xl mb-8">
                    Your account has been created successfully.
                  </p>
                  <Button 
                    asChild
                    className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white text-lg py-6 px-8 h-auto"
                  >
                    <Link href="/">
                      Continue to Dashboard
                      <ArrowRight className="ml-3 h-5 w-5" />
                    </Link>
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-8 relative">
                  {/* Decorative elements */}
                  <div className="absolute right-20 top-24 w-16 h-16 bg-blue-50 rounded-full opacity-50 pointer-events-none"></div>
                  <div className="absolute -left-10 bottom-20 w-24 h-24 bg-blue-50 rounded-full opacity-30 pointer-events-none"></div>
                  
                  <div className="space-y-6">
                    <div className="relative">
                      <User className="absolute left-4 top-4 h-6 w-6 text-blue-500" />
                      <input
                        type="text"
                        name="name"
                        id="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Full Name"
                        required
                        className="w-full rounded-lg border-2 border-slate-200 bg-white pl-14 py-4 text-lg text-slate-900 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent h-16 shadow-sm"
                      />
                    </div>
                  </div>
                  <div className="space-y-6">
                    <div className="relative">
                      <Mail className="absolute left-4 top-4 h-6 w-6 text-blue-500" />
                      <input
                        type="email"
                        name="email"
                        id="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="Email Address"
                        required
                        className="w-full rounded-lg border-2 border-slate-200 bg-white pl-14 py-4 text-lg text-slate-900 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent h-16"
                      />
                    </div>
                  </div>
                  <div className="space-y-6">
                    <div className="relative">
                      <Lock className="absolute left-4 top-4 h-6 w-6 text-blue-500" />
                      <input
                        type="password"
                        name="password"
                        id="password"
                        value={formData.password}
                        onChange={handleInputChange}
                        placeholder="Password"
                        required
                        className="w-full rounded-lg border-2 border-slate-200 bg-white pl-14 py-4 text-lg text-slate-900 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent h-16"
                      />
                    </div>
                  </div>

                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="terms"
                      required
                      className="h-5 w-5 rounded border-slate-300 bg-white text-blue-600 focus:ring-blue-500"
                    />
                    <label htmlFor="terms" className="ml-2 text-slate-700">
                      I agree to the <Link href="#" className="text-blue-600 hover:underline">Terms</Link> and <Link href="#" className="text-blue-600 hover:underline">Privacy Policy</Link>
                    </label>
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white text-xl font-semibold py-6 px-8 h-auto shadow-lg rounded-xl relative overflow-hidden"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <div className="flex items-center justify-center">
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Creating Account...
                      </div>
                    ) : (
                      <>
                        Create Account
                        <ArrowRight className="ml-3 h-5 w-5" />
                      </>
                    )}
                  </Button>
                </form>
              )}

              <div className="mt-12 pt-6 border-t border-slate-200 text-center">
                <p className="text-slate-700">
                  Already have an account?{" "}
                  <Link href="/signin" className="text-blue-600 hover:underline">
                    Sign In
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Right Half - Empty space with background */}
        <div className="hidden lg:block lg:w-1/2 relative">
          {/* Additional nebula effects for the right side */}
          <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] bg-gradient-radial from-purple-600/30 via-blue-600/20 to-transparent rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/3 w-[350px] h-[350px] bg-gradient-radial from-cyan-600/25 via-blue-600/15 to-transparent rounded-full blur-3xl"></div>
        </div>
      </div>
    </div>
  )
} 
