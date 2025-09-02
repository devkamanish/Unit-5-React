import { Box, Button, Text, VStack } from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { INCREMENT_SCORE, NEXT_QUESTION } from "../redux/actionTypes";

const QuestionCard = ({ question }) => {
  const dispatch = useDispatch();

  const handleAnswer = (selected) => {
    if (selected === question.correctOption) {
      dispatch({ type: INCREMENT_SCORE });
    }
    dispatch({ type: NEXT_QUESTION });
  };

  return (
    <Box p={6}>
      <Text mb={4} fontWeight="bold">{question.question}</Text>
      <VStack spacing={3}>
        {question.options.map((opt, i) => (
          <Button key={i} onClick={() => handleAnswer(opt)}>{opt}</Button>
        ))}
        <Button onClick={() => dispatch({ type: NEXT_QUESTION })} colorScheme="gray">
          Skip
        </Button>
      </VStack>
    </Box>
  );
};

export default QuestionCard;
