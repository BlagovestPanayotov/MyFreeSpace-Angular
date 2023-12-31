import { URL_ADDRESS } from '../costants';

const userQuerries = {
  userQuerry: (userId: string) => encodeURIComponent(`${userId}`),
};

export const userEndpoints = {
  register: URL_ADDRESS + '/users/register',
  login: URL_ADDRESS + '/users/login',
  logout: URL_ADDRESS + '/users/logout',
  getUser: URL_ADDRESS + '/users/user',
  getUserById: (userId: string) => URL_ADDRESS + `/users/user/view/${userId}`,
  getUserVerify: URL_ADDRESS + '/users/user/verify',
  verifyEmail: (verificationToken: string) =>
    URL_ADDRESS + `/users/user/verify-email?token=${verificationToken}`,
  resendVerifyEmail: URL_ADDRESS + '/users/user/verify-resend',
};

const querries = {
  nameQuerry: (name: string) => encodeURIComponent(`${name}`),
  countryQuerry: (country: string) => encodeURIComponent(`${country}`),

  destinationQuerry: (destinationId: string) =>
    encodeURIComponent(`${destinationId}`),
  commentQuerry: (commentId: string) => encodeURIComponent(`${commentId}`),

  paginQuerry: (offset: number, pageSize: number) =>
    `offset=${(offset - 1) * pageSize}&pageSize=${pageSize}`, //offset === pageNumber-1
};

export const destinationEndpoints = {
  getAll: (name: string, country: string, offset: number) => {
    return (
      URL_ADDRESS +
      `/dest/destinations?name=${querries.nameQuerry(
        name
      )}&country=${querries.countryQuerry(country)}&${querries.paginQuerry(
        offset,
        9
      )}`
    );
  },
  create: URL_ADDRESS + '/dest/destinations',
  getById: (id: string) =>
    URL_ADDRESS + `/dest/${querries.destinationQuerry(id)}`,
  update: (id: string) =>
    URL_ADDRESS + `/dest/${querries.destinationQuerry(id)}`,
  delete: (id: string) =>
    URL_ADDRESS + `/dest/${querries.destinationQuerry(id)}`,
  getOwnerDestinations: (offset: number) => {
    return (
      URL_ADDRESS + `/dest/my-destinations?${querries.paginQuerry(offset, 9)}`
    );
  },
  getUserDestinations: (userId: string, offset: number) => {
    return (
      URL_ADDRESS +
      `/dest/user-destinations/${userId}?${querries.paginQuerry(offset, 9)}`
    );
  },

  getRandom: URL_ADDRESS + '/dest/random',
  getCountDestiantions: URL_ADDRESS + '/dest/destinations?count',
  getListOfDestinations: (offset: number, pageSize: number) =>
    URL_ADDRESS +
    `/data/destinations?${querries.paginQuerry(offset, pageSize)}`,

  getLikes: (destinationId: string) =>
    URL_ADDRESS + `/accessory/likes?dest=${destinationId}`,
  giveLike: URL_ADDRESS + '/accessory/likes',
  deleteLike: URL_ADDRESS + `/accessory/likes/remove`,

  getComments: (destinationId: string) =>
    URL_ADDRESS +
    `/accessory/comments?dest=${querries.destinationQuerry(destinationId)}`,
  createComment: URL_ADDRESS + '/accessory/comments',
  deleteComment: (commentId: string) =>
    URL_ADDRESS + `/accessory/comments/delete/${commentId}`,
  updateComment: (commentId: string) =>
    URL_ADDRESS + `/accessory/comments/edit/${commentId}`,

  getCommentLikes: (commentId: string) =>
    URL_ADDRESS +
    `/accessory/comments/commentLikes?comment=${querries.commentQuerry(
      commentId
    )}`,
  giveCommentLike: URL_ADDRESS + '/accessory/comments/commentLikes',
  deleteCommentLike: URL_ADDRESS + '/accessory/comments/commentLikes/remove',
};
