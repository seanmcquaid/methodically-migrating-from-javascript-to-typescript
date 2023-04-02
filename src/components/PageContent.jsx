import PropTypes from 'prop-types';

const PageContent = ({ children }) => <div>{children}</div>;

PageContent.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PageContent;
