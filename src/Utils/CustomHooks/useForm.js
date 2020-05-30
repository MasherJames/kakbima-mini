import { useState } from "react";

const useForm = (callbackFromApollo, initialState = {}) => {
  const [inputValues, setInputValues] = useState(initialState);

  const handleChange = (e) => {
    setInputValues({ ...inputValues, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Trigger the respective callback from apollo, i.e sign-in or sign-up
    callbackFromApollo();
  };

  return {
    handleChange,
    handleSubmit,
    inputValues,
  };
};

export default useForm;
