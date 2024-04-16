let randomNumber1 = Math.floor(Math.random()*6)+1;

let randomImage1Pick = 'image/dice' + randomNumber1 + '.png'

let image1 = document.querySelectorAll('img')[0];

let setAttr1 = image1.setAttribute('src', randomImage1Pick);

let randomNumber2 = Math.floor(Math.random()*6)+1;

let randomImage2Pick = 'image/dice' + randomNumber2 + '.png'

let image2 = document.querySelectorAll('img')[1];

let setAttr2 = image2.setAttribute('src', randomImage2Pick);

console.log(setAttr1);
console.log(setAttr2);

if (randomNumber1 > randomNumber2) {
    document.getElementById('outcome').innerHTML = 'player 1 wins';


} else if (randomNumber1 < randomNumber2) {
    document.getElementById('outcome').innerHTML = 'player 2 wins';

} else { document.getElementById('outcome').innerHTML ='Draw'

}














































