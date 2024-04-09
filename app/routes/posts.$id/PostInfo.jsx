import PropTypes from 'prop-types';
import PageHeader from '@/components/PageHeader';

const PostInfo = ({ post }) => {
  return (
    <div>
      <PageHeader title={post.title} />
      <p className="flex items-center justify-center">{post.body}</p>
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
