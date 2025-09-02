import { Box, Flex, Heading } from "@chakra-ui/react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchCoffees } from "./redux/action";
import Sidebar from "./components/Sidebar";
import CoffeeList from "./components/CoffeeList";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCoffees());
  }, [dispatch]);

  return (
    <Box>
      <Heading textAlign="center" my={4}>☕ Coffee List</Heading>
      <Flex>
        <Box w="20%">
          <Sidebar />
        </Box>
        <Box w="80%">
          <CoffeeList />
        </Box>
      </Flex>
    </Box>
  );
}

export default App;
