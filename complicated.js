function playerGuess(){
    var secretNum = 100;
    let guess = document.getElementById("guess1").value;
    var userGuess = guess;
    if (userGuess == secretNum){
      alert("Password Protected Information: killer.html ")

      
    }
    else if(userGuess < secretNum){
      alert("Go Higher!")
     }
    else if(userGuess > secretNum){
      alert("Go Lower!")
      }
  }
  
  function player2Guess(){
    let secret = document.getElementById("newSecret").value;
    var secret2Num = secret;
    let guess2 = document.getElementById("guess2").value;
    var user2Guess = guess2;
    if (user2Guess == secret2Num){
      alert("Congrats, You got it!")
      
    }
    else if(user2Guess < secret2Num){
      alert("Go Higher!")
     }
    else if(user2Guess > secret2Num){
      alert("Go Lower!")
      }
  }
  