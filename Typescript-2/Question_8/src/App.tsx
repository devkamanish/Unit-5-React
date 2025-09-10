import React from 'react';
import { ChakraProvider, Heading, Container } from '@chakra-ui/react';
import FeedbackForm from './components/FeedbackForm';
import FeedbackList from './components/FeedbackList';
import FeedbackChart from './components/FeedbackChart';

const App: React.FC = () => (
  <ChakraProvider>
    <Container py={6}>
      <Heading mb={6} textAlign="center">Feedback Dashboard</Heading>
      <FeedbackForm />
      <FeedbackChart />
      <FeedbackList />
    </Container>
  </ChakraProvider>
);

export default App;
