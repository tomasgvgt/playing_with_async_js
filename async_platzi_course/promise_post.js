const fetch = require('node-fetch');

const API = 'https://api.escuelajs.co/api/v1';

const content = {
    "title": "Time machine",
    "price": 999,
    "description": "A machine to travel in time and space",
    "categoryId": 1,
    "images": ["https://placeimg.com/640/480/any"]
}

fetch(`${API}/products`, {
    method: 'POST',
    body: JSON.stringify(content),
    headers: {'Content-Type': 'application/json'}
})
.then(response=>response.json())
.then(json=>console.log(json))
.catch(error=>console.error(error))