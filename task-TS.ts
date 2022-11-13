// реализовать Partial
type MyPartial<T> = unknown;
// { [K in keyof A]?: A[K]; }

type StartsWith<T extends string> = unknown;
const test1: StartsWith<'a'> = 'a'; // ok
const test2: StartsWith<'a'> = 'abc'; // ok
const test3: StartsWith<'a'> = 'A'; // error
// `${T}${string}`;

type KeysDeep<T> = keyof T | (
    T extends Record<any, infer V>
        ? V extends Record<any, any>
            ? KeysDeep<V>
            : never
        : never
);

type Obj = {
    prop1: string;
    prop2: {
        prop3: string;
    };
}
const a: KeysDeep<Obj> = 'prop3';

// type KeysDeep<T> = keyof T | (
//     T extends Record<any, infer V>
//         ? V extends Record<any, any>
//             ? KeysDeep<V>
//             : never
//         : never
// );