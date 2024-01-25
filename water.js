var winner="";
var rand="";
function start(){
    let name=prompt("Please enter the name","Devid");
    if(name!=null){
    winner=name;
    document.getElementById("user").innerHTML="WELCOME! "+name;
    }
};
function play(){
    let arr=['s','w','g','S','W','G'];
     rand=arr[Math.floor(Math.random()*6)]; // math.random() function return the value between 0--1 (0 included and 1 execluded)
    document.getElementById("computer").innerHTML=rand;
};
function result(){
var input=document.getElementById("person").value;
console.log(input);
if(rand==input){
    alert("GAME TIE");
}
else if((rand=='w' && input=='s') || (rand=='W' && input=='S') || (rand=='W' && input=='s')){
    alert("congratulations !! "+winner+" you wins");
}
else{
    alert("you lose!!")
}
}