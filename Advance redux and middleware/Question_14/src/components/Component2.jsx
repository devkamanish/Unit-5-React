import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SET_QUESTIONS } from "../redux/actionTypes";
import QuestionCard from "./Component3";
import { useNavigate } from "react-router-dom";

const Quiz = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { questions, currentQuestionIndex } = useSelector((state) => state.quiz);

  useEffect(() => {
    fetch("https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-quiz")
      .then((res) => res.json())
      .then((data) => dispatch({ type: SET_QUESTIONS, payload: data.data }));
  }, [dispatch]);

  if (currentQuestionIndex >= questions.length) {
    navigate("/result");
    return null;
  }

  return <QuestionCard question={questions[currentQuestionIndex]} />;
};

export default Quiz;
