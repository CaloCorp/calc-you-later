/******************
 * YOUR CODE HERE *
 ******************/
function calculate (num1, num2, operation){
num1= Number(num1)

num2= Number (num2)
 
if (operation === '+' ||operation === 'plus' || operation ==='added to'){

return num1 + num2
}

else if (operation === '-' ||operation === 'minus' ||operation === 'subtracted from' ){

  return num1 - num2  
}

else if (operation === 'x' ||operation === 'X'||operation === 'multiplied by'|| operation === 'times'){

  return num1 * num2
}

else if (operation === '/'|| operation === 'divided by'){

  return num1/num2
}

else if (operation === '%'|| operation === 'mod' || operation === 'modulus'){

  return num1 % num2
}

else{

  return "Sorry, that's not a mathematical operation!"

}
}
/********************************************
 * CODE DOWN HERE IS FOR INTERNAL USE ONLY. *
 *           PLEASE DON'T TOUCH!            *
 ********************************************/

if (typeof calculate === 'undefined') {
  calculate = undefined;
}


module.exports = calculate;