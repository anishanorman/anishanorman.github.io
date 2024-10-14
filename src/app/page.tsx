import { HeroSection } from "@/components/HeroSection/HeroSection"
import { Footer } from "@/components/Footer/Footer"

export default function Page() {
  return (
    <div className="flex flex-col h-full justify-between items-center">
      <HeroSection />
      <Footer />
    </div>
  )
}
