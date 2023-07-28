export const userEndpoints = {
  register: '/users/register',
  login: '/users/login',
  logout: '/users/logout',
  getUser: '/users/me',
};

export const destinationEndpoints = {
  getAll: '/data/destinations',
  getById: (id: string) => `/data/destinations/${id}`,
  create: '/data/destinations',
  update: (id: string) => `/data/destinations/${id}`,
  delete: (id: string) => `/data/destinations/${id}`,
};

//for further endpoints
//https://github.com/softuni-practice-server/softuni-practice-server/blob/master/COLLECTIONS.md
