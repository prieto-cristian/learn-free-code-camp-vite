import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const Title = () =>{
  return <div>
    Hello World!
  </div>;
};

const Descripcion = () => {
  return <div>
    Este es mi segundo componente de REACT
  </div>;
};

const Message = (props) => {
  const {text, color} = props;
  console.log(text);

  return <div style={{background: color}}>
    Soy un mensaje.
  </div>;
};

const App = () => {
  return <div>
    <Title />
    <Title />
    <Title />
    <Descripcion />
    <Message text="Hola soy informacion del componente App" color="red" />
    <Message text="CRACKKK" color="lavender" />
    <Message text="BYEEEE" color="blue" />
    todo
  </div>;
};

export default App
