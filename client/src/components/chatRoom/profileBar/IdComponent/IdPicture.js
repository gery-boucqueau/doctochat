import React from 'react';

const IdPicture = ({pictureUrl}) => {
    const styles = {
        container: {
            background: '#F2F2F2',
            height: '100%',
            width: '50%',
            borderRadius: '15px',
        }
    }
    
    return (
        <div style={styles.container}>
            <img height="100%" borderRadius="50%" alt="profileImg" src={pictureUrl} />
        </div>
  );
}

export default IdPicture;