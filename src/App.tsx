import { useEffect } from "react"
import { Route, Routes, useLocation } from "react-router"
import Home from "./pages/Home"
import Skillentis from "./pages/Skillentis"
import VireonFit from "./pages/VireonFit"
import FoodStore from "./pages/FoodStore"
import Lynkroam from "./pages/Lynkroam"

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
      </Routes>
    </>
  )
}

export default App
