import PropTypes from 'prop-types';

const PageWrapper = ({ children, isLoading, isError }) => {
  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error</div>;
  }

  return (
    <div className="h-full w-full flex flex-col items-start">{children}</div>
  );
};

PageWrapper.propTypes = {
  children: PropTypes.node.isRequired,
  isLoading: PropTypes.bool,
  isError: PropTypes.bool,
};

export default PageWrapper;
