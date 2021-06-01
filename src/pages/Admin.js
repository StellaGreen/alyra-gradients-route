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

  const handleButtonClickAdd = () => {};

  const handleButtonClickDelete = (event) => {
    console.log(event.target);
    console.log(event.target.id);
    fetch(`${process.env.REACT_APP_API_URL}/proposition/${event.target.id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer 987654321",
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Something went wrong: ${response.textStatus}`);
        }
        return response.json();
      })
      .then(() => {})
      .catch((error) => {
        propositionDispatch({ type: "FETCH_FAILURE", payload: error.message });
      });
  };

  return (
    <div className="container">
      <ul className="row list-unstyled">
        {state.gradients.map((el) => {
          const { name, start, end, tags = [], id } = el;
          return (
            <li className="col-lg-3 col-md-4 col-sm-6" key={id}>
              <div className="card p-3 mb-4 shadow">
                <GradientPill colorStart={start} colorEnd={end} />
                <GradientTitle>{name}</GradientTitle>
                <GradientCode colorStart={start} colorEnd={end} />
                <p>Tags: {tags.join(" - ")}</p>
                <p>{id}</p>
                <div className="d-flex justify-content-around">
                  <button
                    type="button"
                    className="btn btn-success text-light"
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    title="add"
                    id={id}
                    onClick={handleButtonClickAdd}
                  >
                    ADD
                  </button>
                  <button
                    type="button"
                    className="btn btn-danger text-light rounded-circle"
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    title="delete"
                    id={id}
                    onClick={handleButtonClickDelete}
                  >
                    DELETE
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
