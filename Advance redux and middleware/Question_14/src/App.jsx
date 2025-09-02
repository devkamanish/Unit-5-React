import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./components/Component1";
import Quiz from "./components/Component2";
import Result from "./components/Component4";
import { useSelector } from "react-redux";

function App() {
  const isAuth = useSelector((state) => state.auth.isAuthenticated);

  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/quiz" element={isAuth ? <Quiz /> : <Navigate to="/" />} />
      <Route path="/result" element={isAuth ? <Result /> : <Navigate to="/" />} />
    </Routes>
  );
}

export default App;
