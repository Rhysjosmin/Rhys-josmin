




async function loadNFT(){
    const {default:NFT}= await import('./Database.json',{
        assert:{
            type:"json"
        }
    })
    AddNft(NFT,0)
}

loadNFT()

function AddNft(NFT){
    

    

    const template=document.getElementById('NFT')
    const container=document.getElementById('nft-container')
    

   
    for(var i=0;i<100;i++)
 {

    let Name=NFT.NFT[i].Name

    let Price=NFT.NFT[i].Price
    let Img=NFT.NFT[i].Img
    let Tier=NFT.NFT[i].Tier
    let Traits=NFT.NFT[i].Traits
    let Link=NFT.NFT[i].Link


    content = template.content.cloneNode(true) // the true is for deep cloning
    content.getElementById('Name').textContent=Name
    content.getElementById('price').textContent=Price
    content.getElementById('Outfit').innerHTML=Traits.Outfit
    content.getElementById('Eyewear').innerHTML=Traits.Eyewear
    content.getElementById('Background').innerHTML=Traits.Background

    content.getElementById('Vid').src=Img
    content.getElementById('N').classList.add(Tier)
    content.getElementById('nft-buy').href=Link
    

    container.appendChild(content)
 }
 
}