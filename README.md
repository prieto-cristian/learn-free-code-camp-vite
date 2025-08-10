# Apuntes - React + Tailwind CSS [2025]

## Material de estudio

- YOUTUBE: [React Course for Beginners w/ Tailwind CSS [2025]](https://www.youtube.com/watch?v=IJ85kCdqWao)

## Componentes

- Un componente en React es una funcion JavaScript.
- Los nombres de los componentes deben comenzar con mayusculas.
- Cuando se quiere hacer uso de un componente se especifica el nombre del componente como si fuera un elemento HTML. Ejemplo: ```<App />```, ```<Title />```, ```<MiComponente />```.
- Al ser funciones de javascript, los componentes se pueden escribir o aparecer de distintas formas: ```const Title = () => {return ...}``` o ```function Title (){return ...}```
- Como son funciones JS podemos ejecutar codigo antes del return. Tambien podemos utilizar codigo JS dentro del return de la funcion, utilizando: ```{}```

## Renderizado de Componentes

- Los componentes se pueden renderizar en main.jsx o bien dentro de otros componentes.
- Cuando se renderiza dentro de main.jsx se utiliza el metodo ```createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)```
- Cuando un componente se renderiza dentro de otro, solo basta con invocarlo. Ej: ```return<div><Title />todo</div>;```
- Para renderizar varias veces un componentes basta con invocarlo varias veces. ```<Title /> <Title /><Title />```

## props :hammer:

- El props es un objeto JavaScript que sirve para pasarle informacion a un componente REACT. Guarda informacion mediante clave y valor.

- Es un argumento que los componentes REACT pueden recibir. No es obligatorio especificarlo en la declaracion del componente. ```(props) => ...``` o ```(props){}```

- Si se declara en el componente pero no le asignamos nada, este viene vacio.

- Si queremos darle informacion a un componente, se la pasamos en su etiqueta. Ej: ```<Message text="this is my first prop" color="red">```

- Desestructuracion del objeto: ```const {text, nombreClave} = props;```

- Si queremos devolver un componente con informacion de variables (textos, numeros, etc) debemos utilizar / encerrar las mismas con ```{}```. Ejemplo: ```return <div>{text}</div>```. El no usarlas, solo hara que se muestre text tal cual en la ventana.

### Establecer estilos pasados en el props

- ```<Message bgColor="red" />``` y dentro de un componente: ```return <div style={{background: bgColor}}>```. Esta es una forma anticuada de establecer estilos en los componentes de react. 