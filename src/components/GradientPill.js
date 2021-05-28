import { useGradients } from "../context/GratientsContext";

const GradientPill = ({ colorStart, colorEnd }) => {
  const { direction } = useGradients();
  const linearGradient = `linear-gradient(${direction}, ${colorStart}, ${colorEnd})`;
  return (
    <div
      className="card-gradient rounded-pill mx-auto mb-4"
      style={{ backgroundImage: linearGradient }}
    ></div>
  );
};

export default GradientPill;
