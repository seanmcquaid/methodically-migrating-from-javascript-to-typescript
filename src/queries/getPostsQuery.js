import postsApi from '../services/postsApi.js';

const getPostsQuery = () => ({
  queryKey: ['posts'],
  queryFn: () => postsApi.getPosts(),
});

export default getPostsQuery;
