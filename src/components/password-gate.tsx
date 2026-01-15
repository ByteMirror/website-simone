import { useState, useEffect, type ReactNode } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
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
      <Card className="w-full max-w-sm border-border">
        <CardHeader className="text-center">
          <div className="w-14 h-14 mx-auto mb-4 border border-border rounded-full flex items-center justify-center">
            <Lock className="w-5 h-5 text-muted-foreground" />
          </div>
          <CardTitle className="font-serif text-xl">Geschützter Bereich</CardTitle>
          <CardDescription>
            Bitte geben Sie das Passwort ein, um fortzufahren.
          </CardDescription>
        </CardHeader>

        <form onSubmit={handleSubmit}>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="password">Passwort</Label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value)
                  setError(false)
                }}
                placeholder="Passwort eingeben"
                className={`bg-transparent ${error ? "border-red-500 focus-visible:ring-red-500" : ""}`}
                autoFocus
              />
              {error && (
                <p className="text-red-500 text-sm">
                  Falsches Passwort. Bitte versuchen Sie es erneut.
                </p>
              )}
            </div>
          </CardContent>

          <CardFooter className="flex-col gap-4">
            <Button type="submit" className="w-full">
              Zugang erhalten
            </Button>
            <p className="text-xs text-muted-foreground text-center">
              Kanzlei Simone Möller
            </p>
          </CardFooter>
        </form>
      </Card>
    </div>
  )
}
