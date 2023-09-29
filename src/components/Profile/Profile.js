import user from 'Data/user.json'
export const Profile = (user) => {
  const username = user.username;
  const tag = user.tag;
  const location = user.location;
  const avatar = user.avatar;
  const stats = user.stats

    return <div className="profile"><div className="description">
    <img
      src={avatar}
      alt={username}
      className="avatar"
    />
      <p className="user.name">{username}"Hallo"</p>
      <p className="user.tag">{tag}</p>
      <p className="user.location">{location}</p>
  </div>

  <ul className="stats">
    <li>
      <span className="label">Followers</span>
          <span className="quantity">{stats.follovers}</span>
    </li>
    <li>
      <span className="label">Views</span>
          <span className="quantity">{stats.views}</span>
    </li>
    <li>
      <span className="label">Likes</span>
          <span className="quantity">{stats.likes}</span>
    </li>
  </ul>
</div>
}

<Profile
  username={user.username}
  tag={user.tag}
  location={user.location}
  avatar={user.avatar}
  stats={user.stats}
/>