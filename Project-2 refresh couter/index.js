

//   foir client 1
 var count=0;
 var project=setInterval(project,5)


function project() {
 count++
var num1 =document.getElementById("num1").innerHTML=count;

if(count==200){
clearInterval(project)
}

}

//  for client 2

var count2=0;
var project2=setInterval(project2,5)


function project2() {
count2++
var num2 =document.getElementById("num2").innerHTML=count2;

if(count2==200){
clearInterval(project2)
}

}
//  for client 2

var count3=0;
var project3=setInterval(project3,5)


function project3() {
count3++
var num3 =document.getElementById("num3").innerHTML=count3;

if(count3==200){
clearInterval(project3)
}

}
