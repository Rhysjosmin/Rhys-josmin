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
];
var RAdverbs=[
    'Randomly',
    'Racially',
    'Rapidly',
    'Rarely',
    'Rationally',
    'Readily',
    'Realistically',
    'Really',
    'Reasonably',
    'Reassuringly',
    'Recently',
   'Recklessly',
    'Refreshingly',
    'Regardless',
    'Regionally',
    'Regretfully',
    'Regrettably',
    'Regularly',
    'Relatively',
    'Relentlessly',
    'Reliably',
   'Religiously',
    'Reluctantly',
    'Remarkably',
    'Remotely',
    'Repeatedly',
    'Repetitively'
]
var Jing=[
     'Joking',
      'Jawing',  
      'Joying',
    'Jowing',  'Juking',  'Japing',  'Jewing',  'Jibing',  'Jading', 'Jeeing', 'Jiving',
'Jigging', 'Joining',  'Jeeping',  'Jeering',  'Jelling',  'Juicing',  'Jogging',  'Jobbing',  'Jerking',  'Jessing', 'Jotting', 'Jesting', 'Jetting', 'Joshing',
'Jinxing', 'Jibbing ','Jinking','Jouking ','Jilting ','Jazzing','Jauking ','Jumping ','Jacking ','Jolting ','Justing','Junking ','Jurying ','Jamming ','Jambing ','Jailing ','Jutting ','Jarring ','Jagging ','Judging ','Jabbing ','Jugging ','Jauping ','Jingling ','Joisting ','Jollying','Jointing ','Justling','Jangling','Joggling ','Juttying ','Jimmying ','Jettying ','Jaunting ','Jemmying ','Juggling ','Jauncing ','Jousting ','Jumbling ','Jellying ','Jeweling ','Jouncing ','Jiggling ','Jostling ','Juddering ','Junketing ','Joyriding ','Jawboning ','Japanning ','Jewelling ','Jiggering ','Jabbering','Jigsawing ','Jittering ','Jockeying ','Jacketing ','Jargoning ','Jaundicing ','Jugulating ','Jarovizing','Julienning ','Japanizing ','Jaculating ','Justifying ','Javelining ','Jointuring ','Jaywalking ','Jubilating ','Jellifying ','Joypopping ','Jeoparding','Journeying','Jollifying','Jettisoning','Jackknifing ','Jargonizing ','Juxtaposing ','Jackrolling','Jeopardizing ','Jeopardising ','Journalizing ','Jitterbugging','Jackhammering'
]

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function newLoad(){
    var choose=((Math.random()*2)-1)
    var randomNumber=Math.floor(Math.random()*(loading.length));
    var randomNumberR=Math.floor(Math.random()*(RAdverbs.length));
    var randomNumberJ=Math.floor(Math.random()*(Jing.length));
    if(choose>0){
        document.getElementById('loadingDisp').innerHTML=loading[randomNumber];
    }
    if(choose<0){
    document.getElementById('loadingDisp').innerHTML=RAdverbs[randomNumberR]+' '+Jing[randomNumberJ].trim();    
    }
    
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




