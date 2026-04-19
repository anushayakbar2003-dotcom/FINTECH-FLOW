import { BrowserRouter, Routes, Route } from "react-router-dom";
import Wallet from "./pages/Wallet";
import Transactions from "./pages/Transactions";
import Loans from "./pages/Loans";
import EMI from "./pages/EMI";
import Navbar from "./components/Navbar";
import { useState, useEffect } from "react";

function App() {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark");
      document.body.classList.remove("light");
    } else {
      document.body.classList.add("light");
      document.body.classList.remove("dark");
    }

    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  return (
    <BrowserRouter>
      <Navbar toggleTheme={() => setDarkMode(!darkMode)} darkMode={darkMode} />

      <Routes>
        <Route path="/" element={<Wallet />} />
        <Route path="/transactions" element={<Transactions />} />
        <Route path="/loans" element={<Loans />} />
        <Route path="/emi" element={<EMI />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;