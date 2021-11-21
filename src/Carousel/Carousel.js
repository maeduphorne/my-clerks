import './Carousel.css'
import UserProfileCard from '../UserProfileCard/UserProfileCard'

const Carousel = ({ userInfo }) => {

  const cards = userInfo.map((info) => {
    return (
      <UserProfileCard key={info.id} userInfo={info}/>
    )
  })

  return(
    <section className="carousel">
      <button className="prev">PREV</button>
      <div className="profile-card-container">
        {cards}
      </div>
      <button className="next">NEXT</button>
    </section>
  )

}

export default Carousel;