import { useState, useEffect, type ReactNode } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Lock } from "lucide-react"

const CORRECT_PASSWORD = "mathilda-2009"
const AUTH_KEY = "website-simone-auth"

interface PasswordGateProps {
  children: ReactNode
}

export function PasswordGate({ children }: PasswordGateProps) {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [password, setPassword] = useState("")
  const [error, setError] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Check if already authenticated
    const auth = localStorage.getItem(AUTH_KEY)
    if (auth === "true") {
      setIsAuthenticated(true)
    }
    setIsLoading(false)
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (password === CORRECT_PASSWORD) {
      localStorage.setItem(AUTH_KEY, "true")
      setIsAuthenticated(true)
      setError(false)
    } else {
      setError(true)
      setPassword("")
    }
  }

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="w-6 h-6 border-2 border-foreground border-t-transparent rounded-full animate-spin" />
      </div>
    )
  }

  if (isAuthenticated) {
    return <>{children}</>
  }

  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-6">
      <div className="w-full max-w-sm">
        <div className="text-center mb-8">
          <div className="w-16 h-16 mx-auto mb-6 border border-border rounded-full flex items-center justify-center">
            <Lock className="w-6 h-6 text-muted-foreground" />
          </div>
          <h1 className="text-2xl font-serif mb-2">Geschützter Bereich</h1>
          <p className="text-muted-foreground text-sm">
            Bitte geben Sie das Passwort ein, um fortzufahren.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Input
              type="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value)
                setError(false)
              }}
              placeholder="Passwort"
              className={`bg-transparent text-center ${error ? "border-red-500" : ""}`}
              autoFocus
            />
            {error && (
              <p className="text-red-500 text-sm text-center mt-2">
                Falsches Passwort
              </p>
            )}
          </div>
          <Button type="submit" className="w-full">
            Zugang erhalten
          </Button>
        </form>

        <p className="text-xs text-muted-foreground text-center mt-8">
          Kanzlei Simone Möller
        </p>
      </div>
    </div>
  )
}
