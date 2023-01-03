import { useState } from 'react'
import {ReactComponent as ReactLogo} from './assets/react.svg'
import './App.css'

import Form from './components/Form/Form';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='w-full h-full flex place-items-center justify-center'>
      <Form />
    </div>
  )
}

export default App
