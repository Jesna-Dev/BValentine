import React from 'react';
import { Button,Card } from 'antd';
import 'antd/dist/reset.css';
import './App.css';
// import { useHistory } from "react-router-dom";
import {
  Routes,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Index from './Index';
import Intro from './intro';
import Message from './Message';

function App() {
  
  //const history = useHistory();
  
  
  
  return (
    <div className="App">
       <Routes>
        <Route exact path="/" element={<Index/>} />
        <Route path="/intro" element={<Intro/>} />
        <Route path="/Message" element={<Message/>} />
       </Routes>
    
    </div>
  )
}

export default App