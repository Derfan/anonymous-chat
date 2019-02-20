import React from 'react';
import T from 'prop-types';
import Message from './Message';

const Messages = (props) => {
    return (
        <div>
            {props.messages && props.messages.length ?
                props.messages.map(message => <Message key={message.id} message={message}/>)
                :
                'Список пуст...'
            }
        </div>
    );
};

Messages.propTypes = {};
Messages.defaultProps = {};

export default Messages;
