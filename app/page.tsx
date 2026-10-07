import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, ArrowUpRight } from "lucide-react"
import Link from "next/link"
import { SiteHeader } from "@/components/site-header"
import { SIGN_UP_URL } from "@/lib/links"

// Curated list shown in the Required Reading section. Add new entries here.
// Categories:
//   Foundations - aligned thinking on cultivating human potential
//   Signals     - the world coming around to our view
//   Frontier    - ambitious thinking beyond education that still fits
const readingItems = [
  {
    category: "Foundations",
    title: "Why We Stopped Making Einsteins",
    source: "Erik Hoel, The Intrinsic Perspective",
    description:
      "How aristocratic tutoring produced a disproportionate share of history's geniuses, and why its disappearance matters for how we learn today.",
    href: "https://t.co/zJ8fNDWAwj",
  },
  {
    category: "Signals",
    title: "Tech Companies Launching Their Own Programs to Train Grads Because They 'Can't Rely' on Ivy Leagues",
    source: "Lydia Moynihan, New York Post",
    description:
      "Palantir and other tech companies are building their own education programs because even elite degrees no longer guarantee top talent.",
    href: "https://nypost.com/2026/10/01/tech/tech-companies-launching-their-own-programs-to-train-grads-because-they-cant-rely-on-ivy-leagues/",
  },
  {
    category: "Frontier",
    title: "Casey Handmer",
    source: "Read anything by him",
    description:
      "Physicist and founder of Terraform Industries, writing on energy, space, and building ambitious things from first principles.",
    href: "https://caseyhandmer.wordpress.com/",
  },
]

export default function EvoLandingPage() {
  return (
    <div className="min-h-screen bg-white relative overflow-hidden">

      <SiteHeader />

      {/* Hero Section */}
      <section className="relative py-32 lg:py-40 overflow-hidden bg-gradient-to-br from-slate-50 via-blue-100 to-blue-200">
        <div className="container mx-auto px-4 lg:px-6 relative">
          <div className="flex justify-center items-center min-h-[60vh]">
            <div className="text-center space-y-12 max-w-4xl">
              <div className="space-y-8">
                <h1 className="text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight">
                  <span className="text-slate-800">The Future of</span>
                  <br />
                  <span className="bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 bg-clip-text text-transparent">
                    Human Potential
                  </span>
                </h1>
                
                <p className="text-lg lg:text-xl text-slate-600 leading-relaxed max-w-4xl mx-auto">
                  Transform your potential into reality. Whether you seek intellect, power, creativity, wealth, knowledge, influence, discovery, or status: Evo accelerates your growth with results 3x better than traditional schooling, and 7x better for students dedicated to pursuing excellence.
                </p>
              </div>


              {/* CTA — accounts are created in the app */}
              <div className="flex flex-col items-center gap-4">
                <Button size="lg" asChild className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white shadow-lg shadow-blue-500/25 px-12 py-6 text-xl rounded-full">
                  <a href={SIGN_UP_URL}>
                    Get Started
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </a>
                </Button>
                <p className="text-sm text-slate-500">Evo runs on laptops and desktops.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What Does Evo Do Section - brief overview of the software */}
      <section id="what-evo-does" className="py-32 relative bg-gradient-to-br from-white via-slate-50 to-gray-100">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-5xl lg:text-6xl font-bold text-slate-800 mb-8">
              <span className="bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent">What Does Evo Do?</span>
            </h2>
            <p className="text-xl text-slate-600 leading-relaxed mb-12">
              Evo is a place to learn with an AI teacher. There are two sides to it.
            </p>
            <div className="grid md:grid-cols-2 gap-8 text-left">
              <div className="rounded-2xl border border-blue-200 bg-white p-8">
                <h3 className="text-2xl font-bold text-slate-800 mb-3">Structured learning</h3>
                <p className="text-slate-600 leading-relaxed">
                  Say what you want to learn, how long you want it to take and how complex it should be. Evo drafts a learning plan tailored to that, and a teacher takes you through it one unit at a time.
                </p>
              </div>
              <div className="rounded-2xl border border-blue-200 bg-white p-8">
                <h3 className="text-2xl font-bold text-slate-800 mb-3">Learning tool</h3>
                <p className="text-slate-600 leading-relaxed">
                  Upload your previous chats with AI. Evo reads them, finds the things you keep being curious about, and serves them up for you to explore with a tutor.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission Section */}
      <section id="mission" className="relative bg-gradient-to-br from-gray-100 via-slate-100 to-blue-100 min-h-screen">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center max-w-4xl mx-auto">
            <div className="pt-16 pb-12">
              <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-blue-600 via-blue-500 to-blue-700 bg-clip-text text-transparent">
                  Our Mission
                </span>
              </h2>
            </div>
            
            {/* Mission Content */}
            <div className="max-w-3xl mx-auto text-left pb-16">
              <div className="prose prose-lg max-w-none text-slate-700">
                <p className="text-lg leading-relaxed mb-8">
                  The education system hasn't fundamentally changed since 1840, and in fact it has actually gotten worse for middle class and rich families since 400 CE. We think this is insane. Education is directly tied to human potential, which is directly tied to human flourishing. So not only have people gotten less intelligent over the past 1600 years, but they have also experienced less flourishing. This seems insane when you consider our unprecedented access to food, water, shelter, transportation, and technology.
                </p>
                
                <p className="text-xl font-bold text-slate-800 mb-8">
                  Our goal is to make education 10x better for 10x less cost, providing the resources needed for anyone who truly wants to pursue excellence and human flourishing to achieve it.
                </p>
                
                <h3 className="text-2xl font-bold text-slate-800 mb-6 mt-12">
                  How We're Doing This
                </h3>
                
                <div className="space-y-8">
                  <div>
                    <h4 className="text-xl font-bold text-blue-600 mb-3">AI-Powered Learning Platform</h4>
                    <p className="leading-relaxed">
                      We've built an AI-powered educational platform that we estimate performs 3x better than traditional schooling on average, and 7x better for students dedicated to excellence. We believe we can scale this to 10x better on average and possibly 20x better for those pursuing excellence. This platform will continue to evolve and remain central to our mission.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="text-xl font-bold text-blue-600 mb-3">Advancing the Science of Eudaimonia</h4>
                    <p className="leading-relaxed">
                      We're furthering research into eudaimonia—the intersection of excellence, virtue, well-being, human flourishing, and human potential. By advancing our understanding of what truly enables people to thrive, we're creating knowledge that people can directly apply to live better lives.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="text-xl font-bold text-blue-600 mb-3">Real-World Infrastructure</h4>
                    <p className="leading-relaxed">
                      We're building physical spaces and communities so people aren't limited by geography. These will be places of beauty and meaning that foster cultures of excellence—whether intellectual, creative, innovative, scientific, or philosophical. Whatever form of excellence appeals to you, you'll find others pursuing it alongside you.
                    </p>
                  </div>
                </div>
                
                <p className="text-lg font-medium text-slate-800 mt-8">
                  Together, these three pillars will transform how humans learn, grow, and reach their full potential.
                </p>
              </div>
            </div>
            
            {/* Space for additional content */}
            <div className="text-xl text-slate-700 leading-relaxed pb-16">
              {/* Additional content can go here */}
            </div>
          </div>
        </div>
      </section>

      {/* Deep Dive Section - thorough breakdown of the software */}
      <section id="deep-dive" className="py-32 relative bg-gradient-to-br from-white via-slate-50 to-gray-100">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-5xl lg:text-6xl font-bold text-slate-800 mb-8">
              <span className="bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent">Deep Dive</span>
            </h2>
            {/* TODO: subtitle and detailed breakdown of features, how a session works, etc. */}
          </div>
        </div>
      </section>

      {/* Required Reading Section */}
      <section id="reading" className="py-32 relative bg-gradient-to-br from-slate-50 via-gray-50 to-blue-50">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="grid lg:grid-cols-7 gap-8 items-start">
            {/* Left Column - Title and Subtitle */}
            <div className="lg:col-span-2">
              <h2 className="text-5xl lg:text-6xl font-bold text-slate-800 mb-6">
                <span className="bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent">Required Reading</span>
              </h2>
              <p className="text-xl text-slate-600">
                The essays, research, and headlines that shape how we think about education, ambition, and human potential. Some inspired Evo, some prove the point, and some are just too good to leave out.
              </p>
            </div>

            {/* Right Column - Curated Content List */}
            <div className="lg:col-span-5">
              <ul className="divide-y divide-slate-200 border-y border-slate-200">
                {readingItems.map((item) => (
                  <li key={item.href}>
                    <Link href={item.href} target="_blank" rel="noopener noreferrer" className="group flex items-start justify-between gap-6 py-6">
                      <div>
                        <Badge variant="outline" className="mb-3 border-blue-300 text-blue-700 uppercase tracking-wider text-xs">
                          {item.category}
                        </Badge>
                        <h3 className="text-2xl font-bold text-slate-800 font-serif leading-tight group-hover:text-blue-600 transition-colors">
                          {item.title}
                        </h3>
                        <p className="text-sm uppercase tracking-wider text-slate-500 mt-2">{item.source}</p>
                        <p className="text-slate-600 leading-relaxed mt-3">{item.description}</p>
                      </div>
                      <ArrowUpRight className="h-6 w-6 shrink-0 text-slate-400 group-hover:text-blue-600 transition-colors" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-blue-200 bg-white py-8">
        <div className="container mx-auto px-4 lg:px-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-slate-500">
          <p>© {new Date().getFullYear()} Automatos Solutions LLC</p>
          <div className="flex items-center space-x-8">
            <Link href="/terms" className="hover:text-blue-600 transition-colors">
              Terms of Service
            </Link>
            <Link href="/privacy" className="hover:text-blue-600 transition-colors">
              Privacy Policy
            </Link>
          </div>
        </div>
      </footer>

    </div>
  );
}
