import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchJobs = createAsyncThunk(
  "jobs/fetchJobs",
  async ( payload = { jobRole: "", minExp: "", companyName: "", location: "" , 
  minJdSalary: ''}) => {
    try {
      const { jobRole, minExp, companyName, location,
        minJdSalary  } = payload;
      const myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");
      const body = JSON.stringify({ limit: 10, offset: 0 });
      const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body,
      };

      const response = await axios.post(
        "https://api.weekday.technology/adhoc/getSampleJdJSON",
        requestOptions
      );
      const { jdList } = response.data;
      console.log(jdList, "jd");
      let filteredList = jdList;

      if (typeof jobRole === "string" && jobRole.trim() !== "") {
        filteredList = filteredList.filter((product) =>
          product.jobRole.toLowerCase().includes(jobRole.toLowerCase())
        );
      }

      if (typeof companyName === "string" && companyName.trim() !== "") {
        filteredList = filteredList.filter((product) =>
          product.companyName.toLowerCase().includes(companyName.toLowerCase())
        );
      }
      if (location === "remote") {
        filteredList = filteredList.filter(
          (product) => product.location.toLowerCase() === "remote"
        );
      } else if (location === "onSite") {
        filteredList = filteredList.filter(
          (product) => product.location.toLowerCase() !== "remote"
        );
      } else {
        // Show all jobs if no specific location is selected
        filteredList = filteredList;
      }
      if (
        minJdSalary) {
        filteredList = filteredList.filter((product) =>
          product.minJdSalary < minJdSalary
        );
      }

      if (typeof minExp === "number" && minExp >= 0) {
        filteredList = filteredList.filter(
          (product) => product.minExp === minExp
        );
      }
      return filteredList;
     
    } catch (error) {
      console.error("Error fetching products: ", error);
      throw error; // Throw the error to be caught by the rejected case
    }
  }
);

const jobsSlice = createSlice({
  name: "jobs",
  initialState: {
    jobs: [],
    selectedJobRole: "", 
    selectedExperience: "",
    searchQuery: "",
    selectedLocation: "",
    selectedSalary: '', // Renamed selectedCategory to selectedJobRole
    loading: false,
    error: null,
  },
  reducers: {
    setSelectedJobRole: (state, action) => {
      state.selectedJobRole = action.payload;
    },
    setSelectedExperience: (state, action) => {
      state.selectedExperience = action.payload;
    },
    setSearchQuery: (state, action) => {
      state.searchQuery = action.payload;
    },
    setSelectedLocation: (state, action) => {
      state.selectedLocation = action.payload;
    },
    setSelectedSalary: (state, action) => {
      state.selectedSalary = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchJobs.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchJobs.fulfilled, (state, action) => {
        state.loading = false;
        state.jobs = action.payload;
      })
      .addCase(fetchJobs.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { setSelectedJobRole, setSelectedExperience,
  setSearchQuery,
  setSelectedLocation,
  setSelectedSalary } = jobsSlice.actions;
export default jobsSlice.reducer;
