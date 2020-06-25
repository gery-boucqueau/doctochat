import React from 'react';
import ChatComponent from './ChatComponent';
import Profile from './Profile';

const currentUser = {
    id: 'Emilie',
    token: 'Emilie',
    name: 'Emilie Loiseau',
    image: 'http://www.lavalensante.com/fileadmin/internet/cisss_laval/Soins_et_services/Information_pratique/Quoi_demander_MD/Femme_65-75_ans.jpg',
    street: 'Rue des Marchandises',
    city: 'Toulouse FRANCE',
    tel: '+33 447/634.222',
    history: 'pas d antécédents médicaux',
    appointment: 'prochain rendez-vous le 24/08/2020',
    posology: 'une cuillère à café de lait de jument le matin'
}

class ChatRoom extends React.Component {
    
    styles = {
        container: {
            background: '#FFF',
            height: '100vh',
            display: 'flex',
        }
    }

    thisHandleUser = () => {
        this.SetState({id: this.state.id})
    }
    
    render () {

    return (
        <div style={this.styles.container}>
            <ChatComponent {...this.state} />
            <Profile currentUser={currentUser} /> 
        </div>
    );    
    }  
}

export default ChatRoom;