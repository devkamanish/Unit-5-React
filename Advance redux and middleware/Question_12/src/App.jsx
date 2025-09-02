import { ChakraProvider } from "@chakra-ui/react";
import Testimonials from "./components/Testimonials";

function App() {
  return (
    <ChakraProvider>
      <Testimonials />
    </ChakraProvider>
  );
}

export default App;
