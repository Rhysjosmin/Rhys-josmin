window.addEventListener('load',()=>{
    const preload=document.querySelector('.preload');
    preload.classList.add('preload-finish');
    
})

var loading=[
    'Welcome To Rhys\' Website',
    'Yo!',
    'Busy Eating',
    'An Apple A Day Makes You An Apple',
    'Chicken is Made out of Chicken',
    'labadeee labadooo'
]

function newLoad(){
    var randomNumber=Math.floor(Math.random()*(loading.length));
    document.getElementById('loadingDisp').innerHTML=loading[randomNumber]
}
newLoad();
