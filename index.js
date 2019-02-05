// var phone = prompt();
//https://regex101.com/
//replace
//match
//test
// if (ukPhone.test(email)) {
//   alert("ok");
// } else {
//   alert("bad");
// }
// var ukPhone = /.{1,}@.{1,10}\.{1,10}/;
//   var res = phoneArray[i].replace(/^(\+|)/, "");
//все подрят
//asdasdadasdasdasdasdasdasdasd
// var phoneArray = [
//   "+380932190345",
//   "+38 0932190345",
//   "+38-093-219-03-45",
//   "+38-050-21-90-345"
// ];
// for (var i = 0; i < phoneArray.length; i++) {
//   console.log("origin", phoneArray[i]);
//   res = phoneArray[i].replace(/([^0-9]|)/g, "");
//   var m = res.match(/(380)(50|93|63|97)([0-9]{7,7}$)/);
//   console.log("result", m);
//   break;
// }
//dfgdfgdfgsdgsdfgsdfgsdfgsdfg
//ДЗ Выбрать 10 различных веб адесов, собрать массив,
// с помощью оператора match
//вытащить из них доменное имя
//https://www.codewars.com/
//https://regex101.com/
//sdfgsdfgsdfgsdfgsdfgsdfgsdfgsdfg
// var arr = [];
// var a = `asd`;
// arr.push(1);
// arr.push(a);
// arr[arr.length] = "test";
// console.log("push", arr);
// var t = arr.pop();
// console.log("pop", t, arr);

// console.log(`shift`, arr.shift(), arr);
// arr.unshift(`shift`);
// console.log("unshift", arr);
//Добавить, удалить, удалить , добавить
// arr.unshift(`shift`);
// arr.unshift(`shift`);
// arr.unshift(`shift`);
// console.log(arr);
// delete arr[3];
// console.log(arr);
//функция удалить (не исп)
//asdasdasdasdasdasdasdsdadasdasdasdasd
// var arr = [0, 1, 3, 2, 3, 4, 5];
// var b = arr.splice(2, 1);
// var b = arr.slice(2);
// var b = arr.sort(function(a, b) {
//   console.log(a, b);
//   return a - b;
//   return b - a;
// });
// arr.reverse();
// return Math.random() - 0.5; случайный знак массива
// var b = arr.concat(1, 3, (4)[(1, 2, 3)]);
// var arr_ = [0, 1, 2, 3, 4, 5];
// var b = [...arr, ...arr_];
//[0, 1, 2, 3, 4, 5 , 0, 1, 3, 2, 3, 4, 5]
// var b = arr.indexOf(2);
//если больше 7-ми строк функции, то нужно делать вторую
//псевдомассив - только ленкс и все
// var arr_str = [`38...`, `34...`, `39...`, `35...`];
// var b0 = arr_str.findIndex(e => e.includes("9"));
// var b1 = arr_str.find(e => e.includes("9"));
// console.log(b1, b0, arr_str);
// function _concat(...args) {
//   console.log(args.join());
//   var res = [];
//   for (var i = 0; i < args.length; i++) {
//     res = [...res, ...args[i]];
//   }
//   return res;
// }
// var b = _concat(arr_str, arr_str, arr_str);
// console.log(b);
// function _concat(...args) {
//   var a = [];
//   args.forEach(e, i, self) => {
//     a = [...a, ...e];
//   };
//   return a;
// }
// var b = _concat(arr_str, arr_str, arr_str);
// console.log(b);
// var b = arr.map(e => {
//   return e * 2;
// });

// console.log(b);

// console.log();
// var b0 = arr.every(e => {
//   console.log(e);
//   return e % 2 === 0;
// });
// var b1 = arr.every(e => e > 0);
// var b2 = arr.some(e => e < 0);
// var b3 = arr.filter(e => {
//   console.log(e);
//   return e > 3;
// });
// console.log(b0, b1, b2, b3);
//map and forEach без них в реакте делать нечего
function _concat(...args) {}
var arr = [1, 2, 3, 4];
var b0 = arr.reduce((result, element, index, self) => {
  console.log(a, b, c, d);
  return result * element;
});
console.log(b0);
//ДЗ реализовать все методы самостоятельно(ЕС-6 синтаксис)
