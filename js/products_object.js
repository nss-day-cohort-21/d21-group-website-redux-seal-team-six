//object constructor function
function makeProduct(name, image, description, price) {
	this.name = name;
	this.image = image;
	this.description = description;
	this.price = price;
}

//add data to objects
let product1 = new makeProduct(
		'Fender Telecaster',
		'../img/products/f_tele.jpg',
		'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
		'$1,119'
	);

let product2 = new makeProduct(
		'Fender Jazzmaster',
		'../img/products/f_jazz.jpg',
		'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
		'$1,119'
	);

let product3 = new makeProduct(
		'Fender Stratocaster',
		'../img/products/f_strat.jpg',
		'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
		'$1,119'
	);

let product4 = new makeProduct(
		'Gibson Firebird',
		'../img/products/g_firebird.jpg',
		'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
		'$1,119'
	);

let product5 = new makeProduct(
		'Gibson Les Paul',
		'../img/products/g_les.jpg',
		'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
		'$1,119'
	);

let product6 = new makeProduct(
		'Gibson Memphis',
		'../img/products/g_memphis.jpg',
		'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
		'$1,119'
	);

let product7 = new makeProduct(
		'Martin Jason Isbell',
		'../img/products/m_jason.jpg',
		'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
		'$1,119'
	);

let product8 = new makeProduct(
		'Martin StreetMaster',
		'../img/products/m_street.jpg',
		'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
		'$1,119'
	);

let product9 = new makeProduct(
		'Martin Ukelele',
		'../img/products/m_uke.png',
		'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
		'$1,119'
	);

//create array of objects
let productsArr = [product1, product2, product3, product4, product5, product6, product7, product8, product9];
