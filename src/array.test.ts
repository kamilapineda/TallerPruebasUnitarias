import { arrayContainsValue, arrayNotContainsValue } from './array';

describe('Pruebas para arrayContainsValue', () => {
  it('debería devolver verdadero si el array contiene el valor "value1"', () => {
    const arr = ['value1', 'value2', 'value3'];
    const value = 'value1';
    expect(arrayContainsValue(arr, value)).toBe(true);
  });

  it('debería devolver verdadero si el array contiene el valor "value3"', () => {
    const arr = ['value1', 'value2', 'value3'];
    const value = 'value3';
    expect(arrayContainsValue(arr, value)).toBe(true);
  });
});

describe('Pruebas para arrayNotContainsValue', () => {
  it('debería devolver verdadero si el array no contiene el valor "UNAC"', () => {
    const arr = ['value1', 'value2', 'value3'];
    const value = 'UNAC';
    expect(arrayNotContainsValue(arr, value)).toBe(true);
  });
});
