import { Box } from "@chakra-ui/react";
import { useContext } from "react";
import { ThemeContext } from "../ThemeContext";

const Footer = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <Box
      as="footer"
      p="4"
      textAlign="center"
      position="sticky"
      bottom="0"
      bg={theme === "light" ? "gray.300" : "gray.800"}
      color={theme === "light" ? "black" : "white"}
    >
      © 2025 Dashboard App
    </Box>
  );
};

export default Footer;
