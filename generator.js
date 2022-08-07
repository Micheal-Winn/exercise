function *range()
{
    console.log('first step');
    yield 1;
    console.log('second step');
    yield 2;
    console.log('third step');
    yield 3;
    return 5
}

console.log('R',range().next());
console.log("R",range().next());
console.log('R',range().next());
console.log('R',range().next());
