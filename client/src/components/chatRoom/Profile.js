import React from 'react';
import Identity from './profileBar/Identity';
import History from './profileBar/History';
import Appointment from './profileBar/Appointment';
import Posology from './profileBar/Posology';
import Notes from './profileBar/Notes';

const Profile = () => {
    const styles = {
        container: {
            background: '#F2F2F2',
            width: '35vw',
            height: '100vh',
        }
    }
    const users = [{
            name : 'André Family',
            pictureUrl: '',
            street : 'Avenue des fleurs',
            city: 'Paris FRANCE',
            tel: '+33 465/654.637',
            history: '',
            appointment: '',
            posology: '',
        }, 
        {
            name : 'Emilie Loiseau',
            pictureUrl: '',
            street : 'Rue des Marchandises',
            city: 'Toulouse FRANCE',
            tel: '+33 447/634.222',
            history: '',
            appointment: '',
            posology: '',
        },
        {
            name : 'Bart Sommers',
            pictureUrl: '',
            street : 'Champs des Elysées',
            city: 'Paris FRANCE',
            tel: '+33 498/986.387',
            history: '',
            appointment: '',
            posology: '',
        }
    ]
    
    return (
        <div style={styles.container}>
            <Identity />
            <History />
            <Appointment />
            <Posology />
            <Notes />
        </div>
  );
}

export default Profile;
