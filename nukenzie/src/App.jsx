import { useState } from 'react'
import './App.css'
import backgroundwhite from './assets/backgroundwhitemobile.svg'
import Dash from './components/dashboard'
import './global.css'


function App() {
  const [isPage, setIsPage] = useState(false)
  return (
    <>
    {isPage ? < Dash /> : 
     <div className='homePage'>
    <div className='side'>
    <header className='Side-Top'>
    <h4 className='title-Nu'>Nu</h4><h4 className='title-Kenzie'>Kenzie</h4>
        <p className='description1'>Centralize o controle das suas finanças</p>
        <p className='quick'>de forma rápida e segura</p>
        <button className='Start' type='button' onClick={() => setIsPage(true)}>Iniciar</button>
    </header>
      <main>
      <img  src={backgroundwhite} className='background-white'></img>
      </main>
    </div>
    </div>
}
    </>
  )
}


export default App
