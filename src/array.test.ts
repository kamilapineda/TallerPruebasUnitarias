import { arrayContainsValue, arrayNotContainsValue } from './array';

describe('arrayContainsValue', () => {
  it('debería devolver verdadero si el array contiene el valor', () => {
    const arr = ['value1', 'value2', 'value3'];
    expect(arrayContainsValue(arr, 'value1')).toBe(true);
  });

  it('debería devolver falso si el array no contiene el valor', () => {
    const arr = ['value1', 'value2', 'value3'];
    expect(arrayContainsValue(arr, 'value4')).toBe(false);
  });
});

describe('arrayNotContainsValue', () => {
  it('debería devolver verdadero si el array no contiene el valor', () => {
    const arr = ['value1', 'value2', 'value3'];
    expect(arrayNotContainsValue(arr, 'UNAC')).toBe(true);
  });

  it('debería devolver falso si el array contiene el valor', () => {
    const arr = ['value1', 'value2', 'value3'];
    expect(arrayNotContainsValue(arr, 'value1')).toBe(false);
  });
});
