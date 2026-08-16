import { Route, Routes } from "react-router"
import Home from "./pages/Home"
import Skillentis from "./pages/Skillentis"
import VireonFit from "./pages/VireonFit"

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/skillentis" element={<Skillentis />} />
      <Route path="/vireonfit" element={<VireonFit />} />
    </Routes>
  )
}

export default App