window.addEventListener('load',()=>{
    const preload=document.querySelector('.preload');
    preload.classList.add('preload-finish');
    
})

var loading=[
    'An Apple A Day Makes You An Apple',
    'Chicken is Made out of Chicken',
    'labadeee labadooo',
    'NFTs Were Once Cool',
    'Chonk Sploby',
    'Rhys is Going Crazy',
    'My Money Don\'t Jiggle Jiggle',
    'The old guy\'s name is Jim'

]

function newLoad(){
    var randomNumber=Math.floor(Math.random()*(loading.length));
    document.getElementById('loadingDisp').innerHTML=loading[randomNumber]
}
newLoad();
