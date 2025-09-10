import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addFeedback } from '../redux/feedbackSlice';
import { v4 as uuidv4 } from 'uuid';
import {
  Box, Button, FormControl, FormLabel, Input, Textarea, NumberInput, NumberInputField, NumberInputStepper, NumberIncrementStepper, NumberDecrementStepper, useToast,
} from '@chakra-ui/react';
import { FeedbackEntry } from '../types';

const FeedbackForm: React.FC = () => {
  const dispatch = useDispatch();
  const toast = useToast();
  const [form, setForm] = useState({ name: '', email: '', rating: 0, feedback: '' });

  const handleSubmit = () => {
    const { name, email, rating, feedback } = form;
    if (!name || !email || !rating || !feedback) {
      toast({ title: "Please fill all fields", status: 'error', isClosable: true });
      return;
    }

    const newEntry: FeedbackEntry = {
      id: uuidv4(),
      ...form,
      date: new Date().toISOString(),
    };

    dispatch(addFeedback(newEntry));
    toast({ title: "Feedback added", status: 'success', isClosable: true });
    setForm({ name: '', email: '', rating: 0, feedback: '' });
  };

  return (
    <Box p={4} borderWidth="1px" borderRadius="md" maxW="md" mx="auto">
      <FormControl mb={2}>
        <FormLabel>Name</FormLabel>
        <Input value={form.name} onChange={(e) => setForm(prev => ({ ...prev, name: e.target.value }))} />
      </FormControl>

      <FormControl mb={2}>
        <FormLabel>Email</FormLabel>
        <Input type="email" value={form.email} onChange={(e) => setForm(prev => ({ ...prev, email: e.target.value }))} />
      </FormControl>

      <FormControl mb={2}>
        <FormLabel>Rating (1–5)</FormLabel>
        <NumberInput min={1} max={5} value={form.rating} onChange={(val) => setForm(prev => ({ ...prev, rating: Number(val) }))}>
          <NumberInputField />
          <NumberInputStepper><NumberIncrementStepper /><NumberDecrementStepper /></NumberInputStepper>
        </NumberInput>
      </FormControl>

      <FormControl mb={2}>
        <FormLabel>Feedback</FormLabel>
        <Textarea value={form.feedback} onChange={(e) => setForm(prev => ({ ...prev, feedback: e.target.value }))} />
      </FormControl>

      <Button colorScheme="teal" onClick={handleSubmit}>Submit</Button>
    </Box>
  );
};

export default FeedbackForm;
