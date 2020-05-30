import React from "react";

import { Button, InputField } from "../";

import "./index.css";

const CreateOrEditPolicy = ({ setShowPolicies, setShowNewOrEdit }) => {
  // Handle navigating back to claims
  const handleBackToAllClaims = () => {
    setShowPolicies(true);
    setShowNewOrEdit(false);
  };

  return (
    <div className="form-container">
      <div className="bck-to-claim-bnt">
        <Button
          type="button"
          text="Back to Policies"
          click={handleBackToAllClaims}
        />
      </div>
      <form className="claim-form">
        <h1 className="new-claim-text">Add a New Policy</h1>
        <InputField
          type="text"
          name="name"
          size="full"
          labelText="Policy Name"
        />
        <InputField
          type="text"
          name="star-date"
          size="full"
          labelText="Start Date"
        />
        <InputField
          type="text"
          name="end-date"
          size="full"
          labelText="End Date"
        />
        <InputField
          type="text"
          name="benefit"
          size="full"
          labelText="Benefit"
        />
        <InputField
          type="text"
          name="claim-date"
          size="full"
          labelText="Claim Date"
        />
        <InputField
          type="number"
          name="claim-amount"
          size="full"
          labelText="Claim Amount"
        />
        <Button text="ADD CLAIM" type="submit" />
      </form>
    </div>
  );
};

export default CreateOrEditPolicy;
