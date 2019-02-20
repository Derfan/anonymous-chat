import React from 'react';
import T from 'prop-types';

const NewMessage = (props) => {
    const fields = {};
    const submitHandler = e => {
        e.preventDefault();

        const {message} = fields;

        console.log('message', message.value);

        e.target.reset();
    };

    return (
        <form onSubmit={submitHandler}>
            <input
                type="text"
                ref={i => fields.message = i}
                placeholder='Message...'
            />

            <button>Send</button>
        </form>
    );
};

NewMessage.propTypes = {};
NewMessage.defaultProps = {};

export default NewMessage;
