/* Напиши скрипт проверки количества товаров на складе. Есть переменные `total`
(количество товаров на складе) и `ordered` (единиц товара в заказе).

Сравни эти значения и по результатам выведи:

- Если в заказе указано число, превышающее количество товаров на складе, то
  выведи сообщение `"На складе недостаточно тваров!"`.
- В другом случае выводи сообщение `"Заказ оформлен, с вами свяжется менеджер"`.

Проверь работоспособность кода с разными значениями переменной `ordered`,
например `20`, `80` и `130`.

```js
const total = 100;
const ordered = 50;
```*/

const total = 100;
let ordered = 130;

if(ordered >= total){
  console.log('На складе недостаточно тваров!');
}else{
  console.log('Заказ оформлен, с вами свяжется менеджер');
}

ordered = 130;
console.log(ordered >= total ? 'На складе недостаточно тваров!' : 'Заказ оформлен, с вами свяжется менеджер'); //Тернарный оператор