import {
  SET_QUESTIONS,
  SET_SCORE,
  INCREMENT_SCORE,
  NEXT_QUESTION,
} from './actionTypes';

const initialState = {
  questions: [],
  currentQuestionIndex: 0,
  score: 0,
};

export const quizReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_QUESTIONS:
      return { ...state, questions: action.payload };
    case NEXT_QUESTION:
      return { ...state, currentQuestionIndex: state.currentQuestionIndex + 1 };
    case INCREMENT_SCORE:
      return { ...state, score: state.score + 1 };
    case SET_SCORE:
      return { ...state, score: action.payload };
    default:
      return state;
  }
};


