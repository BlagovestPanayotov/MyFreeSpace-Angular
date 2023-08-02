import { URL_ADDRESS } from '../costants';

export const userEndpoints = {
  register: URL_ADDRESS + '/users/register',
  login: URL_ADDRESS + '/users/login',
  logout: URL_ADDRESS + '/users/logout',
  getUser: URL_ADDRESS + '/users/me',
};

export const destinationEndpoints = {
  getAll: URL_ADDRESS + '/data/destinations?sortBy=_createdOn%20desc',
  getById: (id: string) => URL_ADDRESS + `/data/destinations/${id}`,
  create: URL_ADDRESS + '/data/destinations',
  update: (id: string) => URL_ADDRESS + `/data/destinations/${id}`,
  delete: (id: string) => URL_ADDRESS + `/data/destinations/${id}`,
  getUserDestinations: (userId: string) =>
    URL_ADDRESS +
    `/data/destinations?where=_ownerId%3D%22${userId}%22&sortBy=_createdOn%20desc`,
};

//for further endpoints
//https://github.com/softuni-practice-server/softuni-practice-server/blob/master/COLLECTIONS.md
