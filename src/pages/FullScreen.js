import {useGradients} from "../context/GratientsContext"
import {useParams} from "react-router-dom"


const FullScreen = ()=>{
const {gradients} = useGradients()
console.log(gradients)
const {id} = useParams()
  return(
    <div className="App min-vh-100 d-flex flex-column">
      <div className="flex-fill d-flex" style = {{
    backgroundImage: `linear-gradient(to right, ${gradients[id-1]?.start}, ${gradients[id-1]?.end})`
  }}>
        <nav className="fixed-top nav">
          <li className="nav-item">
            <a className="btn btn-dark text-white nav-link me-2" href="/">Tous</a>
          </li>
          <li className="nav-item">
            <a className="btn btn-dark text-white nav-link me-2" href="/gradient/3">Précédent</a>
          </li>
          <li className="nav-item">
            <a className="btn btn-dark text-white nav-link" href="/gradient/5">Suivant</a>
          </li>
        </nav>     
        <div className="m-auto text-center">
          <h1 className="text-white display-1">{gradients[id-1]?.name}</h1>
          <div className="bg-white shadow p-2 rounded">
            <code>{{backgroundImage: `linear-gradient(to right, ${gradients[id-1].start}, ${gradients[id-1].end})`}};</code>
          </div>
        </div>
      </div>
    </div>
  )
}
export default FullScreen