import React from 'react';
import {connect} from 'react-redux';
import T from 'prop-types';
import {addMessage} from '../redux/actions/message';

const connector = connect(
    state => ({}),
    {addMessage}
);

const NewMessage = (props) => {
    const fields = {};
    const submitHandler = e => {
        e.preventDefault();

        const {message} = fields;

        props.addMessage(message.value);
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

export default connector(NewMessage);
