let number = Math.floor(Math.random() * 1010);

function primeNumber(number) {
  const right = 'простое число', wrong = 'непростое число', fault = 'данные неверны', exception = 'является исключением';
  
  if (number <= 1) return exception;
  if (number > 1000) return fault;
  if (number == 2) return right;
  
  for (let i = 2; i <= number / 2; i++) {
    if (number % i == 0) {
      return wrong;
    }
  }
  return right;
}

console.log(number + ' \- ' + primeNumber(number))
