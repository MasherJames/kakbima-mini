import React, { useState } from "react";

import Edit from "../../Assets/Icons/edit-2.svg";
import Delete from "../../Assets/Icons/x.svg";
import Eye from "../../Assets/Icons/eye.svg";

import CreateOrEditClaim from "./CreateOrEditClaim";
import Button from "../Button";

import "./index.css";

const Claims = () => {
  const [showClaims, setShowClaims] = useState(true);
  const [showNewOrEdit, setShowNewOrEdit] = useState(false);
  const [showClaim, setShowClaim] = useState(false);
  /* Handle page switching */

  const handleNewOrEditClick = () => {
    setShowClaims(false);
    setShowNewOrEdit(true);
  };

  return (
    <section className="claims-section-container">
      {showNewOrEdit && (
        <CreateOrEditClaim
          setShowClaims={setShowClaims}
          setShowNewOrEdit={setShowNewOrEdit}
        />
      )}
      {showClaims && (
        <>
          <div className="new-claim-btn-container">
            <Button
              type="button"
              text="New Claim"
              click={handleNewOrEditClick}
            />
          </div>
          <div className="recent-data">
            <div className="inner-recent-data-container">
              <div className="table-description">
                <h4 className="data-stats">All Claims</h4>
                <p className="data-stats-description">Total Claims created</p>
              </div>
              <div className="table-container">
                <table className="table">
                  <thead className="data-table-header">
                    <tr className="data-table-row header-row">
                      <th className="data-table-content table-content-header">
                        ID
                      </th>
                      <th className="data-table-content table-content-header">
                        Claim Number
                      </th>
                      <th className="data-table-content table-content-header">
                        Policy Number
                      </th>
                      <th className="data-table-content table-content-header">
                        Claim Date
                      </th>
                      <th className="data-table-content table-content-header">
                        Claim Amount
                      </th>
                      <th className="data-table-content table-content-header">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody className="data-table-body">
                    <tr className="data-table-row body-row">
                      <td className="data-table-content table-content-body">
                        1
                      </td>
                      <td className="data-table-content table-content-body">
                        Claim Number
                      </td>
                      <td className="data-table-content table-content-body">
                        Policy Number
                      </td>
                      <td className="data-table-content table-content-body">
                        Claim Date
                      </td>
                      <td className="data-table-content table-content-body">
                        Claim Amount
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
                    <tr className="data-table-row body-row">
                      <td className="data-table-content table-content-body">
                        1
                      </td>
                      <td className="data-table-content table-content-body">
                        Claim Number
                      </td>
                      <td className="data-table-content table-content-body">
                        Policy Number
                      </td>
                      <td className="data-table-content table-content-body">
                        Claim Date
                      </td>
                      <td className="data-table-content table-content-body">
                        Claim Amount
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
                    <tr className="data-table-row body-row">
                      <td className="data-table-content table-content-body">
                        1
                      </td>
                      <td className="data-table-content table-content-body">
                        Claim Number
                      </td>
                      <td className="data-table-content table-content-body">
                        Policy Number
                      </td>
                      <td className="data-table-content table-content-body">
                        Claim Date
                      </td>
                      <td className="data-table-content table-content-body">
                        Claim Amount
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
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </>
      )}
    </section>
  );
};

export default Claims;
