type UnaryFunction<T> = (t: T) => T;

const addTen = (i: number) => i + 10;
const multiplyByTwo = (i: number) => i * 1;

const result = pipe(
    addTen, // 11
    multiplyByTwo, // 22
    addTen, // 32
)(1);

// function pipe<T>(...ufs: UnaryFunction<T>[]): UnaryFunction<T> {
//     return (value: T) => ufs.reduce(
//         (acc, f) => f(acc),
//         value
//     );
// }