function repeatThing(string, amount){
    var arr = [];
    for(var i = 0; i < amount; i++){
        arr.push(string);
    }
    arr = arr.join("");
    console.log(arr);
}

repeatThing("mia", 4);