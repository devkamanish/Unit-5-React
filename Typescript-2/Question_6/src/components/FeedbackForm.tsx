import { useState } from "react";
import type { FeedbackData } from "../types/Feedback";

const initialValue = {
  name: "",
  email: "",
  rating: 0,
  feedback: "",
};
const FeedbackForm = () => {
  const [formData, setFormData] = useState<FeedbackData>(initialValue);
  const [submittedData, setSubmittedData]= useState<FeedbackData | null>(null)
  const [submitted, setSubmitted] = useState<boolean>(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === 'rating' ? parseInt(value) : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const { name, email, rating, feedback } = formData;

    if (!name || !email || !rating || !feedback) {
      alert("Please fill all fields");
      return;
    }

    
    setSubmitted(true);
    console.log('Submitted:', formData);
    setSubmittedData(formData)
    setFormData(initialValue);
    

  };
  return (
    <div className="border-2 border-gray-500 shadow-2xl max-w-lg m-auto bg-gradient-to-b bg-gray-200" >
      <h2 className="font-bold text-3xl" >Customer FeedbackForm</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name: </label>
          <input
            className="border-2 rounded-md p-1 m-2"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter name"
          />
        </div>

        <div>
          <label>Email: </label>
          <input
        className="border-2 rounded-md p-1 m-2"
          name="email" value={formData.email} onChange={handleChange} />
        </div>

        <div>
          <label>Rating (1-5):</label>
          <input
            type="number"
            name="rating"
            min="1"
            max="5"
            value={formData.rating || ""}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Feedback</label>
          <textarea
            name="feedback"
            value={formData.feedback}
            onChange={handleChange}
          />
        </div>

        <button type="submit">Submit</button>
      </form>

      {submitted && (
        <div>
          <h3>Thank you for your feedback</h3>
          <p>
            <strong>Name:</strong> {submittedData ? submittedData.name : ""}
          </p>
          <p>
            <strong>Email:</strong> {submittedData ? submittedData.email : ""}
          </p>
          <p>
            <strong>Rating:</strong> {submittedData ? submittedData.rating : ""}
          </p>
          <p>
            <strong>Feedback:</strong> {submittedData ? submittedData.feedback : ""}
          </p>
        </div>
      )}
    </div>
  );
};

export default FeedbackForm;


