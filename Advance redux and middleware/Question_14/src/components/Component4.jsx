import { useSelector } from "react-redux";
import { Box, Heading, Text } from "@chakra-ui/react";

const Result = () => {
  const score = useSelector((state) => state.quiz.score);

  return (
    <Box textAlign="center" mt={10}>
      <Heading>Quiz Completed ✅</Heading>
      <Text fontSize="2xl" mt={4}>Your Score: {score}</Text>
    </Box>
  );
};

export default Result;
