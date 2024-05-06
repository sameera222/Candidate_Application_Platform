import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchJobs } from "../redux/reducers/jobSlice";
import {
  setSelectedJobRole,
  setSelectedExperience,
  setSelectedSearchQuery,
  setSelectedLocation,
  setSelectedSalary,
} from "../redux/actions/actions";
import CustomDropDown from "../components/CustomDropDown";
import "./home.css";
import JobCard from "../components/JobCard";

const Home = () => {
  const [desiredMinExp, setDesiredMinExp] = useState("");


  const dispatch = useDispatch();
  const { jobs, loading, error } = useSelector((state) => state.jobs);
  const selectedJobRole = useSelector((state) => state.selectedJobRole);
  const selectedExperience = useSelector((state) => state.selectedExperience);
  const selectedLocation = useSelector((state) => state.selectedLocation);
  const selectedSalary = useSelector((state) => state.selectedSalary);
  const searchQuery = useSelector((state) => state.searchQuery);

  const handleMinExpChange = (e) => {
    const minExp = parseInt(e.target.value, 10) || "";
    setDesiredMinExp(minExp);
    dispatch(fetchJobs({ jobRole: selectedJobRole, minExp }));
  };

  const handleJobRoleChange = (e) => {
    const jobRole = e.target.value;
    dispatch(setSelectedJobRole(jobRole));
    dispatch(
      fetchJobs({
        jobRole,
        minExp: selectedExperience,
        location: selectedLocation,
        searchQuery,
        page: 1 
      })
    );
  };
  const handleExperienceChange = (e) => {
    const minExp = parseInt(e.target.value) || 0;
    dispatch(setSelectedExperience(minExp));
    dispatch(
      fetchJobs({
        jobRole: selectedJobRole,
        minExp,
        location: selectedLocation,
        searchQuery,
        page: 1 
      })
    );
  };

  const handleSalaryChange = (e) => {
    const salary = parseInt(e.target.value) || 0;
    dispatch(setSelectedSalary(salary));
    dispatch(
      fetchJobs({
        jobRole: selectedJobRole,
        salary,
        location: selectedLocation,
        searchQuery,
        page: 1 
      })
    );
  };

  const handleLocationChange = (e) => {
    const location = e.target.value;

    dispatch(setSelectedLocation(location));
    dispatch(
      fetchJobs({
        jobRole: selectedJobRole,
        location,
        minExp: selectedExperience,
        searchQuery,
        page: 1 
      })
    );
  };
  const handleInputChange = (event) => {
    event.preventDefault();
    const companyName = event.target.value;

    dispatch(setSelectedSearchQuery(companyName));
    dispatch(
      fetchJobs({
        jobRole: selectedJobRole,
        minExp: selectedExperience,
        companyName,
        page: 1 
      })
    );
    if (companyName === "") {
      dispatch(setSelectedSearchQuery(""));
    }
  };

  useEffect(() => {
    dispatch(
      fetchJobs({
        jobRole: selectedJobRole,
        minExp: desiredMinExp,
        location: selectedLocation,
        salary: selectedSalary,
        companyName: searchQuery,
        page: 1 
      })
    );
  }, [
    dispatch,
    selectedJobRole,
    desiredMinExp,
    selectedLocation,
    selectedSalary,
    searchQuery,
  ]);

 


  

  return (
    <div className="main_container">
      <h1>Candidate Application Platform</h1>

      <div className="search_box">
        <div>
          <CustomDropDown
            value={selectedJobRole}
            options={[
              { value: "frontend", label: "Frontend" },
              { value: "backend", label: "Backend" },
              { value: "fullstack", label: "Fullstack" },
              { value: "android", label: "Android" },
              { value: "tech", label: "Tech" },
            ]}
            onChange={handleJobRoleChange}
            placeholder="Role"
          />
        </div>
        <div>
          <CustomDropDown
            value={selectedExperience}
            options={[
              { value: 1, label: 1 },
              { value: 2, label: 2 },
              { value: 3, label: 3 },
              { value: 4, label: 4 },
              { value: 5, label: 5 },
              { value: 6, label: 6 },
              { value: 7, label: 7 },
              { value: 8, label: 8 },
              { value: 9, label: 9 },
              { value: 10, label: 10 },
            ]}
            onChange={handleExperienceChange}
            placeholder="Experience"
          />
        </div>
        <div>
          <CustomDropDown
            value={selectedLocation}
            options={[
              { value: "remote", label: "remote" },
              { value: "onSite", label: "onSite" },
            ]}
            onChange={handleLocationChange}
            placeholder={"location"}
          />
        </div>
        <div>
          <CustomDropDown
            value={selectedSalary}
            options={[
              { value: 10, label: 10 },
              { value: 20, label: 20 },
              { value: 30, label: 30 },
              { value: 40, label: 40 },
              { value: 50, label: 50 },
              { value: 60, label: 60 },
              { value: 70, label: 70 },
            ]}
            onChange={handleSalaryChange}
            placeholder="Minimum Base Pay Salary"
          />
        </div>

        <div>
          <input
            type="text"
            placeholder="Search Company Name"
            onChange={handleInputChange}
            value={searchQuery}
            className="input"
          />
        </div>
      </div>

      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      <ul>{jobs && jobs.map((product) => <JobCard product={product} />)}</ul>
    </div>
  );
};

export default Home;
