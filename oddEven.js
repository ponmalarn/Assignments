let number=175

let result = isOddOrEven(number)
console.log("Number ",number,"is ",result)
function isOddOrEven(numb)
{
    if(numb%2==0)
        return "even"
    else
        return "odd"
}