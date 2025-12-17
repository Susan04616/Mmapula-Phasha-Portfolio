# Phasha Suzan Portfolio Website

## Project Setup

This project is built with React, Tailwind CSS, and the Google Gemini API.

### 1. Installation

If you are running this locally:

1.  Make sure you have [Node.js](https://nodejs.org/) installed.
2.  Open your terminal in the project folder.
3.  Run:
    ```bash
    npm install
    ```

### 2. Running the App

To start the development server:

```bash
npm start
```
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### 3. Adding Your Profile Picture

To display your specific graduation photo:

1.  Rename your photo file to `profile.jpg`.
2.  Place the file inside the `public/` folder of this project.
    *   *Note: If a `public` folder does not exist, look for where `index.html` is located.*
3.  The code in `components/Hero.tsx` is set to look for this image. If it fails to load, it falls back to your GitHub avatar or a generated initial avatar.

### 4. API Keys (Chatbot)

The AI Chatbot requires a Google Gemini API Key.
Create a file named `.env` in the root directory and add:

```
REACT_APP_API_KEY=your_google_api_key_here
```

(Note: In the current web-based preview environment, the key is handled automatically via `process.env.API_KEY`).
