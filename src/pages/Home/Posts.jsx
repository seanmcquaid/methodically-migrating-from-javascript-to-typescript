import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Posts = ({ posts }) => {
  return (
    <ul>
      {posts.map(post => (
        <li key={post.id}>
          <Link to={`/post/${post.id}`}>{post.title}</Link>
        </li>
      ))}
    </ul>
  );
};

Posts.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      body: PropTypes.string.isRequired,
      userId: PropTypes.number.isRequired,
    }).isRequired,
  ),
};

export default Posts;
