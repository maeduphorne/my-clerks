import './Carousel.css'
import UserProfileCard from '../UserProfileCard/UserProfileCard'

const Carousel = ({ currentCard, color }) => {
  // const cards = currentCard.map((info) => {
  //   return (
  //     <UserProfileCard key={info.id} userInfo={info}/>
  //   )
  // })

  return(
    <section className="carousel">
      <UserProfileCard key={currentCard.id} userInfo={currentCard} color={color}/>
    </section>
  )

}

export default Carousel;