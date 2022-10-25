const fetch = require('node-fetch');

const API = 'https://api.escuelajs.co/api/v1'

fetch(`${API}/products`)
.then((response)=> response.json())
.then((products)=>{
    console.log(products[0]);
    return fetch(`${API}/categories/${products[0].category.id}`);
})
.then((response)=> response.json())
.then((category)=>{
    console.log(category)
})
.catch((error)=>console.error(`Errorcito: ${error}`))
