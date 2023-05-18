// question 1. Move all zeroes to end of array
let arr = [1,2,0,4,3,0,5,0]
let arr1=[]
for(let i=0; i<arr.length; i++){
    if(arr[i]==0) arr1.push(arr[i])
    else arr1.unshift(arr[i])
}
console.log(arr1)


// question 2. Segregate even and odd numbers
let arr2 = [1,9,5,3,2,6,7,11]
let arr3= []
for(let i=0; i<arr2.length; i++){
    if(arr2[i]%2==0){
        arr3.push(arr2[i])
    }
    else{
        arr3.unshift(arr2[i])
    }
}
console.log(arr3)


// question 3. Find the largest three distinct elements in an array
let arr4 = [10,4,3,50,23,90]
let lar1 = arr4[0], lar2=arr4[0],lar3=arr4[0]
for(let i=0; i<arr4.length; i++){
    if(lar1 < arr4[i]){
        lar3 = lar2
        lar2 = lar1
        lar1 = arr4[i]
    }
    else if(lar2 < arr4[i]){
        lar3 = lar2
        lar2 = arr4[i]
    }
    else if(lar3 < arr4[i]){
        lar3 = arr4[i]
    }
}
console.log(lar1, lar2, lar3)