function confirmEnding(str, target) {
    var amnt = target.length; 
    // console.log(-amnt);
    var location = str.slice(-amnt);
    // console.log(location);
      if(location == target){
          return true;
      }else{
          return false;
      }
     return str;
   }
   
   console.log(confirmEnding("Open sesame", "same"));