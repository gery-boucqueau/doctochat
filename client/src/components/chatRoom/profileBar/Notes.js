import React from 'react';

const Notes = () => {
    
    const styles = {
        container: {
            background: '#FFF',
            borderRadius: '15px',
            margin: '10px',
            height: '22vh',
            textAlign: 'left',
            paddingLeft: '4pt',
        }
    }
    
    return (
        <div style={styles.container}>
            Notes :
            <form >
                <label >
                    <textarea type="text" rows="6" cols="54" borderColor="transparent" borderWidth="0" placeholder="write here..." />
                </label>
            </form>
        </div>
  );
}

export default Notes;