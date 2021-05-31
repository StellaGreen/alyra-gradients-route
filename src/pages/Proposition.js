import GradientPill from "../components/GradientPill";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import ToggleModeButton  from "../components/ToggleModeButton"

const Proposition = () => {
  const [color, setColor] = useState({
    start: { r: 0, g: 0, b: 0 },
    end: { r: 0, g: 0, b: 0 },
  });
  const [name, setName] = useState("default name");
  const { start, end } = color;

  const handleChange = (e) => {
    const [ent, val] = e.target.id.split("-");
    setColor({
      ...color,
      [ent]: { ...color[ent], [val]: Number(e.target.value) },
    });
  };
  const handleChangeName = (e) => {
    setName(e.target.value);
  };

  const handleSubmit = () => {
    fetch(`${process.env.REACT_APP_API_URL}/proposition`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer 987654321",
      },
      body: JSON.stringify({
        id: uuidv4(),
        name: name,
        start: `rgb(${start.r},${start.g},${start.b})`,
        end: `rgb(${end.r},${end.g},${end.b})`,
        tags: [],
      }),
    });
  };
  const [darkMode, setDarkMode] = useState(true);
  const modeClasses = darkMode ? "bg-dark text-white rounded-3" : "bg-light rounded-3";
  const superStyle = {
    width : "25rem"
  }
  return (
    <>
    <ToggleModeButton darkMode={darkMode} setDarkMode={setDarkMode} />
    <div className={modeClasses}>
      <div className="container">
        <h1 className="display-2 text-center m-2 p-2">Make your Own proposition !</h1>
        <h3 className="text-center pb-2 fw-lighter">It's easy to do with the power of RGB !</h3>
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
        <div className="m-2">
          <label className="pb-2 m-2 ml-5 fw-bold" htmlFor="gradient-name" >Name your gradient  :   </label>
          <input
            id="gradient-name"
            type="text"
            className={modeClasses}
            onChange={handleChangeName}
            //defaultValue={name}
            placeholder={name}
            aria-label="readonly input example"
            
          ></input>
        </div>
        <div className="row">
          <div className="col-3"></div>
          <div className="col-3">
          <div className="text-danger">Red Start</div>
            <input
              type="range"
              className="form-range float-end"
              id="start-r"
              defaultValue="0"
              min="0"
              max="255"
              step="1"
              onChange={handleChange}
              style={superStyle}
            ></input>
            <div className="text-success">Green Start</div>
            <input
              type="range"
              className="form-range float-end"
              id="start-g"
              defaultValue="0"
              min="0"
              max="255"
              onChange={handleChange}
              style={superStyle}
            ></input>
            <div className="text-primary">Blue Start</div>
            <input
              type="range"
              className="form-range float-end"
              id="start-b"
              defaultValue="0"
              min="0"
              max="255"
              onChange={handleChange}
              style={superStyle}
            ></input>
          </div>
          <div className="col-3">
          <div className="text-danger text-center">Red End</div>
            <input
              type="range"
              className="form-range float start"
              id="end-r"
              defaultValue="0"
              min="0"
              max="255"
              step="1"
              onChange={handleChange}
              style={superStyle}
            ></input>
            <div className="text-success text-center">Green End</div>
            <input
              type="range"
              className="form-range "
              id="end-g"
              defaultValue="0"
              min="0"
              max="255"
              onChange={handleChange}
              style={superStyle}
            ></input>
            <div className="text-primary text-center">Blue End</div>
            <input
              type="range"
              className="form-range "
              id="end-b"
              defaultValue="0"
              min="0"
              max="255"
              onChange={handleChange}
              style={superStyle}
            ></input>
          </div>
        </div>
        <div className="col-3"></div>
        <button className="btn btn-primary mt-5 p-1 mb-5 d-grid gap-2 col-6 mx-auto" onClick={handleSubmit}>submit</button>
      </div>
      </div>
    </>
  );
};
export default Proposition;
