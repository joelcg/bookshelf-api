const {
  addBookHandler,
  getAllBooksHandler,
  getBookDetailHandler,
  editBookDetailHandler,
  deleteBookHandler
} = require('./handler');

const routes = [
  {
    method: 'POST',
    path: '/books',
    handler: addBookHandler
  },
  {
    method: 'GET',
    path: '/books',
    handler: getAllBooksHandler
  },
  {
    method: 'GET',
    path: '/books/{id}',
    handler: getBookDetailHandler
  },
  {
    method: 'PUT',
    path: '/books/{id}',
    handler: editBookDetailHandler
  },
  {
    method: 'DELETE',
    path: '/books/{id}',
    handler: deleteBookHandler
  }
];

module.exports = routes;
