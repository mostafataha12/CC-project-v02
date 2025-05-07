import React, { useState } from 'react';
import { MessageCircle, X, Send } from 'lucide-react';
import { Link } from 'react-router-dom';

const FloatingChatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ type: 'user' | 'bot', text: string }[]>([
    { 
      type: 'bot', 
      text: 'Hello! I\'m here to answer your questions about colon cancer. How can I help you today?' 
    }
  ]);
  const [newMessage, setNewMessage] = useState('');

  // Simple bot responses based on keywords
  const getBotResponse = (message: string) => {
    const messageLower = message.toLowerCase();
    
    if (messageLower.includes('symptom') || messageLower.includes('sign')) {
      return 'Common symptoms of colon cancer include changes in bowel habits, rectal bleeding, abdominal pain, weakness, fatigue, and unexplained weight loss. If you\'re experiencing these symptoms, please consult a healthcare professional.';
    } 
    else if (messageLower.includes('screening') || messageLower.includes('test')) {
      return 'Regular screening is crucial for early detection. Screening methods include colonoscopy, stool tests like FIT, and flexible sigmoidoscopy. Adults should begin screening at age 45, or earlier if they have risk factors.';
    }
    else if (messageLower.includes('risk') || messageLower.includes('cause')) {
      return 'Risk factors include age (over 50), family history of colon cancer, inflammatory bowel disease, genetic syndromes like Lynch syndrome, and lifestyle factors such as diet, physical inactivity, smoking, and heavy alcohol use.';
    }
    else if (messageLower.includes('prevent')) {
      return 'Prevention strategies include regular screenings, maintaining a healthy weight, eating a diet rich in fruits, vegetables, and whole grains, limiting red meat, exercising regularly, not smoking, and limiting alcohol consumption.';
    }
    else {
      return 'For more detailed information, please visit our resources page or sign up for full access to our chatbot. Would you like to know about symptoms, screening, risk factors, or prevention?';
    }
  };

  const handleSendMessage = () => {
    if (!newMessage.trim()) return;
    
    // Add user message
    const updatedMessages = [
      ...messages,
      { type: 'user', text: newMessage }
    ];
    setMessages(updatedMessages);
    setNewMessage('');
    
    // Simulate bot typing and response
    setTimeout(() => {
      setMessages([
        ...updatedMessages,
        { type: 'bot', text: getBotResponse(newMessage) }
      ]);
    }, 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Chat Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed ${
          isOpen ? 'bottom-[380px]' : 'bottom-6'
        } right-6 p-4 rounded-full bg-blue-600 text-white shadow-lg hover:bg-blue-700 transition-all duration-300 z-50`}
        aria-label={isOpen ? 'Close chat' : 'Open chat'}
      >
        {isOpen ? (
          <X className="h-6 w-6" />
        ) : (
          <MessageCircle className="h-6 w-6" />
        )}
      </button>

      {/* Chat Window */}
      <div
        className={`fixed bottom-6 right-6 w-80 sm:w-96 bg-white rounded-lg shadow-xl overflow-hidden z-40 transform transition-all duration-300 ${
          isOpen ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0 pointer-events-none'
        }`}
      >
        {/* Header */}
        <div className="bg-blue-600 text-white p-4">
          <h3 className="font-bold">Colon Health Assistant</h3>
          <p className="text-sm text-blue-100">Quick answers to your questions</p>
        </div>
        
        {/* Messages */}
        <div className="h-64 overflow-y-auto p-4 space-y-4">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-[80%] rounded-lg p-3 ${
                  message.type === 'user'
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-800'
                }`}
              >
                {message.text}
              </div>
            </div>
          ))}
        </div>
        
        {/* Input */}
        <div className="p-4 border-t">
          <div className="flex items-center">
            <textarea
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              onKeyDown={handleKeyPress}
              placeholder="Type your question..."
              className="flex-grow p-2 border rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
              rows={1}
            />
            <button
              onClick={handleSendMessage}
              className="bg-blue-600 text-white p-2 rounded-r-lg hover:bg-blue-700"
              aria-label="Send message"
            >
              <Send className="h-5 w-5" />
            </button>
          </div>
          <div className="mt-3 text-center text-sm text-gray-500">
            <Link to="/signin" className="text-blue-600 hover:underline">
              Sign in
            </Link>{' '}
            for full chatbot access
          </div>
        </div>
      </div>
    </>
  );
};

export default FloatingChatbot;