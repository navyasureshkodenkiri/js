  alert(Math.floor(Math.random() * 6));
  document.getElementById("checkguees").onclick = function(){
    var randomNumber = Math.random();
    randomNumber = randomNumber * 6;
    randomNumber = Math.floor(randomNumber);
    if(document.getElementById("guess").value == randomNumber){
        alert("well done! You got it!");
     } 
     else{
        alert("Hope! The number was" + randomNumber);
     }

  }
var tweets = ["Hi everyone!","I love coffce","night night..!"]
  for (var i =0;i < 3;i++){
    alert(tweets[i]);
  }