import {createContext, useContext, useReducer, useEffect} from "react"
import {gradientsReducer} from "../reducers/gradientsReducer"

export const GradientsContext = createContext()

export const GradientsContextProvider = ({children}) => {
  const [state, gradientsDispatch] = useReducer(gradientsReducer, {
    loading: true,
    error: "",
    gradients: []
  })
  const {loading, error, gradients} = state

  useEffect(()=>{
  //login true
  gradientsDispatch({type: "FETCH_INIT"})
  fetch(`${process.env.REACT_APP_API_URL}/gradients`)
  .then(response => {
    if (!response.ok) {
      throw new Error(`something wrong with request: ${response.status}`)
    }
    return response.json()
  })
  .then(data => {
    // data
    gradientsDispatch({type: "FETCH_SUCCESS", payload: data})
  })
  .catch(e=> {
    //error
    console.log(e.message)
    gradientsDispatch({type: "FETCH_FAILURE", payload: e.message})
  })
},[])


  return (
    <GradientsContext.Provider value={{loading, error, gradients, gradientsDispatch}}>
      {children}
    </GradientsContext.Provider>
  )
}

export const useGradients = () => {
  const context = useContext(GradientsContext)
  if (context === undefined) {
    throw new Error('You should use useUser only within the GradientsContext.Provider')
  }
  return context
}

