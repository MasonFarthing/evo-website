import type { Metadata } from "next"
import { LegalPage } from "@/components/legal-page"

export const metadata: Metadata = {
  title: "Terms of Service - Evo",
}

export default function TermsPage() {
  return <LegalPage file="terms.md" />
}
