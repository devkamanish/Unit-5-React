import React, { useContext } from "react";
import { AuthContext } from "../AuthContext";

const Footer = () => {
  const { isLoggedIn } = useContext(AuthContext);

  return (
    <footer style={{ padding: "10px", background: "#eee", marginTop: "20px" }}>
      {isLoggedIn ? "Welcome, User" : "Please log in"}
    </footer>
  );
};

export default Footer;
