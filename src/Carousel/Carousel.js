import './Carousel.css'
import UserProfileCard from '../UserProfileCard/UserProfileCard'

const Carousel = ({ userInfo }) => {

  const handleNextClick = () => {
    console.log('I am clicking')
  }

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
      <button className="next" onClick={() => handleNextClick()}>NEXT</button>
    </section>
  )

}

export default Carousel;

// CAROUSEL component
  // should map and display correct USERPROFILECARDs from userInfo state
    //on load, the carousel displays the initial 1 card (grow to 3 for desktop)
      // if there are card sin localStorage, grab those and display
      // if no cards in local storage, fetch new
    // may need to hold index in state to go back to index once the fetch has happened