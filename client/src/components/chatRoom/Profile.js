import React from 'react';
import Identity from './profileBar/Identity';
import History from './profileBar/History';
import Appointment from './profileBar/Appointment';
import Posology from './profileBar/Posology';
import Notes from './profileBar/Notes';

const Profile = ({name, pictureUrl, street, city, tel, history, appointment, posology}) => {
    const styles = {
        container: {
            background: '#F2F2F2',
            width: '35vw',
            height: '100vh',
        }
    }
    
    return (
        <div style={styles.container}>
            <Identity 
                name={name} 
                pictureUrl={pictureUrl} 
                street={street} 
                city={city} 
                tel={tel} />
            <History history={history} />
            <Appointment appointment={appointment} />
            <Posology posology={posology}  />
            <Notes  />
        </div>
  );
}

export default Profile;
