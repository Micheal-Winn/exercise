
        let obj = {
            name: 'thantzin',
            age: 20
        }
        function renderView(model)
        {
            console.log("render called",model);
        }
        
        function frameWork(obj)
        {
            for(let [key,value] of Object.entries(obj))
            {
                if(typeof value !== 'function')
                {
                    console.log(`property name is ${key}`);
                    obj[`_${key}`] = obj[`${key}`];
                    Object.defineProperty(obj,key,{
                        get(){
                            console.log('getter called');
                            return obj[`_${key}`];
                        },
                        set(newValue){
                            console.log('setter called',newValue);
                            obj[`_${key}`] = newValue;
                            renderView(obj)
                        }
                    });
                }
            }
            return obj;
        }
    
        frameWork(obj)
        obj.name = 'thant';
        