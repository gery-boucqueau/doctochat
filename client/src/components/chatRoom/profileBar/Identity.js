import React from 'react';
import IdInfo from './IdComponent/IdInfo';
import IdPicture from './IdComponent/IdPicture';

const Identity = ({name, street, city, tel, pictureUrl}) => {
    const styles = {
        container: {
            background: '#F2F2F2',
            height: '30vh',
            display: 'flex',
            paddingTop: '20px',
        }
    }
    
    return (
        <div style={styles.container}>
            <IdInfo 
                name={name} 
                street={street} 
                city={city} 
                tel={tel} />
            <IdPicture pictureUrl={pictureUrl} />
        </div>
  );
}

export default Identity;