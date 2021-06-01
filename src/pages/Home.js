import Gradients from "../components/Gradients"
import GradientsHeader from "../components/GradientsHeader"
import {FilterContextProvider} from "../context/FilterContext"
import {Link} from "react-router-dom"

const Home =()=>{
  const buttonStyle = {
    backgroundImage: "linear-gradient(to right, rgb(52,106,181), rgb(185,12,46))",
    marginTop:"1rem",
    width:"9rem",
    boxShadow: "2px 4px 10px red",
  }
 return (
   <>
     <GradientsHeader>
       <h1 className="display-1">Alyra Gradients</h1>
       <p className="tagline">Ultime collection de plus beaux dégradés</p>
     </GradientsHeader>
     <main className="container">
       <Link
         className="btn fw-bold text-white nav-link me-2 position-absolute top-50 end-0 translate-middle"
         style={buttonStyle}
         to="/proposition"
       >
         Faites une proposition !
       </Link>
       <h1 className="text-center my-4">Alyra Gradients</h1>
       <FilterContextProvider>
         <Gradients />
       </FilterContextProvider>
     </main>
   </>
 );
}
export default Home