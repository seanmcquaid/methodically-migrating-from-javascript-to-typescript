// Docs - https://jsonplaceholder.typicode.com/guide/

const baseUrl = 'https://jsonplaceholder.typicode.com/posts';

const postsApi = {
  getPosts: () => fetch(baseUrl).then(response => response.json()),
  getPostById: id =>
    fetch(`${baseUrl}/${id}`).then(response => response.json()),
};

export default postsApi;
