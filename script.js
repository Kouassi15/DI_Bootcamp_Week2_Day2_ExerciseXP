/*Exercises1 */
let X = prompt("Entrez un premier nombre");
let y = prompt("Entrez un second nombre");

if (Number(X)>Number(y))
{
   alert(X + " is the biggest number than "+ y);
}else if(Number(X) == Number(y)){
    alert(X + " is egal to "+ y)
}else{
    alert(X + " is the smaller number than "+ y) ;
}
//////////////////////////////////////////////////////////////

/*Exercises2 */
let newDog = "Chihuahua";
console.log("the number of letters in Chihuahua is "+ newDog.length);
console.log(newDog.toUpperCase())
console.log(newDog.toLowerCase())
if(newDog == "Chihuahua"){
    console.log("I love Chihuahuas, it’s my favorite dog breed");
}else{
    console.log("I dont care, I prefer cats");
}
///////////////////////////////////////////////////////
/*Exercises3*/
let a = prompt("Entrez un nombre");
if(a%2==0){
    alert(a+ " is an even number");
}else{
    alert(a + " is an odd number");
}
//////////////////////////////////////////////////////////
/*Exercices4*/
const users = ["Lea123", "Princess45","Lea123", "Princess45","Lea123", "Princess45", "cat&doglovers", "helooo@000"];

if(users.length == 0)
{
    console.log("no one is online")
}else if(users.length == 1)
{
    console.log(users[0] + " is online")
}else if(users.length == 2){
    console.log(users[0] +" and " +users[1] + " are online")
}else {
    console.log(users[0] +" , " +users[1] + " and " + (users.length - 2) +" more are online")
}
