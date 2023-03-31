import React from 'react';

const MessageSend = ({send}) => {

    return (
        <>
            <form onSubmit={send}>
                <div className="flex-grow-0 py-3 px-4 border-top">
                    <div className="input-group">
                        <input type="text" name='message' className="form-control" id="messageInput"
                               placeholder="Type your message"/>
                        <button className="btn btn-primary">Send</button>
                    </div>
                </div>
            </form>
        </>
    );
};

export default MessageSend;