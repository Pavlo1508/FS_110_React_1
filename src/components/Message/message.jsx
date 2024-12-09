const Message = ({author = 'Incognito', message, isOnline}) => {
	return (
    <div>
      <h3>{author}</h3>
      <p>{isOnline ? "online" : "offline"}</p>
      <p>{message}</p>
    </div>
  );
}

export default Message;