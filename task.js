var num = Math.floor(Math.random()* 101);
var user_num;



console.log(num);


    var guess =1;

    var a =6;
    document.getElementById("check").onclick = function(){
    
        user_num = document.getElementById("first").value ;
        
        if(user_num > 100){
            alert("please enter number in-between 0 to 100");
        }
        if(num == user_num){
            document.getElementById("result").innerHTML = "you won the game and guesses are :- " + guess;
            a =6;
            guess = 1;
         }

         else if(user_num > num){
            document.getElementById("result").innerHTML = "you entered larger number";
            a--;
            document.getElementById("remaining").innerHTML = "remaining chance : " + a;
         }
         else if(user_num < num){
            a--;
            document.getElementById("result").innerHTML = "you entered smaller number";
            document.getElementById("remaining").innerHTML = "remaining chance : " + a;
         }
        

        if(guess ==6){
            a--;
            document.getElementById("remaining").innerHTML = "remaining chance : " + a;
            document.getElementById("result").innerHTML = "you lost the game! Better luck for next time ";
            guess =1;
            a=6;
        }
        guess++;
        } 
    

    

      




     


      
  
      

      
       
      
     
