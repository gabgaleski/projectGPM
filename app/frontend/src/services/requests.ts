import axios from "axios";

const API_URL = 'http://localhost:3001';

const api = axios.create({
  baseURL: API_URL,
});

export const setToken = (token: string): void => {
  api.defaults.headers.common.Authorization = `Bearer ${token}`
}

export async function requestData(endpoint: string) {
  const data = api.get(endpoint);
  return data
}

export async function requestPost<T>(endpoint: string, body: T) {
  const data = await api.post(endpoint, body)
  return data
}

export async function requestPut<T>(endpoint: string, body: T) {
  const data = api.put(endpoint, body)
  return data
}

export async function requestDelete(endpoint: string) {
  const data = api.delete(endpoint)
  return data
}