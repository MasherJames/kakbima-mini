import React, { useState } from "react";
import { useMutation } from "@apollo/react-hooks";

import { PolicyGql } from "../../Gql";
import { useForm } from "../../Utils";
import { Button, InputField, Notification } from "../";

import "./index.css";

const CreateOrEditPolicy = ({ setShowPolicies, setShowNewOrEdit }) => {
  const [error, setError] = useState("");

  // close side bar function by setting error to nul
  const closeSideNotification = () => {
    setError(null);
  };

  // Handle navigating back to all Policies
  const handleBackToAllPolicies = () => {
    setShowPolicies(true);
    setShowNewOrEdit(false);
  };

  const initialState = {
    name: "",
    startDate: "",
    endDate: "",
    benefits: [],
    premium: "",
    identifier: "",
  };

  // Form custom hook that handles on-change and on-submit
  const {
    handleChange,
    handleSelectChange,
    handleSubmit,
    inputValues,
  } = useForm(addPolicy, initialState);

  // add policy mutation
  const [mutationFunc] = useMutation(PolicyGql.ADD_POLICY_MUTATION, {
    variables: {
      input: {
        name: inputValues.name,
        startDate: inputValues.startDate,
        endDate: inputValues.endDate,
        benefits: inputValues.benefits.map((e) => ({
          benefit: e.benefit,
          isClaimed: e.isClaimed,
        })),
        premium: parseInt(inputValues.premium, 10),
        identifier: inputValues.identifier,
      },
    },
    optimisticResponse: {
      __typename: "Mutation",
      addPolicy: {
        success: true,
        message: "Policy Successfully created",
        __typename: "PolicyPayload",
        policy: {
          __typename: "Policy",
          id: 1,
          name: inputValues.name,
          startDate: inputValues.startDate,
          endDate: inputValues.endDate,
          benefits: [
            {
              benefit: "Third party",
              isClaimed: false,
              __typename: "Benefits",
            },
          ],
          premium: inputValues.premium,
          identifier: inputValues.premium,
        },
      },
    },
    update(
      cache,
      {
        data: {
          addPolicy: { policy },
        },
      }
    ) {
      const { getAllPolicies } = cache.readQuery({
        query: PolicyGql.GET_ALL_POLICIES,
      });
      cache.writeQuery({
        query: PolicyGql.GET_ALL_POLICIES,
        data: { getAllPolicies: [...getAllPolicies, policy] },
      });
    },
    onError: (err) => {
      setError(err.message);
    },
    onCompleted: (data) => {
      handleBackToAllPolicies();
    },
  });

  function addPolicy() {
    mutationFunc();
  }

  return (
    <div className="form-container">
      {error && (
        <Notification
          message={error}
          closeSideNotification={closeSideNotification}
        />
      )}
      <div className="bck-to-claim-bnt">
        <Button
          type="button"
          text="Back to Policies"
          click={handleBackToAllPolicies}
        />
      </div>
      <form
        className="claim-form"
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <h1 className="new-claim-text">Add a New Policy</h1>
        <InputField
          type="text"
          name="name"
          value={inputValues.name}
          onChange={handleChange}
          size="full"
          labelText="Policy Name"
        />
        <InputField
          type="date"
          name="startDate"
          value={inputValues.startDate}
          onChange={handleChange}
          size="full"
          labelText="Start Date"
        />
        <InputField
          type="date"
          name="endDate"
          value={inputValues.endDate}
          onChange={handleChange}
          size="full"
          labelText="End Date"
        />
        <InputField
          type="text"
          name="benefits"
          value={inputValues.benefits}
          onChange={handleSelectChange}
          size="full"
          labelText="Benefit"
          select={true}
        />
        <InputField
          type="number"
          name="premium"
          value={inputValues.premium}
          onChange={handleChange}
          size="full"
          labelText="Total Premium"
        />
        <InputField
          type="text"
          name="identifier"
          value={inputValues.identifier}
          onChange={handleChange}
          size="full"
          labelText="Identifier"
        />

        <Button text="ADD POLICY" type="submit" />
      </form>
    </div>
  );
};

export default CreateOrEditPolicy;
