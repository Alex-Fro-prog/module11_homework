let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 0, 0, null, undefined]

function number(arr) {
  
  let even = 0, odd = 0, zero = 0;
  for(let i = 0; i < arr.length; i++) {
    if (arr[i] == 0) zero++;
    else if (arr[i] % 2 == 0 & typeof arr[i] == 'number') even++;
    else if (arr[i] % 2 !== 0 & typeof arr[i] == 'number') odd++;
  }
  return {
    "Четных чисел" : even,
    "Нечетных чисел" : odd,
    "Нулей" : zero,
  }
}

console.log(number(arr));