export interface IDestinationDetails {
  _id: string;
  name: string;
  country: string;
  description: string;
  _ownerId: string;
  img: {
    imgUrl: string;
    thumbUrl: string;
  };
  _createdOn: string;
}
