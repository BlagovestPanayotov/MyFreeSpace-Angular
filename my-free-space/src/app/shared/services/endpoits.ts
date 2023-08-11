import { URL_ADDRESS } from '../costants';

export const userEndpoints = {
  register: URL_ADDRESS + '/users/register',
  login: URL_ADDRESS + '/users/login',
  logout: URL_ADDRESS + '/users/logout',
  getUser: URL_ADDRESS + '/users/me',
};

export const destinationEndpoints = {
  getAll: (name: string, country: string) => {
    if (country === '') {
      return (
        URL_ADDRESS +
        `/data/destinations?where=name%20LIKE%20%22${name}%22&sortBy=_createdOn%20desc`
      );
    }
    return (
      URL_ADDRESS +
      `/data/destinations?where=name%20LIKE%20%22${name}%22%20and%20country%3D%22${country}%22&sortBy=_createdOn%20desc`
    );
  },
  getById: (id: string) => URL_ADDRESS + `/data/destinations/${id}`,
  create: URL_ADDRESS + '/data/destinations',
  update: (id: string) => URL_ADDRESS + `/data/destinations/${id}`,
  delete: (id: string) => URL_ADDRESS + `/data/destinations/${id}`,
  getUserDestinations: (userId: string, name: string, country: string) => {
    if (country === '') {
      return (
        URL_ADDRESS +
        `/data/destinations?where=_ownerId%3D%22${userId}%22%20and%20name%20LIKE%20%22${name}%22&sortBy=_createdOn%20desc`
      );
    }
    return (
      URL_ADDRESS +
      `/data/destinations?where=_ownerId%3D%22${userId}%22%20and%20name%20LIKE%20%22${name}%22%20and%20country%3D%22${country}%22&sortBy=_createdOn%20desc`
    );
  },

  getCountDestiantions: URL_ADDRESS + '/data/destinations?count',
  getListOfDestinations: (offset: number, pageSize: number) => URL_ADDRESS + `/data/destinations?offset=${(offset - 1) * pageSize}&pageSize=${pageSize}`,

  getLikes: (destinationId: string) => URL_ADDRESS + `/data/likes?where=_destinationId%3D%22${destinationId}%22&distinct=_ownerId`,
  giveLike: URL_ADDRESS + '/data/likes',
  deleteLike: (likeId: string) => URL_ADDRESS + `/data/likes/${likeId}`,

  getComments: (destinationId: string) => URL_ADDRESS + `/data/comments?where=_destinationId%3D%22${destinationId}%22`,
  createComment:  URL_ADDRESS + '/data/comments',
  deleteComment: (commentId: string)=> URL_ADDRESS + `/data/comments/${commentId}`,
  updateComment: (commentId: string)=> URL_ADDRESS + `/data/comments/${commentId}`,

  getCommentLikes: (commentId: string) => URL_ADDRESS + `/data/commentLikes?where=_commentId%3D%22${commentId}%22&distinct=_ownerId`,
  giveCommentLike: URL_ADDRESS + '/data/commentLikes',
  deleteCommentLike: (likeId: string) => URL_ADDRESS + `/data/commentLikes/${likeId}`,

};

//GET COUNT http://localhost:3030/data/destinations?count

//for further endpoints
//https://github.com/softuni-practice-server/softuni-practice-server/blob/master/COLLECTIONS.md
