import './Carousel.css'
import UserProfileCard from '../UserProfileCard/UserProfileCard'
import { useState, useEffect } from 'react';

const Carousel = ({ currentCard }) => {
  // const cards = currentCard.map((info) => {
  //   return (
  //     <UserProfileCard key={info.id} userInfo={info}/>
  //   )
  // })

  return(
    <section className="carousel">
      <UserProfileCard key={currentCard.id} userInfo={currentCard}/>
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