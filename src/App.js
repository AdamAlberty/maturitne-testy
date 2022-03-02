import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home.tsx"
import Test from "./pages/Test.tsx"
import NotFound from "./pages/NotFound.tsx"
import GlobalHeader from "./components/GlobalHeader.tsx"
import Footer from "./components/Footer.tsx"

function App() {
  return (
    <div className="bg-background text-light">
      <BrowserRouter>
        <GlobalHeader />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/test/:slug" element={<Test />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
