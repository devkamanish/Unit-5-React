npm install
npm run dev


🔧 Features
Handles complex nested form state (college name, address, city, coordinates, etc.)
Uses useReducer for managing all form data in a single object
Allows users to submit and reset the form
Displays submitted data in structured JSON format
Handles invalid actions with meaningful error messages
Converts comma-separated course input into an array

📌 Notes
All form fields are fully controlled and linked to reducer state
A "reset" action resets the entire form
Error is shown if an unknown action type is dispatched


