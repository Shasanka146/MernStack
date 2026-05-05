//if-else loop
/*let age = prompt("enter your age");
if(age<=18)
{
    console.log("you can vote");
    
}
else 
{
    console.log("you cannot vote");
}
*/


//print he for male ,she for female and they for other   
/* let gender='other';

if(gender==="male")
{
    console.log("he")
}
else if(gender==="female")
{
    console.log("she");

}
else{
    console.log("they");
} */




//define arrow function
/* let fun1=()=>{
    console.log("this is an arrow function");
};
console.log("a");
fun1;//this is not right way to call function
console.log("b");
fun1();

 */


//passing value in function
/* let info=(name,surname,ward) => {
    console.log(name,surname,ward);

};
//info("shasank","acharya",5);
//info("kamal","rokaya",6); 
info("shasanka");
 */




/* let info = (name ="shasank",surname="acharya",ward=5) => {
    console.log(name,surname,ward);
};
info("shasank","acharya",5);
info("kamal","rokaya",6); 
info("shasanka");
 */



//returntype 
//function without return
//func()
//function with return
/* let info = () => {
    console.log("A");
    return "b";
    console.log("C");
};
let i=info();
console.log(i);
 */




/* make a function named canvote
pass one input,
if the input is equalor greater then 18 return can vote 
else return cannot vote */


/* let canVote =(i1) => {
    if (i1 >= 18)
        return "can vote";
    else
        return"cannot vote";
};
let _canVote = canVote(10);
console.log(_canVote); */


/* make a function name prepo
it takes one input
if input is male -> return he
if input is female -> return she
else return they */

/* 
let prepo = (i2) => {
    if (i2 ==="male")
        return "he";
    else if (i2 ==="female")
        return "she";
    else
        return "they";
};
let _prepo = prepo("bibek");
console.log(_prepo); */