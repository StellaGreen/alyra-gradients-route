import Gradients from "../components/Gradients"
import GradientsHeader from "../components/GradientsHeader"
import {FilterContextProvider} from "../context/FilterContext"
import {Link} from "react-router-dom"

const Home =()=>{
 return (
   <>
     <GradientsHeader>
       <h1 className="display-1">Alyra Gradients</h1>
       <p className="tagline">Ultime collection de plus beaux dégradés</p>
     </GradientsHeader>
     <main className="container">
       <Link
         className="btn btn-light btn-outline-dark w-100 text-dark nav-link me-2"
         to="/proposition"
       >
         Faites une proposition
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