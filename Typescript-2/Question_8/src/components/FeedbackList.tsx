import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { Box, Heading, Text, Stack } from '@chakra-ui/react';

const FeedbackList: React.FC = () => {
  const entries = useSelector((state: RootState) => state.feedback.entries);

  return (
    <Box mt={6} maxW="md" mx="auto">
      <Heading size="md" mb={4}>All Feedback</Heading>
      <Stack spacing={3}>
        {entries.map((e) => (
          <Box key={e.id} p={3} borderWidth="1px" borderRadius="md">
            <Text><strong>{e.name}</strong> rated <strong>{e.rating}</strong> on {new Date(e.date).toLocaleString()}</Text>
            <Text mt={2}>{e.feedback}</Text>
          </Box>
        ))}
      </Stack>
    </Box>
  );
};

export default FeedbackList;
