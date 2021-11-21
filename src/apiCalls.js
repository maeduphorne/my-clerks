export const fetchRandomUser = () => {
  return fetch('https://randomuser.me/api')
  .then((response) => response.json())
  .catch((error) => console.log(error.message));
}
