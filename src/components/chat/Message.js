import React from 'react';

const Message = ({newMessage}) => {
    return (
        <>
            <div className="chat-message-right pb-4">
                <div>
                    <img src="https://bootdey.com/img/Content/avatar/avatar1.png" className="rounded-circle mr-1" alt="Chris Wood" width="40" height="40"/>
                    <div className="text-muted small text-nowrap mt-2">2:33 am</div>
                </div>
                <div className="flex-shrink-1 bg-light rounded py-2 px-3 mr-3">
                    <div className="font-weight-bold mb-1">You</div>
                    {newMessage}
                </div>
            </div>
            <div className="chat-message-left pb-4">
                <div>
                    <img src="https://bootdey.com/img/Content/avatar/avatar3.png"
                         className="rounded-circle mr-1" alt="Sharon Lessman" width="40"
                         height="40"/>
                    <div className="text-muted small text-nowrap mt-2">2:34 am</div>
                </div>
                <div className="flex-shrink-1 bg-light rounded py-2 px-3 ml-3">
                    <div className="font-weight-bold mb-1">Sharon Lessman</div>
                    Sit meis deleniti eu, pri vidit meliore docendi ut, an eum erat animal
                    commodo.
                </div>
            </div>
        </>
    );
};

export default Message;