const apiResponse = (method: string, status: number, data: Object) => {
  return {
    method,
    status,
    data,
  };
};

export default apiResponse;
