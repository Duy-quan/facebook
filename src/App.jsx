import "./App.css";
import Header from "./components/header/Header";
import { Route, Routes } from "react-router-dom";
import News from "./pages/News";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Home from "./pages/home/Home";

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/news" element={<News />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
}

export default App;
