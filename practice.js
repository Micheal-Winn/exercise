let obj = {
    name : 'thantzinwin',
    age : 20
}

function update()
{
    document.getElementById('name').innerText = obj.name;
    document.getElementById('age').innerText = obj.age;
}

function lib(obj)
{
    let newObj = {};
    for(let prop in obj)
    {
        console.log('property',prop);
        Object.defineProperty(newObj,prop,{
            get()
            {
                console.log('call getter',prop);
                return obj[prop];
            },
            set(newValue)
            {
                console.log('call setter',prop);
                obj[prop] = newValue;
                update();
            }
        })
    }
    return newObj;
}

let newObj = lib(obj);
newObj.age = 150
console.log('age',newObj.age)