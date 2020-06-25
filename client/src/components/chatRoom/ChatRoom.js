import React from 'react';
import ChatComponent from './ChatComponent';
import Profile from './Profile';

class ChatRoom extends React.Component {
    
    state = {
        id: {
            name: 'Emilie Loiseau',
            pictureUrl: 'http://www.lavalensante.com/fileadmin/internet/cisss_laval/Soins_et_services/Information_pratique/Quoi_demander_MD/Femme_65-75_ans.jpg',
            street: 'Rue des Marchandises',
            city: 'Toulouse FRANCE',
            tel: '+33 447/634.222',
            history: 'pas d antécédents',
            appointment: 'prochain rendez-vous le 24/08/2020',
            posology: 'une cuillère à café de lait de jument le matin'
        }
    }
    
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
            <Profile 
                name={this.state.id.name}
                pictureUrl={this.state.id.pictureUrl}
                street={this.state.id.street} 
                city={this.state.id.city}
                tel={this.state.id.tel} 
                history={this.state.id.history}
                appointment={this.state.id.appointment}
                posology={this.state.id.posology}  
            /> 
        </div>
    );    
    }  
}

export default ChatRoom;