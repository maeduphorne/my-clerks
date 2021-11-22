# My Clerks

[View My Clerks Assignment](https://www.notion.so/Clerk-frontend-assignment-61192c152234454eadd5384d21e63df5)

## Table Of Contents
+ [Overview](#overview)
+ [Examples](#examples)
+ [Setup instructions](#setup-instructions)
+ [Goals](#goals)
+ [Future features](#future-features)
+ [Technologies used](#technologies-used)
+ [Contributors](#contributors)

## Overview
The My Clerks app displays random user profiles to the user by scrolling through up to 100 profile cards. A user is also able to change the color scheme of the cards by using a drop down menu. The color persists on refresh of the page.

## Setup Instructions
  + Run `git clone ` into your local machine. **(write in github address)**
  + Run `npm install` to install dependencies 
  + Run `npm start` to open page in the browser
  + Run `npm run cypress` to test Cypress
  
## Examples
![recording (8)](https://user-images.githubusercontent.com/63213406/142920511-4b419cd5-e07c-4944-898e-32a03653130a.gif)

### Using The App
  _**- To use the App, a user is able to:**_
  <br><br>
  **- Click the right arrow to navigate to another random user**
  <br>
    - The displayed card is referenced based on the index of the user info array, which is tracked and increased by clicking the next button
  <br>
    - Current users will be held in the app's state and 3 additional users will be fetched every time the next button hits the end of the array of users
   <br>
    - When the array contains 100 users, no more users will be fetched
   <br><br>
  **- Click the left button to navigate back to the previous user**
   <br>
    - The left button decreases the index referencing the user info array and displays the new current display card at that index
   <br>
    - The button is disabled if the app user hits index 0 of the array, so that a user cannot refeence a negative index
  <br><br>
  **- Use the drop down menu to select a color scheme**
  <br>
    - A user is able to select a color scheme from a dropdown menu. Card backgrounds will automatically update when the color is selected
  <br>
    - If a user refreshes the page, the color scheme will stay applied to the page and show up first in the dropdown menu selection

## Goals
  - My main goal with this app was to create a hand rolled carousel/slider without using a package. I wanted to display my own logic and show that I am capable of creating clean, readble code when handling complex async JavaScript.
  - Demonstrating a successful usage of localStorage to help the color scheme change persist on pageload.
  - Displaying simple, clean styling that is uncomplicated and allows the page to still look nice and usable at any screen size.
  - Writing basic testing using an intercept with Cypress to ensure the page is loading and functioning properly.

## Future features
  - _This App was such a fun experience to work with! I have many ideas on how it could be expanded in the future._
  - Next steps: complete the responsiveness to display 3 users at once. In order to do so, I would like to use a conditional based on the size of the window that displays the mobile view logic (what is currently working on the app) OR the desktop logic (future feature)
  - _For the desktop display logic, the currentCard state would have to be an array of 3 cards instead of a single card. This could be set using the index logic, but using a .slice() method to create a new array of the current index and the following 2 cards. Instead of conditionally fetching an additional 3 users upon click of the "next" button, each click would automatically fetch the next 3 users. The previous button would navigate back to the previous 3 users._
   
   Additional future features:
   - Using Global State Management to manage state throughout the app
   - Separating App logic into more components
   - Storing userInfo using localStorage, so that users can return to the previous userInfo
   - Adding more color schemes
   - Continuing to refine styling
   - Deploying the site
   - Adding functionality so that the App user is able to click on a user's profile card and view more information about the user
   - Adding routing to this page^
   - More error handling displayed to the user
    

## Technologies used
  - React
  - React Hooks
  - Cypress Testing
  - RESTful API
  - CSS
  
## Contributors
  + [Mae Duphorne](https://github.com/maeduphorne)

