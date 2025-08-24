import React, { useContext } from "react";
import { AuthContext } from "../AuthContext";

const Main = () => {
  const { isLoggedIn } = useContext(AuthContext);

  return (
    <main style={{ padding: "20px" }}>
      <h2>
        {isLoggedIn
          ? "You are logged in! 🎉"
          : "Please log in to continue."}
      </h2>
    </main>
  );
};

export default Main;
