const MessageHistory = ({ history = []}) => {
    return (
        <div>
            {history.length > 0 && history.map(message => {
                return (
                    <div className='d-flex flex-column' key={message._id}>
                        <div className='mb-auto text-center'>
                            <h5 className='mt-3'>{message.author}</h5>
                        </div>
                        <div className='d-flex flex-column mt-auto'>
                            <div className='d-flex ms-auto message-blob bg-e6'>
                                <p>{message.content}</p>
                            </div>
                            <p className='ms-auto mb-0 fs-14'>{message.createdOn}</p>

                        </div>
                    </div>
                )
            })}
            {!history &&
                <div className='d-flex flex-column'>
                    <div className='mb-auto text-center'>
                        No messages
                    </div>
                </div>
            }
        </div>
    );
};



export default MessageHistory