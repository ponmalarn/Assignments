let number = -75
let result=numberType(number)
console.log("Number ",number," is" ,result)
function numberType(number)
{
    if(number<0)
            return "negative"
    else if(number>0)
            return "positive"
    else
            return "Zero"
}

