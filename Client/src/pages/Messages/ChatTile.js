import socket from "../../services/socket"

const ChatTile = (chat, curr) => {
  return (
    <div
      className={
        currentChat === chat._id
          ? 'row my-3 bg-e6 px-5 hover-pointer'
          : 'row my-3 px-5 hover-pointer'
      }
      onClick={() => onChatClick(chat, chat._id)}
    >
      <div className='d-flex'>
        <img
          src={require('../../assets/photo.png')}
          height={60}
        />
        <div className='d-flex flex-column ms-2'>
          <span className='my-auto'>

            <p className='m-0'>{chat.users}</p>
            <p className='m-0'>{chat.history[-1]}</p>
          </span>
        </div>
        <p className='ms-auto mb-0'>date</p>
      </div>
    </div>
  );

}

export default ChatTile