import React from "react";

import Claim from "../../Assets/Icons/alert-octagon.svg";
import Policy from "../../Assets/Icons/award.svg";
import Calendar from "../../Assets/Icons/calendar.svg";
import "./index.css";

const DashboardHome = () => {
  return (
    <section className="dashboard-main-content-container">
      <article className="all-counts-container">
        <div className="counter-container">
          <div className="inner-counter-container">
            <div className="counter">
              <div className="counter-icon-container">
                <img className="counter-icon" src={Policy} alt="policy" />
              </div>
              <p className="counter-paragraph">Total Policies</p>
              <h3 className="counter-value">10</h3>
            </div>
            <div className="counter-description">
              <img src={Calendar} alt="calendar" />
              <p>Last year</p>
            </div>
          </div>
        </div>
        <div className="counter-container">
          <div className="inner-counter-container">
            <div className="counter">
              <div className="counter-icon-container">
                <img className="counter-icon" src={Claim} alt="claim" />
              </div>
              <p className="counter-paragraph">Total Claims</p>
              <h3 className="counter-value">10</h3>
            </div>
            <div className="counter-description">
              <img src={Calendar} alt="calendar" />
              <p>Last year</p>
            </div>
          </div>
        </div>
      </article>
      <article className="recent-data-container">
        <div className="recent-data policies">
          <div className="inner-recent-data-container">
            <div className="table-description">
              <h4 className="data-stats">Policy Stats</h4>
              <p className="data-stats-description">
                New policies created today
              </p>
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
                  </tr>
                </thead>
                <tbody className="data-table-body">
                  <tr className="data-table-row body-row">
                    <td className="data-table-content table-content-body">1</td>
                    <td className="data-table-content table-content-body">
                      James Motor
                    </td>
                    <td className="data-table-content table-content-body">
                      KCP 409 Q
                    </td>
                    <td className="data-table-content table-content-body">
                      Ksh. 2,550,000
                    </td>
                  </tr>
                  <tr className="data-table-row body-row">
                    <td className="data-table-content table-content-body">2</td>
                    <td className="data-table-content table-content-body">
                      James Motor
                    </td>
                    <td className="data-table-content table-content-body">
                      KCP 409 Q
                    </td>
                    <td className="data-table-content table-content-body">
                      Ksh. 2,550,000
                    </td>
                  </tr>
                  <tr className="data-table-row body-row">
                    <td className="data-table-content table-content-body">3</td>
                    <td className="data-table-content table-content-body">
                      James Motor
                    </td>
                    <td className="data-table-content table-content-body">
                      KCP 409 Q
                    </td>
                    <td className="data-table-content table-content-body">
                      Ksh. 2,550,000
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="recent-data claims">
          <div className="inner-recent-data-container">
            <div className="table-description">
              <h4 className="data-stats">Claim Stats</h4>
              <p className="data-stats-description">New Claims created today</p>
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
                      Claim Date
                    </th>
                    <th className="data-table-content table-content-header">
                      Claim Amount
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="data-table-row body-row">
                    <td className="data-table-content table-content-body">1</td>
                    <td className="data-table-content table-content-body">
                      Claim2346TG
                    </td>
                    <td className="data-table-content table-content-body">
                      Tue 2nd, 2020
                    </td>
                    <td className="data-table-content table-content-body">
                      Ksh. 2,550,000
                    </td>
                  </tr>
                  <tr>
                    <td className="data-table-content table-content-body">2</td>
                    <td className="data-table-content table-content-body">
                      Claim2346TG
                    </td>
                    <td className="data-table-content table-content-body">
                      Tue 2nd, 2020
                    </td>
                    <td className="data-table-content table-content-body">
                      Ksh. 2,550,000
                    </td>
                  </tr>
                  <tr>
                    <td className="data-table-content table-content-body">3</td>
                    <td className="data-table-content table-content-body">
                      Claim2346TG
                    </td>
                    <td className="data-table-content table-content-body">
                      Tue 2nd, 2020
                    </td>
                    <td className="data-table-content table-content-body">
                      Ksh. 2,550,000
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </article>
    </section>
  );
};

export default DashboardHome;
