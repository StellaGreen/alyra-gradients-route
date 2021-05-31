import { useGradients } from "../context/GratientsContext";

const Direction = () => {
  const { direction, setDirection } = useGradients();
  const handleDirectionChange = (e) => {
    setDirection(e.target.value);
  };
  return (
    <>
    <div className="input-group mb-3 col-sm-6">
      
      <label className="input-group-text" htmlFor="direction">
        Direction
      </label>
      <select
        className="form-select"
        id="direction"
        value={direction}
        onChange={handleDirectionChange}
      >
        <option value="to right">Right</option>
        <option value="to right top">Right Top</option>
        <option value="to right bottom">Right Bottom</option>
        <option value="to left">Left</option>
        <option value="to left top">Left Top</option>
        <option value="to left bottom">Left Bottom</option>
        <option value="to top">Top</option>
        <option value="to bottom">Bottom</option>
      </select>
      </div>
    </>
  );
};

export default Direction;
