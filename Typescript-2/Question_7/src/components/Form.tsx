import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FeedbackContext } from '../context/FeedbackContext';

const FeedbackForm = () => {
  const { feedback, setFeedback } = useContext(FeedbackContext);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFeedback((prev) => ({
      ...prev,
      [name]: name === 'rating' ? parseInt(value) : value,
    }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { name, email, rating, feedback: comment } = feedback;
    if (!name || !email || !rating || !comment) {
      setError('All fields are required!');
      return;
    }
    setError('');
    navigate('/submitted');
  };
  
  return (
    <div className="p-6 max-w-md mx-auto border rounded bg-gray-100">
      <h2 className="text-2xl font-bold mb-4">Feedback Form</h2>
      {error && <p className="text-red-500">{error}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input name="name" value={feedback.name} onChange={handleChange} className="border w-full mb-2" />
        </div>
        <div>
          <label>Email:</label>
          <input name="email" value={feedback.email} onChange={handleChange} className="border w-full mb-2" />
        </div>
        <div>
          <label>Rating (1–5):</label>
          <input type="number" name="rating" min="1" max="5" value={feedback.rating} onChange={handleChange} className="border w-full mb-2" />
        </div>
        <div>
          <label>Feedback:</label>
          <textarea name="feedback" value={feedback.feedback} onChange={handleChange} className="border w-full mb-2" />
        </div>
        <button type="submit" className="bg-blue-500 text-white p-2 rounded">Submit</button>
      </form>
    </div>
  );
};

export default FeedbackForm;
