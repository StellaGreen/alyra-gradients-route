import GradientPill from "../components/GradientPill"
import {useState} from "react"

const Proposition = () => {
  const [color, setColor] = useState({ start:{r:0,g:0,b:0}, end:{r:0,g:0,b:0} })
  const {start,end} = color
  
  const handleChange = (e) => {
    const [ent,val] = e.target.id.split('-')
        setColor({
          ...color,
          [ent]: { ...color[ent], [val]: Number(e.target.value) },
        });
        
      }
  return (
    <>
    <div className="container">
      <h1 className="text-center">Make your Own proposition </h1>

      <div className="row">
        <GradientPill
          colorStart={`rgb(${start.r},${start.g},${start.b})`}
          colorEnd={`rgb(${start.r},${start.g},${start.b})`}
          />
        <GradientPill
          colorStart={`rgb(${start.r},${start.g},${start.b})`}
          colorEnd={`rgb(${end.r},${end.g},${end.b})`}
          />
        <GradientPill
          colorStart={`rgb(${end.r},${end.g},${end.b})`}
          colorEnd={`rgb(${end.r},${end.g},${end.b})`}
          />
      </div>
      <div>
      <label htmlFor ="gradient-name">name your gradient</label>
      <input id="gradient-name" type="text" className="display-block m-x"></input>
      </div>
      <div className="row">
          <div className="col-6">

              <input
                type="range"
                className="form-range"
                id="start-r"
                min="0"
                max="255"
                step="1"
                onChange={handleChange}
                ></input>
              <input
                type="range"
                className="form-range"
                id="start-g"
                min="0"
                max="255"
                onChange={handleChange}
                ></input>
              <input
                type="range"
                className="form-range"
                id="start-b"
                min="0"
                max="255"
                onChange={handleChange}
                ></input>
          </div>
          <div className="col-6">
              <input
                type="range"
                className="form-range"
                id="end-r"
                min="0"
                max="255"
                step="1"
                onChange={handleChange}
                ></input>
              <input
                type="range"
                className="form-range"
                id="end-g"
                min="0"
                max="255"
                onChange={handleChange}
                ></input>
              <input
                type="range"
                className="form-range"
                id="end-b"
                min="0"
                max="255"
                onChange={handleChange}
                ></input>
            </div>
        </div>
      </div>
    </>
  );
}
export default Proposition