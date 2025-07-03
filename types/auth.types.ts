export interface LoginReqest {
  username: string;
  password: string;
}

export interface User {
  user: UserPreview;
  access_token: string;
}

export interface UserPreview {
  id: number;
  username: string;
  email: string;
  name: string;
  profileImage: string | null;
}
