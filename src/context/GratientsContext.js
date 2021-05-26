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