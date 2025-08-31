import React from "react";
import FootballList from "./components/FootballList";
import { Container, Heading } from "@chakra-ui/react";

function App() {
  return (
    <Container maxW="container.lg" p={5}>
      <Heading textAlign="center" mb={5}>
        Football Matches Tracker
      </Heading>
      <FootballList />
    </Container>
  );
}

export default App;
