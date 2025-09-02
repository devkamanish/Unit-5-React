import { Button, VStack } from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { fetchCoffees } from "../redux/action";

const Sidebar = () => {
  const dispatch = useDispatch();

  return (
    <VStack spacing={4} p={4}>
      <Button onClick={() => dispatch(fetchCoffees("asc"))}>Sort by Price: Low to High</Button>
      <Button onClick={() => dispatch(fetchCoffees("desc"))}>Sort by Price: High to Low</Button>
    </VStack>
  );
};

export default Sidebar;



