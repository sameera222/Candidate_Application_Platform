import { FETCH_JOBS_SUCCESS } from "../actions/actions";

const initialState = {
  jobs: [],
  filteredJobs: [],
};

const jobsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_JOBS_SUCCESS:
      return {
        ...state,
        jobs: action.payload,
        filteredJobs: action.payload,
      };
    default:
      return state;
  }
};
export default jobsReducer;
