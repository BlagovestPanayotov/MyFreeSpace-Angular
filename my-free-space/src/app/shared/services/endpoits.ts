import { URL_ADDRESS } from '../costants';

export const userEndpoints = {
  register: URL_ADDRESS + '/users/register',
  login: URL_ADDRESS + '/users/login',
  logout: URL_ADDRESS + '/users/logout',
  getUser: URL_ADDRESS + '/users/user',
  getUserVerify: URL_ADDRESS + '/users/user/verify',
  verifyEmail: (verificationToken: string) =>
    URL_ADDRESS + `/users/user/verify-email?token=${verificationToken}`,
};

const querries = {
  // andQuerry: encodeURIComponent(' and '),
  nameQuerry: (name: string) => encodeURIComponent(`${name}`),
  countryQuerry: (country: string) => encodeURIComponent(`${country}`),

  // ownerQuerry: (userId: string) => encodeURIComponent(`_ownerId="${userId}"`),
  destinationQuerry: (destinationId: string) =>
    encodeURIComponent(`${destinationId}`),
  commentQuerry: (commentId: string) => encodeURIComponent(`${commentId}`),

  // sortQuerry: encodeURIComponent(`_createdOn desc`),
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
  // getDestinationsCount: (name: string, country: string) => {
  //   if (country === '') {
  //     return (
  //       URL_ADDRESS +
  //       `/dest/destinations?where=${querries.nameQuerry(name)}&sortBy=${
  //         querries.sortQuerry
  //       }&count`
  //     );
  //   }
  //   return (
  //     URL_ADDRESS +
  //     `/dest/destinations?where=${querries.nameQuerry(name)}${
  //       querries.andQuerry
  //     }${querries.countryQuerry(country)}&sortBy=${querries.sortQuerry}&count`
  //   );
  // },
  create: URL_ADDRESS + '/dest/destinations',
  getById: (id: string) =>
    URL_ADDRESS + `/dest/${querries.destinationQuerry(id)}`,
  update: (id: string) =>
    URL_ADDRESS + `/dest/${querries.destinationQuerry(id)}`,
  delete: (id: string) =>
    URL_ADDRESS + `/dest/${querries.destinationQuerry(id)}`,

  // getUserDestinationsCount: (userId: string, name: string, country: string) => {
  //   if (country === '') {
  //     return (
  //       URL_ADDRESS +
  //       `/data/destinations?where=${querries.ownerQuerry(userId)}${
  //         querries.andQuerry
  //       }${querries.nameQuerry(name)}&sortBy=${querries.sortQuerry}&count`
  //     );
  //   }
  //   return (
  //     URL_ADDRESS +
  //     `/data/destinations?where=${querries.ownerQuerry(userId)}${
  //       querries.andQuerry
  //     }${querries.nameQuerry(name)}${
  //       querries.andQuerry
  //     }${querries.countryQuerry(country)}&sortBy=${querries.sortQuerry}&count`
  //   );
  // },
  getUserDestinations: (name: string, country: string, offset: number) => {
    return (
      URL_ADDRESS +
      `/dest/my-destination?name=${name}&country=${country}&${querries.paginQuerry(
        offset,
        9
      )}`
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

//GET COUNT http://localhost:3030/data/destinations?count
