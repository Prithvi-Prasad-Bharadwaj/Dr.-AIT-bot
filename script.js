function sendMessage() {
    let userInput = document.getElementById("user-input").value;
    let chatBox = document.getElementById("chat-box");

    if (userInput.trim() === "") return;

    // Display user message
    let userMessage = document.createElement("p");
    userMessage.className = "user-message";
    userMessage.textContent = userInput;
    chatBox.appendChild(userMessage);

    // Generate bot response
    let botResponse = document.createElement("p");
    botResponse.className = "bot-message";
    botResponse.textContent = getBotResponse(userInput);
    chatBox.appendChild(botResponse);

    // Clear input field
    document.getElementById("user-input").value = "";

    // Scroll to latest message
    chatBox.scrollTop = chatBox.scrollHeight;
}

function getBotResponse(input) {
    let responses = {
        "hello": "Hi there! How can I help you?",
        "courses": "We offer various courses in Science, Arts, and Technology.",
        "admission": "Admissions are open! Visit our website for details.",
        "contact": "You can reach us at contact@institution.com."
    };

    return responses[input.toLowerCase()] || "Sorry, I don't understand that.";
}