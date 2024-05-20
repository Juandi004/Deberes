1. ¿Cuál de las siguientes opciones es correcta para pasar datos desde un componente padre a un componente hijo en Angular?

a) Utilizando el decorador `@Output` en el componente hijo.

b) Utilizando el decorador `@Input` en el componente hijo.

c) Utilizando el decorador `@Output` en el componente padre.

d) Utilizando el decorador `@Input` en el componente padre.

Respuesta Correcta: b) Utilizando el decorador `@Input` en el componente hijo.

Explicación: En Angular, para pasar datos desde un componente padre a un componente hijo, se utiliza el decorador `@Input` en el componente hijo. Esto permite que el componente hijo reciba datos del componente padre a través de propiedades vinculadas en el template del componente padre.

2. ¿Cómo puede un componente hijo enviar datos de vuelta al componente padre en Angular?

a) Utilizando el decorador `@Input` y binding en el template del padre.

b) Utilizando el decorador `@Output` y `EventEmitter`.

c) Utilizando el servicio HTTP de Angular.

d) Utilizando el decorador `@Output` y `HttpClient`.

Respuesta Correcta: b) Utilizando el decorador `@Output` y `EventEmitter`.

Explicación: Para enviar datos desde un componente hijo a un componente padre, se utiliza el decorador `@Output` en combinación con `EventEmitter` en el componente hijo. Esto permite emitir eventos personalizados que el componente padre puede escuchar y manejar.

3. ¿Qué se debe hacer en el template del componente padre para vincular correctamente una propiedad a una propiedad de entrada (input) de un componente hijo?

a) Utilizar la directiva `ngFor`.

b) Utilizar la interpolación `{{ }}`.

c) Utilizar el binding de propiedades con corchetes `[ ]`.

d) Utilizar la directiva `ngIf`.

Respuesta Correcta: c) Utilizar el binding de propiedades con corchetes `[ ]`.

Explicación: Para pasar una propiedad desde el componente padre al componente hijo, se utiliza el binding de propiedades con corchetes `[ ]` en el template del componente padre. Esto enlaza la propiedad del componente padre con una propiedad decorada con `@Input` en el componente hijo, permitiendo la transferencia de datos.


Video: https://www.youtube.com/watch?v=Uw95aGYuDjI