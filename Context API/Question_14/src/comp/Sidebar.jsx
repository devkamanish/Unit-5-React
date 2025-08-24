import { Box, Text } from "@chakra-ui/react";
import { useContext } from "react";
import { AuthContext } from "../AuthContext";
import { ThemeContext } from "../ThemeContext";

const Sidebar = () => {
  const { isLoggedIn } = useContext(AuthContext);
  const { theme } = useContext(ThemeContext);

  return (
    <Box
      w={{ base: "0", md: "200px" }} // ✅ hidden on small screens
      display={{ base: "none", md: "block" }}
      bg={theme === "light" ? "gray.200" : "gray.600"}
      color={theme === "light" ? "black" : "white"}
      p="4"
    >
      <Text fontWeight="bold" mb="4">Sidebar</Text>
      {isLoggedIn && <Text>Welcome, User!</Text>}
    </Box>
  );
};

export default Sidebar;
