import { BrowserRouter, Route, Routes } from "react-router-dom"

import { GlobalStyles } from "./globalStyles"
import Home from "./pages/Home"
import Test from "./pages/Test"
import NotFound from "./pages/NotFound"
import GlobalHeader from "./components/GlobalHeader"
import { ThemeProvider } from "styled-components"
import { theme } from "./styles/theme"

function App() {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <GlobalStyles />

          <GlobalHeader />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/test/:id" element={<Test />} />
            <Route path="/*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </div>
  )
}

export default App
