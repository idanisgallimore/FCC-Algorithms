// function largestOfFour(arr) {
//     var newArr = [];
//     return arr;
//   }
  
//   largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);

// var arr = [
//     [1, 2],
//     [3, 4],
//     [5, 6]
// ]
// var testArr = [
//     [7, 2, 45],
//     [3, 4],
//     [5, 6]
// ];
// function theArr(x){
//     var emptyArr = [];
//     for(var i = 0; i < x.length; i++){
//         var counter = x[i][0]; 
//         for(var k = 0; k < x[i].length; k++){
//            if(x[i][k] > counter){
//                counter = x[i][k];
//                emptyArr.push(counter); 
//            } 

//        }
//    }
//    return emptyArr; 
// }

// console.log(theArr(testArr));

// var newArr = [];

// function addNew(x, y){
//     if(x > y){
//         newArr.push(x);
//     }else{
//         newArr.push(y);
//     }
//     console.log(newArr);
// }

// addNew(108, 9);
// [32, 35, 37, 39]
function largestOfFour(arr) {
    var emptyArr = [];
    for(var i = 0; i < arr.length; i++){
          var counter = arr[i][0]; 
          for(var k = 0; k < arr[i].length; k++){
             if(arr[i][k] > counter){
                 counter = arr[i][k];
                } 
                
            }
            emptyArr.push(counter); 
     }
  
    console.log(emptyArr);
  }
  
  largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
  console.log("------------------------------");
  
  largestOfFour([[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
  console.log("------------------------------");


var theFour = [32, 35, 37, 39];

for(var i = 0; i < theFour.length; i++){
    var counter = theFour[0];
    if(theFour[i] > counter){
        counter = theFour[i];
        
    }
}
console.log(counter);
  