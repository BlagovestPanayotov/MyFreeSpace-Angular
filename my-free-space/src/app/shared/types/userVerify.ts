export interface IUserVerify {
  _id: string;
  accountName: string;
  gender: string;
  accessToken: string;
  verified: boolean;
  verify:
    | {
        url: string;
        pass: string;
      }
    | undefined;
}
