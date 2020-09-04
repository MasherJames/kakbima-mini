export { user } from "./data";
export const MockFunc = ({ query, variables, responseData }) => {
  const request = { query, variables };
  const result = { data: responseData };

  return [{ request, result }];
};
