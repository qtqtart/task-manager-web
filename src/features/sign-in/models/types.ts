export interface SignInRequest {
  login: string;
  password: string;
}

export interface SignInResponse {
  accessToken: string;
}
