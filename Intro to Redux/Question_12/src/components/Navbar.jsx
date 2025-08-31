import React from "react";
import { Link } from "react-router-dom";
import { Box, Flex, Heading, Button } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../features/authSlice";

const Navbar = () => {
  const dispatch = useDispatch();
  const { isAuthenticated } = useSelector((state) => state.auth);

  return (
    <Flex bg="blue.600" color="white" p={4} justify="space-between" align="center">
      <Heading size="md">🎬 MovieApp</Heading>
      <Box>
        <Button as={Link} to="/" colorScheme="teal" variant="outline" mr={3}>
          Home
        </Button>
        <Button as={Link} to="/watchlist" colorScheme="teal" variant="outline" mr={3}>
          Watchlist
        </Button>
        {isAuthenticated ? (
          <Button onClick={() => dispatch(logout())} colorScheme="red">
            Logout
          </Button>
        ) : (
          <Button onClick={() => dispatch({ type: "auth/login", payload: { name: "Guest" } })}>
            Login
          </Button>
        )}
      </Box>
    </Flex>
  );
};

export default Navbar;
