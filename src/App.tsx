import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { HomePage } from "@/pages/home"
import { ImpressumPage } from "@/pages/impressum"
import { DatenschutzPage } from "@/pages/datenschutz"

export function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-background text-foreground">
        <Navigation />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/impressum" element={<ImpressumPage />} />
          <Route path="/datenschutz" element={<DatenschutzPage />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
