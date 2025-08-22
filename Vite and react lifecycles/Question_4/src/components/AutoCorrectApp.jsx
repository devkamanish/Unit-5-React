    import React, { useState } from "react";

// Reusable CorrectedText Component
const CorrectedText = ({ text, corrections }) => {
  const words = text.split(" ");
  let correctionCount = 0;

  const correctedWords = words.map((word) => {
    if (corrections[word]) {
      correctionCount++;
      return corrections[word];
    }
    return word;
  });

  return (
    <div>
      <p><strong>Corrected Preview:</strong></p>
      <p style={{ background: "#f5f5f5", padding: "8px",  color:"black"}}>
        {correctedWords.join(" ")}
      </p>
      <p>Corrections made: {correctionCount}</p>
    </div>
  );
};

const AutoCorrectApp = () => {
  const [inputText, setInputText] = useState("");

  // Dictionary of corrections
  const corrections = {
    teh: "the",
    recieve: "receive",
    adress: "address",
    wierd: "weird",
    thier: "their",
  };

  return (
    <div style={{ fontFamily: "Arial", margin: "20px" }}>
      <h2>AutoCorrect App</h2>
      <input
        type="text"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        placeholder="Type something..."
        style={{
          padding: "10px",
          width: "300px",
          borderRadius: "5px",
          border: "1px solid #ccc",
          marginBottom: "10px",
        }}
      />

      {/* Using CorrectedText component */}
      <CorrectedText text={inputText} corrections={corrections} />
    </div>
  );
};

export default AutoCorrectApp;
