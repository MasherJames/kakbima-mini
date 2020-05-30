import React, { useState } from "react";

import CreateOrEditPolicy from "./CreateOrEditPolicy";

import Edit from "../../Assets/Icons/edit-2.svg";
import Delete from "../../Assets/Icons/x.svg";
import Eye from "../../Assets/Icons/eye.svg";

import Button from "../Button";

import "./index.css";

const Policies = () => {
  const [showPolicies, setShowPolicies] = useState(true);
  const [showNewOrEdit, setShowNewOrEdit] = useState(false);
  const [showPolicy, setShowPolicy] = useState(false);
  /* Handle page switching */

  const handleNewOrEditClick = () => {
    setShowPolicies(false);
    setShowNewOrEdit(true);
  };

  return (
    <section className="policy-section-container">
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
                    <tr className="data-table-row body-row">
                      <td className="data-table-content table-content-body">
                        1
                      </td>
                      <td className="data-table-content table-content-body">
                        James Motor
                      </td>
                      <td className="data-table-content table-content-body">
                        KCP 409 Q
                      </td>
                      <td className="data-table-content table-content-body">
                        Ksh. 2,550,000
                      </td>
                      <td className="data-table-content table-content-body">
                        3rd Jun, 2020
                      </td>
                      <td className="data-table-content table-content-body">
                        3rd Jun, 2021
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
                        2
                      </td>
                      <td className="data-table-content table-content-body">
                        James Motor
                      </td>
                      <td className="data-table-content table-content-body">
                        KCP 409 Q
                      </td>
                      <td className="data-table-content table-content-body">
                        Ksh. 2,550,000
                      </td>
                      <td className="data-table-content table-content-body">
                        3rd Jun, 2020
                      </td>
                      <td className="data-table-content table-content-body">
                        3rd Jun, 2021
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
                        3
                      </td>
                      <td className="data-table-content table-content-body">
                        James Motor
                      </td>
                      <td className="data-table-content table-content-body">
                        KCP 409 Q
                      </td>
                      <td className="data-table-content table-content-body">
                        Ksh. 2,550,000
                      </td>
                      <td className="data-table-content table-content-body">
                        3rd Jun, 2020
                      </td>
                      <td className="data-table-content table-content-body">
                        3rd Jun, 2021
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

export default Policies;
