import React, { useReducer, useState } from "react";

const initialState = {
  name: "",
  establishment_year: "",
  address: {
    building: "",
    street: "",
    city: {
      name: "",
      locality: {
        pinCode: "",
        landmark: ""
      }
    },
    state: "",
    coordinates: {
      latitude: "",
      longitude: ""
    }
  },
  courses_offered: []
};

function reducer(state, action) {
  switch (action.type) {
    case "SET_FIELD":
      return {
        ...state,
        [action.field]: action.value
      };

    case "SET_NESTED_FIELD":
      return {
        ...state,
        address: {
          ...state.address,
          [action.field]: action.value
        }
      };

    case "SET_CITY_FIELD":
      return {
        ...state,
        address: {
          ...state.address,
          city: {
            ...state.address.city,
            [action.field]: action.value
          }
        }
      };

    case "SET_LOCALITY_FIELD":
      return {
        ...state,
        address: {
          ...state.address,
          city: {
            ...state.address.city,
            locality: {
              ...state.address.city.locality,
              [action.field]: action.value
            }
          }
        }
      };

    case "SET_COORDINATES":
      return {
        ...state,
        address: {
          ...state.address,
          coordinates: {
            ...state.address.coordinates,
            [action.field]: action.value
          }
        }
      };

    case "SET_COURSES":
      return {
        ...state,
        courses_offered: action.value
      };

    case "reset":
      return initialState;

    default:
      throw new Error("invalid action type");
  }
}

export default function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setError("");
  };

  const handleReset = () => {
    dispatch({ type: "reset" });
    setSubmitted(false);
    setError("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="College Name"
          value={state.name}
          onChange={(e) => dispatch({ type: "SET_FIELD", field: "name", value: e.target.value })}
        />

        <input
          placeholder="Establishment Year"
          value={state.establishment_year}
          onChange={(e) => dispatch({ type: "SET_FIELD", field: "establishment_year", value: e.target.value })}
        />

        <input
          placeholder="Building"
          value={state.address.building}
          onChange={(e) => dispatch({ type: "SET_NESTED_FIELD", field: "building", value: e.target.value })}
        />

        <input
          placeholder="Street"
          value={state.address.street}
          onChange={(e) => dispatch({ type: "SET_NESTED_FIELD", field: "street", value: e.target.value })}
        />

        <input
          placeholder="City"
          value={state.address.city.name}
          onChange={(e) => dispatch({ type: "SET_CITY_FIELD", field: "name", value: e.target.value })}
        />

        <input
          placeholder="Pincode"
          value={state.address.city.locality.pinCode}
          onChange={(e) => dispatch({ type: "SET_LOCALITY_FIELD", field: "pinCode", value: e.target.value })}
        />

        <input
          placeholder="Landmark"
          value={state.address.city.locality.landmark}
          onChange={(e) => dispatch({ type: "SET_LOCALITY_FIELD", field: "landmark", value: e.target.value })}
        />

        <input
          placeholder="State"
          value={state.address.state}
          onChange={(e) => dispatch({ type: "SET_NESTED_FIELD", field: "state", value: e.target.value })}
        />

        <input
          placeholder="Latitude"
          value={state.address.coordinates.latitude}
          onChange={(e) => dispatch({ type: "SET_COORDINATES", field: "latitude", value: e.target.value })}
        />

        <input
          placeholder="Longitude"
          value={state.address.coordinates.longitude}
          onChange={(e) => dispatch({ type: "SET_COORDINATES", field: "longitude", value: e.target.value })}
        />

        <input
          placeholder="Courses (comma separated)"
          value={state.courses_offered.join(",")}
          onChange={(e) =>
            dispatch({
              type: "SET_COURSES",
              value: e.target.value.split(",").map((course) => course.trim())
            })
          }
        />

        <button type="submit">Submit</button>
        <button type="button" onClick={handleReset}>Reset</button>
      </form>

      {error && <p style={{ color: "red" }}>{error}</p>}

      {submitted && (
        <div>
          <h3>College Info</h3>
          <pre>{JSON.stringify(state, null, 2)}</pre>
        </div>
      )}
    </div>
  );
}
