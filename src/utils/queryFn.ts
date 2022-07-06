import axios from "axios";

const queryFn =
  (url: string, params: { [key: string]: unknown } = {}) =>
  async () => {
    const response = await axios.get(`${url}`, {
      params: params,
    });

    return response.data;
  };

export default queryFn;
