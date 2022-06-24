document.addEventListener("DOMContentLoaded", () => {
  const inputField = document.getElementById("input");
  inputField.addEventListener("keydown", (e) => {
    if (e.code === "Enter") {
      let input = inputField.value;
      inputField.value = "";
      output(input);
    }
  });
});

function output(input) {
  let product;

  let text = input.toLowerCase().replace(/[^\w\s]/gi, "").replace(/[\d]/gi, "").trim();
  text = text
    .replace(/ a /g, " ")   
    .replace(/i've /g, "")
    .replace(/whats/g, "what is")
    .replace(/pls /g, "please")
    .replace(/ u /g, "you")
    .replace(/r u/g, "are you");

  if (compare(prompts, replies, text)) { 
    // Search for exact match in `prompts`
    product = compare(prompts, replies, text);
  } else if (text.match(/thank/gi)) {
    product = "You're welcome!"
  } 
  
  else if (text.match(/(cancer|tumor)/gi)) {
    // If no match, check if message contains `camcer/tumor`
    product = cancer [Math.floor(Math.random() * cancer.length)];
  }

  else if (text.match(/(gastritis|appetite)/gi)) {
      // If no match, check if message contains `gastritis/appetite`
      product = gastritis [Math.floor(Math.random() * gastritis.length)];
  }

      else if (text.match(/(ok|okay|alright|ah|k)/gi)) {
        // If no match, check if message contains `ok, alright`
        product = agree [Math.floor(Math.random() * agree.length)];
      }
        else if (text.match(/(no)/gi)) {
          // If no match, check if message contains `no`
          product = no [Math.floor(Math.random() * no.length)];

  } else {
    // If all else fails: random alternative
    product = alternative[Math.floor(Math.random() * alternative.length)];
  }

  // Update DOM
  addChat(input, product);
}




function compare(promptsArray, repliesArray, string) {
  let reply;
  let replyFound = false;
  for (let x = 0; x < promptsArray.length; x++) {
    for (let y = 0; y < promptsArray[x].length; y++) {
      if (promptsArray[x][y] === string) {
        let replies = repliesArray[x];
        reply = replies[Math.floor(Math.random() * replies.length)];
        replyFound = true;
        break;
      }
    }
    if (replyFound) {
      break;
    }
  }
  return reply;
}




function addChat(input, product) {
  const messagesContainer = document.getElementById("messages");


  let userDiv = document.createElement("div");
  userDiv.id = "user";
  userDiv.className = "user response";
  userDiv.innerHTML = `<img src="user1.png" class="avatar"><span>${input}</span>`;
  messagesContainer.appendChild(userDiv);
  let botDiv = document.createElement("div");
  let botImg = document.createElement("img");
  let botText = document.createElement("span");
  botDiv.id = "bot";
  botImg.src = "Botav.png";
  botImg.className = "avatar";
  botDiv.className = "bot response";
  botText.innerText = "Typing...";
  botDiv.appendChild(botText);
  botDiv.appendChild(botImg);
  messagesContainer.appendChild(botDiv);
  // Keep messages at most recent
  messagesContainer.scrollTop = messagesContainer.scrollHeight - messagesContainer.clientHeight;

  // Fake delay to seem "real"
  setTimeout(() => {
    botText.innerText = `${product}`;
    textToSpeech(product)
  }, 2000
  )
}

