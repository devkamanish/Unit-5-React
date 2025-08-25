import './App.css'
import {Routes , Route} from "react-router-dom"
import Home from './Component/Home'
import MovieDetails from './Component/MovieDetails'

    // <!-- 9b9b876e 

function App() {

  return (
    <>
    <h1>Movie search app</h1>
    <Routes>
  <Route path='/' element = {<Home/>} />
  <Route  path='/movie/:id' element  = {<MovieDetails/>}/>

  <Route />
    </Routes>
    </>
  )
}

export default App
