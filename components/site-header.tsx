import { Button } from "@/components/ui/button"
import Link from "next/link"
import { SIGN_IN_URL, SIGN_UP_URL } from "@/lib/links"

// The header shared by the landing page and the pricing page: logo, section
// links, and the Sign In / Sign Up buttons, which lead to the Evo app.
export function SiteHeader() {
  return (
    <header className="border-b border-blue-200 backdrop-blur-sm bg-white/90 sticky top-0 z-50">
      <div className="container mx-auto px-4 lg:px-6 h-20 flex items-center justify-between">
        {/* Logo with enhanced glow */}
        <Link href="/" className="flex items-center space-x-2" aria-label="Evo">
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
        </Link>

        {/* Navigation with tech styling */}
        <nav className="hidden md:flex items-center justify-center flex-1 space-x-10">
          <Link href="/#what-evo-does" className="text-slate-700 hover:text-blue-600 transition-colors text-sm uppercase tracking-wider font-medium">
            What Evo Does
          </Link>
          <Link href="/#mission" className="text-slate-700 hover:text-blue-600 transition-colors text-sm uppercase tracking-wider font-medium">
            Our Mission
          </Link>
          <Link href="/#deep-dive" className="text-slate-700 hover:text-blue-600 transition-colors text-sm uppercase tracking-wider font-medium">
            Deep Dive
          </Link>
          <Link href="/#reading" className="text-slate-700 hover:text-blue-600 transition-colors text-sm uppercase tracking-wider font-medium">
            Required Reading
          </Link>
          <Link href="/pricing" className="text-slate-700 hover:text-blue-600 transition-colors text-sm uppercase tracking-wider font-medium">
            Pricing
          </Link>
        </nav>

        {/* Sign in / sign up — both happen in the app */}
        <div className="flex items-center space-x-4">
          <Button variant="ghost" asChild className="text-slate-700 hover:text-blue-600 hover:bg-blue-50 border border-transparent hover:border-blue-300">
            <a href={SIGN_IN_URL}>Sign In</a>
          </Button>
          <Button variant="outline" asChild className="border-blue-600 text-blue-600 hover:bg-blue-50">
            <a href={SIGN_UP_URL}>Sign Up</a>
          </Button>
        </div>
      </div>
    </header>
  )
}
