import {httpClient} from "../api/http-client";

export type LoginRequest = {
  username: string;
  password: string;
}

export type LoginResponse = {
  token: string;
  username: string;
}

export async function login(request: LoginRequest): Promise<string> {
  const response = await httpClient.post<LoginResponse>(
    "/auth/login",
    request
  )
  const token = response.data.token
  localStorage.setItem("token", token);
  return token;
}

export function removeToken() {
  localStorage.clear();
}

