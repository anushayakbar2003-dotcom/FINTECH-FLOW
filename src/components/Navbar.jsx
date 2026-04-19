import { NavLink } from "react-router-dom";

function Navbar({ toggleTheme }) {
  return (
    <nav className="navbar">
      <h2 className="logo">FintechFlow</h2>

      <NavLink to="/" className={({ isActive }) => isActive ? "active" : ""}>
        Wallet
      </NavLink>

      <NavLink to="/transactions" className={({ isActive }) => isActive ? "active" : ""}>
        Transactions
      </NavLink>

      <NavLink to="/loans" className={({ isActive }) => isActive ? "active" : ""}>
        Loans
      </NavLink>

      <NavLink to="/emi" className={({ isActive }) => isActive ? "active" : ""}>
        EMI
      </NavLink>

      <button onClick={toggleTheme}>Toggle Theme</button>
    </nav>
  );
}

export default Navbar;