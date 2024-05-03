let arr = ["Alex", "John", "ВоЬ", "Amir", "AZizbek", "Tyler"];
let arr2 = ["Davlat", "Arslan", "Steve", 32, true, 45];

// Объединяем массивы arr и arr2
let Arr = arr.concat(arr2);

// Вырезаем все имена с объединенного массива
let namesArr = arr.filter(item => typeof item === 'string');

// Отфильтровываем имена, которые начинаются на букву "А" и сохраняем их в newArr
let newArr = namesArr.filter(name => name.charAt(0).toUpperCase() === 'A');

console.log(Arr, namesArr, newArr);