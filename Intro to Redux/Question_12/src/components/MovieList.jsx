import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovies } from "../features/movieSlice";
import { SimpleGrid, Input, Button, Box, Spinner, Text } from "@chakra-ui/react";
import MovieCard from "./MovieCard";

const MovieList = () => {
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();
  const { list, isLoading, isError } = useSelector((state) => state.movies);

  const handleSearch = () => {
    if (query.trim() !== "") dispatch(fetchMovies(query));
  };

  return (
    <Box p={5}>
      <Box display="flex" mb={5}>
        <Input
          placeholder="Search movies..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          mr={2}
        />
        <Button colorScheme="blue" onClick={handleSearch}>
          Search
        </Button>
      </Box>

      {isLoading && <Spinner size="xl" />}
      {isError && <Text color="red.500">Error fetching movies</Text>}

      <SimpleGrid columns={[1, 2, 3, 4]} spacing={5}>
        {list.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default MovieList;
