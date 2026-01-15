import { ScrollReveal } from "@/components/scroll-reveal"

export function About() {
  return (
    <section id="ueber-mich" className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Portrait */}
          <ScrollReveal direction="left" className="order-2 lg:order-1">
            <div className="relative">
              <div className="aspect-[3/4] bg-secondary relative overflow-hidden">
                <img
                  src="/portrait-simone.jpg"
                  alt="Rechtsanwältin Simone Möller"
                  className="absolute inset-0 w-full h-full object-cover object-top"
                />
                {/* Decorative frame */}
                <div className="absolute inset-4 border border-white/20 pointer-events-none" />
              </div>
              {/* Decorative offset element */}
              <div className="absolute -bottom-4 -right-4 w-full h-full border border-border -z-10" />
            </div>
          </ScrollReveal>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <ScrollReveal>
              <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground mb-4">
                Über mich
              </p>
              <h2 className="mb-8">
                Persönlich.
                <span className="block text-muted-foreground">Kompetent.</span>
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <div className="space-y-6 text-lg leading-relaxed">
                <p>
                  Als Rechtsanwältin ist es mir ein besonderes Anliegen, für jeden
                  Mandanten die bestmögliche Lösung zu finden – stets mit dem Blick
                  für das Wesentliche und einem offenen Ohr für Ihre persönliche
                  Situation.
                </p>
                <p className="text-muted-foreground">
                  Nach meinem Studium der Rechtswissenschaften und der Zulassung
                  zur Rechtsanwaltskammer habe ich umfangreiche Erfahrung in
                  verschiedenen Rechtsgebieten gesammelt. Mein Schwerpunkt liegt
                  auf einer individuellen und lösungsorientierten Beratung.
                </p>
                <p className="text-muted-foreground">
                  Ich glaube daran, dass gute Rechtsberatung mehr ist als nur die
                  Kenntnis von Paragraphen. Sie erfordert Einfühlungsvermögen,
                  strategisches Denken und die Fähigkeit, komplexe Sachverhalte
                  verständlich zu erklären.
                </p>
              </div>
            </ScrollReveal>

            {/* Qualifications */}
            <ScrollReveal delay={200}>
              <div className="mt-12 pt-8 border-t border-border">
                <h4 className="text-sm tracking-[0.2em] uppercase text-muted-foreground mb-6">
                  Mitgliedschaften & Qualifikationen
                </h4>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="w-1 h-1 mt-2.5 bg-foreground rounded-full flex-shrink-0" />
                    <span>Rechtsanwaltskammer Berlin</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1 h-1 mt-2.5 bg-foreground rounded-full flex-shrink-0" />
                    <span>Deutscher Anwaltverein (DAV)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1 h-1 mt-2.5 bg-foreground rounded-full flex-shrink-0" />
                    <span>Arbeitsgemeinschaft Familienrecht</span>
                  </li>
                </ul>
              </div>
            </ScrollReveal>
          </div>
        </div>

        {/* Philosophy Quote */}
        <ScrollReveal delay={300}>
          <div className="mt-24 max-w-3xl mx-auto text-center">
            <blockquote className="relative">
              <span className="absolute -top-8 left-1/2 -translate-x-1/2 text-8xl text-border font-serif leading-none select-none">
                „
              </span>
              <p className="font-serif text-2xl md:text-3xl leading-relaxed relative z-10">
                Recht schafft Klarheit. Mein Ziel ist es, diese Klarheit für Sie
                zu erreichen – durch fundierte Beratung und engagierte Vertretung
                Ihrer Interessen.
              </p>
              <footer className="mt-6 text-muted-foreground">
                — Simone Möller
              </footer>
            </blockquote>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
