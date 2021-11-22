import './UserProfileCard.css'

const UserProfileCard = ({ userInfo, color }) => {
  return (
    <article className="profile-card" key={userInfo.id} style={{backgroundColor:`${color}` }}>
      <img className= "user-image" src={userInfo.photo} alt={`photo of ${userInfo.firstName}`}/>
      <h2>{`${userInfo.firstName} ${userInfo.lastName}`}</h2>
      <h3>{`${userInfo.city}, ${userInfo.country}`}</h3>
      <p>{userInfo.email}</p>
      <p>{userInfo.phone}</p>
    </article>
  )
}

export default UserProfileCard;