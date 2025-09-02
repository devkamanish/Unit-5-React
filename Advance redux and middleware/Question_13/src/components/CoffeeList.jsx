import { useSelector } from "react-redux";
import { SimpleGrid, Box, Text, Image } from "@chakra-ui/react";

const CoffeeList = () => {
  const coffees = useSelector((state) => state.coffees);

  return (
    <SimpleGrid columns={[1, 2, 3]} spacing={6} p={4}>
      {coffees.map((coffee) => (
        <Box key={coffee.id} border="1px solid #ccc" p={4} borderRadius="md">
          <Image src={coffee.image} alt={coffee.name} mb={2} />
          <Text fontWeight="bold">{coffee.name}</Text>
          <Text>Price: ₹{coffee.price}</Text>
        </Box>
      ))}
    </SimpleGrid>
  );
};

export default CoffeeList;
