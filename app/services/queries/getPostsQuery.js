import postsApi from '../postsApi';

const getPostsQuery = () => ({
  queryKey: ['posts'],
  queryFn: () => postsApi.getPosts(),
});

export default getPostsQuery;
