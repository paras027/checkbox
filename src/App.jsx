import { useState } from 'react'

import './App.css'
import Button from './Buttons'
import Checkbox from './Checkbox';
function App() {
  const [hover, setHover] = useState(false);

  return (
    <div className="checkbox-container"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <Checkbox/>
      <div className='marg'>Checkbox</div> 
      {hover && (
        <Button/>
      )}
    </div>
  );
}

export default App;