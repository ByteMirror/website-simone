import { useState, useEffect, useRef } from "react"
import { Link, useLocation } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"

const navLinks = [
  { href: "/#start", label: "Start" },
  { href: "/#ueber-mich", label: "Über mich" },
  { href: "/#rechtsgebiete", label: "Rechtsgebiete" },
  { href: "/#kontakt", label: "Kontakt" },
]

// Scroll threshold in pixels before hiding/showing nav
const SCROLL_THRESHOLD = 10

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isHidden, setIsHidden] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const lastScrollY = useRef(0)
  const location = useLocation()
  const isHomePage = location.pathname === "/"

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY

      setIsScrolled(currentScrollY > 50)

      // Don't hide nav when mobile menu is open or at very top of page
      if (isMobileMenuOpen || currentScrollY < 100) {
        setIsHidden(false)
        lastScrollY.current = currentScrollY
        return
      }

      // Calculate scroll difference
      const scrollDiff = currentScrollY - lastScrollY.current

      // Only trigger hide/show if scroll exceeds threshold
      if (Math.abs(scrollDiff) > SCROLL_THRESHOLD) {
        setIsHidden(scrollDiff > 0) // Hide when scrolling down, show when scrolling up
        lastScrollY.current = currentScrollY
      }
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [isMobileMenuOpen])

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [isMobileMenuOpen])

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false)
  }, [location.pathname])

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false)

    // If we're on the homepage, just scroll to the section
    if (isHomePage && href.startsWith("/#")) {
      const element = document.querySelector(href.replace("/", ""))
      element?.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled || isMobileMenuOpen || !isHomePage
          ? "bg-background border-b border-border"
          : "bg-transparent",
        isHidden && !isMobileMenuOpen ? "-translate-y-full" : "translate-y-0"
      )}
    >
      <nav className="container mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link
          to="/"
          onClick={() => setIsMobileMenuOpen(false)}
          className="font-serif text-xl tracking-tight transition-opacity hover:opacity-70"
        >
          Simone Möller
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => {
                if (isHomePage) {
                  e.preventDefault()
                  handleNavClick(link.href)
                }
              }}
              className="text-sm tracking-wide text-muted-foreground hover:text-foreground transition-colors duration-300 hover-underline"
            >
              {link.label}
            </a>
          ))}
          <Button size="sm" className="ml-4" asChild>
            <a href="/#kontakt">Termin vereinbaren</a>
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden p-2 -mr-2 relative z-50"
          aria-label={isMobileMenuOpen ? "Menü schließen" : "Menü öffnen"}
          aria-expanded={isMobileMenuOpen}
        >
          <span className="sr-only">
            {isMobileMenuOpen ? "Menü schließen" : "Menü öffnen"}
          </span>
          {isMobileMenuOpen ? (
            <X className="h-5 w-5" />
          ) : (
            <Menu className="h-5 w-5" />
          )}
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={cn(
          "md:hidden fixed inset-0 top-20 bg-background z-40 transition-all duration-500",
          isMobileMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        )}
      >
        <div className="container mx-auto px-6 py-12 flex flex-col gap-8">
          {navLinks.map((link, index) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => {
                if (isHomePage) {
                  e.preventDefault()
                }
                handleNavClick(link.href)
              }}
              className={cn(
                "font-serif text-4xl tracking-tight transition-all duration-500",
                "hover:opacity-70 hover:translate-x-2",
                isMobileMenuOpen
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-4"
              )}
              style={{
                transitionDelay: isMobileMenuOpen ? `${index * 75}ms` : "0ms",
              }}
            >
              {link.label}
            </a>
          ))}
          <div
            className={cn(
              "mt-4 transition-all duration-500",
              isMobileMenuOpen
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            )}
            style={{
              transitionDelay: isMobileMenuOpen ? "400ms" : "0ms",
            }}
          >
            <Button
              size="lg"
              className="w-full text-base py-6"
              onClick={() => handleNavClick("/#kontakt")}
              asChild
            >
              <a href="/#kontakt">Termin vereinbaren</a>
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}
