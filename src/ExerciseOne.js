import { useState } from 'react'

export const ExerciseOne = () => {
  
  const initialState = [false, true, false, true]
  const [arrayBoolean, setArrayBoolean] = useState([...initialState]);
 
  const handleOnClickFirstTask = () => {
    setArrayBoolean(
      arrayBoolean.map((item) =>  false)
    )
  }
  const handleOnClickSecondTask = () => {
    setArrayBoolean(
      arrayBoolean.map((item) =>  true)
    )
  }
  const handleOnClickThirdTask = () => {
    setArrayBoolean(
      initialState.map(item => !item)
    )
  }

  return (
    <div className='App'>
      <h1>Hello React.</h1>
      <button onClick={handleOnClickFirstTask}>First task </button>
      <button onClick={handleOnClickSecondTask}>Second task </button>
      <button onClick={handleOnClickThirdTask}>Third task </button>
      <section>
      {arrayBoolean.map((item, index) => <p key={index}>{String(item)}</p>)}
      </section>
    </div>
  );
}


// Cambiar los valores de estado de array boolean
  // 1. Todo falso
  // 2. Todo verdadero
  // 3. Alternar los valores actuales del estado inicial (true, false, true, false)
  // 4. Crear un py de react desde cero y mostrar el arreglo y 3 botones.
