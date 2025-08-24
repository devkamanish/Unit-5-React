import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const GrandChild = () => {
  const { theme } = useContext(ThemeContext);

  const styles = {
    padding: "15px",
    marginTop: "10px",
    borderRadius: "8px",
    backgroundColor: theme === "light" ? "#f2f2f2" : "#444444",
    color: theme === "light" ? "#000" : "#fff"
  };

  return (
    <div style={styles}>
      <h3>GrandChild Component</h3>
      <p>Current Theme: {theme}</p>
    </div>
  );
};

export default GrandChild;
