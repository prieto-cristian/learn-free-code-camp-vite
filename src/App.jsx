import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const Title = () =>{
  return <div>
    Hello World!
  </div>
}
const Descripcion = () => {
  return <div>
    Este es mi segundo componente de REACT
  </div>
}
const App = () => {
  return <div>
    <Title />
    <Title />
    <Title />
    <Descripcion />
    todo
  </div>;
};

export default App
