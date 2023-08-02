export interface IUser {
  _id: string;
  email: string;
  username: string;
  hashedPassword: string;
  country: string;
  gender: string;
  accessToken: string;
}
