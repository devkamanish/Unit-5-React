import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Box, SimpleGrid, Button, Text } from "@chakra-ui/react";
import { removeFromWatchlist } from "../features/watchlistSlice";

const Watchlist = () => {
  const watchlist = useSelector((state) => state.watchlist);
  const dispatch = useDispatch();

  return (
    <Box p={5}>
      <Text fontSize="2xl" mb={5}>My Watchlist</Text>
      <SimpleGrid columns={[1, 2, 3, 4]} spacing={5}>
        {watchlist.map((movie) => (
          <Box key={movie.id} borderWidth="1px" borderRadius="lg" p={3}>
            <Text fontWeight="bold">{movie.title}</Text>
            <Button
              mt={2}
              colorScheme="red"
              onClick={() => dispatch(removeFromWatchlist(movie.id))}
            >
              Remove
            </Button>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default Watchlist;
