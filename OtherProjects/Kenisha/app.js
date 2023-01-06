
let container;
let camera;
let renderer;
let scene;
let pad;
let CamX=0;
let CamY=0;
let CamZ=0;
let i=0;
let speed=0.2;

function rad(degrees)
{
  var pi = Math.PI;
  return degrees * (pi/180);
}





function init(){
    container=document.querySelector('.scene');


    scene=new THREE.Scene();

    const fov =35;
    const aspect =container.clientWidth/container.clientHeight;
    const near =0.01;
    const far =500;

    const gridHelper = new THREE.GridHelper( 1, 10 );

    scene.add( gridHelper );

    scene.background = new THREE.CubeTextureLoader()
    .setPath( './CubeMap/' )
    .load( [
      'px.png',
      'nx.png',
      'py.png',
      'ny.png',
      'pz.png',
      'nz.png'
    ] );

    //Camera Setup
  camera= new THREE.PerspectiveCamera(fov,aspect,near,far)
    camera.position.set(.8,1.5,0);
    camera.rotation.set(rad(0),rad(90),rad(0))

    const ambient =new THREE.AmbientLight(0x404040,1);
    scene.add(ambient)
    
    const light=new THREE.DirectionalLight(0XFFaa88,2);
    light.position.set(0,1,1)
    scene.add(light);

    renderer=new THREE.WebGLRenderer({antialias:true,alpha:true});
    renderer.setSize(container.clientWidth,container.clientHeight);
    renderer.setPixelRatio(window.devicePixelRatio);

    container.appendChild(renderer.domElement);

    const controls = new THREE.OrbitControls( camera, renderer.domElement );




    //load model
    let loader =new THREE.GLTFLoader();
    loader.load("./Pad.gltf",function(gltf){
        scene.add(gltf.scene);
        pad= gltf.scene;
        renderer.render(scene,camera);
        animate();

    })
    

}

function animate(){

    i+=speed;
    requestAnimationFrame(animate);
    pad.rotation.y+=speed/20;
    pad.children[0].position.y=Math.sin(1.8+i/20)/100;
    pad.children[1].position.y=.25+Math.sin(2+i/20)/15;
    pad.children[2].position.y=.25+Math.sin(2.2+i/20)/15;
    pad.children[3].position.y=.25+Math.sin(2.4+i/20)/15;
    pad.children[4].position.y=.25+Math.sin(2.8+i/20)/15;
    pad.children[5].position.y=.25+Math.sin(3+i/20)/15;
    renderer.render(scene,camera)
}

init();







