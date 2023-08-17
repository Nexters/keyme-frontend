import axios, { AxiosPromise } from 'axios';

const BASE_ENDPOINT = process.env.NEXT_PUBLIC_API_ENDPOINT;

export const request = axios.create({
  baseURL: BASE_ENDPOINT,
  timeout: 15000,
  withCredentials: true,
  transitional: {
    clarifyTimeoutError: true,
  },
});

export async function resultify<T>(axiosPromise: AxiosPromise<T>) {
  const result = await axiosPromise;
  return result.data;
}
