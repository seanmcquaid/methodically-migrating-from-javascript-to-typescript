import postsApi from '../services/postsApi.js';

const getPostByIdQuery = id => ({
  queryKey: ['getPostById', id],
  queryFn: () => postsApi.getPostById(id),
});

export default getPostByIdQuery;
