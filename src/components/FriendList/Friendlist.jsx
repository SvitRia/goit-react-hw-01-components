import style from "./Friends.module.css"
import { Status } from "./Friends.styled";

export const FriendListItem = ({ avatar, name, isOnline }) => {
return( 
    <li className={style.item}>
        {/* <span className="status">{isOnline}</span> */}
        <Status isOnline={isOnline}/>
        <img className={style.avatar} src={avatar} alt={name} width="48" />
        <p className={style.name}>{name}</p>
</li>   
    );
};
export const Frienlist = ({ friends }) => {
    return (
        <ul className={style.friendList}>
               {friends.map((friend) => (
                    <FriendListItem key={friend.id} avatar={friend.avatar} name={friend.name} isOnline={friend.isOnline}>  </FriendListItem> ))}
  </ul>

    )
}