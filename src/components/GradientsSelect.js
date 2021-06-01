import {useFilter} from "../context/FilterContext"
//import { uniqueTags as tags } from "../gradients"
import { useGradients } from "../context/GratientsContext"

const nbTags = (filter, gradients) => {
  return gradients.filter((elem) => elem.tags.includes(filter)).length
}

const GradientsSelect = () => {
  const {uniqueTags: tags, gradients} = useGradients()
  const { filter, setFilter } = useFilter()
  const handleSelectChange = (e) => {
    setFilter(e.target.value)
  }
  return (
    <div className="input-group mb-3">
      <label className="input-group-text" htmlFor="select">
        Filtrer par tag
      </label>
      <select
        className="form-select"
        id="select"
        value={filter}
        onChange={handleSelectChange}
      >
        <option value="all">Tous ({gradients.length})</option>
        {tags.sort().map((el) => (
          <option key={el} value={el}>
            {el.charAt(0).toUpperCase() + el.slice(1) + ' (' + nbTags(el, gradients) + ')'}
          </option>
        ))}
      </select>
    </div>
  )
}

export default GradientsSelect
