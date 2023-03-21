import React from 'react';
import { Button,Card } from 'antd';
import 'antd/dist/reset.css';
import './App.css';
import Message from './Message'
function intro() {
 

  const cardStyle = { 
    width: "480px",
    height: " 234px", 
    borderRadius: "16px", 
    marginRight: "24px", 
    boxShadow: "5px 8px 24px 5px rgba(208, 216, 243, 0.6)" 
 }
  return (
    <div className="App">
    <Card title ='ʜᴇʏ .....ᴡɪʟʟ ᴜ ʙᴇ ᴍʏ ᴠᴀʟᴇɴᴛɪɴᴇ!' style={cardStyle}> 
    <Message/>
    </Card>
    
  </div>
  )
}

export default intro