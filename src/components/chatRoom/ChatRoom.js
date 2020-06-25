import React from 'react';
import ChatComponent from './ChatComponent';
import Profile from './Profile';

const ChatRoom = () => {
    const styles = {
        container: {
            background: '#FFF',
            height: '100vh',
            display: 'flex',
        }
    }
    
    return (
        <div style={styles.container}>
            <ChatComponent />
            <Profile /> 
        </div>
  );
}

export default ChatRoom;