//writting main function

function rpsGame(myChoise) {
    let humanChoise = myChoise.id;
    let botChoise = NumberToChoise();
    let result = finalResult(humanChoise, botChoise);
    gameFrontEnd(myChoise, botChoise, result);

    //frontend devs

    document.querySelector(".game-tagline").style.margin=0;
    document.querySelector(".game-tagline").style.display="none";
    document.querySelector(".notice").style.display="block";

   // console.log("your Choise: " + humanChoise)    //temporary 
//    console.log("Bot Choise: " + botChoise);  //temporary
   // console.log(result);    //temporary
   
}

//RANDOM BOT CHOOSING FUNCTION

function NumberToChoise() {
    const randomNumber = Math.floor(Math.random() * 3);
    return ["rock", "paper", "scissors"][randomNumber];
}


// choosing the winner

function finalResult(e, f) {
    let possibleResults = {
        'rock': { 'scissors': 0, 'rock': 1, 'paper': 2 },
        'paper': { 'scissors': 2, 'rock': 0, 'paper': 1 },
        'scissors': { 'scissors': 1, 'rock': 2, 'paper': 0 },
    };
    let theWinner = possibleResults[e][f];
    return ["Congrastulations! You Won", "you tied !", "Sorry! You lost"][theWinner];
}


// frontend function 

function gameFrontEnd(yourChoise, computerChoise, resultText) {
    let images = document.querySelectorAll(".game-image");
    let parentDiv = document.querySelector(".main-game");

    //computerChoise Database

    let botChoiseDB = {
        "rock": { "src": "images/rock.png" },
        "paper": { "src": "images/paper.png" },
        "scissors": { "src": "images/scissors.png" }
    }

    //removing all part

    for (let i = 0; i < images.length; i++) {
        images[i].remove();
    }

    //creating three divs

    let resultDiv1 = document.createElement("div");
    let resultDiv2 = document.createElement("div");
    let resultDiv3 = document.createElement("div");

    //creating images

    let humanImg = document.createElement("img");
    humanImg.src = yourChoise.src;
    humanImg.classList.add("blue-bg");

    //computer choise image

    let computerImg = document.createElement("img");
    computerImg.src = botChoiseDB[computerChoise].src;
    computerImg.classList.add("red-bg")

    //creating paragraph

    let resultParagraph = document.createElement("p");
    resultParagraph.classList.add("result-p");
    resultParagraph.innerText = resultText;

    //color of the result text

    if (resultText == "Congrastulations! You Won") {
        resultParagraph.style.color = "#06D422";
    }
    else if (resultText == "you tied !") {
        resultParagraph.style.color = "#007250";
    }
    else {
        resultParagraph.style.color = "#FF2828";
    }

    // appending the elements 

    parentDiv.appendChild(resultDiv1).appendChild(humanImg);
    parentDiv.appendChild(resultDiv2).appendChild(resultParagraph);
    parentDiv.appendChild(resultDiv3).appendChild(computerImg);

    //creating an element for reloader 
    let reloader = document.createElement("div");   // create the reloader
    reloader.classList.add("reloader");
    document.querySelector("body").appendChild(reloader);
    reloader.addEventListener("click", () => {
        location.reload();
    })
}
