const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
const API = 'https://api.escuelajs.co/api/v1';

//Fetches data from an API using XMLHttpRequest library
function fetchData(urlAPI, manageData){
    const xhr = new XMLHttpRequest();

    xhr.open('GET', urlAPI);
    xhr.onreadystatechange = (event) =>{ 
        if(xhr.readyState === 4){
            if(xhr.status === 200){
                manageData(JSON.parse(xhr.responseText), null);
            }else{
                let error = new Error('There was an error');
                return manageData(null, error)
            }
        }
    }
    xhr.send()
}

//1. Fetch all the information of the first product in products.
//2. Fetch all the information from the category of the first product.
fetchData(`${API}/products`, (data1, error1)=>{
    if(data1){
        let firstProduct = data1[0];
            fetchData(`${API}/categories/${data1[0].category.id}`, (data2, error2)=>{
                if(data2){
                    let category = data2;
                    console.log()
                    console.log(firstProduct);
                    console.log(category);
                }else if(error2){
                    return console.error(error2);
                }
            })
    }else if(error1){
        return console.error(error1);
    }
})