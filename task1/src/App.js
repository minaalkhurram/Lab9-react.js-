
import './App.css';
import React from 'react';
import MailBox from './components/MailBox';


function App() {
  const messages = ['React', 'Re: React', 'Re:Re: React'];
  return (
    <div className="App">
       <h1>Hello, React!</h1>
      <MailBox unreadMessages={messages} />
    </div>
  );
}

export default App;
