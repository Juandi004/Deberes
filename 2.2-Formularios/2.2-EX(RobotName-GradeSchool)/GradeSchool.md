Interaz DB: Esta interfaz define un tipo de objeto que representa una base de datos donde las claves son números (representando grados escolares) y los valores son arreglos de cadenas (nombres de los estudiantes).

roster()
Este método devuelve una copia profunda del _roster, que es un objeto que contiene la lista de estudiantes organizados por grado. La copia profunda asegura que cualquier modificación al objeto devuelto no afecte al _roster original.

add(name: string, grade: number)
Este método agrega un estudiante a un grado específico. Primero, llama a deDupe para asegurar que el nombre del estudiante no esté duplicado en otro grado. Luego, si el grado ya existe en _roster, añade el nombre al arreglo correspondiente y lo ordena alfabéticamente. Si el grado no existe, crea un nuevo arreglo con el nombre del estudiante.

grade(grade: number)
Este método devuelve el arreglo de estudiantes que pertenecen a un grado específico. Si el grado no existe en _roster, devuelve un arreglo vacío.

deDupe(name: string)
Este método elimina el nombre del estudiante de cualquier grado en el que pueda estar presente, asegurando que no haya duplicados en diferentes grados.


link del video: https://www.youtube.com/watch?v=KAXpb1d9fVQ