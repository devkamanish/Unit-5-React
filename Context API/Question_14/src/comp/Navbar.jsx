import { Flex, Button, Text } from "@chakra-ui/react";
import { useContext } from "react";
import { AuthContext } from "../AuthContext";
import { ThemeContext } from "../ThemeContext";

const Navbar = () => {
  const { isLoggedIn, toggleAuth } = useContext(AuthContext);
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <Flex
      as="nav"
      justify="space-between"
      align="center"
      p="4"
      bg={theme === "light" ? "gray.100" : "gray.700"}
      color={theme === "light" ? "black" : "white"}
    >
      <Text fontWeight="bold">
        {isLoggedIn ? "Logged In" : "Logged Out"}
      </Text>
      <Flex gap="2">
        <Button onClick={toggleAuth}>
          {isLoggedIn ? "Log Out" : "Log In"}
        </Button>
        <Button onClick={toggleTheme}>
          Toggle {theme === "light" ? "Dark" : "Light"}
        </Button>
      </Flex>
    </Flex>
  );
};

export default Navbar;
