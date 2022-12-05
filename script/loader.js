
  window.addEventListener('load',()=>{
    Loaded()
  
  });
  
  setTimeout(Loaded,3000);
  
  
  
  function Loaded(){
      
      const preload=document.getElementById('Preloader');
      preload.style.opacity=0;
      setTimeout(e=>{
      preload.style.display='none'

      },2000)
  
  }