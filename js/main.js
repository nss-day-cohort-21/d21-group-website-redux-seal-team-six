let container = document.getElementById('products-container');

for (let i = 0; i < productsArr.length; i++) {
	let product = document.createElement('div');  //create div element
	product.className = 'product-card';
	product.innerHTML = `
			<h3>${productsArr[i].name}</h3>
			<img src="${productsArr[i].image}" alt="${productsArr[0].name}" class="products-img">
			<p class="description">${productsArr[i].description}</p>
			<p class="price">${productsArr[i].price}</p>
		`;
	container.appendChild(product);
	console.log('working');
}


