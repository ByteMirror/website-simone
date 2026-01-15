import { Link } from "react-router-dom"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-border py-12 md:py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
          {/* Brand */}
          <div>
            <a href="/#start" className="font-serif text-xl tracking-tight">
              Simone Möller
            </a>
            <p className="mt-2 text-sm text-muted-foreground">
              Rechtsanwältin
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h5 className="text-sm tracking-[0.2em] uppercase text-muted-foreground mb-4">
              Navigation
            </h5>
            <nav className="flex flex-col gap-2">
              <a
                href="/#start"
                className="text-sm hover:text-muted-foreground transition-colors"
              >
                Start
              </a>
              <a
                href="/#ueber-mich"
                className="text-sm hover:text-muted-foreground transition-colors"
              >
                Über mich
              </a>
              <a
                href="/#rechtsgebiete"
                className="text-sm hover:text-muted-foreground transition-colors"
              >
                Rechtsgebiete
              </a>
              <a
                href="/#kontakt"
                className="text-sm hover:text-muted-foreground transition-colors"
              >
                Kontakt
              </a>
            </nav>
          </div>

          {/* Legal Links */}
          <div>
            <h5 className="text-sm tracking-[0.2em] uppercase text-muted-foreground mb-4">
              Rechtliches
            </h5>
            <nav className="flex flex-col gap-2">
              <Link
                to="/impressum"
                className="text-sm hover:text-muted-foreground transition-colors"
              >
                Impressum
              </Link>
              <Link
                to="/datenschutz"
                className="text-sm hover:text-muted-foreground transition-colors"
              >
                Datenschutzerklärung
              </Link>
            </nav>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Kanzlei Simone Möller. Alle Rechte vorbehalten.
          </p>
          <p className="text-xs text-muted-foreground">
            Brunnenstraße 54, 34537 Bad Wildungen
          </p>
        </div>
      </div>
    </footer>
  )
}
