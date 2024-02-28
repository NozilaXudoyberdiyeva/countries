import axios, { AxiosError } from "axios";
export default axios.create({
  baseURL: import.meta.env.VITE_REACT_APP_API_URL,
});

export { AxiosError as CanseledError };
