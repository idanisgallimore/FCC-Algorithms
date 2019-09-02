function titleCase(str) {
    var arr = str.split(" ");
    // console.log(arr);
    var arr2 = [];
    arr.forEach(function(item){
        var word = item[0].toUpperCase() + item.slice(1).toLowerCase();
        arr2.push(word);
    });
    arr2 = arr2.join(" ");
    return arr2;  
}
  
  console.log(titleCase("I'm a little tea pot"));
