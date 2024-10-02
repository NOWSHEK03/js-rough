// array

const myArr = [0, 1, 2, 3, 4, 5]
const myHeors = ["shaktiman", "naagraj"]

const myArr2 = new Array(1, 2, 3, 4)
// console.log(myArr[1]);

// ====================================================Array methods

// push = add element in arrys


// myArr.push(6)   
// myArr.push(7)
// myArr.pop()  note : remove last element

// myArr.unshift(9) note : add in element in first 
// myArr.shift()

// console.log(myArr.includes(9));     note ; and in boolen
// console.log(myArr.indexOf(3));      note ; and in boolen

// const newArr = myArr.join()  note : change in typeof  (in string)

// console.log(myArr);
// console.log( newArr);


// slice, splice

//console.log("A ", myArr);

const myn1 = myArr.slice(1, 3) // note : last index not include

// console.log(myn1);
// console.log("B ", myArr);


const myn2 = myArr.splice(1, 3) // note : cut element
// console.log("C ", myArr);
// console.log(myn2);

// update 

let arr = [1,2,3,4]
arr.push(7);
console.log(arr)
arr.pop(1);
console.log(arr)
arr.shift(2);    
console.log(arr)                    