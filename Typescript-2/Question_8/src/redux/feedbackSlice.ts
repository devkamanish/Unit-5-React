import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { FeedbackEntry } from '../types';

interface FeedbackState {
  entries: FeedbackEntry[];
}

const initialState: FeedbackState = { entries: [] };

const feedbackSlice = createSlice({
  name: 'feedback',
  initialState,
  reducers: {
    addFeedback: (state, action: PayloadAction<FeedbackEntry>) => {
      state.entries.push(action.payload);
    },
    // Filtering could be added here
  },
});

export const { addFeedback } = feedbackSlice.actions;
export default feedbackSlice.reducer;
