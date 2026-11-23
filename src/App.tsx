import { useEffect } from "react"
import { Route, Routes, useLocation } from "react-router"
import { Analytics } from "@vercel/analytics/react"
import Home from "./pages/Home"
import Skillentis from "./pages/Skillentis"
import VireonFit from "./pages/VireonFit"
import FoodStore from "./pages/FoodStore"
import Lynkroam from "./pages/Lynkroam"
import FixHub from "./pages/FixHub"

function ScrollToHash() {
  const { hash, pathname } = useLocation()

  useEffect(() => {
    if (!hash) return

    const animationFrame = window.requestAnimationFrame(() => {
      document.getElementById(hash.slice(1))?.scrollIntoView()
    })

    return () => window.cancelAnimationFrame(animationFrame)
  }, [hash, pathname])

  return null
}

function App() {
  return (
    <>
      <ScrollToHash />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/skillentis" element={<Skillentis />} />
        <Route path="/vireonfit" element={<VireonFit />} />
        <Route path="/food-store" element={<FoodStore />} />
        <Route path="/lynkroam" element={<Lynkroam />} />
        <Route path="/fixhub" element={<FixHub />} />
      </Routes>
      <Analytics />
    </>
  )
}

export default App
