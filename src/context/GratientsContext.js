import {createContext, useContext, useReducer, useEffect, useState} from "react"
import {gradientsReducer} from "../reducers/gradientsReducer"

export const GradientsContext = createContext()

function allTags(list) {
  /* retourner la liste des tags uniques */
  let listTotal = []
  for (let element of list) {
    if ("tags" in element) {
      listTotal = listTotal.concat(element.tags)
    }
  }
  const listTagsUnique = []
  listTotal.forEach((el) => {
    if (!listTagsUnique.includes(el)) {
      //listTagsUnique = listTagsUnique.concat([el])
      listTagsUnique.push(el)
    }
  })
  return listTagsUnique
}

export const GradientsContextProvider = ({children}) => {
  const [state, gradientsDispatch] = useReducer(gradientsReducer, {
    loading: true,
    error: "",
    gradients: []
  })

  const {loading, error, gradients} = state
  const [uniqueTags, setUniqueTags] = useState([])

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

  useEffect(() => {
    setUniqueTags(allTags(gradients))
  }, [gradients])
  
  return (
    <GradientsContext.Provider value={{loading, error, gradients, gradientsDispatch, uniqueTags}}>
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