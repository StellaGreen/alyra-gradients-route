import {useGradients} from "../context/GratientsContext"
import {useParams, Link} from "react-router-dom"
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
  countId > 0 ? setCountId(Number(countId) - 1) : setCountId(1)
}
  return(
    <>
    <div className="App min-vh-100 d-flex flex-column">
      <div className="flex-fill d-flex" style = {{
    backgroundImage: `linear-gradient(to right, ${gradients[countId-1]?.start}, ${gradients[countId-1]?.end})`
  }}>
        <nav className="fixed-top nav">
          <li className="nav-item">
            <Link className="btn btn-dark text-white nav-link me-2" to="/">Tous</Link>
          </li>
          <li className="nav-item">
            <Link className="btn btn-dark text-white nav-link me-2" to={`/gradient/${Number(countId)-1}`} onClick={handlClickPrev} disabled={Number(countId) <= 1}>Précédent</Link>
          </li>
          <li className="nav-item">
            <Link className="btn btn-dark text-white nav-link" to={`/gradient/${Number(countId)+1}`} onClick={handlClickNext} disabled={Number(countId) >= gradients.length}>Suivant</Link>
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