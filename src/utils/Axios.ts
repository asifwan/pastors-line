import axios, {
  AxiosError,
  AxiosInstance,
  InternalAxiosRequestConfig,
} from "axios";

const instance: AxiosInstance = axios.create({
  baseURL: "https://api.dev.pastorsline.com/api",
});

instance.interceptors.request.use(
  (config: InternalAxiosRequestConfig<any>) => {
    config.headers.Authorization =
      "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOjU2MCwiZXhwIjoxNzI2NTY3MTc5LCJ0eXBlIjoiYWNjZXNzIiwidGltZXN0YW1wIjoxNjk1MDMxMTc5fQ.0y7NtuVDCvcPvmWbliMs1q02sov2oFC6u2Hi6H4A2W4";
    return config;
  },
  (error: AxiosError) => {
    console.log("Error calling==>", JSON.stringify(error));
  }
);

export default instance;
