module.exports = function reverse (n) {
    let x = n;
    let y = x.toString();
    let result;
    let a = y[0];
    let b = y[1];
    let c = y[2];
    let d = y[3];
    let e = y[4];
    let f = y[5];
    let g = y[6];
    let h = y[7];
    let i = y[8];
    let j = y[9];
  
  if (y.length === 1) {
  result =  a; 
  }   
  else if (y.length === 2 && y[0] !== '-') {
  result = b + a;  
  }
  else if (y.length === 2 && y[0] === '-') {
  result = b;  
  }
  else if (y.length === 3 && y[0] !== '-') {
  result = c + b + a;  
  }
  else if (y.length === 3 && y[0] === '-') {
  result = c + b;  
  }
  else if (y.length === 4 && y[0] !== '-') {
  result = d + c + b + a;  
  }
  else if (y.length === 4 && y[0] === '-') {
  result = d + c + b;  
  }
  else if (y.length === 5 && y[0] !== '-') {
  result = e + d + c + b + a;  
  }
  else if (y.length === 5 && y[0] === '-') {
  result = e + d + c + b;  
  }
  else if (y.length === 6 && y[0] !== '-') {
  result = f + e + d + c + b + a;  
  }
  else if (y.length === 6 && y[0] === '-') {
  result = f + e + d + c + b;  
  }
  else if (y.length === 7 && y[0] !== '-') {
  result = g + f + e + d + c + b + a;  
  }
  else if (y.length === 7 && y[0] === '-') {
  result = g + f + e + d + c + b;  
  }
  else if (y.length === 8 && y[0] !== '-') {
  result = h + g + f + e + d + c + b + a;  
  }
  else if (y.length === 8 && y[0] === '-') {
  result = h + g + f + e + d + c + b;  
  }
  else if (y.length === 9 && y[0] !== '-') {
  result = i + h + g + f + e + d + c + b + a;  
  }
  else if (y.length === 9 && y[0] === '-') {
  result = i + h + g + f + e + d + c + b;  
  }
  else if (y.length === 10 && y[0] !== '-') {
  result = j + i + h + g + f + e + d + c + b + a;  
  }
  else if (y.length === 10 && y[0] === '-') {
  result = j + i + h + g + f + e + d + c + b;  
  }  
  else {
  result = 'I dont know'; 
  };
  return result;
  };  

