import PropTypes from 'prop-types';
import { Link } from '@remix-run/react';

const Posts = ({ posts }) => {
  return (
    <ul className="flex flex-wrap">
      {posts.map(post => (
        <li
          key={post.id}
          className="border-solid border-2 border-black m-4 p-4 cursor-pointer flex-auto"
        >
          <Link
            to={`/posts/${post.id}`}
            className="w-full h-full flex items-center justify-center"
          >
            {post.title}
          </Link>
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
