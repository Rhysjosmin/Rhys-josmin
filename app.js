window.addEventListener('load',()=>{
    const preload=document.querySelector('.preload');
    preload.classList.add('preload-finish');
    
});

var loading=[
    'An Apple A Day Makes You An Apple',
    'Chicken is Made out of Chicken',
    'labadeee labadooo',
    'Chonk Sploby',
    'Rhys is Going Crazy',
    'The old guy\'s name is Jim'

];



function newLoad(){
    var randomNumber=Math.floor(Math.random()*(loading.length));
    document.getElementById('loadingDisp').innerHTML=loading[randomNumber];
    
}
newLoad();


function enlarge(source){
    if(document.getElementById('imageCont').style.display==='flex'){
        document.getElementById('imageCont').style.display='none';
    }else if(document.getElementById('imageCont').style.display===''){
        document.getElementById('imageCont').style.display='flex';
    }else if(document.getElementById('imageCont').style.display==='none'){
        document.getElementById('imageCont').style.display='flex';
    }
    
    console.log(document.getElementById('imageCont').style.display)
    

    document.getElementById('image').src=source.src;
    
   
}

    
function unmute(){
    
    document.getElementById('showreelVid').muted=false;
   
}




