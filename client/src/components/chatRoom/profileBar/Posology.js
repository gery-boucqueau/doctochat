import React from 'react';

const Posology = ({posology}) => {
    const styles = {
        container: {
            background: '#FFF',
            borderRadius: '15px',
            margin: '10px',
            height: '12vh',
            textAlign: 'left',
            paddingLeft: '4pt',
        }
    }
    return (
        <div style={styles.container}>
            Posology :
            <p>{posology}</p>
        </div>
  );
}

export default Posology;