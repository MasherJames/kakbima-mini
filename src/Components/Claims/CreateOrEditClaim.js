import React from "react";

import { Button, InputField } from "../";

import "./index.css";

const CreateOrEditClaim = ({ setShowClaims, setShowNewOrEdit }) => {
  // Handle navigating back to claims
  const handleBackToAllClaims = () => {
    setShowClaims(true);
    setShowNewOrEdit(false);
  };

  return (
    <div className="form-container">
      <div className="bck-to-claim-bnt">
        <Button
          type="button"
          text="Back to Claims"
          click={handleBackToAllClaims}
        />
      </div>
      <form className="claim-form">
        <h1 className="new-claim-text">Add a New Claim</h1>
        <InputField
          normal={true}
          type="text"
          name="claim-number"
          size="full"
          labelText="Claim Number"
        />
        <InputField
          normal={true}
          type="text"
          name="policy-id"
          size="full"
          labelText="Policy Id"
        />
        <InputField
          normal={true}
          type="text"
          name="description"
          size="full"
          labelText="Description of what happened"
        />
        <InputField
          normal={true}
          type="text"
          name="benefit"
          size="full"
          labelText="Benefit"
        />
        <InputField
          normal={true}
          type="text"
          name="claim-date"
          size="full"
          labelText="Claim Date"
        />
        <InputField
          normal={true}
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

export default CreateOrEditClaim;
