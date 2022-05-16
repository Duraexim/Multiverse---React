# Multiverse

### Tienda para comprar NFT's

[![Build Status](https://github.com/Duraexim/Multiverse---React/blob/master/multiverse/public/images/Compra.gifc)]
` Gif que muestra la navegación del sitio web realizando una compra`  (El archivo gif se encuentra disponible en la carpeta Public/Images)


Primero debes crear tu aplicación con el comando:
`- npx create-react-app multiverse ` 

Para iniciar el programa debes abrir una nueva terminal y escribir los comandos:

 `cd multiverse` 
 `npm start`

Se abrirá tu aplicación de React en el navegador.

** Es necesario tener instalado en el proyecto las siguientes librerias, instalar utilizando el comando npm install y agregando la libreria deseada:

`react-router-dom` (para poder usar Link)
`firebase` (para poder utilizar la base de datos de Firebase)


## Explicación de los Componentes:

### NavBar: 
- Es la barra de navegación que nos permite navegar por el sitio, Incluye el nombre-marca-logo del sitio, las categorias de los productos `(setCategories)`, y el widget del carrito `<CartWidget />` , para que podamos acceder al mismo. 


### CartWidget: 
- Muestra la cantidad actual de Axies agregados al carrito gracias al `getQuantity()` el cual obtiene los datos del `CartContext` 
- El CartWidget también nos permite acceder al carrito (componente Cart) para comprobar los productos agregados al mismo.


### CartContext: 
- Se encarga de agregar `(addItem)` o quitar `(removeItem)` los productos del carrito -componente Cart-, también permite vaciar completamente el mismo `(clearCart)` .
- Crea el array Cart `(setCart)` que contiene los productos del componente Cart: Esto nos permite obtener la cantidad seleccionada de cada producto `(getQuantityAxie)`, verifica si el producto está repetido en el carrito `( isInCart)`, permite obtener el valor de la suma del precio total de todos los items del carrito `(getTotal)`, muestra la cantidad total de cuantos productos fueron agregados al carrito (en el componente CartWidget) `(getQuantity)` 


### Cart: 
- Se encarga de mostrar los axies agregados al carrito con sus detalles, e informa el valor total de la compra (tomando los datos del componente `ItemCart` y obteniendo el valor `(getTotal())` del `CartContext`)
- El componente Cart permite procesar la compra `(createOrder)` con un formulario integrado en el mismo, el cual carga los datos ingresados del usuario en Firebase y registra la orden de compra `(axieOrder)`. Tambien nos permite vaciar el carrito  al usar `clearCart()` del `CartContext`.


### ItemCart: 
- Este componente permite remover el producto del Carrito con `handleRemove()` que funciona gracias al `{removeItem}` del `CartContext`.
- El ItemCart es el que detalla la información del producto agregado en el carrito, detallando el Precio Unitario del mismo `{precio}`, la cantidad `{quantity}` que el usuario va a comprar, y el Subtotal `{quantity * precio}`.


### ItemDetail:
- Es el componente encargado de mostrar todos los detalles del producto. 
- Permite agregar el producto al carrito de compras usando `(addItem)` del `CartContext`, tomando la cantidad elegida por medio del componente `<ItemCount/>` y del `CartContext` `(getQuantityAxie)` en conjunto.
-  Si el producto ya está en el carrito `(isInCart)`, en vez de permitir al usuario agregarlo nuevamente, aparece un boton para ir al carrito.
- Si el usuario agrega el producto al carrito, se mostrará una notificacion gracias al `(setNotification)` del componente `Notification`.
- El componente ItemDetail se muestra en el `ItemDetailContainer`.


### ItemDetailContainer: 
- Es el contenedor que muestra los detalles del producto, muestra los datos del componente `ItemDetail`.
- En caso de que el usuario busque un producto que no existe, el contenedor informará que el producto buscado no existe.


### ItemCount:
- Es el contador presente en el componente `ItemDetail`. 
- Permite elegir la cantidad (sumando `(sumar)` o restando `(restar)`) del producto a comprar, limitando el input del usuario de acuerdo al stock disponible, para que nunca sea mayor o menor que el mismo. 
- En caso de no haber stock, no permite comprar el producto, desaparece el contador y aparece un boton sin función que informa que no hay stock.


### Item: 
- Es el componente que permite acceder a los detalles del producto por medio de un boton
- Muestra información basica del producto (nombre, imagen y precio)
- El componente Item se muestra dentro del componente `ItemList`


### ItemList:
 - Es el encargado de mostrar una lista de productos en base a los productos disponibles del componente `Item`.


### ItemListContainer:
 - Es el contenedor principal del sitio, el cual muestra los productos. 
 - Acepta filtrado por categoria `{categoryId}`
 - Muestra los productos del componente `ItemList`.


### Services / Firebase:
- Obtiene la base de datos de `Firebase`. Desde aqui obtenemos la información de nuestros productos, la cual utilizaremos en los diferentes componentes al importar `{firestoreDb}`. 
- Para que los componentes funcionen correctamente, en la base de datos de firestore al crear el producto debemos detallar la siguiente información: `clase, category, descripcion, img, precio, stock, cantidad ` -   y el `id`, el cual es generado por firebase cuando creamos el producto


### Notification: 
- Nos permite mostrar diferentes notificaciones al usar `(setNotification)` * se debe importar `{useNotification}` en el componente deseado (Actualmente fue utilizada para informar cuando un producto es agregado al carrito correctamente (en el componente `ItemDetail`), cuando la compra es finalizada con exito o si ocurre un error al intentar procesar la compra) (en el componente `Cart`)


### Modal: 
- Un boton Modal que en este caso fue utilizado para mostrar el formulario usado en el componente Cart  `<Modal>`lo que desees mostrar`</Modal>`


### Portal: 
- Nos permite mostrar/utilizar el Modal en cualquier componente del proyecto. Permite montar y desmontar el modal






