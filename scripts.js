// Список курсов
let courses = [
    { name: "Courses in England", prices: [0, 100] },
    { name: "Courses in Germany", prices: [500, null] },
    { name: "Courses in Italy", prices: [100, 200] },
    { name: "Courses in Russia", prices: [null, 400] },
    { name: "Courses in China", prices: [50, 250] },
    { name: "Courses in USA", prices: [200, null] },
    { name: "Courses in Kazakhstan", prices: [56, 324] },
    { name: "Courses in France", prices: [null, null] },
];

// Функция фильтрации
function Filtering(requiredRange) {
    let filteredCourses = [];
    for (let i = 0; i < courses.length; i++) {
        if (requiredRange[0] === null && requiredRange[1] === null) {
            filteredCourses.push(courses[i]);
        } else if (requiredRange[0] === null) {
            if (requiredRange[1] >= courses[i].prices[0]) {
                filteredCourses.push(courses[i]);
            }
        } else if (requiredRange[1] === null) {
            if (requiredRange[0] <= courses[i].prices[1] || courses[i].prices[1] == null) {
                filteredCourses.push(courses[i]);
            }
        } else {
            if (requiredRange[1] >= courses[i].prices[0] &&
                (requiredRange[0] <= courses[i].prices[1] || courses[i].prices[1] == null)) {
                filteredCourses.push(courses[i]);
            }
        }
    }

    let sortedCourses = sorting(filteredCourses);

    return sortedCourses;
}

// Функция сортировки
function sorting (unsortedCourses) {
    const arrayLength = unsortedCourses.length;
    const factor = 1.247;

    let gapFactor = arrayLength / factor;

    while (gapFactor > 1) {
        const gap = Math.round(gapFactor);
        for (let i = 0, j = gap; j < arrayLength; i++, j++) {
            if (unsortedCourses[i].prices[0] > unsortedCourses[j].prices[0]) {
                [unsortedCourses[i], unsortedCourses[j]] = [unsortedCourses[j], unsortedCourses[i]];
            }
        }
        gapFactor = gapFactor / factor;
    }
    return unsortedCourses;
}

// Варианты цен (фильтры), которые ищет пользователь
let requiredRange1 = [null, 200];
let requiredRange2 = [100, 350];
let requiredRange3 = [200, null];

// [подходящие курсы для каждого варианта фильтра]
Filtering(requiredRange1);
Filtering(requiredRange2);
Filtering(requiredRange3);

// Проверка
/*
console.log(Filtering(requiredRange1));
console.log(Filtering(requiredRange2));
console.log(Filtering(requiredRange3));
*/