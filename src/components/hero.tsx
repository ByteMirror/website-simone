import { Button } from "@/components/ui/button"
import { ArrowDown } from "lucide-react"

export function Hero() {
  return (
    <section
      id="start"
      className="min-h-screen flex flex-col justify-center relative overflow-hidden"
    >
      {/* Background image */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Mobile: centered, faded */}
        <div className="md:hidden absolute inset-0">
          <img
            src="/hero-bg.jpg"
            alt=""
            className="absolute inset-0 w-full h-full object-cover object-center opacity-30"
          />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_90%_70%_at_50%_50%,transparent_40%,var(--background)_100%)]" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
        </div>

        {/* Desktop: positioned right with fade-to-left */}
        <div className="hidden md:block absolute top-0 bottom-0 left-[20%] right-0">
          <img
            src="/hero-bg.jpg"
            alt=""
            className="absolute inset-0 w-full h-full object-cover object-center"
          />
          {/* Fade to left */}
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/70 to-transparent" />
          {/* Fade top edge */}
          <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-transparent h-1/4" />
          {/* Fade bottom edge */}
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent h-1/3" />
          {/* Fade right edge */}
          <div className="absolute inset-0 bg-gradient-to-l from-background via-transparent to-transparent w-1/6 ml-auto" />
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl">
          {/* Eyebrow */}
          <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground mb-6 animate-fade-in">
            Rechtsanwältin
          </p>

          {/* Main Headline */}
          <h1 className="mb-8 animate-fade-in [animation-delay:100ms]">
            <span className="block">Simone Möller</span>
          </h1>

          {/* Tagline */}
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl leading-relaxed mb-12 animate-fade-in [animation-delay:200ms]">
            Recht ist Vertrauen.
            <span className="block mt-2">
              Persönliche Beratung mit Kompetenz und Engagement.
            </span>
          </p>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in [animation-delay:300ms]">
            <Button
              size="lg"
              className="text-base px-8 py-6"
              onClick={() => {
                document.querySelector("#kontakt")?.scrollIntoView({ behavior: "smooth" })
              }}
            >
              Erstberatung vereinbaren
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="text-base px-8 py-6 group"
              onClick={() => {
                document.querySelector("#ueber-mich")?.scrollIntoView({ behavior: "smooth" })
              }}
            >
              Mehr erfahren
              <ArrowDown className="ml-2 h-4 w-4 transition-transform group-hover:translate-y-1" />
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-fade-in [animation-delay:600ms]">
        <a
          href="#ueber-mich"
          className="flex flex-col items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
        >
          <span className="text-xs tracking-widest uppercase">Mehr</span>
          <div className="w-px h-12 bg-border relative overflow-hidden">
            <div className="absolute inset-0 bg-foreground animate-scroll-line" />
          </div>
        </a>
      </div>
    </section>
  )
}
