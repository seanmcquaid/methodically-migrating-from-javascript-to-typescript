import PropTypes from 'prop-types';

const PostInfo = ({ post }) => {
  console.log(post.id.slice());
  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </div>
  );
};

PostInfo.propTypes = {
  post: PropTypes.shape({
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    userId: PropTypes.number.isRequired,
  }),
};

export default PostInfo;
