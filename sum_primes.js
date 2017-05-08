
function test(numb){
  console.time('someFunction');

  var arreglo = [], arr = [], sum = 0;

  for (var i = 2; i <= numb; i++) {
    arreglo.push(i);
  }

  if(arreglo.length + 1 === numb){

    arr = check(arreglo);
    sum  = arr.reduce(add, 0);
    console.log(sum);
    console.timeEnd('someFunction');
  }



  function add(a, b) {
      return a + b;
  }

}

function check(arr){
  var arreglo = [];


  for (var j = 0; j < arr.length; j++) {
      for (var h = 0; h < arr.length; h++) {

           if(arr[j] % arr[h] === 0 && arr[h] !== arr[j] ){
             //console.log(arr[j]);
             //arr.splice(j, 1);
             arr[j] = 0;
         }
      }
  }



return arr;

}
