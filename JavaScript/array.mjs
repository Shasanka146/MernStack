/* //index in array
let array=["shasank","kamal",false,"Riya",30];
console.log(array);
console.log(array[0]);
console.log(array[1]);
console.log(array[2]);
console.log(array[3]);
console.log(array[4]);

//changing the value of array
array[3]="Rio";
console.log(array);

//push or pop from last element of array
array.push("Irrisha")
console.log(array);

 array.pop("Rio");
console.log(array);


//push or pop from first element of an array
array.unshift("priya");
console.log(array);

array.shift("priya");
console.log(array);
 */


//making object in array
//let array1=["shasank",19,true];
let array1={
    name:"shasank",
    age:19,
    isDeveloper:true
};
console.log(array1);
console.log(array1.name);
array1.age=20;
console.log(array1.age);

//adding address in array
array1.Address="Kathmandi";
console.log(array1.Address);


//delete age from array
delete array1.age;
console.log(array1);





