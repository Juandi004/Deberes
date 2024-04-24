La función realiza lo siguiente: 

Divide la cadena de ADN en caracteres individuales usando split(''), lo que produce un array de caracteres.
Mapea sobre este array de caracteres y, para cada base, realiza una traducción de ADN a ARN:
Si el carácter es 'G' (guanina), lo cambia por 'C' (citosina).
Si es 'C' (citosina), lo cambia por 'G' (guanina).
Si es 'T' (timina), lo cambia por 'A' (adenina).
Si es 'A' (adenina), lo cambia por 'U' (uracilo).
Si el carácter no coincide con ninguna de estas bases, lanza un error indicando que la entrada del ADN es inválida.
Une los caracteres traducidos en un solo string usando join('').
Devuelve el ARN resultante.


Link del video: https://www.youtube.com/watch?v=TU3yZNkoBeM