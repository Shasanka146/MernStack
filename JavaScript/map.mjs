//map loop
//map is apply only in array and it return new array
/* let ar1=[10,20,30,40,50];
let ar=ar1.map((item,i)=>{
    return (item -10 )*10;
});
console.log(ar);

//doubling the item in array
let A2=[10,20,30]
let A3=A2.map((item,i)=>{
    return item*2;
});
console.log(A3);
 */




let users=[
    {name:"shasank",age:19},
    {name:"priya",age:20},
    {name:"kamal",age:21}
];
let name=users.map((item,i)=>{
    return item.name;
});
console.log(name);




/* //if greater then 18 multiplynby 2 otherwise multiply by zero
let ar1=[1,2,3,4,5];
let ar2=ar1.map((item,i)=>{
    if(item>18)
    {
        return item*2;
    
    }
    else
        return item *0;
    
});
console.log(ar2); */