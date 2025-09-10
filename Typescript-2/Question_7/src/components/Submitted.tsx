import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FeedbackContext } from '../context/FeedbackContext';

const Submitted = () => {
  const { feedback } = useContext(FeedbackContext);
  const navigate = useNavigate();

  useEffect(() => {
    const { name, email, rating, feedback: comment } = feedback;
    if (!name || !email || !rating || !comment) {
      navigate('/');
    }
  }, [feedback, navigate]);

  return (
    <div className="p-6 max-w-md mx-auto border rounded bg-green-100">
      <h2 className="text-2xl font-bold mb-4">Feedback Summary</h2>
      <p><strong>Name:</strong> {feedback.name}</p>
      <p><strong>Email:</strong> {feedback.email}</p>
      <p><strong>Rating:</strong> {feedback.rating}</p>
      <p><strong>Feedback:</strong> {feedback.feedback}</p>
    </div>
  );
};

export default Submitted;
