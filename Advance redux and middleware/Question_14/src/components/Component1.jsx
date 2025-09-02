import { useDispatch } from "react-redux";
import { Button, Input, VStack } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { LOGIN_SUCCESS } from "../redux/actionTypes";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = async () => {
    const res = await fetch("https://reqres.in/api/login", {
      method: "POST",
      body: JSON.stringify({
        email: "eve.holt@reqres.in",
        password: "cityslicka",
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (res.ok) {
      dispatch({ type: LOGIN_SUCCESS });
      navigate("/quiz");
    } else {
      alert("Login failed");
    }
  };

  return (
    <VStack spacing={4} p={6}>
      <Input placeholder="Email" defaultValue="eve.holt@reqres.in" />
      <Input placeholder="Password" type="password" defaultValue="cityslicka" />
      <Button onClick={handleLogin} colorScheme="teal">Login</Button>
    </VStack>
  );
};

export default Login;
