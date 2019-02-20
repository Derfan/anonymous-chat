import React, {Component} from 'react';
import Messages from './components/Messages';
import NewMessage from './components/NewMessage';

class App extends Component {
    render() {
        return (
            <div>
                <h1>Welcome!</h1>

                <Messages/>

                <NewMessage/>
            </div>
        );
    }
}

export default App;
