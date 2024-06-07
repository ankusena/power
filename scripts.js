document.addEventListener('DOMContentLoaded', function() {
    const chatbotMessages = document.getElementById('chatbot-messages');
    const chatbotInput = document.getElementById('chatbot-input');
    const chatbotSend = document.getElementById('chatbot-send');
    const chatbot = document.getElementById('chatbot');

    chatbotSend.addEventListener('click', function() {
        const message = chatbotInput.value.trim();
        if (message) {
            addMessageToChatbot('User', message);
            chatbotInput.value = '';
            // Simulate chatbot response
            setTimeout(function() {
                addMessageToChatbot('Chatbot', 'This is a response.');
            }, 1000);
        }
    });

    function addMessageToChatbot(sender, message) {
        const messageDiv = document.createElement('div');
        messageDiv.textContent = `${sender}: ${message}`;
        chatbotMessages.appendChild(messageDiv);
        chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
    }

    window.toggleChatbot = function() {
        if (chatbot.style.display === 'none' || chatbot.style.display === '') {
            chatbot.style.display = 'flex';
        } else {
            chatbot.style.display = 'none';
        }
    }
});
