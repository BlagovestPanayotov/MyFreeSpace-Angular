import { IComment } from "./comment";
import { ILike } from "./like";

export interface IDestinationDetails {
  _id: string;
  name: string;
  country: string;
  description: string;
  _ownerId: string;
  img: string;
  _createdOn: string;
  likes: [ILike];
  comments: [IComment];
}
