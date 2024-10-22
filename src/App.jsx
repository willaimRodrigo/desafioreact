import { useState } from 'react';
import { Page } from './Page';

import "./Styles/index.scss";

function App() {
  const [count, setCount] = useState(0);
  const [lamparina, setLamparina] = useState(true);

  return (
    <>
      <Page lamparina={lamparina} setLamparina={setLamparina} 
      count={count} setCount={setCount}
      />
    </>
  )
}

export default App
