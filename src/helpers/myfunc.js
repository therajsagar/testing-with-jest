export const add = (a, b) => a + b;

export const append = (arr1, arr2) => [...arr1, ...arr2];

export const result = (subtotal, total) => `$${add(subtotal, total)}`;
