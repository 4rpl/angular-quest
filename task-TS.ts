// реализовать Partial
type MyPartial<T> = unknown;
// { [K in keyof A]?: A[K]; }

type StartsWith<T extends string> = unknown;
const test1: StartsWith<'a'> = 'a'; // ok
const test2: StartsWith<'a'> = 'abc'; // ok
const test3: StartsWith<'a'> = 'A'; // error
// `${T}${string}`;

