import { useState } from 'react';
import { Page } from './Page';



function App() {
  const [count, setCount] = useState(0);
  const [lamparina, setLamparina] = useState(true);

  // const trocarLampada = () => {
  //   setLampada(!lampada)
  // }

  // const clique = () => {
  //   setCount (count + 1);
  // }

  // <button onClick={() => {
  //       setCount (count - 1);
  //     }}>0</button>
  //     <button onClick={clique}>{count}</button>

  //     <img src={
  //       lampada ? "" : ""
  //     } 
  //     alt=''
  //     onClick={trocarLampada}/>

  return (
    <>
      <Page lamparina={lamparina} setLamparina={setLamparina} 
      count={count} setCount={setCount}
      />
    </>
  )
}

export default App
