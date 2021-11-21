export const fetchRandomUser = () => {
  return fetch('https://randomuser.me/api')
  .then((response) => response.json())
  .catch((error) => console.log(error.message));
}

export const fetchRandomUsers = () => {
  return fetch('https://randomuser.me/api/?results=9')
  .then((response) => response.json())
  .catch((error) => console.log(error.message));
}