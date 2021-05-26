import {useGradients} from "../context/GratientsContext"
import {useParams} from "react-router-dom"
import Footer from "../components/Footer"
import { useState } from "react"


const FullScreen = ()=>{
const {gradients} = useGradients()
const {id} = useParams()
const [countId,setCountId] = useState(id)
const handlClickNext = () =>{ 
  countId < (gradients.length) ? setCountId(Number(countId)+1) : setCountId(gradients.length)
}
const handlClickPrev = () =>{ 
  countId > 0 ? setCountId(Number(countId) - 1) : setCountId(0)
}
  return(
    <>
    <div className="App min-vh-100 d-flex flex-column">
      <div className="flex-fill d-flex" style = {{
    backgroundImage: `linear-gradient(to right, ${gradients[countId-1]?.start}, ${gradients[countId-1]?.end})`
  }}>
        <nav className="fixed-top nav">
          <li className="nav-item">
            <a className="btn btn-dark text-white nav-link me-2" href="/">Tous</a>
          </li>
          <li className="nav-item">
            <a className="btn btn-dark text-white nav-link me-2" href={`/gradient/${countId}`} onClick={handlClickPrev}>Précédent</a>
          </li>
          <li className="nav-item">
            <a className="btn btn-dark text-white nav-link" href={`/gradient/${countId}`} onClick={handlClickNext}>Suivant</a>
          </li>
        </nav>     
        <div className="m-auto text-center">
          <h1 className="text-white display-1">{gradients[countId-1]?.name}</h1>
          <div className="bg-white shadow p-2 rounded">
            <code>{`backgroundImage: linear-gradient(to right, ${gradients[countId-1]?.start}, ${gradients[countId-1]?.end}`};</code>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  )
}
export default FullScreen