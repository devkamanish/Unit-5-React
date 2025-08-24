import { Grid, Box } from "@chakra-ui/react";
import { useContext } from "react";
import { ThemeContext } from "../ThemeContext";

const MainContent = () => {
  const { theme } = useContext(ThemeContext);

  const products = ["Product A", "Product B", "Product C", "Product D"];

  return (
    <Grid
      templateColumns={{ base: "1fr", sm: "repeat(2, 1fr)", md: "repeat(3, 1fr)" }}
      gap="4"
      p="4"
      flex="1"
    >
      {products.map((product, i) => (
        <Box
          key={i}
          p="4"
          shadow="md"
          borderRadius="md"
          bg={theme === "light" ? "gray.100" : "gray.700"}
          color={theme === "light" ? "black" : "white"}
        >
          {product}
        </Box>
      ))}
    </Grid>
  );
};

export default MainContent;
