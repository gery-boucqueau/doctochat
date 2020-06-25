import React from 'react';
import ChatComponent from './ChatComponent';
import Profile from './Profile';

class ChatRoom extends React.Component {
    
    state = {
        name: 'Emilie Loiseau',
        pictureUrl: 'http://www.lavalensante.com/fileadmin/internet/cisss_laval/Soins_et_services/Information_pratique/Quoi_demander_MD/Femme_65-75_ans.jpg',
        street: 'Rue des Marchandises',
        city: 'Toulouse FRANCE',
        tel: '+33 447/634.222',
        history: 'pas d antécédents',
        appointment: 'prochain rendez-vous le 24/08/2020',
        posology: 'une cuillère à café de lait de jument le matin'
    }
    
    styles = {
        container: {
            background: '#FFF',
            height: '100vh',
            display: 'flex',
        }
    }
    
    render () {

    return (
        <div style={this.styles.container}>
            <ChatComponent {...this.state} />
            <Profile 
                name={this.state.name}
                pictureUrl={this.state.pictureUrl}
                street={this.state.street} 
                city={this.state.city}
                tel={this.state.tel} 
                history={this.state.history}
                appointment={this.state.appointment}
                posology={this.state.posology}  
            /> 
        </div>
    );    
    }  
}

export default ChatRoom;