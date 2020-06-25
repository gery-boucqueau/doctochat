import React from 'react';
import './App.css';
import ChatRoom from './components/chatRoom/ChatRoom';
import {Switch, Route} from 'react-router-dom';

function App() {
  const styles = {
    container:{
      display: 'flex',
      width: '100vw',
      background: '#FFF',
    }
  }
  return (
    <div className="App" style={styles.container}>
        <ChatRoom />
    </div>
  );
}

export default App;