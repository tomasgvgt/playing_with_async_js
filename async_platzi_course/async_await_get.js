const fetch = require('node-fetch')
const API = 'https://api.escuelajs.co/api/v1';


async function fetchData(urlAPI){
    let response = await fetch(urlAPI);
    let data = await response.json();
    return data;
}

(async() =>{
    try{
        let products = await fetchData(`${API}/products`);
        let firstProduct = products[0];
        let category = await fetchData(`${API}/categories/${firstProduct.category.id}`);
        console.log(firstProduct);
        console.log(`First Product Name: ${firstProduct.title}`);
        console.log(`Category Name: ${category.name}`);
    }catch(error){
        console.log(error)
    }
})()