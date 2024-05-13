Esta función exportada se llama `isPangram` y toma una cadena de texto `sentence`. Comprueba si la oración proporcionada es un pangrama, es decir, si contiene al menos una vez cada letra del alfabeto inglés. 

- Primero, crea una cadena constante llamada `alphabet` que contiene todas las letras del alfabeto en minúsculas.
- Luego, convierte la oración a minúsculas utilizando el método `toLowerCase()`.
- A continuación, divide el alfabeto en un array de letras usando `split('')`.
- Finalmente, utiliza el método `every()` para verificar si todas las letras del alfabeto están incluidas al menos una vez en la oración convertida a minúsculas. Si todas las letras están presentes, devuelve `true`; de lo contrario, devuelve `false`.


Video: https://www.youtube.com/watch?v=DpXoVFA07Tg