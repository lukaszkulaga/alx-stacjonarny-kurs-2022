

const photoTab = [
    'https://www.wprost.pl/_thumb/8f/9e/4626141785c4c4bbc93d12b7caba.jpeg',
    'https://image.ceneostatic.pl/data/products/96367547/i-chicco-interaktywny-piesek-lucky.jpg',
    'https://fafikowo.com.pl/wp-content/uploads/2021/02/zeby_piesek1-1024x682.jpg'
];

let count = 0;


const slider_button_next = document.querySelector('#slider_button_next');
const slider_button_prev= document.querySelector('#slider_button_prev');
const imgPhoto = document.querySelector('#imgPhoto');

imgPhoto.src = photoTab[count];

const handleSubmitNext = () => {

    count ++;

    if (count === photoTab.length) {
        count = 0;
    }

    imgPhoto.src = photoTab[count];
};

const handleSubmitPrev = () => {

    count --;
    
    if (count === -1) {
        count = photoTab.length-1;
    }

    imgPhoto.src = photoTab[count];
};

slider_button_next.addEventListener('click', handleSubmitNext);
slider_button_prev.addEventListener('click', handleSubmitPrev);