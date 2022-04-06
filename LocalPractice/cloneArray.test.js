const cloneArray = require('./cloneArray');

test('Properly clones an array', () => {
    const arr = [1, 2, 3];
    const clonedArr = cloneArray(arr);
    expect(clonedArr).toEqual(arr);
    expect(clonedArr).not.toBe(arr);
    }
)