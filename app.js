// input:
const input = {
    p1: 1,
    p2: 5,
    p3: 1,
    p4: 2,
    p5: 2,
    p6: 1,
  }
  
  // ouput:
  const output = {
    1: ['p1', 'p3', 'p6'],
    2: ['p4', 'p5'],
    5: ['p2']
  }

const input = {
        p1: 1,
        p2: 5,
        p3: 1,
        p4: 2,
        p5: 2,
        p6: 1,
      }
      console.log('cd','p1' in input)
for(let [key,value] in Object.entries(input))
{
    let op = {};

}

let op = input.map((ele,val)=>{val , ele});
console.log('first',op)





let output = {};
for (const [key, value] of Object.entries(input)) {
    
	if(Object.keys(output).includes(value.toString())){
	output[value].push(key);
	}else{
	output[value] = [];
        output[value].push(key);
	}
}
console.log('final',output)


let worker = new Worker('')
worker.postMessage = worker(5)
