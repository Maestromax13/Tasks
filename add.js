// for (let list = '#'; list.length < 8 ; list += '#')
// console.log(list);



//Fizz Buzz
// for(let n = 1; n <= 100 ; n++){
//   let output = "";
//   if(n % 3 == 0 ) output += 'Fizz';
//   if(n % 5 == 0 ) output += 'Buzz';
//   console.log(output || n);
  
// }

//Chess
// let size = 50;

// let board = '';

// for (let y = 0; y < size; y++){
//   for (let x = 0; x < size; x++) {
//     if ((x + y) % 2 === 0){
//       board += ' ';
//     }else {
//       board += '#';
//     }
    
//   }
//   board += '\n'
// }

// console.log(board);


//Sum of range
function range(start, end, step = start < end ? 1 : -1){
  let array = [];
  if (step > 0 ){
    for(let i = start; i <= end; i += step)array.push(i);
  
  }else {
    for(let i = start; i >= end; i += step)array.push(i)
  } 
  return array;
}

function sum(array){
  let total = 0;
  for(let value of array){
    total += value;
  }
    return total;
  }

  console.log(sum(range(5,10)));
  



 
