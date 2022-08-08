function returnNumber(n)
{
    for(let i = 0;i<n;i++)
    {
        for(let j = 0;j<n;j++)
        {
            if(i === j)
            {
                console.log('1');
            }
            else{
                console.log("0")
            }
        }
    }
}

console.table(returnNumber(5))

let arr = [1,2,3,4,5];
console.log("sort",arr.sort())
console.log('second lowest and second largests',
`${arr[1]},${arr.reverse()[1]}`
)

function isPerfect(num)
{
    let sum = 0;
    for(let i = 0;i < num;i++)
    {
        if(num % i === 0)
        {
            console.log("number",i);
            sum += i;
        }
    }
    if(sum === num) return true;
     return false;
}
console.log("final",isPerfect(28))