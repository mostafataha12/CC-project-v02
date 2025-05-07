import React, { useState, useRef, useEffect } from 'react';
import { Send, Bot, User, Trash2, Download, ThumbsUp, ThumbsDown } from 'lucide-react';

interface Message {
  id: string;
  type: 'bot' | 'user';
  text: string;
  timestamp: Date;
}

const ChatbotPage: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      type: 'bot',
      text: 'Hello! I\'m your Colon Cancer Information Assistant. I can answer questions about symptoms, screening, prevention, and treatment options. How can I help you today?',
      timestamp: new Date(),
    },
  ]);
  
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  
  // Auto-scroll to bottom when messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  // Suggested questions
  const suggestedQuestions = [
    'What are the early symptoms of colon cancer?',
    'How often should I get screened for colon cancer?',
    'What are the risk factors for colon cancer?',
    'How can I reduce my risk of developing colon cancer?',
    'What are the different stages of colon cancer?',
    'What treatments are available for colon cancer?',
  ];

  // Simple bot responses based on keywords
  const getBotResponse = (message: string): string => {
    const messageLower = message.toLowerCase();
    
    if (messageLower.includes('symptom') || messageLower.includes('sign')) {
      return 'Common symptoms of colon cancer include:\n\n• Changes in bowel habits (diarrhea or constipation)\n• Rectal bleeding or blood in stool\n• Persistent abdominal discomfort (cramps, gas, or pain)\n• Feeling that your bowel doesn\'t empty completely\n• Weakness or fatigue\n• Unexplained weight loss\n\nIf you\'re experiencing these symptoms, please consult a healthcare professional for proper evaluation. Remember that many of these symptoms can also be caused by conditions other than cancer.';
    } 
    
    if (messageLower.includes('screening') || messageLower.includes('test')) {
      return 'Regular screening is crucial for early detection of colon cancer. Screening options include:\n\n• Colonoscopy (recommended every 10 years from age 45)\n• Stool DNA test (every 3 years)\n• Fecal immunochemical test (FIT) (annually)\n• Flexible sigmoidoscopy (every 5 years)\n• CT colonography (every 5 years)\n\nThe American Cancer Society recommends that people at average risk of colorectal cancer start regular screening at age 45. Those with a family history or other risk factors may need to start earlier or screen more frequently. Discuss with your doctor which test is right for you.';
    }
    
    if (messageLower.includes('risk') || messageLower.includes('cause')) {
      return 'Risk factors for developing colon cancer include:\n\n• Age (risk increases after age 50)\n• Personal history of colorectal polyps or inflammatory bowel disease\n• Family history of colon cancer or polyps\n• Genetic syndromes (Lynch syndrome, FAP)\n• African American ancestry\n• Lifestyle factors:\n  - Low-fiber, high-fat diet\n  - Sedentary lifestyle\n  - Obesity\n  - Smoking\n  - Heavy alcohol use\n\nWhile you can\'t change some risk factors like age or family history, maintaining a healthy lifestyle can help reduce your risk.';
    }
    
    if (messageLower.includes('prevent') || messageLower.includes('reduce risk')) {
      return 'To help prevent colon cancer or reduce your risk:\n\n• Get regular screenings starting at age 45 (or earlier with risk factors)\n• Maintain a healthy weight\n• Exercise regularly (aim for at least 150 minutes of moderate activity per week)\n• Eat a diet rich in fruits, vegetables, and whole grains\n• Limit red meat and processed meats\n• Limit alcohol consumption\n• Don\'t smoke\n• Consider taking aspirin if recommended by your doctor (not for everyone)\n\nRegular screening is the most effective way to prevent colon cancer as it can find and remove polyps before they become cancerous.';
    }
    
    if (messageLower.includes('stage') || messageLower.includes('stages')) {
      return 'Colon cancer stages range from Stage 0 to Stage IV:\n\n• Stage 0: Cancer is in its earliest stage and has not grown beyond the inner lining of the colon.\n\n• Stage I: Cancer has grown through the inner lining but has not spread beyond the colon wall.\n\n• Stage II: Cancer has grown through the colon wall but has not spread to nearby lymph nodes.\n\n• Stage III: Cancer has spread to nearby lymph nodes but not to other parts of the body.\n\n• Stage IV: Cancer has spread to distant organs such as the liver, lungs, or peritoneum.\n\nThe stage of cancer determines the treatment options and has a significant impact on the prognosis. Early detection through regular screening often finds cancer at lower stages when it\'s most treatable.';
    }
    
    if (messageLower.includes('treatment') || messageLower.includes('therapy')) {
      return 'Treatment options for colon cancer depend on the stage and may include:\n\n• Surgery: Removing the cancer and nearby lymph nodes. For early-stage cancers, this may be the only treatment needed.\n\n• Chemotherapy: Using drugs to destroy cancer cells, often after surgery to kill any remaining cells.\n\n• Radiation therapy: Using high-energy rays to kill cancer cells, sometimes used before surgery to shrink tumors.\n\n• Targeted therapy: Drugs that target specific abnormalities in cancer cells.\n\n• Immunotherapy: Helping the immune system recognize and attack cancer cells.\n\nThe treatment plan is individualized based on cancer stage, location, patient\'s overall health, and preferences. A multidisciplinary team of doctors will work together to determine the best approach.';
    }
    
    return 'Thank you for your question. I can provide information about colon cancer symptoms, screening recommendations, risk factors, prevention strategies, staging, and treatment options. Could you please clarify what specific aspect of colon cancer you\'d like to learn about?';
  };

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;
    
    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      type: 'user',
      text: inputValue,
      timestamp: new Date(),
    };
    
    setMessages(prevMessages => [...prevMessages, userMessage]);
    setInputValue('');
    setIsTyping(true);
    
    // Simulate bot typing and then response
    setTimeout(() => {
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        type: 'bot',
        text: getBotResponse(userMessage.text),
        timestamp: new Date(),
      };
      
      setMessages(prevMessages => [...prevMessages, botMessage]);
      setIsTyping(false);
    }, 1500);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const handleClearChat = () => {
    // Keep only the welcome message
    setMessages([messages[0]]);
  };

  const handleSuggestedQuestion = (question: string) => {
    setInputValue(question);
  };

  const handleDownloadChat = () => {
    const chatText = messages
      .map(msg => `[${msg.timestamp.toLocaleString()}] ${msg.type === 'bot' ? 'Assistant' : 'You'}: ${msg.text}`)
      .join('\n\n');
    
    const blob = new Blob([chatText], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    
    a.href = url;
    a.download = `colon-cancer-chat-${new Date().toISOString().slice(0, 10)}.txt`;
    a.click();
    
    URL.revokeObjectURL(url);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            {/* Header */}
            <div className="bg-blue-600 text-white p-4 flex items-center justify-between">
              <div className="flex items-center">
                <Bot className="h-6 w-6 mr-2" />
                <div>
                  <h1 className="font-semibold">Colon Cancer Information Assistant</h1>
                  <p className="text-xs text-blue-200">Providing answers about colon cancer prevention and detection</p>
                </div>
              </div>
              <div className="flex space-x-2">
                <button 
                  onClick={handleClearChat}
                  className="p-2 rounded-full hover:bg-blue-700 transition-colors"
                  aria-label="Clear chat"
                  title="Clear chat"
                >
                  <Trash2 className="h-5 w-5" />
                </button>
                <button 
                  onClick={handleDownloadChat}
                  className="p-2 rounded-full hover:bg-blue-700 transition-colors"
                  aria-label="Download chat"
                  title="Download chat"
                >
                  <Download className="h-5 w-5" />
                </button>
              </div>
            </div>
            
            <div className="flex h-[calc(100vh-14rem)] min-h-[500px]">
              {/* Chat Area */}
              <div className="flex-1 flex flex-col">
                {/* Messages */}
                <div className="flex-1 p-4 overflow-y-auto">
                  {messages.map((message) => (
                    <div 
                      key={message.id} 
                      className={`mb-4 flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                    >
                      <div className="flex max-w-[80%]">
                        {message.type === 'bot' && (
                          <div className="flex-shrink-0 mr-3 mt-1">
                            <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center">
                              <Bot className="h-5 w-5 text-blue-600" />
                            </div>
                          </div>
                        )}
                        
                        <div 
                          className={`rounded-lg p-3 ${
                            message.type === 'user' 
                              ? 'bg-blue-600 text-white' 
                              : 'bg-gray-100 text-gray-800'
                          }`}
                        >
                          <div className="whitespace-pre-line">{message.text}</div>
                          <div className={`text-xs mt-1 ${message.type === 'user' ? 'text-blue-200' : 'text-gray-500'}`}>
                            {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                          </div>
                        </div>
                        
                        {message.type === 'user' && (
                          <div className="flex-shrink-0 ml-3 mt-1">
                            <div className="h-8 w-8 rounded-full bg-blue-600 flex items-center justify-center">
                              <User className="h-5 w-5 text-white" />
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                  
                  {isTyping && (
                    <div className="flex justify-start mb-4">
                      <div className="flex max-w-[80%]">
                        <div className="flex-shrink-0 mr-3 mt-1">
                          <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center">
                            <Bot className="h-5 w-5 text-blue-600" />
                          </div>
                        </div>
                        <div className="bg-gray-100 text-gray-800 rounded-lg p-3">
                          <div className="flex space-x-1">
                            <div className="h-2 w-2 bg-gray-400 rounded-full animate-bounce"></div>
                            <div className="h-2 w-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                            <div className="h-2 w-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                  
                  {/* Auto-scroll reference */}
                  <div ref={messagesEndRef} />
                </div>
                
                {/* Input Area */}
                <div className="border-t p-4">
                  <div className="flex items-center">
                    <textarea
                      value={inputValue}
                      onChange={(e) => setInputValue(e.target.value)}
                      onKeyDown={handleKeyPress}
                      placeholder="Type your question here..."
                      className="flex-grow p-2 border rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                      rows={2}
                    />
                    <button
                      onClick={handleSendMessage}
                      disabled={!inputValue.trim()}
                      className={`bg-blue-600 text-white p-3 rounded-r-lg h-full ${
                        !inputValue.trim() ? 'opacity-50 cursor-not-allowed' : 'hover:bg-blue-700'
                      }`}
                      aria-label="Send message"
                    >
                      <Send className="h-5 w-5" />
                    </button>
                  </div>
                </div>
              </div>
              
              {/* Sidebar */}
              <div className="hidden md:block w-64 border-l bg-gray-50 p-4 overflow-y-auto">
                <h3 className="font-medium text-gray-900 mb-3">Suggested Questions</h3>
                <div className="space-y-2">
                  {suggestedQuestions.map((question, index) => (
                    <button
                      key={index}
                      onClick={() => handleSuggestedQuestion(question)}
                      className="w-full text-left p-2 text-sm rounded-md hover:bg-gray-200 text-gray-700"
                    >
                      {question}
                    </button>
                  ))}
                </div>
                
                <div className="mt-6 pt-6 border-t">
                  <h3 className="font-medium text-gray-900 mb-3">Resources</h3>
                  <div className="space-y-2">
                    <a 
                      href="https://www.cancer.org/cancer/colon-rectal-cancer.html" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="block text-sm text-blue-600 hover:underline"
                    >
                      American Cancer Society
                    </a>
                    <a 
                      href="https://www.cdc.gov/cancer/colorectal/index.htm" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="block text-sm text-blue-600 hover:underline"
                    >
                      CDC - Colorectal Cancer
                    </a>
                    <a 
                      href="https://www.ccalliance.org/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="block text-sm text-blue-600 hover:underline"
                    >
                      Colorectal Cancer Alliance
                    </a>
                  </div>
                </div>
                
                <div className="mt-6 pt-6 border-t">
                  <h3 className="font-medium text-gray-900 mb-3">Did you know?</h3>
                  <div className="bg-white p-3 rounded-md shadow-sm text-sm text-gray-700">
                    <p>Regular screening starting at age 45 can prevent many cases of colorectal cancer by finding and removing precancerous growths.</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Feedback */}
            <div className="bg-gray-50 p-3 border-t flex justify-center">
              <div className="text-sm text-gray-500 flex items-center">
                Was this conversation helpful?
                <button className="ml-2 p-1 rounded-full hover:bg-gray-200" aria-label="Thumbs up">
                  <ThumbsUp className="h-4 w-4 text-gray-600" />
                </button>
                <button className="ml-1 p-1 rounded-full hover:bg-gray-200" aria-label="Thumbs down">
                  <ThumbsDown className="h-4 w-4 text-gray-600" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatbotPage;