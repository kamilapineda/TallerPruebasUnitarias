import { sum } from './sum';

describe('Pruebas para la función sum', () => {
  it('debería verificar que una suma de dos valores es mayor a 10', () => {
    expect(sum(6, 5)).toBeGreaterThan(10);
  });

  it('debería verificar que una suma de dos valores es mayor o igual a 20', () => {
    expect(sum(10, 10)).toBeGreaterThanOrEqual(20);
  });

  it('debería verificar que una suma de dos valores es menor o igual a 8', () => {
    expect(sum(3, 5)).toBeLessThanOrEqual(8);
  });

  it('debería verificar que una suma de dos valores es menor a 12', () => {
    expect(sum(6, 5)).toBeLessThan(12);
  });

  it('debería verificar que una suma de dos valores es igual a 9', () => {
    expect(sum(4, 5)).toBe(9);
  });
});
