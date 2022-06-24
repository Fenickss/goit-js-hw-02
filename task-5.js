/*# Задание 5

Напиши функцию `checkForSpam(message)`, принимающую 1 параметр `message` -
строку. Функция проверяет ее на содержание слов `spam` и `sale`. Если нашли
запрещенное слово то функция возвращает `true`, если запрещенных слов нет функция
возвращает `false`. Слова в строке могут быть в произвольном регистре.

```js
const checkForSpam = function(message) {
  // твой код
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 

```*/

const checkForSpam = function(message) {
    message = message.toLowerCase();

   return message.includes('spam') || message.includes('sale');
  
  };
  

  console.log(checkForSpam('Latest technology news')); // false

console.log(checkForSpam('JavaScript weekly newsletter')); // false

console.log(checkForSpam('Get best sale offers now!')); // true

console.log(checkForSpam('[SPAM] How to earn fast money?')); // true




/* let checkForSpam = function(message) {
    message = message.toLowerCase()
    if(message.indexOf('spam') >= 1 || message.indexOf('sale') >= 1) {
      return true;
    } else {
      return false;
    }
    
  }
  console.log(checkForSpam('Latest technology news')); // false
  
  console.log(checkForSpam('JavaScript weekly newsletter')); // false
  
  console.log(checkForSpam('Get best sale offers now!')); // true
  
  console.log(checkForSpam('[SPAM] How to earn fast money?')); // true */