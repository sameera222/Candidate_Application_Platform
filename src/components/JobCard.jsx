import React from "react";
import { useDispatch, useSelector } from "react-redux";

const JobCard = React.memo(({ product }) => {
  const dispatch = useDispatch();
  const jobs = useSelector((state) => state.jobs.jobs);

  const toggleJobContent = (jdUid) => {
    dispatch({
      type: "jobs/updateShowFullContent",
      payload: {
        jdUid,
        showFullContent: !jobs.find((job) => job.jdUid === jdUid)
          .showFullContent,
      },
    });
  };
  return (
    <div key={product.id} className="card">
      <div className="card_cont">
        <div className="job-card">
          <div className="card-body">
            <img src={product.logoUrl} alt={product.companyName} />
          </div>
          <div className="card-details">
            <li className="name"> {product.companyName}</li>
            <li className="role"> {product.jobRole}</li>
            <li className="location card_subtext"> {product.location}</li>
          </div>
        </div>

        <li className="salary">
          Estimated Salary: {product.minJdSalary} - {product.maxJdSalary} LPA
        </li>

        <div className="des_job">
          <p style={{ marginTop: "10px" }}>About Company:</p>
          <p>About Us</p>
        </div>
        <div className="job_description">
          {product.jobDetailsFromCompany}
          <div className="bottom-blur" />
        </div>

        {!product.showFullContent && (
          <div
            className="view_job"
            onClick={() => toggleJobContent(product.jdUid)}
          >
            <a>View Job</a>
          </div>
        )}
        <div className="info_container">
          <li>Minimum Experience </li>
          <p>{product.minExp} Years</p>

          <button className="btn">Easy Apply</button>
        </div>

        {product.showFullContent && (
          <div>
            <p> Max Salary: {product.maxJdSalary}</p>
            <a href={product.jdLink}> Job Description Link {product.jdLink}</a>
            <p> Min Salary {product.minJdSalary}</p>

            <div
              className="view_job"
              onClick={() => toggleJobContent(product.jdUid)}
            >
              <a>Read Less</a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
});

export default JobCard;
