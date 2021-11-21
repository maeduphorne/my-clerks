import './Carousel.css'
import UserProfileCard from '../UserProfileCard/UserProfileCard'
import { useState } from 'react';

const Carousel = ({ userInfo }) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [currentCard, setCurrentCard] = useState({})

  

  const handleNextClick = () => {
    console.log('I am clicking')
    setCurrentIndex(currentIndex + 1)
    // currentCard = userInfo[currentIndex]
  //NEXT BTN function 
  // carousel index - starts at 0 on initial page load
  // with each click of the next button, 1 is added to the index
  // display card at current index
  // if at the end of the userInfo array, fetch more users
  // return to view of card at previous index
  }

  // const cards = currentCard.map((info) => {
  //   return (
  //     <UserProfileCard key={info.id} userInfo={info}/>
  //   )
  // })

  return(
    <section className="carousel">
      <button className="prev">PREV</button>
      <div className="profile-card-container">
        {/* {currentCard} */}
        {/* <UserProfileCard key={currentCard.id} userInfo={currentCard}/> */}
        CARD CONTAINER
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