export interface SignUpRequest {
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  password: string;
  passwordConfirm: string;
  file?: File;
}

export interface SignUpResponse {
  accessToken: string;
}
