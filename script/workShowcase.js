const workDiv=document.getElementById('workShowCase')

const Images=[
    './Media/Images/Deathless.png',
'./Media/Images/Troll.jpg',
'./Media/Images/BlueRobot.jpg',

]
for(let i=0;i<Images.length;i++){
    var img=new Image()
    img.src=Images[i]
    img.style.width='200px'
    img.style.borderRadius='3px'
    img.style.left=`${Math.random()*100}%`
    img.style.top=`${Math.random()*100}%`
    workDiv.appendChild(img)
}

setInterval(AnimateImage ,3000)
 

function AnimateImage() {
    for (let i = 1; i < Images.length + 1; i++) {
        var GalleryImage = workDiv.childNodes[i]
        GalleryImage.style.opacity = 1
        setInterval(RandomLoc(GalleryImage),1000)
 
    }
}

function RandomLoc(GalleryImage) {
    GalleryImage.style.left = `${Math.random() * 100}%`
    GalleryImage.style.top = `${Math.random() * 100}%`
    // GalleryImage.style.opacity = 0
}

