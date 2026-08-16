import { Route, Routes } from "react-router"
import Home from "./pages/Home"
import Skillentis from "./pages/Skillentis"
import VireonFit from "./pages/VireonFit"
import FoodStore from "./pages/FoodStore"

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/skillentis" element={<Skillentis />} />
      <Route path="/vireonfit" element={<VireonFit />} />
      <Route path="/food-store" element={<FoodStore />} />
    </Routes>
  )
}

export default App