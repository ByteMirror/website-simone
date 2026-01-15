import { useEffect } from "react"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { usePageTransition } from "@/hooks/use-page-transition"
import { cn } from "@/lib/utils"

export function ImpressumPage() {
  const { isExiting, navigateWithTransition } = usePageTransition()

  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const handleBackClick = () => {
    navigateWithTransition("/")
  }

  return (
    <main className={cn("pt-20", isExiting ? "page-exit" : "page-enter")}>
      {/* Back Navigation */}
      <div className="container mx-auto px-6 py-8">
        <Button
          variant="ghost"
          size="sm"
          className="-ml-2"
          onClick={handleBackClick}
        >
          <span className="flex items-center gap-2 text-muted-foreground hover:text-foreground">
            <ArrowLeft className="h-4 w-4" />
            Zurück zur Startseite
          </span>
        </Button>
      </div>

      <section className="pb-24 md:pb-32">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl">
            <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground mb-4">
              Rechtliches
            </p>
            <h1 className="mb-12">Impressum</h1>

            <div className="space-y-8 text-muted-foreground">
              {/* Angaben gemäß § 5 TMG */}
              <div>
                <h2 className="text-foreground mb-4 text-2xl">
                  Angaben gemäß § 5 TMG
                </h2>
                <address className="not-italic space-y-1">
                  <p className="text-foreground font-medium">
                    Rechtsanwältin Simone Möller
                  </p>
                  <p>Brunnenstraße 54</p>
                  <p>34537 Bad Wildungen</p>
                </address>
              </div>

              {/* Kontakt */}
              <div>
                <h2 className="text-foreground mb-4 text-2xl">Kontakt</h2>
                <p>Telefon: +49 123 456789</p>
                <p>E-Mail: kanzlei@moeller-recht.de</p>
              </div>

              {/* Berufsbezeichnung */}
              <div>
                <h2 className="text-foreground mb-4 text-2xl">
                  Berufsbezeichnung und berufsrechtliche Regelungen
                </h2>
                <p>Berufsbezeichnung: Rechtsanwältin</p>
                <p>Zuständige Kammer: Rechtsanwaltskammer Berlin</p>
                <p className="mt-4">
                  Berufsrechtliche Regelungen:
                </p>
                <ul className="list-disc list-inside mt-2 space-y-1">
                  <li>Bundesrechtsanwaltsordnung (BRAO)</li>
                  <li>Berufsordnung für Rechtsanwälte (BORA)</li>
                  <li>Fachanwaltsordnung (FAO)</li>
                  <li>Rechtsanwaltsvergütungsgesetz (RVG)</li>
                  <li>
                    Berufsregeln der Rechtsanwälte der Europäischen Union (CCBE)
                  </li>
                </ul>
                <p className="mt-4">
                  Die berufsrechtlichen Regelungen sind einsehbar unter:{" "}
                  <a
                    href="https://www.brak.de/fuer-anwaelte/berufsrecht/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground hover:underline"
                  >
                    www.brak.de
                  </a>
                </p>
              </div>

              {/* Berufshaftpflichtversicherung */}
              <div>
                <h2 className="text-foreground mb-4 text-2xl">
                  Berufshaftpflichtversicherung
                </h2>
                <p>Name und Sitz der Versicherung:</p>
                <p>Muster Versicherung AG</p>
                <p>Versicherungsstraße 1, 00000 Versicherungsstadt</p>
                <p className="mt-2">
                  Räumlicher Geltungsbereich: Deutschland / EU
                </p>
              </div>

              {/* Umsatzsteuer-ID */}
              <div>
                <h2 className="text-foreground mb-4 text-2xl">Umsatzsteuer-ID</h2>
                <p>
                  Umsatzsteuer-Identifikationsnummer gemäß § 27 a
                  Umsatzsteuergesetz:
                </p>
                <p>DE 123 456 789</p>
              </div>

              {/* Streitschlichtung */}
              <div>
                <h2 className="text-foreground mb-4 text-2xl">Streitschlichtung</h2>
                <p>
                  Die Europäische Kommission stellt eine Plattform zur
                  Online-Streitbeilegung (OS) bereit:{" "}
                  <a
                    href="https://ec.europa.eu/consumers/odr/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground hover:underline"
                  >
                    https://ec.europa.eu/consumers/odr/
                  </a>
                </p>
                <p className="mt-4">
                  Wir sind nicht bereit oder verpflichtet, an
                  Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle
                  teilzunehmen.
                </p>
              </div>

              {/* Haftung für Inhalte */}
              <div>
                <h2 className="text-foreground mb-4 text-2xl">Haftung für Inhalte</h2>
                <p>
                  Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene
                  Inhalte auf diesen Seiten nach den allgemeinen Gesetzen
                  verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter
                  jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde
                  Informationen zu überwachen oder nach Umständen zu forschen, die
                  auf eine rechtswidrige Tätigkeit hinweisen.
                </p>
                <p className="mt-4">
                  Verpflichtungen zur Entfernung oder Sperrung der Nutzung von
                  Informationen nach den allgemeinen Gesetzen bleiben hiervon
                  unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem
                  Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich.
                  Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir
                  diese Inhalte umgehend entfernen.
                </p>
              </div>

              {/* Haftung für Links */}
              <div>
                <h2 className="text-foreground mb-4 text-2xl">Haftung für Links</h2>
                <p>
                  Unser Angebot enthält Links zu externen Websites Dritter, auf
                  deren Inhalte wir keinen Einfluss haben. Deshalb können wir für
                  diese fremden Inhalte auch keine Gewähr übernehmen. Für die
                  Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter
                  oder Betreiber der Seiten verantwortlich.
                </p>
              </div>

              {/* Urheberrecht */}
              <div>
                <h2 className="text-foreground mb-4 text-2xl">Urheberrecht</h2>
                <p>
                  Die durch die Seitenbetreiber erstellten Inhalte und Werke auf
                  diesen Seiten unterliegen dem deutschen Urheberrecht. Die
                  Vervielfältigung, Bearbeitung, Verbreitung und jede Art der
                  Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der
                  schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
