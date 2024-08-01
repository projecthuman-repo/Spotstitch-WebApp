import "./messages.css";

const MessageHistory = ({ history = [] }) => {
  return (
    <div className="message-container">
      <div className="message-author">
        {/* author 1 will always be the account holder, therefore the author 0 in the chat would be the guest */}
        <div className="profile-picture"></div>
        <h5 className="author-name">{history[0].author}</h5>
      </div>
      {history.length > 0 &&
        history.map((message) => {
          return (
            <div
              className={message._id !== 1 ? "message-owner" : "message-guest"}
              key={message._id}
            >
              <div className="message-content-container">
                <p className="message-content">{message.content}</p>
                <p className="createdOn mb-0 fs-14">{message.createdOn}</p>
              </div>
            </div>
          );
        })}
      {!history && (
        <div className="d-flex flex-column">
          <div className="mb-auto text-center">No messages</div>
        </div>
      )}
    </div>
  );
};

export default MessageHistory;
