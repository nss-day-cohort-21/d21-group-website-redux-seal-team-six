//select container div on page
let container = document.getElementById('products-container');

//loop through products object
for (let i = 0; i < productsArr.length; i++) {
	let product = document.createElement('div');  //create div element
	product.className = 'product-card';  //add class .product-card
	product.innerHTML = `
			<h3>${productsArr[i].name}</h3>
			<img src="${productsArr[i].image}" alt="${productsArr[i].name}" class="products-img">
			<p class="description">${productsArr[i].description}</p>
			<p class="price">${productsArr[i].price}</p>
		`;
	container.appendChild(product);  //append div.product card to page
}