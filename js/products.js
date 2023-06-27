//Products.js
export const getProducts = async () => {
    const response = await fetch('https://api.escuelajs.co/api/v1/products');
    const products = await response.json();
    return products
};

