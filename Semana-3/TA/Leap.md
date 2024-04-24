Esta función indica si un año es bisiesto o no.

Un año es bisiesto si es divisible entre 4.

Sin embargo, los años divisibles entre 100 no son bisiestos, a menos que también sean divisibles entre 400.

1. Comprueba si el año es divisible entre 4 (year % 4 === 0) y no es divisible entre 100 (year % 100 !== 0), en este caso devolvería "true" indicando que el año es bisiesto.

O comprueba si el año es divisible entre 400 (year % 400 === 0), en cuyo caso también devuelve true.

Si ninguna de estas condiciones se cumple, devuelve false, lo que indica que el año no es bisiesto.


link del video: https://www.youtube.com/watch?v=TU3yZNkoBeM