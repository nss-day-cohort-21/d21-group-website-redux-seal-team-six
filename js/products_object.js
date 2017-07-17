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
		'VHS biodiesel blue bottle skateboard banjo air plant fam chia coloring book mumblecore polaroid.',
		'$1,119'
	);

let product2 = new makeProduct(
		'Fender Jazzmaster',
		'../img/products/f_jazz.jpg',
		'Palo santo literally four loko whatever shabby chic cold-pressed poutine raw denim.',
		'$2,139'
	);

let product3 = new makeProduct(
		'Fender Stratocaster',
		'../img/products/f_strat.jpg',
		'Flannel chillwave put a bird on it ramps, pabst godard bicycle rights umami succulents gochujang mumblecore adaptogen lo-fi kale chips.',
		'$5,119'
	);

let product4 = new makeProduct(
		'Gibson Firebird',
		'../img/products/g_firebird.jpg',
		'Synth subway tile celiac, sustainable dreamcatcher pickled messenger bag poutine snackwave.',
		'$2,139'
	);

let product5 = new makeProduct(
		'Gibson Les Paul',
		'../img/products/g_les.jpg',
		'Migas four loko vegan, tumeric XOXO cardigan fixie umami jianbing jean shorts distillery lo-fi bicycle rights.',
		'$6,129'
	);

let product6 = new makeProduct(
		'Gibson Memphis',
		'../img/products/g_memphis.jpg',
		'Kale chips fashion axe schlitz pork belly beard neutra literally williamsburg.',
		'$3,119'
	);

let product7 = new makeProduct(
		'Martin Jason Isbell',
		'../img/products/m_jason.jpg',
		'Knausgaard taiyaki disrupt pinterest plaid.',
		'$1,009'
	);

let product8 = new makeProduct(
		'Martin StreetMaster',
		'../img/products/m_street.jpg',
		'Vegan keytar knausgaard neutra, squid everyday carry pinterest. Knausgaard paleo yr portland deep v godard selfies kale chips. ',
		'$5490'
	);

let product9 = new makeProduct(
		'Martin Ukelele',
		'../img/products/m_uke.png',
		'Drinking vinegar pabst butcher edison bulb godard.',
		'$839'
	);

//create array of objects
let productsArr = [product1, product2, product3, product4, product5, product6, product7, product8, product9];
