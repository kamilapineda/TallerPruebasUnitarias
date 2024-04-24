import { anything, anything1 } from './string';

describe('Pruebas para constantes', () => {
  it('debería verificar que "anything" contiene "UN"', () => {
    expect(anything).toContain('UN');
  });

  it('debería verificar que "anything" no contiene "P"', () => {
    expect(anything).not.toContain('P');
  });

  it('debería verificar que "anything1" contiene la letra "n"', () => {
    expect(anything1).toContain('n');
  });
});
