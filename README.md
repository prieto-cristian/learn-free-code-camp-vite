# Apuntes - React + Tailwind CSS [2025]

## Material de estudio

- YOUTUBE: [React Course for Beginners w/ Tailwind CSS [2025]](https://www.youtube.com/watch?v=IJ85kCdqWao)

## Componentes

- Un componente en React es una funcion JavaScript.
- Los nombres de los componentes deben comenzar con mayusculas.
- Cuando se quiere hacer uso de un componente se especifica el nombre del componente como si fuera un elemento HTML. Ejemplo: ```<App />```, ```<Title />```, ```<MiComponente />```.
- Al ser funciones de javascript, los componentes se pueden escribir o aparecer de distintas formas: ```const Title = () => {return ...}``` o ```function Title (){return ...}```
- Como son funciones JS podemos ejecutar codigo hasta llegar al return.

## Renderizado de Componentes

- Los componentes se pueden renderizar en main.jsx o bien dentro de otros componentes.
- Cuando se renderiza dentro de main.jsx se utiliza el metodo ```createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)```
- Cuando un componente se renderiza dentro de otro, solo basta con invocarlo. Ej: ```return<div><Title />todo</div>;```
- Para renderizar varias veces un componentes basta con invocarlo varias veces. ```<Title /> <Title /><Title />```