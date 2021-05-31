import { useState, useEffect, useRef, useCallback } from "react";
//import { gradients as list } from "../gradients"
import { ReactComponent as SvgToggle } from "bootstrap-icons/icons/arrow-clockwise.svg";
import { ReactComponent as Next } from "bootstrap-icons/icons/arrow-right.svg";
import { ReactComponent as Prev } from "bootstrap-icons/icons/arrow-left.svg";
import { useGradients } from "../context/GratientsContext";

const GradientsHeader = (props) => {
  const { children } = props;
  const { gradients: list, direction } = useGradients();
  const length = useRef(0);

  const chooseGradient = useCallback(
    () => Math.floor(Math.random() * length.current),
    []
  );

  const [randomGradient, setRandomGradient] = useState(0);

  useEffect(() => {
    if (list.length > 0) {
      length.current = list.length;
      setRandomGradient(chooseGradient);
    }
  }, [list, chooseGradient]);

  const handleReloadClick = () => {
    setRandomGradient(chooseGradient);
  };
  const handleNextClick = () => {
    setRandomGradient(
      randomGradient === length.current - 1 ? 0 : randomGradient + 1
    );
  };
  const handlePrevClick = () => {
    setRandomGradient(
      randomGradient === 0 ? length.current - 1 : randomGradient - 1
    );
  };

  const style = {
    backgroundImage: `linear-gradient(${direction}, ${list[randomGradient]?.start}, ${list[randomGradient]?.end})`,
  };

  // loading true = background-color: black / loading false =
  return (
    <header
      className="text-center bg-dark text-white py-5 mb-5"
      style={list.length > 0 ? style : { backgroundColor: "black" }}
    >
      {children}
      <button
        aria-label="Clicker pour afficher le dégradé précédant"
        type="button"
        className="btn btn-outline-light m-1"
        onClick={handlePrevClick}
      >
        <Prev />
      </button>
      <button
        aria-label="Clicker pour changer le dégradé"
        type="button"
        className="btn btn-outline-light m-1"
        onClick={handleReloadClick}
      >
        <SvgToggle />
      </button>
      <button
        aria-label="Clicker pour afficher le dégradé suivant"
        type="button"
        className="btn btn-outline-light m-1"
        onClick={handleNextClick}
      >
        <Next />
      </button>
    </header>
  );
};

export default GradientsHeader;
