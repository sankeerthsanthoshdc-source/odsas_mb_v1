// js/main.js (or src/js/main.ts)
import { model } from './firebase.js'; // Adjust path relative to main.js

const promptInputField = document.getElementById('Prompt');
const aiResponseDisplay = document.getElementById('output');

promptInputField.addEventListener('keydown', async (event) => {
    if (event.key === 'Enter') {
        event.preventDefault();

        const userPrompt = promptInputField.value;
        if (!userPrompt.trim()) {
            aiResponseDisplay.textContent = "Please enter a prompt to generate moodboard ideas!";
            return;
        }

        aiResponseDisplay.textContent = "Generating your moodboard idea...";
        promptInputField.disabled = true;

        try {
            const result = await model.generateContent(userPrompt);
            const aiResponse = result.response.text();
            aiResponseDisplay.innerHTML = aiResponse.replace(/\n/g, '<br>');
        } catch (error) {
            console.error("Error generating moodboard idea:", error);
            aiResponseDisplay.textContent = "Oops! Couldn't generate an idea right now. Please try again later.";
        } finally {
            promptInputField.value = '';
            promptInputField.disabled = false;
            promptInputField.focus();
        }
    }
});
