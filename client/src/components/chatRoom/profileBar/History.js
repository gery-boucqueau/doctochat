import React from 'react';

const History = ({history}) => {
    const styles = {
        container: {
            background: '#FFF',
            borderRadius: '15px',
            margin: '10px',
            height: '13vh',
            textAlign: 'left',
            paddingLeft: '4pt',
        }
    }
    return (
        <div style={styles.container}>
            History :
            <p>{history}</p>
        </div>
  );
}

export default History;