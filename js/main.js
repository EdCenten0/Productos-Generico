//main.js
import { getProducts } from "./data/products.js";
import { getCategories } from "./data/categories.js";

let products = await getProducts()
                .then((APIproducts) => {
                    return APIproducts
                })
                .catch((err) => console.log(err));

let categories = await getCategories()
                .then((APIcategories) => {
                    return APIcategories
                })
                .catch((err) => console.log(err));


function assembleProducts(){
    for(let i = 0; i < 10; i++){
        const list__track = document.querySelector('.main__banner_section__carousel__list__track');
        const product = document.createElement('div');
        const product__container = document.createElement('div');
        const product__container__link = document.createElement('a');
        const product__container__link__name = document.createElement('p');
        const product__container__link__picture = document.createElement('picture');
        const product__container__link__picture__img = document.createElement('img');

        product.classList.add('main__banner_section__carousel__list__track__product');
        
        product__container__link.setAttribute('src', '#');
        product__container__link__name.innerText = products[i].title;
        
        product__container__link__picture__img.setAttribute('src', products[i].images[1]);
        
        product__container__link__picture.append(product__container__link__picture__img);
        product__container__link.append(product__container__link__name, product__container__link__picture);
        product__container.append(product__container__link);
        product.append(product__container);
        list__track.append(product);
    }
}

function assembleCategories(){
    for(let i = 0; i < 6; i++){
        const list__track = document.querySelector('.main__banner_section__carousel__list__track');
        const product = document.createElement('div');
        const product__container = document.createElement('div');
        const product__container__link = document.createElement('a');
        const product__container__link__name = document.createElement('p');
        const product__container__link__picture = document.createElement('picture');
        const product__container__link__picture__img = document.createElement('img');

        product.classList.add('main__banner_section__carousel__list__track__product');
        
        product__container__link.setAttribute('src', '#');
        product__container__link__name.innerText = categories[i].name;
        console.log(categories[i].name)
        product__container__link__picture__img.setAttribute('src', categories[i].image);
        
        product__container__link__picture.append(product__container__link__picture__img);
        product__container__link.append(product__container__link__name, product__container__link__picture);
        product__container.append(product__container__link);
        product.append(product__container);
        list__track.append(product);
    }
}

assembleProducts();
assembleCategories();