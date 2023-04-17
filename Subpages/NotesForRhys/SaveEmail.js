// Post a message to a channel your app is in using ID and message text
async function publishMessage(id, text) {
    try {
      // Call the chat.postMessage method using the built-in WebClient
      const result = await app.client.chat.postMessage({
        // The token you used to initialize your app
        token: "xoxb-your-token",
        channel: id,
        text: text
        // You could also use a blocks[] array to send richer content
      });
  
      // Print result, which includes information about the message (like TS)
      console.log(result);
    }
    catch (error) {
      console.error(error);
    }
  }
  
