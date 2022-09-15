const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const pics = [
    'pic1.jpg',
    'pic2.jpg',
    'pic3.jpg',
    'pic4.jpg',
    'pic5.jpg',
];

/* Declaring the alternative text for each image file */
const altTxt = [
    'a close up pictire of a blue human eye',
    'a picture of a rock',
    'a picture of purple and white flowers',
    'a picture of Egyptian hieroglyphs',
    'a close up picture of a butterfly resting on a leaf',
];

/* Looping through images */
for (i = 0; i < pics.length; i++) {
    const newImage = document.createElement('img');
    newImage.setAttribute('src', `img/${pics[i]}`);
    newImage.setAttribute('alt', 'altText[i]');
    thumbBar.appendChild(newImage);
    thumbBar.addEventListener('click', (event) => {
        
    })
    }

/* Wiring up the Darken/Lighten button */
btn.addEventListener('click', (event => {
    if(btn.getAttribute('class', 'dark') {
        btn.setAttribute('class', 'light');
        btn.textContent = 'Lighten';
        overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
    } else {
        btn.setAttribute('class', 'dark');
        btn.textContent = 'Darken';
        overlay.style.backgroundColor = 'rgba(0, 0, 0, 0, 0)';
    })
}))