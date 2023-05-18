let a = 10
let b= "3"

// using + can change string to int
// console.log(a + b)
// console.log(a + +b)

// //substraction
// console.log(a - +b)
// console.log(a - b)


// console.log(a < "ab")
// console.log(a > "ab")

//can not compare the undefined
// console.log(undefined > 0)
// console.log(undefined < 0)
// console.log(undefined == 0)


function my (str) {
    
    let ab = str.split(" ")
    console.log(ab, ab.length)
    if(str!= "")
    {
        let newstr = str.split(" ")
        let str1=""
        for(let i=1; i<newstr.length; i++){
            console.log(newstr[i])
            if(newstr[i] != ' ')
            {
                str1[i] = newstr[i][0].toUpperCase() + newstr[i].substring(1)
            }
        }
        if(str1.length > 140 || str1 == ' '){
            return false
        }
        else{
            str1.unshift("#")
            return str1.join("")
        }
    }
    else{
        return false
    }
}

console.log(my("      code wars"))