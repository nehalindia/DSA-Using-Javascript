// let arr = [1,2,3,4]
// let arr1=[]
// for(let i=0; i<arr.length; i++){
//     arr1.unshift(arr[i])
// }
// console.log(arr1)


let arr = [4,2,6,3,8,1,9,0]
// 1. find the maximum element in an array
let max =0 
for(let i=0; i<arr.length; i++){
    if(max< arr[i]){
        max=arr[i]
    }
}
console.log("Maximumu value "+max)

// 2. find the minimum element in an array
let min = 1
for(let i=0; i<arr.length; i++){
    if( min > arr[i]){
        min = arr[i]
    }
}
console.log("Minimum value "+ min)

// 3. find the second largest element in an array
let large=0, semax=0
for(let i=0; i<arr.length; i++){
    if(large<arr[i]){
        semax = large
        large = arr[i]
    }
}
console.log("Second Largest "+semax)

// 4. find the second smallest element in an array
let small =arr[0], sesmall=arr[0]
for(let i=0; i<arr.length; i++){
    if(small > arr[i]){
        sesmall = small
        small = arr[i]
    }
}
console.log("Scond smallet "+sesmall)

// 5. find the sum of all elements in an array
let sum =0
for(let i=0; i<arr.length; i++){
    sum += arr[i]
}
console.log("sum of array "+sum)

// 6. find the average of all elements in an array
console.log("Average of array "+sum/arr.length)

// 7. find the sum of all even elements in an array
let sumeven =0
for(let i=0; i<arr.length; i++){
    if(arr[i]%2==0){ sumeven += arr[i]}
}
console.log("sum of even "+sumeven)


// 8. find the sum of all odd elements in an array
let sumodd =0
for(let i=0; i<arr.length; i++){
    if(arr[i]%2!=0){ sumodd += arr[i]}
}
console.log("Sum of odd "+sumodd)

// 9. find the number of even elements in an array
let countEven =0
for(let i=0; i<arr.length; i++){
    if(arr[i]%2==0){ countEven++}
}
console.log("Count of Even "+countEven)

// 10. find the number of odd elements in an array
let countodd =0
for(let i=0; i<arr.length; i++){
    if(arr[i]%2!=0){ countodd++}
}
console.log("Count of odd "+countodd)


for(let i=0; i<arr.length; i++){
    
}