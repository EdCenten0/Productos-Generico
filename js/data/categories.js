//Categories
// import fetch from "node-fetch";
const API = 'https://api.escuelajs.co/api/v1';

function fetchData(urlAPI){
    return window.fetch(urlAPI);
}

export async function getCategories(){
    return new Promise((resolve, reject) =>{
        fetchData(`${API}/categories`)
            .then((response) => response.json())
            .then((categories) =>{
                resolve(categories);
            })
            .catch((err) => reject(err));
    });
}

export async function getOneCategory(categoryId){
    return new Promise((resolve, reject) =>{
        fetchData(`${API}/categories/${categoryId}`)
            .then((response) => response.json())
            .then((category) => resolve(category))
            .catch((err) => reject(err));
    })
}

// getCategories()
//     .then((categories) => console.log(categories))
//     .catch((err) => console.log(err))