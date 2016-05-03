
/** Looping A Triangle **/
for(var i = 1; i < 8; i++){
  var output = "";
  for(var j = 1; j <= i; j++){
    output += "#";
  }
  console.log(output);
}

/** FizzBuzz **/

// Part 1
for(i = 1; i < 101; i++){
  if(i % 3 === 0){
    console.log("Fizz");
  }
  else if (i % 5 === 0){
    console.log("Buzz");
  }
  else{
    console.log(i);
  }
}

// Part 2
for(i = 1; i < 101; i++){
  if(i % 3 === 0){
    if(i % 5 === 0){
      console.log("FizzBuzz");
    }
    else{
      console.log("Fizz");
    }
  }
  else if (i % 5 === 0){
    console.log("Buzz");
  }
  else{
    console.log(i);
  }
}


/** Chess Board **/
var size = 8;
var output = "";

for(i = 1; i <= size; i++){ //i = row
  
  for(j = 1; j <= size; j++){ //j = column
    if(i % 2 !== 0){ //if i = odd
      if(j % 2 !== 0){ //if j = odd
        output += " ";
      }
      else{ // if j = even
        output += "#";
      }
    }
    else{ //if i = even
      if(j % 2 !== 0){ //if j = odd
        output += "#";
      }
      else{ // if j = even
        output += " ";
      }
    }
  }
  output += '\n';
}
console.log(output);