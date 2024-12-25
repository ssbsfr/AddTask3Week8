// Дополнительное задание 3 Неделя 8

function unique(arr) {
    // Преобразуем массив в Set для удаления дублей, затем преобразуем обратно в массив
    return [...new Set(arr)];
}

// Пример использования
console.log(unique([1, 1, 2, 2, 4, 2, 3, 7, 3])); // => [1, 2, 4, 3, 7]

function unique(arr) {
    return arr.filter((item, index) => arr.indexOf(item) === index);
}

// Пример использования
console.log(unique([1, 1, 2, 2, 4, 2, 3, 7, 3])); // => [1, 2, 4, 3, 7]
