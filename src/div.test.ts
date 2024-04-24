import { div } from './div';

describe('Pruebas para la función div', () => {
  it('debería devolver el resultado de la división cuando la división es correcta', () => {
    // Definimos dos números para dividir
    const resultado = div(10, 2);
    // Comprobamos si el resultado de la división es el esperado
    expect(resultado).toBe(5);
  });

  it('debería lanzar un error si se intenta dividir por cero', () => {
    // Definimos un intento de división por cero
    const intentoDivisionPorCero = () => {
      div(10, 0);
    };
    // Comprobamos si la función lanza un error al intentar dividir por cero
    expect(intentoDivisionPorCero).toThrow('División por cero');
  });
});

