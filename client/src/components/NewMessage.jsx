import React from 'react';
import {connect} from 'react-redux';
import T from 'prop-types';
import {sendMessage} from '../redux/actions/message';

const styles = {
    form: {
        flex: '0 0 auto',
        display: 'flex',
        alignItems: 'center',
        border: '1px solid white',
        marginTop: '5px',
        padding: '5px'
    },
    prefix: {
        flex: '0 0 auto',
        fontSize: '16px',
        color: 'green',
        fontWeight: 700
    },
    input: {
        flex: '1 0 auto',
        border: 'none',
        outline: 'none',
        height: '100%',
        fontSize: '16px',
        color: 'green',
        padding: '0 5px',
        background: 'black',
        fontWeight: 700
    }
};

const connector = connect(
    null,
    {sendMessage}
);

class NewMessage extends React.Component {
    fields = {};

    componentDidMount() {
        this.fields.message.focus()
    }

    render() {
        return (
            <form onSubmit={this.submitHandler} style={styles.form}>
                <span style={styles.prefix}>>>></span>

                <input
                    style={styles.input}
                    type="text"
                    ref={i => this.fields.message = i}
                />
            </form>
        );
    }

    submitHandler = e => {
        e.preventDefault();

        const {message} = this.fields;

        this.props.sendMessage({text: message.value});
        e.target.reset();
    };
}

NewMessage.propTypes = {};
NewMessage.defaultProps = {};

export default connector(NewMessage);
