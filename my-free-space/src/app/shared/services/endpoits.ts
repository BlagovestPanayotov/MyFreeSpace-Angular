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
      return URL_ADDRESS + `/data/destinations?where=name%20LIKE%20%22${name}%22&sortBy=_createdOn%20desc`;
    }
    return URL_ADDRESS + `/data/destinations?where=name%20LIKE%20%22${name}%22%20and%20country%3D%22${country}%22&sortBy=_createdOn%20desc`;
  },
  getById: (id: string) => URL_ADDRESS + `/data/destinations/${id}`,
  create: URL_ADDRESS + '/data/destinations',
  update: (id: string) => URL_ADDRESS + `/data/destinations/${id}`,
  delete: (id: string) => URL_ADDRESS + `/data/destinations/${id}`,
  getUserDestinations: (userId: string, name: string, country: string) =>{
    if (country === '') {
      return URL_ADDRESS + `/data/destinations?where=_ownerId%3D%22${userId}%22%20and%20name%20LIKE%20%22${name}%22&sortBy=_createdOn%20desc`;
    }
    return URL_ADDRESS + `/data/destinations?where=_ownerId%3D%22${userId}%22%20and%20name%20LIKE%20%22${name}%22%20and%20country%3D%22${country}%22&sortBy=_createdOn%20desc`;
  }
};

//for further endpoints
//https://github.com/softuni-practice-server/softuni-practice-server/blob/master/COLLECTIONS.md
