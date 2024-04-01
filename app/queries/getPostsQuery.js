import postsApi from '../services/postsApi';

const getPostsQuery = () => ({
  queryKey: ['posts'],
  queryFn: () => postsApi.getPosts(),
});

export default getPostsQuery;
