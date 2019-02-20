import React from 'react';
import Messages from './components/Messages';
import NewMessage from './components/NewMessage';

const App = () => (
    <div>
        <h2>Welcome!</h2>

        <Messages/>

        <NewMessage/>
    </div>
);

export default App;
