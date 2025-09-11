export const GEMINI_API_URL = "https://generativelanguage.googleapis.com/v1beta/openai";

export const sendMessageToGemini = async (messages) => {
  try {
    const response = await fetch(`${GEMINI_API_URL}/chat/completions`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${process.env.REACT_APP_GEMINI_API_KEY}`
      },
      body: JSON.stringify({
        model: "gemini-1.5-flash",
        messages: messages
      })
    });

    if (!response.ok) {
      throw new Error("Failed to fetch from Gemini API");
    }

    const data = await response.json();
    return data.choices[0].message.content;
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "⚠️ Error: Could not fetch response.";
  }
};


