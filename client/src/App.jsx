// client/src/App.jsx
import React, { useState } from 'react';
import axios from 'axios';

// The URL of our backend engine.
const API_BASE_URL = 'http://localhost:3001';

function App() {
    // --- STATE MANAGEMENT ---
    const [transcript, setTranscript] = useState('');
    const [prompt, setPrompt] = useState('Summarize this meeting in clear, bulleted points.');
    const [summary, setSummary] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [recipients, setRecipients] = useState(''); // State for the recipient emails

    // --- LOGIC HANDLERS ---

    const handleGenerateSummary = async () => {
        if (!transcript) {
            alert("Please paste a transcript before generating a summary.");
            return;
        }
        
        console.log("Sending request to backend...");
        setIsLoading(true);

        try {
            const response = await axios.post(`${API_BASE_URL}/api/summarize`, {
                transcript: transcript,
                prompt: prompt,
            });
            setSummary(response.data.summary);
            console.log("Summary received successfully!");
        } catch (error) {
            console.error("Error communicating with the backend:", error);
            alert("An error occurred while generating the summary. Please check the server is running and try again.");
        } finally {
            setIsLoading(false);
        }
    };

    const handleShare = async () => {
        if (!summary || !recipients) {
            alert('Please generate a summary and enter at least one recipient email.');
            return;
        }

        console.log("Sharing summary to:", recipients);

        try {
            const response = await axios.post(`${API_BASE_URL}/api/share`, { 
                summary, 
                recipients 
            });
            alert(response.data.message); // Show a success message from the server
        } catch (error) {
            console.error('Sharing Error:', error);
            alert('Failed to send the email. The server responded with an error. Check the console for details.');
        }
    };

    // --- RENDERED UI ---
    return (
        <div className="container">
            <header>
                <h1>AI Meeting Notes Summarizer</h1>
                <p>Instantly transform long transcripts into clear, actionable summaries.</p>
            </header>

            <main>
                <div className="input-section">
                    <h2>1. Your Transcript</h2>
                    <textarea
                        placeholder="Paste the full text of your meeting here..."
                        value={transcript}
                        onChange={(e) => setTranscript(e.target.value)}
                        disabled={isLoading}
                    />
                </div>

                <div className="prompt-section">
                    <h2>2. Your Instruction</h2>
                    <input
                        type="text"
                        value={prompt}
                        onChange={(e) => setPrompt(e.target.value)}
                        disabled={isLoading}
                    />
                    <button onClick={handleGenerateSummary} disabled={isLoading}>
                        {isLoading ? 'Thinking...' : 'Generate Summary'}
                    </button>
                </div>

                <div className="output-section">
                    <h2>3. Your AI-Generated Summary</h2>
                    <textarea
                        className="summary-box"
                        placeholder="Your summary will appear here..."
                        value={summary}
                        onChange={(e) => setSummary(e.target.value)}
                    />
                </div>

                <div className="share-section">
                    <h2>4. Share Your Summary</h2>
                    <input
                        type="email"
                        placeholder="Enter recipient emails, separated by commas"
                        value={recipients}
                        onChange={(e) => setRecipients(e.target.value)}
                    />
                    <button onClick={handleShare}>Share via Email</button>
                </div>
            </main>
        </div>
    );
}

export default App;