
import './App.css'
import { Route, Routes} from 'react-router-dom'
import Form from './components/Form'
import Submitted from './components/Submitted'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element = {<Form/>}/>
        <Route path= '/submitted'  element = {<Submitted/>} />
      </Routes>
    </>
  )
}

export default App

