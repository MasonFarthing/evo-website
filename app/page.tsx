import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, ArrowUpRight } from "lucide-react"
import Link from "next/link"
import { SiteHeader } from "@/components/site-header"
import { SIGN_UP_URL } from "@/lib/links"
import { SHOW_READING } from "@/lib/flags"

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
                  Transform your potential into reality. Whether you seek intellect, power, creativity, wealth, knowledge, influence, discovery, or status: Evo accelerates your growth significantly better than traditional schooling, especially for students dedicated to pursuing excellence.
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
              Evo is a learning platform made up of multiple products, each tailored to learning different things in different ways.
            </p>
            <div className="grid md:grid-cols-2 gap-8 text-left">
              <div className="rounded-2xl border border-blue-200 bg-white p-8">
                <h3 className="text-2xl font-bold text-slate-800 mb-3">Structured Learning</h3>
                <p className="text-slate-600 leading-relaxed">
                  For when you want to learn about something specific, and learn it fully. That can be a short dive into something you're curious about, or full-length learning to mastery in any subject.
                </p>
              </div>
              <div className="rounded-2xl border border-blue-200 bg-white p-8">
                <h3 className="text-2xl font-bold text-slate-800 mb-3">Curiosity Threads</h3>
                <p className="text-slate-600 leading-relaxed">
                  For finding curious threads to explore based on what you're already interested in. It takes in all of your previous chats with AI, pulls out everything you've been curious about, and turns it into threads for you to explore.
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
          <div className="text-center max-w-4xl mx-auto mb-16">
            <h2 className="text-5xl lg:text-6xl font-bold text-slate-800 mb-8">
              <span className="bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent">Deep Dive</span>
            </h2>
            <p className="text-xl text-slate-600 leading-relaxed">
              A closer look at Evo&apos;s products, the figures who guide you, and why it works better than school or a regular AI chat.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-8">
            {/* Structured Learning */}
            <div className="rounded-2xl border border-blue-200 bg-white p-8 lg:p-10">
              <h3 className="text-3xl font-bold text-slate-800 mb-4">Structured Learning</h3>
              <p className="text-slate-600 leading-relaxed mb-6">
                Tell Evo what you want to learn, as broad as &quot;physics&quot; or as specific as you like. Evo works out the natural scope of your request: how deep it should go and how long it should take. If you want something different, two settings let you override it.
              </p>
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h4 className="text-lg font-bold text-blue-600 mb-2">Depth</h4>
                  <p className="text-slate-600 leading-relaxed">
                    Low, Medium or High. A topic like physics would naturally land somewhere between medium and high. Choose Low if you want it simple, or High if you want full rigor.
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-blue-600 mb-2">Length</h4>
                  <ul className="text-slate-600 leading-relaxed space-y-2">
                    <li><strong className="text-slate-800">1-Hour Learning:</strong> a quick, self-contained lesson.</li>
                    <li><strong className="text-slate-800">Short:</strong> a focused course over about a week.</li>
                    <li><strong className="text-slate-800">Main Pursuit:</strong> consistent study over months or years toward mastery. Study physics or biology in Evo instead of at college.</li>
                  </ul>
                </div>
              </div>
              <p className="text-slate-600 leading-relaxed">
                Evo then builds your learning plan, which takes anywhere from about a minute to ten. Thomas takes you through it one unit at a time. Each unit has a purpose, and you move on once you understand it.
              </p>
            </div>

            {/* Curiosity Threads */}
            <div className="rounded-2xl border border-blue-200 bg-white p-8 lg:p-10">
              <h3 className="text-3xl font-bold text-slate-800 mb-4">Curiosity Threads</h3>
              <p className="text-slate-600 leading-relaxed mb-6">
                Upload your chat history from ChatGPT or Claude. Curiosity Threads finds everything you&apos;ve been curious about and builds threads for you to explore. Each curiosity gets many threads, and each thread is full of content.
              </p>
              <div className="grid md:grid-cols-3 gap-6 mb-6">
                <div>
                  <h4 className="text-lg font-bold text-blue-600 mb-2">No prompts needed</h4>
                  <p className="text-slate-600 leading-relaxed">
                    You don&apos;t have to work out what to ask. Just pick a thread and go.
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-blue-600 mb-2">It finds what you don&apos;t know to ask</h4>
                  <p className="text-slate-600 leading-relaxed">
                    Evo knows the whole field around each curiosity, so it builds threads into the parts you haven&apos;t covered and wouldn&apos;t think to ask about.
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-blue-600 mb-2">It starts where you are</h4>
                  <p className="text-slate-600 leading-relaxed">
                    Thomas already knows what you&apos;ve learned and discussed in your chats, so he skips what you know and meets you at your level.
                  </p>
                </div>
              </div>
              <p className="text-sm text-slate-500 leading-relaxed">
                The first import takes a while: about 16 hours for 300 chats and 36 hours for 600. After that, new chats are added quickly.
              </p>
            </div>

            {/* Meet Thomas */}
            <div className="rounded-2xl bg-gradient-to-br from-blue-600 to-blue-700 p-8 lg:p-10 text-white">
              <h3 className="text-3xl font-bold mb-4">Meet Thomas</h3>
              <p className="text-blue-50 leading-relaxed">
                Evo&apos;s figures each guide a different part of your growth. Thomas is the figure of knowledge, and he delivers your learning in both Structured Learning and Curiosity Threads. More figures are coming as Evo grows, including a figure of memory who will help you retain what you learn.
              </p>
            </div>

            {/* Why It Works */}
            <div>
              <h3 className="text-3xl font-bold text-slate-800 mb-6 text-center">Why It Works</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="rounded-2xl border border-blue-200 bg-white p-8">
                  <h4 className="text-xl font-bold text-slate-800 mb-4">Compared to an AI chat</h4>
                  <div className="space-y-4 text-slate-600 leading-relaxed">
                    <p>
                      An AI chat can&apos;t hold a course together, even for an hour. You end up steering it with follow-up questions, and it wanders off or teaches inefficiently. Evo thinks through the knowledge first and structures it into a plan for Thomas to deliver, and it keeps that coherence across plans that run for months.
                    </p>
                    <p>
                      In a chat you eventually run out of things to ask. Evo builds threads into the parts of your curiosities you wouldn&apos;t know to ask about.
                    </p>
                  </div>
                </div>
                <div className="rounded-2xl border border-blue-200 bg-white p-8">
                  <h4 className="text-xl font-bold text-slate-800 mb-4">Compared to school</h4>
                  <div className="space-y-4 text-slate-600 leading-relaxed">
                    <p>
                      School isn&apos;t interested in your curiosities, and it can&apos;t tailor exploration to them.
                    </p>
                    <p>
                      School teaches slowly and assumes the least of you, with classwork, homework and tests that serve the school more than they serve you. Everything in Evo is aimed at cultivating you. Practice only appears when it&apos;s the best way to help you understand, and it&apos;s specific to what you&apos;re learning.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Required Reading Section - dev only for now, see lib/flags.ts */}
      {SHOW_READING && (
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
      )}

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
