import React from "react";
import { Link } from "@reach/router";

import { Footer } from "../../Components";
import Activity from "../../Assets/Icons/activity.svg";
import Dashboard from "../../Assets/Icons/align-justify.svg";
import Claim from "../../Assets/Icons/alert-octagon.svg";
import Policy from "../../Assets/Icons/award.svg";
import Notification from "../../Assets/Icons/bell.svg";
import User from "../../Assets/Icons/user.svg";

import "./index.css";

const DashBoard = ({ children }) => {
  return (
    <main className="dashboard-main">
      <header className="root-header-container">
        <div className="root-header">
          <h1 className="root-heading">Dashboard</h1>
          <div className="heading-icons-container">
            <button
              className="heading-icons"
              id="notifications-drop-down-container"
            >
              <img src={Notification} alt="Notification" />
              <span className="notifications-counter">20</span>
              <ul className="header-drop-down" id="notifications-drop-down">
                <li>James requested a claim</li>
                <li>James added a new policy</li>
              </ul>
            </button>
            <button className="heading-icons" id="user-drop-down-container">
              <img src={User} alt="user" />
              <ul className="header-drop-down" id="user-drop-down">
                <li>Profile</li>
                <li>Logout</li>
              </ul>
            </button>
          </div>
        </div>
      </header>
      <section className="side-panel-container">
        <article className="side-panel-home-link-container">
          <Link className="side-panel-links" to="/dashboard">
            <img className="side-panel-img" src={Activity} alt="act" />
            Kakbima mini
          </Link>
        </article>
        <article className="side-panel-opts-container">
          <ul className="side-panel-opts">
            <li>
              <Link className="side-panel-links-sub" to="/dashboard">
                <img
                  className="side-panel-img-sub"
                  src={Dashboard}
                  alt="dash"
                />
                Dashboard
              </Link>
            </li>
            <li>
              <Link className="side-panel-links-sub" to="/policies">
                <img className="side-panel-img-sub" src={Policy} alt="policy" />
                Policies
              </Link>
            </li>
            <li>
              <Link className="side-panel-links-sub" to="/claims">
                <img className="side-panel-img-sub" src={Claim} alt="claim" />
                Claims
              </Link>
            </li>
          </ul>
        </article>
        <article className="side-panel-bg-img"></article>
      </section>
      <section className="root-main-content">
        <div className="dummy-div"></div>
        {children}
      </section>
      <Footer />
    </main>
  );
};

export default DashBoard;
