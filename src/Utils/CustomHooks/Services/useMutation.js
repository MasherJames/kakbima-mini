import { useMutation } from "@apollo/client";

const useMutateData = (
  MUTATION,
  inputvalues,
  handleOnSuccess,
  handleOnError
) => {
  const [mutateFunc, { data, loading, error }] = useMutation(MUTATION, {
    variables: { input: inputvalues },
    onError: (err) => {
      handleOnError(err.message);
    },
    onCompleted: (data) => {
      handleOnSuccess(data);
    },
  });

  return {
    mutateFunc,
    data,
    loading,
    error,
  };
};
export default useMutateData;
