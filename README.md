Kamila Pineda
Realizamos el Fork del repositorio base indicado en el documento
Organizamos el archivo .gitignore
Ejecutamos en terminal "npm install" para instalar los modulos
Creamos el archivo tsconfig.json
Creamos el archivo de prueba del array:
    arrayContainsValue: Esta función comprueba si un valor dado está contenido dentro de un array. Las pruebas garantizan que la función devuelve true cuando el array contiene el valor especificado, como "value1" o "value3".
    arrayNotContainsValue: Por otro lado, esta función verifica si un valor dado no está presente en un array. Las pruebas aseguran que la función devuelve true cuando el array no contiene el valor especificado, como "UNAC".
Creamos el archivo de prueba del div:
    División Correcta: Se prueba si la función devuelve el resultado esperado cuando se realiza una división válida. En este caso, se espera que la división de 10 por 2 sea igual a 5.
    División por Cero: Se verifica si la función lanza un error cuando se intenta dividir por cero. Se define una función anónima intentoDivisionPorCero que intenta dividir 10 por 0, y luego se verifica si esta función lanza un error con el mensaje "División por cero".
Creamos el archivo de prueba de multi:
    Verificar si "n" es null:
    Esta prueba asegura que la constante n tenga el valor null. Si n es null, esta prueba pasará correctamente.
    Verificar si "n" está definido (no es undefined):
    Aquí nos aseguramos de que la constante n esté definida y no sea undefined. Si n tiene algún valor asignado, incluso si es null, esta prueba será exitosa.
    Verificar si "number" es igual a 0:
    En esta prueba, verificamos si la constante number es igual a 0. Si number tiene otro valor distinto de 0, la prueba fallará.
    Verificar si "notTrue" es false:
    Esta prueba confirma que la constante notTrue tiene el valor false. Si notTrue fuera true, la prueba no pasaría.
    Verificar si "notFalse" es true:
    Finalmente, esta prueba comprueba que la constante notFalse tenga el valor true. Si notFalse fuera false, la prueba fallaría.
Creamos el archivo de prueba de string:
    Verificar si "anything" contiene "UN":
    Esta prueba asegura que la constante anything contenga la subcadena "UN". Si anything contiene "UN", la prueba pasará correctamente.
    Verificar si "anything" no contiene "P":
    Aquí nos aseguramos de que la constante anything no contenga la letra "P". Si anything no contiene "P", la prueba será exitosa.
    Verificar si "anything1" contiene la letra "n":
    En esta prueba, confirmamos que la constante anything1 contenga la letra "n". Si anything1 incluye la letra "n", la prueba pasará correctamente.
Creamos el archivo de prueba sum:
    Verificar si una suma de dos valores es mayor a 10:
    Esta prueba garantiza que la suma de 6 y 5 sea mayor que 10. Si la suma es mayor que 10, la prueba pasará correctamente.
    Verificar si una suma de dos valores es mayor o igual a 20:
    En esta prueba, nos aseguramos de que la suma de 10 y 10 sea mayor o igual a 20. Si la suma es igual o mayor que 20, la prueba será exitosa.
    Verificar si una suma de dos valores es menor o igual a 8:
    Esta prueba verifica que la suma de 3 y 5 sea menor o igual a 8. Si la suma es menor o igual a 8, la prueba será exitosa.
    Verificar si una suma de dos valores es menor a 12:
    Aquí confirmamos que la suma de 6 y 5 sea menor que 12. Si la suma es menor que 12, la prueba pasará correctamente.
    Verificar si una suma de dos valores es igual a 9:
    Esta prueba asegura que la suma de 4 y 5 sea igual a 9. Si la suma es igual a 9, la prueba será exitosa.
Verificamos que todas las pruebas se ejecuten con exito con el comando "npx jest --verbose"
Realizamos los commits requeridos.
Profe, no realicé pull request porque me hice sola.