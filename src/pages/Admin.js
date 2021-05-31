import { useEffect, useReducer } from "react";
import GradientPill from "../components/GradientPill"
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
console.log(state.gradients[0])
  return (
    <div className="container">
      <ul className="row list-unstyled">
          {state.gradients.map((el) => {
            const { name, start, end, tags = [], id } = el
            return (
              <li className="col-lg-3 col-md-4 col-sm-6" key={id}>
                <div className="card p-3 mb-4 shadow">
                  <GradientPill colorStart={start} colorEnd={end} />
                  <GradientTitle>{name}</GradientTitle>
                  <GradientCode colorStart={start} colorEnd={end} />
                  <p>{tags}</p>
                </div>
              </li>
            );
          })}
      </ul>
    </div>
  );
}
export default Admin