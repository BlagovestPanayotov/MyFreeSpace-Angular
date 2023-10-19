export interface IUser {
  _id: string;
  email: string;
  username: string;
  country: string;
  gender: string;
  accountName: string;
  accountNameChanged: boolean;
  verified: boolean;
  image: {
    imgUrl: string;
    thumbUrl: string;
  };
  accessToken:string;
}
