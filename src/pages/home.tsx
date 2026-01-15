import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Services } from "@/components/services"
import { Contact } from "@/components/contact"

export function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Contact />
    </>
  )
}
