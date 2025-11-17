const arr = [78, 12, 90, 23, "this is an array", false, undefined, null]
const arr2 = new Array(7)

arr2[0]= 3
arr2[1] = "this is just a test"
arr2[2] = false


// console.log(arr2, "This is the value of arr2")

const firtValue = arr[6]
const lengthOfArr= arr.length
const lastIndexOfArr = arr.length - 1
const lastValueOfArr = arr[lastIndexOfArr]

arr[lastIndexOfArr] = 7

// console.log(arr)

// ARRAY METHODS

/*
1. PUSH - IT ADDS A VALUE TO THE LAST INDEX
2. POP - REMOVES THE LAST VALUE IN THE ARRAY
3. UNSHIFT - ADDS A VALUE TO THE BEGINNING OF THE ARRAY
4. SHIFT - REMOVES THE FIRST VALUE IN THE ARRAY
5. INCLUDES - IT CHECKS IF THE VALUE IS PRESENT IN THE ARRAY OR NOT. \
    IF IT IS PRESENT IT RETURN TRUE OTHERWISE IT RETURNS FALSE
*/

// push
arr.push(5)
arr.push("test push", 56, false)
arr.push([67, "this is to show an array inside another array"])
// console.log(arr[arr.length -1])

// pop

arr.pop()
arr.pop()


// unshift

arr.unshift(true, "unshifting")

// console.log(arr)

// shift
arr.shift()

// includes
const found = arr.includes(7)
console.log(found)



// OBJECTS
const student = {
    name: "Akinniyi Ezekiel Wonderful",
    role:"student",
    id:1,
    hobbies:["football", "tennis", "basketball"],
    isRude:false,
    course:"mobile development" ,
    cohort: "9s",
    obj:{
        test: "this is just to demonstrate that an object can be embedded in another object"
    },
    returnName: function () {
    return this.name
    }

}

const obj2 = new Object({
    field1:"test"

})

console.log(student)

// to access a value in an object you use the dot or the square bracket

const dotNotation = student.course
const brackets = student["course"]
// const notPresent = student["notPresent"] // returns undefined because the key is not present

console.log(dotNotation, brackets)

const nameStr = student.returnName()
console.log(`this is the name of the student in the object with: ${nameStr}`)