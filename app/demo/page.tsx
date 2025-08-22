import { Button } from "@/components/ui/button"
import { ArrowLeft, Play } from "lucide-react"
import Link from "next/link"

export default function DemoPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-blue-200 backdrop-blur-sm bg-white/90 sticky top-0 z-50">
        <div className="container mx-auto px-4 lg:px-6 h-20 flex items-center justify-between">
          {/* Logo */}
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

          {/* Back Button */}
          <Button variant="ghost" asChild className="text-slate-700 hover:text-blue-600 hover:bg-blue-50">
            <Link href="/">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Link>
          </Button>
        </div>
      </header>

      {/* Demo Content */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-slate-800 mb-12">
              <span className="bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent">
                Platform Demo
              </span>
            </h1>

            {/* Video Container */}
            <div className="relative bg-gradient-to-br from-slate-100 to-blue-100 rounded-2xl p-8 mb-8">
              <video 
                className="w-full aspect-video rounded-xl shadow-lg"
                controls
                preload="metadata"
              >
                <source src="/demo vid.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>

            {/* CTA */}
            <div className="flex justify-center gap-6">
              <Button size="lg" asChild className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white shadow-lg shadow-blue-500/25 px-12 py-6 text-xl rounded-full">
                <Link href="/signup">
                  Get Started Now
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}