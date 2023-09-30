export const FriendListItem = ({ id, avatar, name, isOnline }) => {
return( 
   <li className="item" key={id}>
        <span className="status">{isOnline}</span>
        <img className="avatar" src={avatar} alt={name} width="48" />
        <p className="name">{name}</p>
</li>   
    );
};
export const Frienlist = ({ friends }) => {
    return (
            <ul className="friend-list">
               {friends.map((friend) => (
                    <FriendListItem id={friend.id} avatar={friend.avatar} name={friend.name} isOnline={friend.isOnline}>  </FriendListItem> ))}
  </ul>

    )
}