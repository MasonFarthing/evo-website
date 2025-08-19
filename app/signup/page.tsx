"use client"

import { useState } from "react"
import Link from "next/link"
import { createClient } from "@/utils/supabase/client"

export default function WaitlistPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: ""
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
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

    const supabase = createClient()
    
    const { error } = await supabase
      .from('waitlist')
      .insert([{ 
        name: formData.name,
        email: formData.email,
        created_at: new Date().toISOString() 
      }])

    if (error) {
      const userFriendlyMessage = error.message.includes('duplicate key value') 
        ? 'This email is already on our waitlist!'
        : error.message.includes('invalid input syntax')
        ? 'Please enter a valid email address.'
        : 'Unable to join waitlist. Please try again later.'
      
      setError(userFriendlyMessage)
      setIsSubmitting(false)
      return
    }

    setIsSubmitting(false)
    setIsSuccess(true)
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <Link href="/" className="text-2xl font-bold text-gray-900">
            Evo
          </Link>
          <h2 className="mt-6 text-3xl font-bold text-gray-900">
            Join the Waitlist
          </h2>
        </div>

        {error && (
          <div className="bg-red-50 border border-red-300 text-red-700 px-4 py-3 rounded">
            {error}
          </div>
        )}

        {isSuccess ? (
          <div className="text-center space-y-4">
            <div className="text-green-600 text-6xl">🎉</div>
            <h3 className="text-xl font-semibold text-gray-900">You're on the list!</h3>
            <p className="text-gray-600">
              Thanks for joining our waitlist. We'll notify you as soon as Evo launches!
            </p>
            <Link 
              href="/"
              className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              Back to Home
            </Link>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter your full name"
              />
            </div>

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
                placeholder="Enter your email to join the waitlist"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50"
            >
              {isSubmitting ? "Joining Waitlist..." : "Join Waitlist"}
            </button>
          </form>
        )}

        <div className="text-center">
          <p className="text-sm text-gray-600">
            Have login credentials?{" "}
            <Link href="/signin" className="font-medium text-blue-600 hover:text-blue-500">
              Sign in here
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
