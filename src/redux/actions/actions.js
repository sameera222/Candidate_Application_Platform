import axios from "axios";

export const FETCH_JOBS_REQUEST = "FETCH_JOBS_REQUEST";
export const FETCH_JOBS_SUCCESS = "FETCH_JOBS_SUCCESS";
export const FETCH_JOBS_FAILURE = "FETCH_JOBS_FAILURE";
export const SET_SELECTED_JOB_ROLE = "SET_SELECTED_JOB_ROLE";
export const SET_SELECTED_EXPERIENCE = 'SET_SELECTED_EXPERIENCE';
export const SET_SELECTED_SEARCH_QUERY = 'SET_SELECTED_SEARCH_QUERY';
export const SET_LOCATION = "SET_LOCATION";
export const SET_SELECTED_SALARY = 'SET_SELECTED_SALARY';


export const fetchJobs = () => {
  return async (dispatch) => {
    dispatch({ type: FETCH_JOBS_REQUEST });

    try {
      const response = await axios.post(
        "https://api.weekday.technology/adhoc/getSampleJdJSON",
        {
          limit: 10,
          offset: 0,
        }
      );
      const data = response.data;
      console.log(data, "ats");
      dispatch({ type: FETCH_JOBS_SUCCESS, payload: data });
    } catch (error) {
      console.error("Fetch error:", error);
      dispatch({ type: FETCH_JOBS_FAILURE, payload: error.message });
    }
  };
};

export const setSelectedJobRole = (jobRole) => ({
  type: SET_SELECTED_JOB_ROLE,
  payload: jobRole,
});
export const setSelectedExperience = (minExp) => ({
  type: SET_SELECTED_EXPERIENCE,
  payload: minExp,
});


export const setSelectedSalary= (salary) => ({
  type: SET_SELECTED_SALARY,
  payload: salary,
});
export const setSelectedSearchQuery = (searchQuery) => ({
  type: SET_SELECTED_SEARCH_QUERY,
  payload: searchQuery,
});

export const setSelectedLocation = (location) => ({
  type: SET_LOCATION,
  payload: location,
});