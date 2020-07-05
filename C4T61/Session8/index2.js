let inpt = document.getElementById("user_input");
let btn = document.getElementById("btn")
btn.addEventListener("click", function(){
    
let number = inpt.value;
console.log(number)

if (number == 1){
 alert("tháng này có 31 ngày" )
}
else if (number == 2){
    alert("tháng này có 29 hoặc 28 ngày")
}
else if ( number == 3) {
    alert("Tháng này có 31 ngày")
}
else if ( number ==4){
    alert(" Tháng này có 30 ngày ")
}
else if( number == 5 ){
    alert("Tháng này có 31 ngày")
}
else if( number == 6){
    alert("Tháng này có 30 ngày")
}
else if( number == 7){
    alert("Tháng này có 31 ngày")
}
else if( number == 8){
    alert("Tháng này có 31 ngày")
}
else if( number === 9){
    alert("Tháng này có 30 ngày")
}
else if( number === 10){
    alert("Tháng này có 31 ngày")
}
else if( number == 11){
    alert("Tháng này có 30 ngày")
}
else {
    alert("Tháng này có 31 ngày")
}
})

