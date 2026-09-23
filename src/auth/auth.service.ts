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
  const token = getToken(response.data.token);
  localStorage.setItem("token", token);
  return token;
}

export function getToken(token: string) {
  return token;
}

export function removeToken() {
  localStorage.clear();
}

export function getRoles(token: string) {
  const extractPayload = token.split('.');
  const payload = JSON.parse(atob(extractPayload[1]))
  const scope = payload['scope'].split(' ');
  const role = scope[0];

  console.log(role)
  return role;
}

export function hasRole(role: string) {
  return role === 'ROLE_ADMIN';
}

