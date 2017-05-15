
function test(numb){
  //We set a console.time to track the time spent calculating here it starts with the call of the function
  console.time('Start');
  
  //We define the variables that we are going to use
  var arreglo = [], arr = [], sum = 0;
  
  //Here we take the number giving and create an array from 2 to the number giving
  for (var i = 2; i <= numb; i++) {
    arreglo.push(i);
  }

   //here we check the length of the new array 'arreglo' if is the same as the number given
  if(arreglo.length + 1 === numb){
    //if its true the we send the array to the check function, in that function we change every number that is not a prime to 0
    //and return a new array
    arr = check(arreglo);
    //now we pass using reduce the array to a function that sum every item of the array
    sum  = arr.reduce(add, 0);
    console.timeEnd('End');
  }
  
  //this function sum the items of the array
  function add(a, b) {
      return a + b;
  }

}

//this function is used to change every number that is not a prime to 0
function check(arr){
  var arreglo = [];
  for (var j = 0; j < arr.length; j++) {
      for (var h = 0; h < arr.length; h++) {

           if(arr[j] % arr[h] === 0 && arr[h] !== arr[j] ){             
             arr[j] = 0;
         }
      }
  }
  
return arr;
}
