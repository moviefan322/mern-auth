interface LogoutResponse {
  message: string;
}

interface UserInfo {
  _id: number;
  username: string;
  email: string;
}

export type { LogoutResponse, UserInfo };
