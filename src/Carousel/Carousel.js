import './Carousel.css'
import UserProfileCard from '../UserProfileCard/UserProfileCard'

const Carousel = ({ currentCard, color }) => {
  return(
    <section className="carousel">
      <UserProfileCard key={currentCard.id} userInfo={currentCard} color={color}/>
    </section>
  )
}

export default Carousel;