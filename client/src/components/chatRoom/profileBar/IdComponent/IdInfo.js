import React from 'react';

const IdInfo = ({name,street, city, tel}) => {
    const styles = {
        container: {
            background: '#FFF',
            width: '50%',
            height: '100%',
            borderRadius: '15px',

        }
    }
    
    return (
        <div style={styles.container}>
            <h3>{name}</h3>
            <p>{street}</p>
            <p>{city}</p>
            <h3>{tel}</h3>
        </div>
  );
}

export default IdInfo;