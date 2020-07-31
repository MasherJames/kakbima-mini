import { useQuery } from "@apollo/client";

const useFetch = (QUERY, handleOnError, handleOnSuccess) => {
  const { data, loading, error } = useQuery(QUERY, {
    errorPolicy: "all",
    onError: (err) => {
      handleOnError(err);
    },
    onCompleted: (data) => {
      handleOnSuccess(data);
    },
  });

  return {
    data,
    loading,
    error,
  };
};

export default useFetch;
