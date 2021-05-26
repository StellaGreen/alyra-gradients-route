import Gradients from "./components/Gradients"
import GradientsHeader from "./components/GradientsHeader"
import Footer from "./components/Footer"
import {FilterContextProvider} from "./context/FilterContext"
import { useEffect } from "react"

function App() {

useEffect(()=>{
  //login true
  fetch(`${process.env.REACT_API_URL}/gradients`)
  .then(response => {
    if (!response.ok) {
      throw new Error(`something wrong with request: ${response.status}`)
    }
    return response.json()
  })
  .then(data => {
    // data
    console.log('data')
    console.log(data)
  })
  .catch(error => {
    //error
    console.log(error.message)
  })
  .finally(() =>{
    console.log('finally')
    // login false
  })
})

  return (
    <div className="App min-vh-100 d-flex flex-column">
      <GradientsHeader>
        <h1 className="display-1">Alyra Gradients</h1>
        <p className="tagline">Ultime collection de plus beaux dégradés</p>
      </GradientsHeader>
      <main className="container">
        <h1 className="text-center my-4">Alyra Gradients</h1>
        <FilterContextProvider>
          <Gradients />
        </FilterContextProvider>
      </main>
      <Footer />
    </div>
  )
}

export default App
