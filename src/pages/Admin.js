import { useEffect, useReducer } from "react";
import GradientPill from "../components/GradientPill";
import GradientTitle from "../components/GradientTitle";
import GradientCode from "../components/GradientCode";
import { gradientsReducer } from "../reducers/gradientsReducer";

const Admin = () => {
  const [state, propositionDispatch] = useReducer(gradientsReducer, {
    loading: true,
    error: "",
    gradients: [],
  });

  useEffect(() => {
    //loading true
    propositionDispatch({ type: "FETCH_INIT" });
    fetch(`${process.env.REACT_APP_API_URL}/proposition`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`something wrong with request: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        // data
        propositionDispatch({ type: "FETCH_SUCCESS", payload: data });
      })
      .catch((e) => {
        //error
        console.log(e.message);
        propositionDispatch({ type: "FETCH_FAILURE", payload: e.message });
      });
  }, []);
  console.log(state.gradients)
  return (
    <div className="container">
      <ul className="row list-unstyled">
        {state.gradients.map((el) => {
          const { name, start, end, tags, id } = el;
          return (
            <li className="col-lg-3 col-md-4 col-sm-6" key={id}>
              <div className="card p-3 mb-4 shadow">
                <GradientPill colorStart={start} colorEnd={end} />
                <GradientTitle>{name}</GradientTitle>
                <GradientCode colorStart={start} colorEnd={end} />
                <p>tags</p>
                <p>{tags}</p>
                <div className="d-flex justify-content-around">
                  <button
                    type="button"
                    className="btn btn-success text-light"
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    title="add"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-hand-thumbs-up-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="M6.956 1.745C7.021.81 7.908.087 8.864.325l.261.066c.463.116.874.456 1.012.965.22.816.533 2.511.062 4.51a9.84 9.84 0 0 1 .443-.051c.713-.065 1.669-.072 2.516.21.518.173.994.681 1.2 1.273.184.532.16 1.162-.234 1.733.058.119.103.242.138.363.077.27.113.567.113.856 0 .289-.036.586-.113.856-.039.135-.09.273-.16.404.169.387.107.819-.003 1.148a3.163 3.163 0 0 1-.488.901c.054.152.076.312.076.465 0 .305-.089.625-.253.912C13.1 15.522 12.437 16 11.5 16H8c-.605 0-1.07-.081-1.466-.218a4.82 4.82 0 0 1-.97-.484l-.048-.03c-.504-.307-.999-.609-2.068-.722C2.682 14.464 2 13.846 2 13V9c0-.85.685-1.432 1.357-1.615.849-.232 1.574-.787 2.132-1.41.56-.627.914-1.28 1.039-1.639.199-.575.356-1.539.428-2.59z" />
                    </svg>
                  </button>
                  <button
                    type="button"
                    className="btn btn-danger text-light rounded-circle"
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    title="delete"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-trash-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z" />
                    </svg>
                  </button>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default Admin;
