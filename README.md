# AgriTech

AgriTech is a comprehensive web-based platform tailored to empower farmers with modern, AI-driven agricultural solutions. The application provides personalized crop recommendations, real-time weather forecasts, market trends, government schemes, and a conversational chatbot to address farm-related queries. It features built-in bilingual support (English & Hindi) to cater directly to the farming community.

## 🚀 Key Features

*   **🌱 AI Crop Guidance:** Personalized crop recommendations based on location, soil type, and season, powered by the Google Gemini API.
*   **🤖 AI Chatbot:** Interactive agricultural assistant to provide immediate answers and advice to farmers.
*   **📈 Market Insights:** Up-to-date market prices and agricultural trends.
*   **🌦️ Weather Forecasting:** Reliable, real-time meteorological data for better farm planning.
*   **🚜 Supply Chain & Record Keeping:** Digital tools for farm management, helping users track yield, expenses, and logistics.
*   **📚 Training & Government Schemes:** Accessible information on modern farming techniques and rural government subsidies.
*   **🌐 Multilingual Support (i18n):** Fully localized interface supporting English and Hindi.
*   **🔐 User Authentication:** Secure Login and Signup functionality.

## 🛠️ Technology Stack

**Frontend:**
*   React.js
*   Tailwind CSS (Styling)
*   Axios (API requests)
*   i18next (Internationalization)

**Backend:**
*   Node.js & Express.js
*   MongoDB & Mongoose (Database & Models)
*   Google Gemini API (Generative AI Integration)

## 🏗️ Project Structure

The repository is divided into two primary directories:
*   `/frontend` - Contains the React user interface, page components (Dashboard, Guidance, Chatbot, Market, etc.), styling, and language configuration.
*   `/backend` - Contains the Express server, API routes, controllers, middleware, and database models.

## ⚙️ Getting Started

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) and npm installed on your machine.

### 1. Clone the repository
```bash
git clone https://github.com/your-username/AgriTech-.git
cd AgriTech-
```

### 2. Backend Setup
Navigate to the backend directory, install dependencies, and start the server.
```bash
cd backend
npm install

# Create a .env file in the backend folder and add your specific variables
# .env example:
# PORT=5000
# MONGO_URI=your_mongodb_connection_string

npm start
```

### 3. Frontend Setup
Open a new terminal, navigate to the frontend directory, install dependencies, and start the React application.
```bash
cd frontend
npm install

npm start
```
*(Note: To enable AI features like the Guidance page or Chatbot, ensure you have a valid Google Gemini API key configured in your environment).*

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is open-source and available under the MIT License.