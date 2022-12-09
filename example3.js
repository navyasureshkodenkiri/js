   var myArray = new Array();
   myArray[0] = "pizza"
   myArray[1] = "chocolate";
   var tweets = ["Morning everybody!","I Love coffee!"]
   
   // document.write(tweets[1]);
   // document.write(myArray[0]);
   tweets.push("Back to work!");
   tweets.splice(1,0,"cornflakes for breakfast","biscutes");
   console.log(tweets);

   var x =1;
   if (x==1) {
      alert("x is 1!!");
         } else {
            alert("x is not 1!!");
         }

         document.getElementById("checkmagicword").onclick = function() {
            var magicwordEntered = document.getElementById("magicword").value;
            var magicword = "abracadara";
            if (magicwordEntered == magicword){
               alert("You got it");
               }else {
                  alert("Hope, try again");

               }
            
         }