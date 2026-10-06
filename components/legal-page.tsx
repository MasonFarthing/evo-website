import { readFileSync } from "fs"
import path from "path"
import Link from "next/link"
import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"

// Renders a markdown document from the legal/ folder. Edit the .md file to change the page.
export function LegalPage({ file }: { file: string }) {
  const content = readFileSync(path.join(process.cwd(), "legal", file), "utf8")

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-slate-50 to-gray-100">
      <header className="border-b border-blue-200 bg-white/90">
        <div className="container mx-auto px-4 lg:px-6 h-20 flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent">
            Evo
          </Link>
          <nav className="flex items-center space-x-8">
            <Link href="/terms" className="text-slate-700 hover:text-blue-600 transition-colors text-sm uppercase tracking-wider font-medium">
              Terms
            </Link>
            <Link href="/privacy" className="text-slate-700 hover:text-blue-600 transition-colors text-sm uppercase tracking-wider font-medium">
              Privacy
            </Link>
          </nav>
        </div>
      </header>

      <main className="container mx-auto px-4 lg:px-6 py-16">
        <article className="max-w-3xl mx-auto text-slate-700">
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            components={{
              h1: ({ children }) => (
                <h1 className="text-4xl lg:text-5xl font-bold text-slate-800 mb-6">{children}</h1>
              ),
              h2: ({ children }) => (
                <h2 className="text-2xl font-bold text-slate-800 mt-12 mb-4">{children}</h2>
              ),
              p: ({ children }) => <p className="leading-relaxed mb-4">{children}</p>,
              ul: ({ children }) => <ul className="list-disc pl-6 mb-4 space-y-2">{children}</ul>,
              li: ({ children }) => <li className="leading-relaxed">{children}</li>,
              strong: ({ children }) => <strong className="font-semibold text-slate-800">{children}</strong>,
              a: ({ href, children }) => (
                <a href={href} className="text-blue-600 hover:text-blue-500 underline">
                  {children}
                </a>
              ),
              table: ({ children }) => (
                <div className="overflow-x-auto mb-4">
                  <table className="w-full text-left border-collapse">{children}</table>
                </div>
              ),
              th: ({ children }) => (
                <th className="border-b-2 border-slate-300 py-2 pr-4 font-semibold text-slate-800">{children}</th>
              ),
              td: ({ children }) => (
                <td className="border-b border-slate-200 py-2 pr-4 align-top">{children}</td>
              ),
            }}
          >
            {content}
          </ReactMarkdown>
        </article>
      </main>
    </div>
  )
}
