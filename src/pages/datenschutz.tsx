import { useEffect } from "react"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { usePageTransition } from "@/hooks/use-page-transition"
import { cn } from "@/lib/utils"

export function DatenschutzPage() {
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
            <h1 className="mb-12">Datenschutzerklärung</h1>

            <div className="space-y-8 text-muted-foreground">
              {/* Einleitung */}
              <div>
                <h2 className="text-foreground mb-4 text-2xl">
                  1. Datenschutz auf einen Blick
                </h2>
                <h3 className="text-foreground text-lg mb-2">
                  Allgemeine Hinweise
                </h3>
                <p>
                  Die folgenden Hinweise geben einen einfachen Überblick darüber,
                  was mit Ihren personenbezogenen Daten passiert, wenn Sie diese
                  Website besuchen. Personenbezogene Daten sind alle Daten, mit
                  denen Sie persönlich identifiziert werden können.
                </p>
              </div>

              {/* Datenerfassung */}
              <div>
                <h3 className="text-foreground text-lg mb-2">
                  Datenerfassung auf dieser Website
                </h3>
                <p className="font-medium text-foreground mb-2">
                  Wer ist verantwortlich für die Datenerfassung auf dieser Website?
                </p>
                <p className="mb-4">
                  Die Datenverarbeitung auf dieser Website erfolgt durch den
                  Websitebetreiber. Dessen Kontaktdaten können Sie dem Impressum
                  dieser Website entnehmen.
                </p>
                <p className="font-medium text-foreground mb-2">
                  Wie erfassen wir Ihre Daten?
                </p>
                <p className="mb-4">
                  Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese
                  mitteilen. Hierbei kann es sich z.B. um Daten handeln, die Sie in
                  ein Kontaktformular eingeben. Andere Daten werden automatisch
                  oder nach Ihrer Einwilligung beim Besuch der Website durch unsere
                  IT-Systeme erfasst. Das sind vor allem technische Daten (z.B.
                  Internetbrowser, Betriebssystem oder Uhrzeit des Seitenaufrufs).
                </p>
                <p className="font-medium text-foreground mb-2">
                  Wofür nutzen wir Ihre Daten?
                </p>
                <p>
                  Ein Teil der Daten wird erhoben, um eine fehlerfreie
                  Bereitstellung der Website zu gewährleisten. Andere Daten können
                  zur Analyse Ihres Nutzerverhaltens verwendet werden.
                </p>
              </div>

              {/* Rechte */}
              <div>
                <h3 className="text-foreground text-lg mb-2">
                  Welche Rechte haben Sie bezüglich Ihrer Daten?
                </h3>
                <p>
                  Sie haben jederzeit das Recht, unentgeltlich Auskunft über
                  Herkunft, Empfänger und Zweck Ihrer gespeicherten
                  personenbezogenen Daten zu erhalten. Sie haben außerdem ein Recht,
                  die Berichtigung oder Löschung dieser Daten zu verlangen. Wenn Sie
                  eine Einwilligung zur Datenverarbeitung erteilt haben, können Sie
                  diese Einwilligung jederzeit für die Zukunft widerrufen. Außerdem
                  haben Sie das Recht, unter bestimmten Umständen die Einschränkung
                  der Verarbeitung Ihrer personenbezogenen Daten zu verlangen.
                </p>
              </div>

              {/* Hosting */}
              <div>
                <h2 className="text-foreground mb-4 text-2xl">2. Hosting</h2>
                <p>
                  Wir hosten die Inhalte unserer Website bei folgendem Anbieter:
                </p>
                <p className="mt-4 font-medium text-foreground">Externes Hosting</p>
                <p className="mt-2">
                  Diese Website wird extern gehostet. Die personenbezogenen Daten,
                  die auf dieser Website erfasst werden, werden auf den Servern des
                  Hosters gespeichert. Hierbei kann es sich v.a. um IP-Adressen,
                  Kontaktanfragen, Meta- und Kommunikationsdaten, Vertragsdaten,
                  Kontaktdaten, Namen, Websitezugriffe und sonstige Daten, die über
                  eine Website generiert werden, handeln.
                </p>
              </div>

              {/* Allgemeine Hinweise */}
              <div>
                <h2 className="text-foreground mb-4 text-2xl">
                  3. Allgemeine Hinweise und Pflichtinformationen
                </h2>
                <h3 className="text-foreground text-lg mb-2">Datenschutz</h3>
                <p>
                  Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen
                  Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten
                  vertraulich und entsprechend den gesetzlichen
                  Datenschutzvorschriften sowie dieser Datenschutzerklärung.
                </p>
                <p className="mt-4">
                  Wir weisen darauf hin, dass die Datenübertragung im Internet (z.B.
                  bei der Kommunikation per E-Mail) Sicherheitslücken aufweisen
                  kann. Ein lückenloser Schutz der Daten vor dem Zugriff durch
                  Dritte ist nicht möglich.
                </p>
              </div>

              {/* Verantwortliche Stelle */}
              <div>
                <h3 className="text-foreground text-lg mb-2">
                  Hinweis zur verantwortlichen Stelle
                </h3>
                <p>
                  Die verantwortliche Stelle für die Datenverarbeitung auf dieser
                  Website ist:
                </p>
                <address className="not-italic mt-4">
                  <p className="font-medium text-foreground">
                    Rechtsanwältin Simone Möller
                  </p>
                  <p>Brunnenstraße 54</p>
                  <p>34537 Bad Wildungen</p>
                  <p className="mt-2">Telefon: +49 123 456789</p>
                  <p>E-Mail: kanzlei@moeller-recht.de</p>
                </address>
              </div>

              {/* Speicherdauer */}
              <div>
                <h3 className="text-foreground text-lg mb-2">Speicherdauer</h3>
                <p>
                  Soweit innerhalb dieser Datenschutzerklärung keine speziellere
                  Speicherdauer genannt wurde, verbleiben Ihre personenbezogenen
                  Daten bei uns, bis der Zweck für die Datenverarbeitung entfällt.
                  Wenn Sie ein berechtigtes Löschersuchen geltend machen oder eine
                  Einwilligung zur Datenverarbeitung widerrufen, werden Ihre Daten
                  gelöscht, sofern wir keine anderen rechtlich zulässigen Gründe für
                  die Speicherung Ihrer personenbezogenen Daten haben.
                </p>
              </div>

              {/* Rechtsgrundlage */}
              <div>
                <h3 className="text-foreground text-lg mb-2">
                  Allgemeine Hinweise zu den Rechtsgrundlagen
                </h3>
                <p>
                  Sofern Sie in die Datenverarbeitung eingewilligt haben,
                  verarbeiten wir Ihre personenbezogenen Daten auf Grundlage von
                  Art. 6 Abs. 1 lit. a DSGVO bzw. Art. 9 Abs. 2 lit. a DSGVO, sofern
                  besondere Datenkategorien nach Art. 9 Abs. 1 DSGVO verarbeitet
                  werden.
                </p>
              </div>

              {/* Widerruf */}
              <div>
                <h3 className="text-foreground text-lg mb-2">
                  Widerruf Ihrer Einwilligung zur Datenverarbeitung
                </h3>
                <p>
                  Viele Datenverarbeitungsvorgänge sind nur mit Ihrer ausdrücklichen
                  Einwilligung möglich. Sie können eine bereits erteilte Einwilligung
                  jederzeit widerrufen. Die Rechtmäßigkeit der bis zum Widerruf
                  erfolgten Datenverarbeitung bleibt vom Widerruf unberührt.
                </p>
              </div>

              {/* Beschwerderecht */}
              <div>
                <h3 className="text-foreground text-lg mb-2">
                  Beschwerderecht bei der zuständigen Aufsichtsbehörde
                </h3>
                <p>
                  Im Falle von Verstößen gegen die DSGVO steht den Betroffenen ein
                  Beschwerderecht bei einer Aufsichtsbehörde zu. Das Beschwerderecht
                  besteht unbeschadet anderweitiger verwaltungsrechtlicher oder
                  gerichtlicher Rechtsbehelfe.
                </p>
              </div>

              {/* Datenerfassung Website */}
              <div>
                <h2 className="text-foreground mb-4 text-2xl">
                  4. Datenerfassung auf dieser Website
                </h2>
                <h3 className="text-foreground text-lg mb-2">Kontaktformular</h3>
                <p>
                  Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden
                  Ihre Angaben aus dem Anfrageformular inklusive der von Ihnen dort
                  angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für
                  den Fall von Anschlussfragen bei uns gespeichert. Diese Daten
                  geben wir nicht ohne Ihre Einwilligung weiter.
                </p>
                <p className="mt-4">
                  Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6
                  Abs. 1 lit. b DSGVO, sofern Ihre Anfrage mit der Erfüllung eines
                  Vertrags zusammenhängt oder zur Durchführung vorvertraglicher
                  Maßnahmen erforderlich ist. In allen übrigen Fällen beruht die
                  Verarbeitung auf unserem berechtigten Interesse an der effektiven
                  Bearbeitung der an uns gerichteten Anfragen (Art. 6 Abs. 1 lit. f
                  DSGVO).
                </p>
              </div>

              {/* Anfrage per E-Mail */}
              <div>
                <h3 className="text-foreground text-lg mb-2">
                  Anfrage per E-Mail, Telefon oder Telefax
                </h3>
                <p>
                  Wenn Sie uns per E-Mail, Telefon oder Telefax kontaktieren, wird
                  Ihre Anfrage inklusive aller daraus hervorgehenden
                  personenbezogenen Daten (Name, Anfrage) zum Zwecke der Bearbeitung
                  Ihres Anliegens bei uns gespeichert und verarbeitet. Diese Daten
                  geben wir nicht ohne Ihre Einwilligung weiter.
                </p>
              </div>

              {/* Anwaltliche Schweigepflicht */}
              <div>
                <h2 className="text-foreground mb-4 text-2xl">
                  5. Anwaltliche Schweigepflicht
                </h2>
                <p>
                  Als Rechtsanwältin unterliege ich der anwaltlichen Schweigepflicht
                  gemäß § 43a Abs. 2 BRAO. Alle im Rahmen des Mandatsverhältnisses
                  erlangten Informationen werden vertraulich behandelt und
                  unterliegen dem Berufsgeheimnis. Die Weitergabe an Dritte erfolgt
                  nur mit Ihrer ausdrücklichen Einwilligung oder sofern ich hierzu
                  gesetzlich verpflichtet bin.
                </p>
              </div>

              {/* Stand */}
              <div className="pt-8 border-t border-border">
                <p className="text-sm">
                  Stand: Januar 2025
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
