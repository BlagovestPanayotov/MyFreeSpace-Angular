export interface IUser {
  _id: string;
  email: string;
  username: string;
  hashedPassword: string;
  country: string;
  gender: string;
  accountName: string;
  accessToken: string;
  accountNameChanged: boolean;
  verified: boolean;
  verify:
    | {
        url: string;
        pass: string;
      }
    | undefined;
}
