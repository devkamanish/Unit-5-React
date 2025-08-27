import React, { useReducer } from "react";

const initialState = {
  email: "",
  password: "",
  submitted: false
};

function formReducer(state, action) {
  switch (action.type) {
    case "email":
      return { ...state, email: action.payload };
    case "password":
      return { ...state, password: action.payload };
    case "reset":
      return initialState;
    case "submit":
      return { ...state, submitted: true };
    default:
      throw new Error("invalid action type");
  }
}


function App() {
  const [state, dispatch] = useReducer(formReducer, initialState);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: "submit" });
  };

  const handleReset = () => {
    dispatch({ type: "reset" });
  };
  
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Enter email"
          value={state.email}
          onChange={(e) => dispatch({ type: "email", payload: e.target.value })}
        />
        <input
          type="password"
          placeholder="Enter password"
          value={state.password}
          onChange={(e) =>
            dispatch({ type: "password", payload: e.target.value })
          }
        />
        <button type="submit">Submit</button>
        <button type="button" onClick={handleReset}>Reset</button>
      </form>

      <div>
        {state.submitted ? (
          <div>
            <div>User Email: {state.email}</div>
            <div>User Password: {state.password}</div>
          </div>
        ) : (
          <div>No details found</div>
        )}
      </div>
    </div>
  );
}

export default App;

