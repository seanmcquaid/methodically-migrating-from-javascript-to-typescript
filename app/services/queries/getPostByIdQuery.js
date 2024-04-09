import postsApi from '../postsApi';

const getPostByIdQuery = id => ({
  queryKey: ['getPostById', id],
  queryFn: () => postsApi.getPostById(id),
});

export default getPostByIdQuery;
