import { URL_ADDRESS } from '../costants';

export const userEndpoints = {
  register: URL_ADDRESS + '/users/register',
  login: URL_ADDRESS + '/users/login',
  logout: URL_ADDRESS + '/users/logout',
  getUser: URL_ADDRESS + '/users/user',
};

const querries = {
  andQuerry: encodeURIComponent(' and '),
  nameQuerry: (name: string) => encodeURIComponent(`name LIKE "${name}"`),
  countryQuerry: (country: string) =>
    encodeURIComponent(`country="${country}"`),

  ownerQuerry: (userId: string) => encodeURIComponent(`_ownerId="${userId}"`),
  destinationQuerry: (destinationId: string) =>
    encodeURIComponent(`_destinationId="${destinationId}"`),
  commentQuerry: (commentId: string) =>
    encodeURIComponent(`_commentId="${commentId}"`),

  sortQuerry: encodeURIComponent(`_createdOn desc`),
  paginQuerry: (offset: number, pageSize: number) =>
    `offset=${(offset - 1) * pageSize}&pageSize=${pageSize}`, //offset === pageNumber-1
};

export const destinationEndpoints = {
  getAll: (name: string, country: string, offset: number) => {
    // if (country === '') {
    //   return (
    //     URL_ADDRESS +
    //     `/dest/destinations?where=${querries.nameQuerry(name)}&sortBy=${
    //       querries.sortQuerry
    //     }&${querries.paginQuerry(offset, 9)}`
    //   );
    // }
    // return (
    //   URL_ADDRESS +
    //   `/dest/destinations?where=${querries.nameQuerry(name)}${
    //     querries.andQuerry
    //   }${querries.countryQuerry(country)}&sortBy=${
    //     querries.sortQuerry
    //   }&${querries.paginQuerry(offset, 9)}`
    // );

    return (
      URL_ADDRESS +
      `/dest/destinations?name=${name}&country=${country}&${querries.paginQuerry(offset, 9)}`
    );
  },
  getDestinationsCount: (name: string, country: string) => {
    if (country === '') {
      return (
        URL_ADDRESS +
        `/dest/destinations?where=${querries.nameQuerry(name)}&sortBy=${
          querries.sortQuerry
        }&count`
      );
    }
    return (
      URL_ADDRESS +
      `/dest/destinations?where=${querries.nameQuerry(name)}${
        querries.andQuerry
      }${querries.countryQuerry(country)}&sortBy=${querries.sortQuerry}&count`
    );
  },
  getById: (id: string) => URL_ADDRESS + `/data/destinations/${id}`,
  create: URL_ADDRESS + '/data/destinations',
  update: (id: string) => URL_ADDRESS + `/data/destinations/${id}`,
  delete: (id: string) => URL_ADDRESS + `/data/destinations/${id}`,
  getUserDestinationsCount: (userId: string, name: string, country: string) => {
    if (country === '') {
      return (
        URL_ADDRESS +
        `/data/destinations?where=${querries.ownerQuerry(userId)}${
          querries.andQuerry
        }${querries.nameQuerry(name)}&sortBy=${querries.sortQuerry}&count`
      );
    }
    return (
      URL_ADDRESS +
      `/data/destinations?where=${querries.ownerQuerry(userId)}${
        querries.andQuerry
      }${querries.nameQuerry(name)}${
        querries.andQuerry
      }${querries.countryQuerry(country)}&sortBy=${querries.sortQuerry}&count`
    );
  },
  getUserDestinations: (
    userId: string,
    name: string,
    country: string,
    offset: number
  ) => {
    if (country === '') {
      return (
        URL_ADDRESS +
        `/data/destinations?where=${querries.ownerQuerry(userId)}${
          querries.andQuerry
        }${querries.nameQuerry(name)}&sortBy=${
          querries.sortQuerry
        }&${querries.paginQuerry(offset, 9)}`
      );
    }
    return (
      URL_ADDRESS +
      `/data/destinations?where=${querries.ownerQuerry(userId)}${
        querries.andQuerry
      }${querries.nameQuerry(name)}${
        querries.andQuerry
      }${querries.countryQuerry(country)}&sortBy=${querries.sortQuerry}`
    );
  },

  getRandom: URL_ADDRESS + '/dest/random',
  getCountDestiantions: URL_ADDRESS + '/dest/destinations?count',
  getListOfDestinations: (offset: number, pageSize: number) =>
    URL_ADDRESS +
    `/data/destinations?${querries.paginQuerry(offset, pageSize)}`,

  getLikes: (destinationId: string) =>
    URL_ADDRESS +
    `/data/likes?where=${querries.destinationQuerry(
      destinationId
    )}&distinct=_ownerId`,
  giveLike: URL_ADDRESS + '/data/likes',
  deleteLike: (likeId: string) => URL_ADDRESS + `/data/likes/${likeId}`,

  getComments: (destinationId: string) =>
    URL_ADDRESS +
    `/data/comments?where=${querries.destinationQuerry(destinationId)}`,
  createComment: URL_ADDRESS + '/data/comments',
  deleteComment: (commentId: string) =>
    URL_ADDRESS + `/data/comments/${commentId}`,
  updateComment: (commentId: string) =>
    URL_ADDRESS + `/data/comments/${commentId}`,

  getCommentLikes: (commentId: string) =>
    URL_ADDRESS +
    `/data/commentLikes?${querries.commentQuerry(commentId)}&distinct=_ownerId`,
  giveCommentLike: URL_ADDRESS + '/data/commentLikes',
  deleteCommentLike: (likeId: string) =>
    URL_ADDRESS + `/data/commentLikes/${likeId}`,
};

//GET COUNT http://localhost:3030/data/destinations?count

//for further endpoints
//https://github.com/softuni-practice-server/softuni-practice-server/blob/master/COLLECTIONS.md
