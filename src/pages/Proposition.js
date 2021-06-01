import GradientPill from "../components/GradientPill";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import ToggleModeButton  from "../components/ToggleModeButton"
import {Link} from "react-router-dom"

const normTags = [
  "blanc",
  "noir",
  "pourpre",
  "rouge",
  "orange",
  "jaune",
  "vert",
  "bleu",
  "violet",
  "ivoire",
  "crème",
  "beige",
  "rose",
  "kaki",
  "brun",
  "marron",
  "bordeaux",

]
  
const Proposition = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [color, setColor] = useState({
    start: { r: 0, g: 0, b: 0 },
    end: { r: 0, g: 0, b: 0 },
    tags:[]
  });
  const [name, setName] = useState("default name");
  const { start, end } = color;
  const modeClasses = darkMode ? "bg-dark text-white" : "bg-light";
  const superStyle = {
    width: "25rem",
  };

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
        name,
        start: `rgb(${start.r},${start.g},${start.b})`,
        end: `rgb(${end.r},${end.g},${end.b})`,
        tags: color.tags,
       })
     })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`something wrong with request: ${response.status}`);
        }
        return response.json();
      })
        .then((data) => {
        alert('your proposition has been sent')
        console.log(data)
      })
      .catch((e) =>{
        alert('error')
        console.error(e.message)
      })
  }
  const handleReset = () => {
    setColor({
      start: { r: 0, g: 0, b: 0 },
      end: { r: 0, g: 0, b: 0 },
      tags:[]
    });
  };
  const handleToggleTags = (e) => {
        setColor({
          ...color,
          tags:[...color.tags, e.target.textContent]})
  }
  console.log(color.tags)
  return (
    <>
      <ToggleModeButton darkMode={darkMode} setDarkMode={setDarkMode} />
      <Link
        className="btn btn-light btn-outline-dark w-100 text-dark nav-link me-2"
        to="/"
      >
        Home
      </Link>
      <div className={`${modeClasses} min-vh-100`}>
        <div className="container">
          <h1 className="display-2 text-center m-2 p-2 mt-lg-5">
            Make your Own proposition !
          </h1>
          <h3 className="text-center pb-2 fw-lighter mt-lg-4">
            It's easy to do with the power of RGB !
          </h3>
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
          <div className="text-center">
            <label
              className="pb-2 m-2 ml-5 fw-bold d-block"
              htmlFor="gradient-name"
            >
              Name your gradient :{" "}
            </label>
            <input
              id="gradient-name"
              type="text"
              className={`${modeClasses} d-block m-auto mb-3`}
              onChange={handleChangeName}
              //defaultValue={name}
              placeholder={name}
              aria-label="readonly input example"
            ></input>
          </div>
          <div className="row ">
            <div className="offset-lg-3 col-lg-3 text-center">
              <div className="text-danger">Red Start</div>
              <input
                type="range"
                className="form-range float-end"
                id="start-r"
                value={color.start.r}
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
                value={color.start.g}
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
                value={color.start.b}
                min="0"
                max="255"
                onChange={handleChange}
                style={superStyle}
              ></input>
            </div>
            <div className="col-lg-3 text-center">
              <div className="text-danger">Red End</div>
              <input
                type="range"
                className="form-range float-start"
                id="end-r"
                value={color.end.r}
                min="0"
                max="255"
                step="1"
                onChange={handleChange}
                style={superStyle}
              ></input>
              <div className="text-success">Green End</div>
              <input
                type="range"
                className="form-range float-start"
                id="end-g"
                value={color.end.g}
                min="0"
                max="255"
                onChange={handleChange}
                style={superStyle}
              ></input>
              <div className="text-primary">Blue End</div>
              <input
                type="range"
                className="form-range float-start"
                id="end-b"
                value={color.end.b}
                min="0"
                max="255"
                onChange={handleChange}
                style={superStyle}
              ></input>
            </div>
          </div>
          <div>
            <h3> select tags</h3>
            {normTags.map(el => <button key = {el}
              type="button"
              className={`btn btn-sm me-2 mb-2 ${
                darkMode ? "btn-light" : "btn-dark text-white"
              }`}
              onClick={handleToggleTags}
            >
             {el}
            </button>)}
            
          </div>
          <div className="col-3"></div>
          <button
            className="btn btn-primary mt-5 p-1 mb-5 d-grid gap-2 col-6 mx-auto"
            onClick={handleSubmit}
          >
            submit
          </button>
          <button
            className="btn btn-primary mt-5 p-1 mb-5 d-grid gap-2 col-6 mx-auto"
            onClick={handleReset}
          >
            reset
          </button>
        </div>
      </div>
    </>
  );
};
export default Proposition;
