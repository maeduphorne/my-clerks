import './App.css';
import { fetchRandomUsers } from '../apiCalls'
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

  // Fetch on page load
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

  // Fetch more users and add to userInfo state
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

  // Update current card
  useEffect(() => {
    setCurrentCard(userInfo[currentIndex])
  }, [userInfo])

  // Handle Clicks
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

  // Handle and store color scheme changes
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