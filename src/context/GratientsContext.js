import {createContext, useContext, useReducer} from "react"
import {gradientsReducer} from "../reducers/gradientsReducer"

export const GradientsContext = createContext()

export const GradientsContextProvider = ({children}) => {
  const [state, gradientsDispatch] = useReducer(gradientsReducer, {
    loading: false,
    error: "",
    gradients: []
  })
  const {loading, error, gradients} = state

  useEffect(()=>{
  //login true
  console.log(`${process.env.REACT_APP_API_URL}/gradients`)
  fetch(`${process.env.REACT_APP_API_URL}/gradients`)
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
  .catch(e=> {
    //error
    console.log('error')
    console.log(e.message)
  })
  .finally(() =>{
    console.log('finally')
    // login false
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

