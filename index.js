let button = document.querySelector('button');
let img1 = document.querySelector('.img1');
let img2 = document.querySelector('.img2');
let h1 = document.querySelector('h1');
let images = [
    [1,"/images/dice1.png"],
    [2,"/images/dice2.png"],
    [3,"/images/dice3.png"],
    [4,"/images/dice4.png"],
    [5,"/images/dice5.png"],
    [6,"/images/dice6.png"]
];
button.addEventListener('click',()=>{
    let random1 = Math.floor(Math.random()*6+1);
    let random2 = Math.floor(Math.random()*6+1);
    img1.setAttribute('src',`${images[random1][1]}`);
    img2.setAttribute('src',`${images[random2][1]}`);
    if(random1 > random2){
        h1.innerText = 'Player 1 WIN!'
    }else if(random1 < random2){
        h1.innerText = 'Player 2 WIN!';
    }else{
        h1.innerText = 'DRAW!';
    }
})