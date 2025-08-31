import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchFootballMatches } from "../features/footballSlice"
import { Box, Spinner, Text, SimpleGrid, Card, CardBody, Heading } from "@chakra-ui/react";

const FootballList = () => {
  const dispatch = useDispatch();
  const { footballMatches, isLoading, isError } = useSelector((state) => state.football);

  useEffect(() => {
    dispatch(fetchFootballMatches());
  }, [dispatch]);

  if (isLoading) {
    return (
      <Box textAlign="center" mt={10}>
        <Spinner size="xl" />
        <Text mt={2}>Loading matches...</Text>
      </Box>
    );
  }

  if (isError) {
    return (
      <Box textAlign="center" mt={10}>
        <Text color="red.500" fontWeight="bold">Failed to fetch matches. Try again later.</Text>
      </Box>
    );
  }

  return (
    <SimpleGrid columns={[1, 2, 3]} spacing={5} p={5}>
      {footballMatches.map((match, index) => (
        <Card key={index} shadow="md" borderWidth="1px">
          <CardBody>
            <Heading size="md">{match.team1} vs {match.team2}</Heading>
            <Text>Date: {match.date}</Text>
            <Text>Venue: {match.venue || "N/A"}</Text>
            <Text>Winner: {match.winner || "Draw"}</Text>
          </CardBody>
        </Card>
      ))}
    </SimpleGrid>
  );
};

export default FootballList;
