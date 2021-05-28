import { useGradients } from "../context/GratientsContext";

const GradientCode = ({ colorStart, colorEnd }) => {
  const { direction } = useGradients();
  return (
    <code>
      {`background-image: linear-gradient(${direction}, ${colorStart}, ${colorEnd})`}
      ;
    </code>
  );
};

export default GradientCode;
