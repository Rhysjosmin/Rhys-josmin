// Post a message to a channel your app is in using ID and message text
function publishMessage() {
             const Name=document.getElementById('Name').value
             const Email=document.getElementById('Email').value

             console.log(Name)
             console.log(Email)
    fetch(`http://127.0.0.1:5000/PostMessage/${"------------------ \n New Email :tada:"}`).then(()=>{
      fetch(`http://127.0.0.1:5000/PostMessage/Name=${Name}`)
      fetch(`http://127.0.0.1:5000/PostMessage/Email=${Email}`)


    })
  }
  // publishMessage()
