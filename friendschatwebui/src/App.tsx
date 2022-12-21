import React from 'react';
import AgentCustomerDetails from './AgentCustomerDetails/AgentCustomerDetails';
import './App.css';
import ChatController from './chatContainer/ChatController';
import { Routes, Route, Link } from "react-router-dom";



function App() {

  return (

    <div className="App">
      <Routes>
        <Route element={<AgentCustomerDetails />} path="/" />
        <Route element={<ChatController />} path="/chat" />
      </Routes>
    </div>
  );
}

export default App;
