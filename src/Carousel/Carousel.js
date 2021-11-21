import './Carousel.css'
import UserProfileCard from '../UserProfileCard/UserProfileCard'
import { useState, useEffect } from 'react';

const Carousel = ({ userInfo, fetchUsers, currentIndex, setCurrentIndex }) => {
  // const [currentIndex, setCurrentIndex] = useState(0)
  const [currentCard, setCurrentCard] = useState({})
  const [isLoading, setIsLoading] = useState(false)
  let savedIndex;
  const setLocalStorage = () => {
    localStorage.setItem('currentIndex', savedIndex)
  }

  const getLocalStorage = () => {
    savedIndex = localStorage.getItem('currentIndex')
    // if(!previousIndex === 0) {
    //   setCurrentIndex(previousIndex)
    // }
  }

  useEffect(() => {
    // getLocalStorage()
    setCurrentCard(userInfo[currentIndex])
  }, [])

  // useEffect(() => {
  //   setLocalStorage()
  // }, [currentIndex])

  const handleNextClick = () => {
    setCurrentIndex(currentIndex + 1)
    savedIndex = currentIndex
    setLocalStorage()
    console.log('savedIndex pre fetch', savedIndex)
    // checkForFetch()
    if(userInfo.length <= currentIndex){
      fetchUsers()
      // setCurrentCard(userInfo[currentIndex])
    }
    getLocalStorage()
    console.log('savedIndex post fetch', savedIndex)
    setCurrentCard(userInfo[currentIndex])
    
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

  // const checkForFetch = () => {
  //   if(userInfo.length <= currentIndex){
  //     fetchUsers()
  //     setCurrentCard(userInfo[currentIndex])
  //   }
  // }

  return(
    <section className="carousel">
      <button className="prev">PREV</button>
      <div className="profile-card-container">
        {currentCard && !isLoading && <UserProfileCard key={currentCard.id} userInfo={currentCard}/>}
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