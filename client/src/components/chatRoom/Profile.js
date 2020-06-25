import React from 'react';
import Identity from './profileBar/Identity';
import History from './profileBar/History';
import Appointment from './profileBar/Appointment';
import Posology from './profileBar/Posology';
import Notes from './profileBar/Notes';

const Profile = ({currentUser}) => {
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
                name={currentUser.name} 
                pictureUrl={currentUser.image} 
                street={currentUser.street} 
                city={currentUser.city} 
                tel={currentUser.tel} />
            <History history={currentUser.history} />
            <Appointment appointment={currentUser.appointment} />
            <Posology posology={currentUser.posology}  />
            <Notes  />
        </div>
  );
}

export default Profile;
