export const FETCH_COFFEE_SUCCESS = "FETCH_COFFEE_SUCCESS";

export const fetchCoffeeSuccess = (data) => ({
  type: FETCH_COFFEE_SUCCESS,
  payload: data,
});

export const fetchCoffees = (sortBy = "") => {
  return async (dispatch) => {
    let url = "https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-coffee";

    if (sortBy) {
      url += `?sort=price&order=${sortBy}`;
    }

    try {
      const res = await fetch(url);
      const data = await res.json();
      dispatch(fetchCoffeeSuccess(data.data));
    } catch (err) {
      console.error("Error fetching coffee:", err);
    }
  };
};
