import React from 'react';
import Messages from './components/Messages';
import NewMessage from './components/NewMessage';

const styles = {
    wrapper: {
        display: 'flex',
        flexDirection: 'column',
        height: '100%'
    }
};

const App = () => (
    <div style={styles.wrapper}>
        <Messages/>

        <NewMessage/>
    </div>
);

export default App;
