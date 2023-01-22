function copyCode(element){
element.classList.add('Copied')
navigator.clipboard.writeText(element.innerText)
setTimeout(()=>{
    element.classList.remove('Copied')
},1500)
PopupAlert("Copied " );

}
const textResponses = [
    "Great to see you again!",
    "It's always a pleasure to see you.",
    "Welcome back!",
    "I've been waiting for you.",
    "Glad you're here!",
    "It's like you never left.",
    "I'm so excited to see you again!",
    "I've been thinking about you.",
    "I'm so happy you're back!",
    
   
    "I'm glad you're here.",
    "So good to see you!"
]
const emojis = [
    "😃",
    "😊",
    "😎",
    "😜",
    "😄",
    "😍",
    "😎",
    "😘",
    "😃",
    "😊",
    "😄",
    "🤗",
    "😃",
    "😊",
    "😎",
    "(*￣3￣)╭",
    "o(￣┰￣*)ゞ",
    "(*^ω^*)",
    "(o^▽^o)",
    "（＾Ｕ＾）",
    "(✿◠‿◠)",
    "╰(✿˙ᴗ˙✿)╯",
    "( ͡° ͜ʖ ͡°)",
    "(✿◠‿◠)ﾉ",
    "( ͡° ͜ʖ ͡°)"
]


    var randomIndex = Math.floor(Math.random() * textResponses.length);
    var text=textResponses[randomIndex]
    randomIndex = Math.floor(Math.random() * emojis.length);
    var emoji=emojis[randomIndex]
 



setTimeout(()=>{

    let utterance = new SpeechSynthesisUtterance("Hi Rhys");
    speechSynthesis.speak(utterance);

    PopupAlert("Hi Rhys " );
},500)

setTimeout(()=>{
    let utterance = new SpeechSynthesisUtterance(text);
    speechSynthesis.speak(utterance);
    PopupAlert(text+' '+emoji );

},3000)


function truncate(str, n){
    return (str.length > n) ? str.slice(0, n-1) + '....':str;
  };

function Expand(element){
    // const element2=document.getElementById('')
    document.getElementById('Hero').children[1].style.opacity=0
   element.innerText='‎ '
   element.style.backgroundColor=`#111111`
    element.style.transform=`scale(10000%)`
    // element.
   
}


