import { append, result } from './myfunc'; //add for mocking

// const add = jest.fn(() => 11); // mock(fake) function
const add = jest.fn((a, b) => a + b);

//Unit test
// Tests only one thing.
test(`ADD`, () => {
  expect(add(4, 7)).toBe(11);
  expect(add).toHaveBeenCalledTimes(1);
  expect(add).toHaveBeenCalledWith(4, 7);
});

test(`APPEND`, () => {
  const val = append([1, 2], [3, 4]);
  // expect(val).toBe([1, 2, 3, 4]); // fails
  expect(val).toEqual([1, 2, 3, 4]); // pass
});

// Integration tests
// Tests things working together.
test(`RESULT`, () => {
  expect(result(5, 20)).toBe(`$25`);
});
