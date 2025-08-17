# AI Meeting Summarizer

An intelligent, full-stack application designed to transform lengthy meeting transcripts into concise, editable, and shareable summaries using the lightning-fast Groq AI API.

### 🔴 Live Demo: [LIVE LINK](https://ai-meeting-summarizer-smash.vercel.app/)

---



## How It Works

This application streamlines the post-meeting workflow with a simple, intuitive process:

1.  **Paste Transcript:** Input any text-based transcript from a meeting, call, or lecture.
2.  **Provide Instruction:** Guide the AI with a custom prompt (e.g., "Extract all action items," "Summarize for an executive audience," "List all key decisions made").
3.  **Generate Summary:** With a single click, the backend communicates with the Groq API, leveraging its incredible speed to generate a structured summary in near real-time.
4.  **Edit & Refine:** The AI-generated summary is fully editable in a clean text area, allowing for manual adjustments and refinements.
5.  **Share with Stakeholders:** Enter recipient email addresses and share the final, polished summary directly via a professional email service.

## Key Features

-   **🚀 Blazing-Fast Summaries:** Powered by **Groq's LPU™ Inference Engine**, providing a superior, lag-free user experience.
-   **✍️ Fully Editable Output:** Users have complete control to modify the AI-generated text before sharing.
-   **📧 Seamless Email Sharing:** Integrated with the **Resend API** for reliable and professional email delivery.
-   **🎯 Custom Instruction Control:** Go beyond simple summaries by providing specific instructions to the AI.
-   **✨ Clean & Responsive UI:** A modern, minimalist interface built with React, focusing on functionality and ease of use.

## Tech Stack & Architectural Decisions

This project was built with a modern, decoupled architecture, choosing the best tool for each specific job to maximize performance and scalability.

| Category       | Technology                               | **Justification & Key Decisions**                                                                                                                                                                                                                                                                                       |
| :------------- | :--------------------------------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Frontend**   | **React (with Vite)**                    | Chosen for its component-based architecture and performance. Vite provides an exceptionally fast development experience and optimized builds.                                                                                                                                                                             |
| **Backend**    | **Node.js & Express.js**                 | A lightweight and high-performance choice for building a robust API. Its non-blocking I/O is perfect for efficiently handling concurrent requests to the AI service.                                                                                                                                                       |
| **AI Service** | **Groq API (Llama 3 Model)**             | **This is a key strategic choice.** Instead of common alternatives, Groq was selected for its unparalleled inference speed. This decision prioritizes the user experience by delivering near-instantaneous results, a major differentiator for the application.                                                          |
| **Email API**  | **Resend**                               | Initially, Nodemailer with Gmail was considered. However, due to modern Google security constraints (Passkeys disabling App Passwords), a pivot was made to **Resend**. This is a more robust and professional solution, demonstrating adaptability and adherence to best practices by using a dedicated transactional email service. |
| **Database**   | **None (By Design)**                     | To strictly adhere to the project requirements and the **YAGNI (You Ain't Gonna Need It)** principle, a database was intentionally omitted. This demonstrates a focus on building a lean MVP without over-engineering. Future versions would incorporate a database (e.g., PostgreSQL) for user accounts and summary history. |
| **Deployment** | **Vercel (Frontend) & Render (Backend)** | A **decoupled deployment strategy** was chosen for optimal performance. Vercel's global CDN serves the frontend at the edge for millisecond load times. Render provides a reliable, persistent environment for the Node.js backend server. This mirrors a professional, scalable production setup. |

## Running Locally

To get a local copy up and running, follow these simple steps.

### Prerequisites

-   Node.js (v18 or later)
-   npm

### Installation & Setup

1.  **Clone the repository:**
    ```sh
    git clone https://github.com/Ashraf0705/AI-Meeting-Summarizer.git
    cd AI-Meeting-Summarizer
    ```

2.  **Setup the Backend:**
    ```sh
    cd server
    npm install
    ```
    -   Create a `.env` file in the `server` directory and add your secret keys:
        ```env
        GROQ_API_KEY=gsk_your_groq_api_key
        RESEND_API_KEY=re_your_resend_api_key
        ```
    -   Start the backend server:
        ```sh
        node index.js
        ```

3.  **Setup the Frontend:**
    -   Open a new terminal window.
    ```sh
    cd client
    npm install
    ```
    -   Start the frontend development server:
        ```sh
        npm run dev
        ```

4.  Open [http://localhost:5173](http://localhost:5173) in your browser to view the application.

## Future Improvements

-   **User Authentication:** Implement user accounts (e.g., with Clerk or Auth0) to save and manage summary history.
-   **Database Integration:** Add a PostgreSQL database to persist user data and summaries.
-   **File Uploads:** Allow users to upload `.txt` or `.vtt` transcript files directly.
-   **Enhanced Editor:** Replace the basic `<textarea>` with a rich text editor like Tiptap for better formatting control.

---

Built with dedication by **Ashraf**.
