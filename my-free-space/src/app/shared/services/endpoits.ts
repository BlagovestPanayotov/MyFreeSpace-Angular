import { URL_ADDRESS } from "../costants";

export const userEndpoints = {
  register: URL_ADDRESS+'/users/register',
  login: URL_ADDRESS+'/users/login',
  logout: URL_ADDRESS+'/users/logout',
  getUser: URL_ADDRESS+'/users/me',
};

export const destinationEndpoints = {
  getAll: URL_ADDRESS+'/data/destinations',
  getById: (id: string) => URL_ADDRESS+`/data/destinations/${id}`,
  create: URL_ADDRESS+'/data/destinations',
  update: (id: string) => URL_ADDRESS+`/data/destinations/${id}`,
  delete: (id: string) => URL_ADDRESS+`/data/destinations/${id}`,
};

//for further endpoints
//https://github.com/softuni-practice-server/softuni-practice-server/blob/master/COLLECTIONS.md
