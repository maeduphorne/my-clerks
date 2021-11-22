import './App.css';
import { fetchRandomUser, fetchRandomUsers } from '../apiCalls'
import React, { useEffect, useState } from 'react'
import Carousel from '../Carousel/Carousel';
import ColorSelector from '../ColorSelector/ColorSelector';

function App() {

  const [userInfo, setUserInfo] = useState([]);
  const [userInfoError, setUserInfoError] = useState('');
  const [isLoading, setIsLoading] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [currentCard, setCurrentCard] = useState({})
  const [selectedColor, setSelectedColor] = useState(localStorage.getItem('color') || 'Grey')
  const [colorCode, setColorCode] = useState('')

  // Original fetch call for 3 users
  useEffect(() => {
    let userData;
    setIsLoading(true);
    fetchRandomUsers()
    .then((data) => {
      userData = data.results.map(userObj => {
        const newObj = {}
        newObj.id = userObj.login.uuid;
        newObj.firstName = userObj.name.first;
        newObj.lastName = userObj.name.last;
        newObj.email = userObj.email;
        newObj.phone = userObj.phone;
        newObj.photo = userObj.picture.large;
        newObj.city = userObj.location.city;
        newObj.country = userObj.location.country;
        return newObj
        })
      setUserInfo(userData)
    })
    .catch(error => setUserInfoError('Unable to find a user. Please refresh the page or try again later.'))
  }, [])

  useEffect(() => {
    if(userInfo.length >= 3) {
      setIsLoading(false)
    }
  }, [userInfo])

  const getMoreUserInfo = () => {
    let userData;
    setIsLoading(true)
    fetchRandomUsers()
    .then((data) => {
      userData = data.results.map(userObj => {
        const newObj = {}
        newObj.id = userObj.login.uuid;
        newObj.firstName = userObj.name.first;
        newObj.lastName = userObj.name.last;
        newObj.email = userObj.email;
        newObj.phone = userObj.phone;
        newObj.photo = userObj.picture.large;
        newObj.city = userObj.location.city;
        newObj.country = userObj.location.country;
        return newObj
        })
      setUserInfo([...userInfo, ...userData])
    })
    .catch(error => setUserInfoError('Unable to find a user. Please refresh the page or try again later.'))
  }

  useEffect(() => {
    setCurrentCard(userInfo[currentIndex])
  }, [userInfo])

  const handleNextClick = (e) => {
    e.preventDefault()
    if(userInfo.length === currentIndex + 1 && userInfo.length <= 97){
      getMoreUserInfo()
    }
    setCurrentCard(userInfo[currentIndex + 1])
    setCurrentIndex(currentIndex + 1)
  }

  const handlePrevClick = () => {
    if((currentIndex - 1) >= 0) {
      setCurrentCard(userInfo[currentIndex - 1])
      setCurrentIndex(currentIndex - 1)
    }
  }

  const handleColorSelection = (color) => {
    setSelectedColor(color)
    localStorage.setItem('color', color)
  }

  const colors = [
    {name: 'Grey', color: '#71797E', id: 0},
    {name: 'Navy', color: '#29335C', id: 1}, 
    {name: 'Green', color: '#A8C686', id: 2},
    {name: 'Orange', color: '#F3A712', id: 3},
    {name: 'Red', color: '#E4572E', id: 4},
    {name: 'Purple', color: '#B497D6', id: 5},
  ]

  useEffect(() => {
    const colorCode = colors.filter(color => color.name == selectedColor).map(color => color.color)
    setColorCode(colorCode[0])
  }, [selectedColor])

  return (
    <div className="App">
      <h1>My Clerks</h1>
      <ColorSelector colors={colors} selectedColor={selectedColor} handleColorSelection={handleColorSelection}/>
      <section className="carousel-and-btns">
      <button className="prev" onClick={() => handlePrevClick()}>{'<'}</button>
      {currentCard && !isLoading && <Carousel currentCard={currentCard} color={colorCode}/>}
      {isLoading && 'Loading more users...'}
      {userInfoError && `${userInfoError}`}
      <button className="next" onClick={(e) => handleNextClick(e)}>{'>'}</button>
      </section>
    </div>
  );
}

export default App;

// PSEUDOCODE FOR MY CLERKS APP

// APP component
  // Anticipated state:
    // userInfo
    // isLoading
    // color

  // App should display:
    // Header
    // COLORSELECTOR Menu (color selector)
    // Carousel

  // App hold fetch method and passed as a prop to carousel (to update userInfo)
    // write reusable pieces of method - 
    // need one for initial fetch and need one thatruns if there is already users in state (either from prev. fetch or localstorage)
      // might be able to be one method with a conditional?
  // App holds method to select the color from the COLORSELECTOR and passed this as a prop to the COLORSELECTOR component
  // on change of state, local storage is set
  // on page load, any info from localstorage is fetched first


// USERPROFILECARD component
  // holds basic structure of the user card
  //takes in color prop to add to inline style to change background color


// CAROUSEL component
  // should map and display correct USERPROFILECARDs from userInfo state
    //on load, the carousel displays the initial 1 card (grow to 3 for desktop)
      // if there are card sin localStorage, grab those and display
      // if no cards in local storage, fetch new
    // may need to hold index in state to go back to index once the fetch has happened

  // BUTTONS
    // NEXT button
      // MOBILE version - on click, the next button checks if it is at the end of the UserInfo array
        // if no move to the next index to display
        // if at the end, fetch and spread another set of users to add to the userInfo array
          // add new array to local storage
        // begin display back at the first newly added index

      //DESKTOP version - on click, the next button checks if it is at the end of the UserInfo array
        // if no move to the next set of 3 indices to display
        // if at the end, fetch and spread another set of users to add to the userInfo array
          // add new array to local storage
        // begin display back at the first newly added index plus the next 2 cards
        // may have to add some logic to desktop to check if there are 2 index after the selected one

    // PREV button
      //MOBILE version - on click, the user should be able to see the card at the previous index
      //DESKTOP version - on click, the user should be able to see the 3 cards at the previous 3 indices


// COLORSELECTOR component
  // Takes in prop of method to select and update color
  // holds an array of colors to select from
  // maps through color names to create options for each color
  // returns a form with a select Element
  // options of select element are the color names from the map method
  // submit button??