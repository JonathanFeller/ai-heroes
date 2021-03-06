import React, { useEffect, useState } from 'react';
import './chatbox.css';

const ChatBox = () => {

  useEffect(() => {
    const firstMessage = setTimeout(() => {
      setMessages(m => [...m,
      { text: "I am a German born theoretical physicist.", type: 'answer' },
      ]);
    }, 4500);
    const secondMessage = setTimeout(() => {
      setMessages(m => [...m,
      { text: "Maybe mostly known because of my equation E=mc^2.", type: 'answer' },
      ])
    }, 8000);
    const thirdMessage = setTimeout(() => {
      setMessages(m => [...m,
      { text: "What would you like to know more about?", type: 'answer' }
      ])
    }, 13000);
    return () => {
      clearTimeout(firstMessage);
      clearTimeout(secondMessage);
      clearTimeout(thirdMessage);
    }
  }, []);

  const [message, setMessage] = useState('');

  const [messages, setMessages] = useState([
    { text: "Who are you?", type: 'question' },
    { text: "Hi! My name is Albert Einstein.", type: 'answer' },
  ]);

  const renderChat = () => messages.map((msg, i) =>
    <div key={i} className={`txt ${msg.type}`}>
      <span>{msg.text}</span>
    </div>
  );

  const handleSendMessage = () => {
    setMessages([...messages, {
      text: message,
      type: 'question'
    }]);
    setMessage('');
  };

  const handleEnterKey = (e) => {
    if (e.keyCode === 13) handleSendMessage();
  }

  const handleChange = (e) => {
    setMessage(e.target.value);
  }

  return (
    <div className="chatbox">
      <div className="chat">
        <div className="chat-user">ALBERT EINSTEIN</div>
        <div className="chat-center">
          <div className="chat-txt">{renderChat()}</div>
        </div>
        <div className="chat-form">
          <div>
            <input type="text" placeholder="Type your question here" value={message} onChange={handleChange} onKeyDown={handleEnterKey} />
            <img src="https://www.iconfinder.com/data/icons/pinterest-ui-flat/48/Pinterest_UI-09-64.png" alt="Send" onClick={handleSendMessage} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatBox;