const cursor=document.getElementById("cursor")
const cursor2=document.getElementById("cursor2")
document.addEventListener('mousemove', (event) => {
    x=event.clientX
    y=event.clientY
    parallax(window.scrollY);
});
window.addEventListener("scroll",function(){
    parallax(window.scrollY);
});
function parallax(distance){
    const item = document.getElementById('graph')
    item.style.transform=`translateY(${(distance*-.1)-100}px)`
    cursor.style.transform=`translateX(${x-40}px) translateY(${y+(window.scrollY)-40}px)`
    cursor2.style.transform=`translateX(${x-30}px) translateY(${y+(window.scrollY)-30}px)`
}




async function loadProject(){
    const {default:project}= await import('./projects.json',{
        assert:{
            type:"json"
        }
    })
    AddProject(project)
}

loadProject()

function AddProject(project){
    

    

    const template=document.getElementById('PROJECT')
    const container=document.getElementById('main')
    

   
    for(var i=0;i<1000;i++)
 {

    let Name=project.Projects[i].Name
    let Description=project.Projects[i].Description
    let Activity=project.Projects[i].Activity
    let Image=project.Projects[i].Image

    let LinkA=project.Projects[i].LinkA
    let LinkAText=project.Projects[i].LinkAText

    let LinkB=project.Projects[i].LinkB
    let LinkBText=project.Projects[i].LinkBText

    let LinkC=project.Projects[i].LinkC
    let LinkCText=project.Projects[i].LinkCText


  


    content = template.content.cloneNode(true) // the true is for deep cloning
    if(i%2==1){
        content.getElementById('p').classList.add('l')
    }else{
        content.getElementById('p').classList.add('r')
    }
    content.getElementById('name').textContent=Name
    content.getElementById('text').textContent=Description
   content.getElementById('activity').classList.add(Activity)
   content.getElementById('image').src=Image



   if(LinkA!=""){
       content.getElementById('LinkA').href=LinkA
        content.getElementById('LinkA').innerText=LinkAText
        content.getElementById('LinkA').style.display='block'
   }else{

       content.getElementById('LinkA').style.display='none'
   }
  
   if(LinkB!=""){
    content.getElementById('LinkB').href=LinkB
     content.getElementById('LinkB').innerText=LinkBText
     content.getElementById('LinkB').style.display='block'
}else{

    content.getElementById('LinkB').style.display='none'
}

   
if(LinkC!=""){
    content.getElementById('LinkC').href=LinkC
     content.getElementById('LinkC').innerText=LinkCText
     content.getElementById('LinkC').style.display='block'
}else{

    content.getElementById('LinkC').style.display='none'
}
   
   
  

   


    container.appendChild(content)

    
 }
 
}





