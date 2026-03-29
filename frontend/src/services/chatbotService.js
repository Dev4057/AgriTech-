import axios from "axios";

const API_URL = "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash-lite:generateContent";
const API_KEY = "AIzaSyDBb6Y24UZ2VNs6gcrIRIe3im6pjSegiaU";

export const sendChatMessage = async (message) => {
  try {
    const response = await axios.post(
      API_URL,
      {
        contents: [{ role: "user", parts: [{ text: message }] }],
      },
      {
        params: { key: API_KEY },
      }
    );

    return response.data?.candidates?.[0]?.content?.parts?.[0]?.text || "No response from AI.";
  } catch (error) {
    return "Error fetching response!";
  }
};
