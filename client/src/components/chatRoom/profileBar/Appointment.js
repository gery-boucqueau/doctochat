import React from 'react';

const Appointment = ({appointment}) => {
    const styles = {
        container: {
            background: '#FFF',
            height: '10vh',
            borderRadius: '15px',
            margin: '10px',
            textAlign: 'left',
            paddingLeft: '4pt',
        }
    }
    
    return (
        <div style={styles.container}>
            Appointment :
            <p>{appointment}</p>
        </div>
  );
}

export default Appointment;