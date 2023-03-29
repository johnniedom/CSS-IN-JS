/**
 * 
Write a range function that takes two arguments, start and end, and returns
an array containing all the numbers from start up to (and including) end.
Next, write a sum function that takes an array of numbers and returns the
sum of these numbers. Run the example program and see whether it does
indeed return 55.
As a bonus assignment, modify your range function to take an optional third
argument that indicates the “step” value used when building the array. If no
step is given, the elements go up by increments of one, corresponding to the
old behavior. The function call range(1, 10, 2) should return [1, 3, 5, 7,
9]. Make sure it also works with negative step values so that range(5, 2, -1)
produces [5, 4, 3, 2].


 */

function ranger (star, end, adder){
    let add;
    if(adder)add = adder ;

}


function range (start, end ){
    let arr = []
    for (let i =0; i < end; i++ ){
       arr.push(start++)
    }
   console.log(arr);

   return arr
}

const arr = range(1,10)

function sum (arr){
   let add = 0;
   for (let i =0; i < arr.length; i++ ){

    add += arr[i]
 }
 return add
}
const total = sum(arr)
console.log(total);

export default range