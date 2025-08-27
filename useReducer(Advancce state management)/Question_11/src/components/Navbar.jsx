import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  const { state, dispatch } = useAuth();

  return (
    <nav style={{ padding: "10px", background: "#ddd" }}>
      <Link to="/">Home</Link> |{" "}
      {state.isAuthenticated ? (
        <>
          <Link to="/search">Search</Link> |{" "}
          <button onClick={() => dispatch({ type: "LOGOUT" })}>Logout</button>
        </>
      ) : (
        <>
          <Link to="/login">Login</Link> | <Link to="/register">Register</Link>
        </>
      )}
      {" | "}
      <ThemeToggle />
    </nav>
  );
}
