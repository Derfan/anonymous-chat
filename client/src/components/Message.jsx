import React from 'react';
import T from 'prop-types';

const styles = {
    CONNECT: {
        fontSize: 12,
        color: 'blue',
        textAlign: 'center'
    },
    DISCONNECT: {
        fontSize: 12,
        color: 'red',
        textAlign: 'center'
    },
    MESSAGE: {
        fontSize: 14,
        color: 'green'
    },
    msg: {
        display: 'flex'
    },
    author: {
        fontWeight: 600
    },
    text: {
        padding: '0 0 0 5px',
        wordBreak: 'break-word'
    }
};

const getPlate = message => {
    switch (message.type) {
        case 'CONNECT':
        case 'DISCONNECT':
            return <div>{message.type}: {message.ip}</div>;
        case 'MESSAGE':
            return <div style={styles.msg}>
                <p style={styles.author}>{message.ip}:</p>

                <p style={styles.text}>{message.text}</p>
            </div>;
        default:
            return <div>Неопознанное сообщение</div>
    }
};

const Message = ({message}) => {
    return (
        <div style={styles[message.type]}>
            {getPlate(message)}
        </div>
    );
};

Message.propTypes = {
    message: T.shape({
        id: T.string,
        type: T.string,
        text: T.string
    }).isRequired
};
Message.defaultProps = {};

export default Message;
