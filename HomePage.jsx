import { Button, Card } from 'antd'
import React from 'react'
import {useNavigate} from 'react-router-dom';

function HomePage() {
    const navigate = useNavigate();
    const coursesPage = () => {
        navigate("/intro")
    }
    const cardStyle = { 
        width: "480px",
        height: " 234px", 
        borderRadius: "16px", 
        marginRight: "24px", 
        boxShadow: "5px 8px 24px 5px rgba(208, 216, 243, 0.6)" 
     }
  return (
    <Card title ='ʜᴇʏ ɪᴛꜱ ᴍᴇ... ʙᴏʙᴏ!' style={cardStyle}> 
      <Button type="primary"  onClick={coursesPage} >ᴄʟɪᴄᴋ ʜᴇʀᴇ</Button>
    </Card>
  )
}

export default HomePage