import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Header } from "./components/Header/Header";
import { Main } from "./components/Main/Main";
import { NotFound } from "./components/pages/NotFound/NotFound";
import { Skills } from "./components/pages/Skills/Skills";
import { Portfolio } from "./components/pages/Portfolio/Portfolio";

function App() {
  return (
    <>
      <Header />

        <Routes>
          <Route path="*" element={<NotFound />} />
          <Route path="/" element={<Main />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/portfolio" element={<Portfolio />} />
        </Routes>

    </>
  );
}

export default App;
