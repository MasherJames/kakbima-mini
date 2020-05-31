import { useQuery } from "@apollo/react-hooks";

const useFetch = (QUERY, handleOnError, handleOnSuccess) => {
  const { data, loading, error } = useQuery(QUERY, {
    errorPolicy: "all",
    onError: (err) => {
      handleOnError(err);
    },
    onCompleted: (data) => {
      handleOnSuccess(data);
      console.log(data);
    },
  });

  return {
    data,
    loading,
    error,
  };
};

export default useFetch;
