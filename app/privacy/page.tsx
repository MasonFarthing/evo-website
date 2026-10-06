import type { Metadata } from "next"
import { LegalPage } from "@/components/legal-page"

export const metadata: Metadata = {
  title: "Privacy Policy - Evo",
}

export default function PrivacyPage() {
  return <LegalPage file="privacy.md" />
}
