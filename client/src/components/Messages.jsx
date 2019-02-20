import React from 'react';
import {connect} from 'react-redux';
import T from 'prop-types';
import Message from './Message';
import {getMessagesList} from '../redux/reducers/message';

const connector = connect(
    state => ({
        messages: getMessagesList(state)
    })
);

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

export default connector(Messages);
