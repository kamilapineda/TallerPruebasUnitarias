import { n, number, notTrue, notFalse } from './multi';

describe('Pruebas para constantes', () => {
  it('debería verificar que "n" es null', () => {
    expect(n).toBeNull();
  });

  it('debería verificar que "n" está definido (no es undefined)', () => {
    expect(n).toBeDefined();
  });

  it('debería verificar que "number" es igual a 0', () => {
    expect(number).toBe(0);
  });

  it('debería verificar que "notTrue" es false', () => {
    expect(notTrue).toBe(false);
  });

  it('debería verificar que "notFalse" es true', () => {
    expect(notFalse).toBe(true);
  });
});
