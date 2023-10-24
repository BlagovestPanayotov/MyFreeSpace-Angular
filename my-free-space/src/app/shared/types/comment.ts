export interface IComment {
  _ownerId: {
    _id: string;
    gender: string;
    accountName: string;
    image: { thumbUrl: string };
  };
  content: string;
  _destinationId: string;
  _createdOn: string;
  _id: string;
}
