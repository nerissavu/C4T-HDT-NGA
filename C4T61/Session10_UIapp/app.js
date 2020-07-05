//1. Generate colors
var rightColorIndex
var score = 0
function generateColors(){

   var r = Math.floor(Math.random()*255);
   var g = Math.floor(Math.random()*255);
   var b = Math.floor(Math.random()*255);

   var rightColorString =`rgb(${r},${g},${b})`;

   var colorStringEl = document.getElementById("color_string");
   colorStringEl.textContent = rightColorString;

   var ballContainerEl = document.getElementById("ball_container");
   ballEls = ballContainerEl.getElementsByClassName("ball")

   rightColorIndex = Math.floor(Math.random()*3)
   ballEls[rightColorIndex].style.backgroundColor = rightColorString;
 
   for (var i = 0;i < ballEls.length; i++ ){
      if (i != rightColorIndex) {
         var error1 = Math.random()*100 +25;
         var x = Math.random ();
         if (x>0.5){
         error1=-error1
         }

         var error2 = Math.random()*100 +25;
         var x = Math.random ();
         if (x>0.5){
         error2=-error2
         }

         var error3 = Math.random()*100 +25;
         var x = Math.random ();
         if (x>0.5){
         error3=-error3
         }
         var wrongColorString =`rgb(${r+error1},${g+error2},${b+error3})`
         ballEls[i].style.backgroundColor = wrongColorString
        }
    }
}

function setupEvents(){
   var ballContainerEl = document.getElementById("ball_container")
   var BallEls = ballContainerEl.getElementsByClassName("ball");
   for(var i = 0; i < ballEls.length; i++){
      ballEls[i].addEventListener("click",function(e){
         var ball = e.target;
         var ballIndex = ball.getAttribute("index")
         if (ballIndex == rightColorIndex){
            score++;
            console.log(score)
         }else {
            score = 0
            console.log(score)
         }
         var scoreEl = document.getElementById("score")
         scoreEl.textContent = `SCORE: ${score}`
         generateColors();
      })
   }

}

generateColors();

setupEvents();