import { useState } from 'react';
import { ChatInput } from './components/ChatInput';
import ChatMessages  from './components/ChatMessages';
import './App.css'

function App() {

        const [chatMessages , setChatMessages] = useState([{
            message: 'Hello Chat',
            sender: 'user',
            id:'id1'
        },{
          message: 'Hello! How can i help you?',
          sender: 'robot',
          id:'id2'
        },{
          message: 'Can you get me today date?',
          sender: 'user',
          id:'id3'
        },{
          message: 'Today is septenber 27',
          sender: 'robot',
          id:'id4'
        }
        ])
        
        return(
        
        <div className="app-container">
          
          <ChatMessages 
          chatMessages = {chatMessages}
          />

          <ChatInput 
          chatMessages = {chatMessages}
          setChatMessages = {setChatMessages}
          />

        </div>

        );
      }


export default App
