import { Route, Routes } from "react-router"
import Home from "./pages/Home"
import Skillentis from "./pages/Skillentis"

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/skillentis" element={<Skillentis />} />
    </Routes>
  )
}

export default App