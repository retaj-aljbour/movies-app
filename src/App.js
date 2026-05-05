import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import About from "./pages/About";

import "./App.css";
function App() {
  return (
    <Router>
      <div className="buttons">

        <Navbar />

        <Routes>
    
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/about" element={<About />} />
        </Routes>
<footer>
  <p>Movie App Project © 2026</p>
</footer>
      </div>
    </Router>
  );
}

export default App;

