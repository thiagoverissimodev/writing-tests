export default function sum(numbers: Array<number>) {
    return numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
}