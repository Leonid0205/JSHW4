// Task 1

function print(amount) {
    for (let i = 0; i <= amount; i++) {
        if (i === 0) {
            console.log(`${i} - это ноль`);
        } else if (i % 2 === 0) {
            console.log(`${i} - четное число`);
        } else {
            console.log(`${i} - нечетное число`);
        }
    }
}
print(11);

// Task 2

let array = [1, 2, 3, 4, 5, 6, 7];
console.log(array);
array.splice(3, 2);
console.log(array);

// Task 3

function createArray(lengthArray) {
    let array = [];
    for (let i = 0; i < lengthArray; i++) {
        array[i] = Math.floor(Math.random() * 10);
    }
    console.log(`Created array: ${array}`);
    return array;
}
function sumOfArrayElements(array) {
    let sum  = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }
    console.log(`Sum of array elements is: ${sum}`);
    return sum;
}
function minArrayNumber(array) {
    let minNumber = array[0];
    for (let i = 1; i < array.length; i++) {
        if (minNumber > array[i]) {
            minNumber = array[i];
        }
    }
    console.log(`Min array number is: ${minNumber}`);
    return minNumber;
}
function findNumberInArray(number, array) {
    for (let i = 0; i < array.length; i++) {
        if (number === array[i]) {
            console.log(`Number ${number} is in the array`);
            break;
        }
    }
}
const arrayThird = createArray(5);
sumOfArrayElements(arrayThird);
minArrayNumber(arrayThird);
findNumberInArray(3, arrayThird);

// Task 4

function  printMountain(rowNumber) {
    let mountain = '';
    console.log(mountain);
    for (let i = 0; i < rowNumber; i++) {
        mountain += 'x';
        console.log(mountain);
    }
}
printMountain(20);