"use client"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { createClient } from "@/utils/supabase/client"
import { validateSession, isValidRedirectUrl, createSecureRedirectUrl } from "@/utils/auth"

export default function SignInPage() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const [error, setError] = useState<string | null>(null)

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
    setError(null)

    console.log('Starting sign in process...')
    console.log('Environment check:', {
      supabaseUrl: process.env.NEXT_PUBLIC_SUPABASE_URL,
      dashboardUrl: process.env.NEXT_PUBLIC_DASHBOARD_URL,
      hasAnonKey: !!process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
    })

    try {
      const supabase = createClient()
      console.log('Supabase client created')
      
      const { data, error } = await supabase.auth.signInWithPassword({
        email: formData.email,
        password: formData.password,
      })
      console.log('Sign in attempt completed:', { error: error?.message, hasSession: !!data.session })
    } catch (err) {
      console.error('Error during sign in:', err)
      setError('An unexpected error occurred. Please try again.')
      setIsSubmitting(false)
      return
    }

    if (error) {
      const userFriendlyMessage = error.message.includes('Invalid login credentials') 
        ? 'Invalid email or password. Please check your credentials and try again.'
        : error.message.includes('Email not confirmed')
        ? 'Please check your email and click the confirmation link before signing in.'
        : 'Unable to sign in. Please try again later.'
      
      setError(userFriendlyMessage)
      setIsSubmitting(false)
      return
    }

    // If we get here, signin was successful
    if (data.session) {
      setIsSuccess(true)
      // Small delay to show success state, then redirect securely to external dashboard
      setTimeout(async () => {
        const dashboardUrl = process.env.NEXT_PUBLIC_DASHBOARD_URL
        console.log('Dashboard URL:', dashboardUrl) // Debug log
        
        if (dashboardUrl && isValidRedirectUrl(dashboardUrl)) {
          try {
            // Create secure redirect URL with session token
            const secureUrl = await createSecureRedirectUrl(dashboardUrl, data.session)
            console.log('Secure URL created:', secureUrl) // Debug log
            window.location.href = secureUrl
          } catch (error) {
            console.error('Redirect error:', error)
            setError('Failed to create secure redirect. Please try again.')
            setIsSubmitting(false)
            setIsSuccess(false)
          }
        } else {
          console.error('Invalid dashboard URL:', dashboardUrl) // Debug log
          setError('Dashboard URL configuration error.')
          setIsSubmitting(false)
          setIsSuccess(false)
        }
      }, 1500)
    } else {
      setError('Authentication failed. Please try again.')
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-purple-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <Link href="/" className="text-2xl font-bold text-gray-900">
            Evo
          </Link>
          <h2 className="mt-6 text-3xl font-bold text-gray-900">
            Sign in to your account
          </h2>
        </div>

        {error && (
          <div className="bg-red-50 border border-red-300 text-red-700 px-4 py-3 rounded">
            {error}
          </div>
        )}

        {isSuccess ? (
          <div className="text-center space-y-4">
            <div className="text-green-600 text-6xl">✓</div>
            <h3 className="text-xl font-semibold text-gray-900">Signed in successfully!</h3>
            <p className="text-gray-600">
              Redirecting to your dashboard...
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                placeholder="your@email.com"
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  id="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  required
                  className="mt-1 block w-full px-3 py-2 pr-10 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Enter your password"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-500 hover:text-gray-700"
                >
                  {showPassword ? "Hide" : "Show"}
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="remember"
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
                <label htmlFor="remember" className="ml-2 text-sm text-gray-600">
                  Remember me
                </label>
              </div>
              <Link href="#" className="text-sm text-blue-600 hover:text-blue-500">
                Forgot password?
              </Link>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50"
            >
              {isSubmitting ? "Signing in..." : "Sign In"}
            </button>
          </form>
        )}

        <div className="text-center">
          <p className="text-sm text-gray-600">
            Don't have an account?{" "}
            <Link href="/signup" className="font-medium text-blue-600 hover:text-blue-500">
              Sign up here
            </Link>
          </p>
          <Link href="/" className="text-sm text-gray-500 hover:text-gray-700 mt-2 inline-block">
            ← Back to home
          </Link>
        </div>
      </div>
    </div>
  )
}