import GradientPill from "../components/GradientPill";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

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
          <label htmlFor="gradient-name">name your gradient</label>
          <input
            id="gradient-name"
            type="text"
            className="display-block m-x"
            onChange={handleChangeName}
            defaultValue={name}
          ></input>
        </div>
        <div className="row">
          <div className="col-6">
            <input
              type="range"
              className="form-range"
              id="start-r"
              defaultValue="0"
              min="0"
              max="255"
              step="1"
              onChange={handleChange}
            ></input>
            <input
              type="range"
              className="form-range"
              id="start-g"
              defaultValue="0"
              min="0"
              max="255"
              onChange={handleChange}
            ></input>
            <input
              type="range"
              className="form-range"
              id="start-b"
              defaultValue="0"
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
              defaultValue="0"
              min="0"
              max="255"
              step="1"
              onChange={handleChange}
            ></input>
            <input
              type="range"
              className="form-range"
              id="end-g"
              defaultValue="0"
              min="0"
              max="255"
              onChange={handleChange}
            ></input>
            <input
              type="range"
              className="form-range"
              id="end-b"
              defaultValue="0"
              min="0"
              max="255"
              onChange={handleChange}
            ></input>
          </div>
        </div>
        <button onClick={handleSubmit}>submit</button>
      </div>
    </>
  );
};
export default Proposition;
