function reverseString(food){
    
    console.log(reverseString(food).reverse())
}
let food="eating"
reverseString(food)

// Write a function that takes in the following array and consoles the target if it is found else
// null
// let num = [2,8,0,23,5,45,76]
// Target = 23
function divideArr(num){
    if(num.length<=1){
        return num
    }
    let middle=Math.floor(num.length/2);
    let left=num.slice(0,middle);
    let right=num.slice(middle);
    console.log(left);
    console.log(right);
    return sortedArr(divideArr(left),divideArr(right));
}
function sortedArr(left,right){
    let emptyArr=[];
    while(left.length && right.length){
        if(left[0]<right[0]){
            emptyArr.push(left.shift())
        }
        else{
            emptyArr.push(right.shift())
        }

    }
    console.log(emptyArr)
    return[...emptyArr,...left,...right]
}
let num = [2,8,0,23,5,45,76]
console.log(divideArr)

function binarySearch(num,target){
    let left=0;
    let right=num.length-1;
    while(left<=right){
        middle=Math.floor((left+right)/2);
        if(num[middle===target]){
            return middle;
        }
        else if(num[middle>target]){
            right=middle-1
        }else{
            left=middle+1
        }
    }
    return null;
}
let num1 = [2,8,0,23,5,45,76];
let target=23;

const sortedNum=divideArr(num,target)
const bin=binarySearch(divideArr,num)
console.log(binarySearch(num,target))
console.log(divideArr(num))

// Given years between 2000 and 2023, console all the leap years in the following
// sentence, i.e “2020 is a leap year” if not console log i.e “2001 is not a leap year”
let years=[2000,2001,2002,2003];
for(let year in years)
if(year%2==0){
    console.log("is a leap year")

}
else{
    console.log("is not a leap year")
}
// Given a range of numbers from 0 to 100, console”Fizz” if the numbers are divisible by 3,
// “Buzz” if the numbers are divisible by 5, and “FizzBuzz” if divisible by both 3 and 5.
let numbers=[1-100]
for(let number in numbers){
    if(number%3==0 && number%5==0){
        console.log("FizzBuzz")
    }
    else if(number %3==0){
        console.log("Fizz")
    }
    else{
        console.log("Buzz")
    }
}

// Write a function that takes in an array of numbers and returns an array that has all
// elements multiplied by 4.
// let numArray = [12,87,45,75,23,64,73]
function ArrayNum(numArray){
 let r=[];
 numArray.forEach(function(numm){
r.push(numm*4)
  })
  console.log(r)
}
let numArray = [12,87,45,75,23,64,73]
ArrayNum(numArray)


// Write a function that takes in an array of strings and returns an array with every element
// turned into a number
// let nums = [“10”,”24”,”45”,”56”,”67”]
function ArrayStrings(nums){
    let f=[];
    nums.forEach(function(numbr){
        f.push({"number":Number(numbr)})
    })
    console.log(f)
}

let nums=["10","24","45","56","67"]
ArrayStrings(nums)
