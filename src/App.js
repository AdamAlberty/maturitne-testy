import { BrowserRouter, Route, Routes } from "react-router-dom";

import { GlobalStyles } from "./globalStyles";
import Home from "./pages/Home";
import Test from "./pages/Test";
import NotFound from "./pages/NotFound";
import GlobalHeader from "./components/GlobalHeader";

function App() {
  return (
    <div>
      <BrowserRouter>
        <GlobalStyles />

        <GlobalHeader />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/test/:id" element={<Test />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
