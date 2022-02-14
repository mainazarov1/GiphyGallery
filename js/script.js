const auth = 'pB575KEXpn5FPEcsbYPwxA86XWtsQ2PO';

const input = document.querySelector('#header__input');
const search = document.querySelector('#header__search');
const gallery = document.querySelector('.gallery__grid');
let query = '';

// input.addEventListener('input', (e) => {
// 	e.preventDefault();
// })


search.addEventListener('click', (e) => {
	e.preventDefault();
	gallery.innerHTML = '';
	query = input.value;
	getData(query);
})
// input.addEventListener('keypress', (e) => {
// 	if (e.key == 'Enter') {
// 		getImages();
// 	}
// })
async function getData(query) {
	let res = await fetch(`http://api.giphy.com/v1/gifs/search?q=${query}&api_key=${auth}&limit=30`);
	let data = await res.json();
	data = data.data;
	data.map(el => showData(el))
}
// getData(query)
function showData(dataImage) {
	const image = document.createElement('div');
	image.classList.add('gallery__image')
	image.innerHTML = `<img src="${dataImage.images.preview_webp.url}" alt="${dataImage.images.title}">`;

	// image.classList.add('gallery__image');
	// image.src = dataImage.urls.regular;
	// image.alt = `image`
	gallery.appendChild(image);
}