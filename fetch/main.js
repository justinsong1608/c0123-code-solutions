// async function logJSONData() {
//   const response = await fetch('https://jsonplaceholder.typicode.com/users');
//   const jsonData = await response.json();
//   console.log(jsonData);
// }
// logJSONData();

// async function pokemon() {
//   const response = await fetch('https://pokeapi.co/api/v2/pokemon/8');
//   const jsonData = await response.json();
//   console.log(jsonData);
// }

// pokemon();

async function fetchData(request) {
  try {
    const response = await fetch(request);
    if (!response.ok) {
      throw new Error(`Network response was not OK! ${response.status}`);
    }
    const jsonData = await response.json();
    console.log(jsonData);
  } catch (err) {
    console.error('Error:', err.message);
  }
}

const userReq = new Request('https://jsonplaceholder.typicode.com/users', {
  method: 'GET'
});

const pokReq = new Request('https://pokeapi.co/api/v2/pokemon/8', {
  method: 'GET'
});

fetchData(userReq);
fetchData(pokReq);
