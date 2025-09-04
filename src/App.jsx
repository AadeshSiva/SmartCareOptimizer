import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

// Pages
import Landing from "./pages/landing";
import Navbar from "./components/Navbar";
import Home from "./pages/home";
// import 
export default function App() {
  return (
    <BrowserRouter>
      <main className="app">
        {/* <Navbar /> */}
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/home" element={<Home />} />
          <Route path="/profile" element={<Home />} />

        </Routes>
      </main>
    </BrowserRouter>
  );
}