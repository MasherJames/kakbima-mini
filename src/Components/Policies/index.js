import React, { useState } from "react";

import CreateOrEditPolicy from "./CreateOrEditPolicy";

import Edit from "../../Assets/Icons/edit-2.svg";
import Delete from "../../Assets/Icons/x.svg";
import Eye from "../../Assets/Icons/eye.svg";

import { useFetch } from "../../Utils";
import { PolicyGql } from "../../Gql";
import { Button, Notification, Loader } from "..";

import "./index.css";

const Policies = () => {
  // error state
  const [error, setError] = useState("");

  // State to control navigation to different parts of the policy
  const [showPolicies, setShowPolicies] = useState(true);
  const [showNewOrEdit, setShowNewOrEdit] = useState(false);
  const [showPolicy, setShowPolicy] = useState(false);

  /* Handle page switching */
  const handleNewOrEditClick = () => {
    setShowPolicies(false);
    setShowNewOrEdit(true);
  };

  // close side bar function by setting error to nul
  const closeSideNotification = () => {
    setError(null);
  };

  // function to be executed on error
  const handleOnError = (error) => {
    // show side bar error
    setError(error);
  };

  // function to be executed on success
  const handleOnSuccess = (data) => {};

  // Query all policies
  const { data, loading } = useFetch(
    PolicyGql.GET_ALL_POLICIES,
    handleOnError,
    handleOnSuccess
  );

  return (
    <section className="policy-section-container">
      {error && (
        <Notification
          message={error}
          closeSideNotification={closeSideNotification}
        />
      )}
      {showNewOrEdit && (
        <CreateOrEditPolicy
          setShowPolicies={setShowPolicies}
          setShowNewOrEdit={setShowNewOrEdit}
        />
      )}
      {showPolicies && (
        <>
          <div className="new-policy-btn-container">
            <Button
              type="button"
              text="New Policy"
              click={handleNewOrEditClick}
            />
          </div>
          <div className="recent-data">
            <div className="inner-recent-data-container">
              <div className="table-description">
                <h4 className="data-stats">All Policies</h4>
                <p className="data-stats-description">Total policies created</p>
              </div>
              <div className="table-container">
                {loading ? (
                  <Loader />
                ) : (
                  <table className="table">
                    <thead className="data-table-header">
                      <tr className="data-table-row header-row">
                        <th className="data-table-content table-content-header">
                          ID
                        </th>
                        <th className="data-table-content table-content-header">
                          Name
                        </th>
                        <th className="data-table-content table-content-header">
                          Identifier
                        </th>
                        <th className="data-table-content table-content-header">
                          Premium
                        </th>
                        <th className="data-table-content table-content-header">
                          Start Date
                        </th>
                        <th className="data-table-content table-content-header">
                          End Date
                        </th>
                        <th className="data-table-content table-content-header">
                          Actions
                        </th>
                      </tr>
                    </thead>
                    <tbody className="data-table-body">
                      {data.getAllPolicies.map((policy, index) => (
                        <tr className="data-table-row body-row" key={index}>
                          <td className="data-table-content table-content-body">
                            {policy.id}
                          </td>
                          <td className="data-table-content table-content-body">
                            {policy.name}
                          </td>
                          <td className="data-table-content table-content-body">
                            {policy.identifier}
                          </td>
                          <td className="data-table-content table-content-body">
                            {policy.premium}
                          </td>
                          <td className="data-table-content table-content-body">
                            {policy.startDate}
                          </td>
                          <td className="data-table-content table-content-body">
                            {policy.endDate}
                          </td>
                          <td className="data-table-content table-content-body">
                            <button className="edit-delete-btn" type="button">
                              <img src={Eye} alt="view" />
                              <span className="tooltip-text">View</span>
                            </button>
                            <button className="edit-delete-btn" type="button">
                              <img src={Edit} alt="edit" />
                              <span className="tooltip-text">Edit</span>
                            </button>
                            <button className="edit-delete-btn" type="button">
                              <img src={Delete} alt="delete" />
                              <span className="tooltip-text">Delete</span>
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                )}
              </div>
            </div>
          </div>
        </>
      )}
    </section>
  );
};

export default Policies;
