import React from 'react';
import T from 'prop-types';

const Message = ({message: {id, text}}) => {
    return (
        <div>
            <p>{text}</p>
        </div>
    );
};

Message.propTypes = {
    message: T.shape({
        id: T.string.isRequired,
        text: T.string.isRequired
    }).isRequired
};
Message.defaultProps = {};

export default Message;
