import { ArrowUpRight } from "lucide-react"
import { ScrollReveal } from "@/components/scroll-reveal"

const practiceAreas = [
  {
    id: "familienrecht",
    title: "Familienrecht",
    description:
      "Scheidung, Unterhalt, Sorgerecht und Vermögensauseinandersetzung. Einfühlsame Beratung in persönlichen Angelegenheiten.",
    details: [
      "Ehescheidung und Trennungsfolgen",
      "Unterhaltsrecht (Kindes- und Ehegattenunterhalt)",
      "Sorge- und Umgangsrecht",
      "Zugewinnausgleich",
    ],
  },
  {
    id: "arbeitsrecht",
    title: "Arbeitsrecht",
    description:
      "Kündigung, Arbeitsvertrag und Abfindung. Starke Vertretung Ihrer Interessen im Arbeitsverhältnis.",
    details: [
      "Kündigungsschutz",
      "Arbeitsvertragsgestaltung",
      "Abfindungsverhandlungen",
      "Zeugnisrecht",
    ],
  },
  {
    id: "vertragsrecht",
    title: "Vertragsrecht",
    description:
      "Vertragsgestaltung, Prüfung und Durchsetzung. Rechtssicherheit für Ihre geschäftlichen Beziehungen.",
    details: [
      "Vertragsprüfung und -gestaltung",
      "Allgemeine Geschäftsbedingungen",
      "Kaufverträge",
      "Dienstleistungsverträge",
    ],
  },
  {
    id: "mietrecht",
    title: "Mietrecht",
    description:
      "Mietvertrag, Kündigung und Mängel. Kompetente Beratung für Mieter und Vermieter.",
    details: [
      "Mietvertragsgestaltung",
      "Mieterhöhungen und Betriebskosten",
      "Kündigungen und Räumungsklagen",
      "Mängelansprüche",
    ],
  },
]

export function Services() {
  return (
    <section id="rechtsgebiete" className="py-24 md:py-32 bg-secondary relative overflow-hidden">
      {/* Background image - positioned right, fading to left */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 bottom-0 w-1/2 md:w-2/3">
          <img
            src="/services-bg.jpg"
            alt=""
            className="absolute inset-0 w-full h-full object-cover object-center opacity-30"
          />
          {/* Fade to left */}
          <div className="absolute inset-0 bg-gradient-to-r from-secondary via-secondary/80 to-transparent" />
          {/* Fade top edge */}
          <div className="absolute inset-0 bg-gradient-to-b from-secondary via-transparent to-transparent h-1/4" />
          {/* Fade bottom edge */}
          <div className="absolute inset-0 bg-gradient-to-t from-secondary via-transparent to-transparent h-1/3" />
          {/* Fade right edge */}
          <div className="absolute inset-0 bg-gradient-to-l from-secondary via-transparent to-transparent w-1/6 ml-auto" />
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <ScrollReveal>
          <div className="max-w-2xl mb-16 md:mb-24">
            <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground mb-4">
              Rechtsgebiete
            </p>
            <h2 className="mb-6">
              Meine
              <span className="block text-muted-foreground">Schwerpunkte</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Fundierte Beratung in ausgewählten Rechtsgebieten. Jeder Fall ist
              einzigartig – ich nehme mir die Zeit, Ihre Situation zu verstehen
              und die beste Strategie zu entwickeln.
            </p>
          </div>
        </ScrollReveal>

        {/* Practice Areas Grid */}
        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {practiceAreas.map((area, index) => (
            <ScrollReveal key={area.id} delay={index * 100}>
              <article className="group h-full bg-background p-8 md:p-10 border border-border hover:border-foreground/20 transition-all duration-500 cursor-pointer">
                {/* Number */}
                <span className="text-sm text-muted-foreground font-mono">
                  {String(index + 1).padStart(2, "0")}
                </span>

                {/* Title */}
                <h3 className="mt-4 mb-4 flex items-center justify-between">
                  <span>{area.title}</span>
                  <ArrowUpRight className="h-5 w-5 text-muted-foreground opacity-0 -translate-x-2 translate-y-2 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-300" />
                </h3>

                {/* Description */}
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {area.description}
                </p>

                {/* Details List */}
                <ul className="space-y-2">
                  {area.details.map((detail, detailIndex) => (
                    <li
                      key={detailIndex}
                      className="flex items-start gap-3 text-sm text-muted-foreground"
                    >
                      <span className="w-1 h-1 mt-2 bg-muted-foreground rounded-full flex-shrink-0" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>

                {/* Hover line */}
                <div className="mt-8 h-px bg-border relative overflow-hidden">
                  <div className="absolute inset-0 bg-foreground -translate-x-full group-hover:translate-x-0 transition-transform duration-500" />
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>

        {/* Additional Info */}
        <ScrollReveal delay={400}>
          <div className="mt-16 md:mt-24 text-center">
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Sie haben Fragen zu einem anderen Rechtsgebiet?
              <span className="block mt-2">
                Kontaktieren Sie mich für eine unverbindliche Ersteinschätzung.
              </span>
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
