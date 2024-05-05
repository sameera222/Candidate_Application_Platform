import React from "react";

const RolesDropDown = ({
  selectedJobRole,
  handleJobRoleChange,
  selectedExperience,
  handleExperienceChange,
}) => {
  return (
    <div>
      <select value={selectedJobRole} onChange={handleJobRoleChange}>
        <option value="">Role</option>
        <option value="frontend">frontend</option>
        <option value="backend">backend</option>
        <option value="fullstack">fullstack</option>
        <option value="android">android</option>
        <option value="tech">tech</option>
      </select>

      <select value={selectedExperience} onChange={handleExperienceChange}>
        <option value="">Experience</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
        <option value="9">9</option>
        <option value="10">10</option>
      </select>
    </div>
  );
};

export default RolesDropDown;
