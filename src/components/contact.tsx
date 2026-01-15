import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react"
import { ScrollReveal } from "@/components/scroll-reveal"

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Simulate form submission
    setTimeout(() => setIsSubmitting(false), 1500)
  }

  return (
    <section id="kontakt" className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <ScrollReveal>
          <div className="max-w-2xl mb-16 md:mb-24">
            <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground mb-4">
              Kontakt
            </p>
            <h2 className="mb-6">
              Nehmen Sie
              <span className="block text-muted-foreground">Kontakt auf</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Vereinbaren Sie einen Termin für ein persönliches Gespräch. Die
              Erstberatung ist unverbindlich – gemeinsam finden wir die beste
              Lösung für Ihr Anliegen.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Contact Form */}
          <ScrollReveal delay={100}>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Name *</Label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="Ihr vollständiger Name"
                    required
                    className="bg-transparent"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">E-Mail *</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="ihre@email.de"
                    required
                    className="bg-transparent"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">Telefon</Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="+49 123 456789"
                  className="bg-transparent"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="subject">Betreff *</Label>
                <Input
                  id="subject"
                  name="subject"
                  placeholder="Worum geht es?"
                  required
                  className="bg-transparent"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Ihre Nachricht *</Label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Beschreiben Sie kurz Ihr Anliegen..."
                  rows={6}
                  required
                  className="bg-transparent resize-none"
                />
              </div>

              <p className="text-sm text-muted-foreground">
                * Pflichtfelder. Ihre Daten werden vertraulich behandelt und nur
                zur Bearbeitung Ihrer Anfrage verwendet.
              </p>

              <Button
                type="submit"
                size="lg"
                className="w-full sm:w-auto text-base px-8"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  "Wird gesendet..."
                ) : (
                  <>
                    Nachricht senden
                    <Send className="ml-2 h-4 w-4" />
                  </>
                )}
              </Button>
            </form>
          </ScrollReveal>

          {/* Contact Information */}
          <div className="space-y-12">
            {/* Contact Details */}
            <ScrollReveal delay={200}>
              <div>
                <h4 className="text-sm tracking-[0.2em] uppercase text-muted-foreground mb-6">
                  Kontaktdaten
                </h4>
                <ul className="space-y-6">
                  <li className="flex items-start gap-4 group">
                    <div className="w-10 h-10 border border-border flex items-center justify-center flex-shrink-0 group-hover:bg-foreground group-hover:text-background transition-colors duration-300">
                      <Phone className="h-4 w-4" />
                    </div>
                    <div>
                      <p className="font-medium">Telefon</p>
                      <a
                        href="tel:+49123456789"
                        className="text-muted-foreground hover:text-foreground transition-colors"
                      >
                        +49 123 456789
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start gap-4 group">
                    <div className="w-10 h-10 border border-border flex items-center justify-center flex-shrink-0 group-hover:bg-foreground group-hover:text-background transition-colors duration-300">
                      <Mail className="h-4 w-4" />
                    </div>
                    <div>
                      <p className="font-medium">E-Mail</p>
                      <a
                        href="mailto:kanzlei@moeller-recht.de"
                        className="text-muted-foreground hover:text-foreground transition-colors"
                      >
                        kanzlei@moeller-recht.de
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start gap-4 group">
                    <div className="w-10 h-10 border border-border flex items-center justify-center flex-shrink-0 group-hover:bg-foreground group-hover:text-background transition-colors duration-300">
                      <MapPin className="h-4 w-4" />
                    </div>
                    <div>
                      <p className="font-medium">Adresse</p>
                      <address className="text-muted-foreground not-italic">
                        Brunnenstraße 54<br />
                        34537 Bad Wildungen
                      </address>
                    </div>
                  </li>
                </ul>
              </div>
            </ScrollReveal>

            {/* Office Hours */}
            <ScrollReveal delay={300}>
              <div>
                <h4 className="text-sm tracking-[0.2em] uppercase text-muted-foreground mb-6">
                  Sprechzeiten
                </h4>
                <div className="flex items-start gap-4 group">
                  <div className="w-10 h-10 border border-border flex items-center justify-center flex-shrink-0 group-hover:bg-foreground group-hover:text-background transition-colors duration-300">
                    <Clock className="h-4 w-4" />
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between gap-8">
                      <span>Montag – Freitag</span>
                      <span className="text-muted-foreground">09:00 – 18:00</span>
                    </div>
                    <div className="flex justify-between gap-8">
                      <span>Samstag</span>
                      <span className="text-muted-foreground">Nach Vereinbarung</span>
                    </div>
                    <p className="text-sm text-muted-foreground mt-4">
                      Termine außerhalb der Sprechzeiten nach Absprache möglich.
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Map */}
            <ScrollReveal delay={400}>
              <div className="aspect-[4/3] bg-secondary relative overflow-hidden">
                <iframe
                  src="https://maps.google.com/maps?q=Brunnenstra%C3%9Fe+54,+34537+Bad+Wildungen,+Germany&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Kanzlei Standort - Brunnenstraße 54, Bad Wildungen"
                  className="absolute inset-0 grayscale hover:grayscale-0 transition-all duration-500"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  )
}
