import { useGradients } from "../context/GratientsContext";
import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import Direction from "../components/Direction";

const FullScreen = () => {
  const { gradients, direction, loading } = useGradients();
  const { id } = useParams();
  const [countId, setCountId] = useState(id);
  const handleClickNext = () => {
    countId < gradients.length
      ? setCountId(Number(countId) + 1)
      : setCountId(gradients.length);
  };
  const handleClickPrev = () => {
    countId > 0 ? setCountId(Number(countId) - 1) : setCountId(1);
  };
  return (
    <>
      <div
        className="flex-fill d-flex"
        style={
          gradients.length > 0 && id > 0 && id <= gradients.length
            ? {
                backgroundImage: `linear-gradient(${direction}, ${
                  gradients[countId - 1]?.start
                }, ${gradients[countId - 1]?.end})`,
              }
            : { backgroundColor: "black" }
        }
      >
        <nav className="fixed-top nav">
          <li className="nav-item">
            <Link className="btn btn-dark text-white nav-link me-2" to="/">
              Tous
            </Link>
          </li>
          {countId > 1 && (
            <li className="nav-item">
              <Link
                className="btn btn-dark text-white nav-link me-2"
                to={`/gradient/${Number(countId) - 1}`}
                onClick={handleClickPrev}
              >
                Précédent
              </Link>
            </li>
          )}
          {countId < gradients.length && (
            <li className="nav-item">
              <Link
                className="btn btn-dark text-white nav-link"
                to={`/gradient/${Number(countId) + 1}`}
                onClick={handleClickNext}
              >
                Suivant
              </Link>
            </li>
          )}
        </nav>
        {loading ? (
          <p className="text-white m-auto text-center">loading...</p>
        ) : !(id > 0 && id <= gradients.length) ? (
          <p className="text-white m-auto text-center">
            Oups, ce gradient n'existe pas
          </p>
        ) : (
          <div className=" m-auto text-center">
            <h1 className="text-white display-1">
              {gradients[countId - 1]?.name}
            </h1>
            <div className="bg-white shadow p-2 rounded">
              <code>
                {`background-image: linear-gradient(${direction}, 
              ${gradients[countId - 1]?.start}, 
              ${gradients[countId - 1]?.end})`}
                ;
              </code>
            </div>
            <div className="m-auto mt-2 row">
              <div className="col-lg-6 offset-lg-3">
                <div className="input-group mb-3 ">
                  <Direction />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};
export default FullScreen;
