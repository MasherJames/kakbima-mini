import { useState } from "react";

const useForm = (callbackFromApollo, initialState = {}) => {
  const [inputValues, setInputValues] = useState(initialState);

  const handleChange = (e) => {
    setInputValues({
      ...inputValues,
      [e.target.name]: e.target.value,
    });
  };

  const handleSelectChange = (e) => {
    const selectedInputs =
      e &&
      e.map((benefit) => ({
        benefit: benefit.label,
        isClaimed: benefit.isClaimed,
        label: benefit.label,
        value: benefit.value,
      }));

    const obj = { benefits: selectedInputs };

    setInputValues({
      ...inputValues,
      ...obj,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Trigger the respective callback from apollo, i.e sign-in or sign-up
    callbackFromApollo();
  };

  return {
    handleChange,
    handleSelectChange,
    handleSubmit,
    inputValues,
  };
};

export default useForm;
