import React from "react";
import { Box, Image, Text, Button } from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { addToWatchlist } from "../features/watchlistSlice";

const MovieCard = ({ movie }) => {
  const dispatch = useDispatch();

  return (
    <Box borderWidth="1px" borderRadius="lg" overflow="hidden" p={3}>
      <Image
        src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
        alt={movie.title}
        mb={3}
      />
      <Text fontWeight="bold">{movie.title}</Text>
      <Text fontSize="sm">Release: {movie.release_date}</Text>
      <Button
        mt={2}
        colorScheme="teal"
        onClick={() => dispatch(addToWatchlist(movie))}
      >
        + Watchlist
      </Button>
    </Box>
  );
};

export default MovieCard;
