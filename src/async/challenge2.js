import fetch from 'node-fetch';

const API = 'https://api.escuelajs.co/api/v1';


// This generator function fetches products from the API and yields them
async function* fetchProducts(urlApi, limit) {
  let response = await fetch(`${urlApi}/products`);
  let data = await response.json();
  let count = 0;
  
  // Yield products while the count is less than the limit and there are still products available
  while (count < limit && data.length > 0) {
    yield data.shift();
    count++;
  }
}


// This function logs the yielded products to the console
const logProducts = async (urlApi, limit) => {
  try {
    for await (const product of fetchProducts(urlApi, limit)) {
      console.log(product);
    }
  } catch (error) {
    console.error(error);
  }
}

// Call the logProducts function with the API and limit
logProducts(API, 3);