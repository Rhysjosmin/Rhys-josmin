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
    'The old guy\'s name is Jim',
    'some random phrase',
    'Eat your vegetables',
];



function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

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
    document.getElementById('showreelVid').volume=0.03;
    document.getElementById('mute').style.display='block';
    document.getElementById('unmute').style.display='none';
   
}

function mute(){
    
    document.getElementById('showreelVid').muted=true;
    document.getElementById('showreelVid').volume=0.01;
    document.getElementById('mute').style.display='none';
    document.getElementById('unmute').style.display='block';
    
}



