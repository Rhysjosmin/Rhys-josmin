const cardArray=[
    {
        name: 'fries',
        img:'images/fries.png',
    },
    {
        name: 'cheeseburger',
        img:'images/cheeseburger.png',
    },
    {
        name: 'hotdog',
        img:'images/hotdog.png',
    },
    {
        name: 'ice-cream',
        img:'images/ice-cream.png',
    },
    {
        name: 'milkshake',
        img:'images/milkshake.png',
    },
    {
        name: 'pizza',
        img:'images/pizza.png',
    },
    {
        name: 'fries',
        img:'images/fries.png',
    },
    {
        name: 'cheeseburger',
        img:'images/cheeseburger.png',
    },
    {
        name: 'hotdog',
        img:'images/hotdog.png',
    },
    {
        name: 'ice-cream',
        img:'images/ice-cream.png',
    },
    {
        name: 'milkshake',
        img:'images/milkshake.png',
    },
    {
        name: 'pizza',
        img:'images/pizza.png',
    }
]

cardArray.sort(()=>-Math.random())

const gridDisplay=document.querySelector('#grid')


function createBoard(){
    for(let i=0; i<10; i++){
        const card = document.createElement('img')
        card.setAttribute('src','images/blank.png')
        card.setAttribute('data-id',i)
        gridDisplay.appendChild(card)

    }

}
createBoard()