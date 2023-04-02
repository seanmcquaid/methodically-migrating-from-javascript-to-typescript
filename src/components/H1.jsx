import PropTypes from 'prop-types';

const H1 = ({ children }) => <h1>{children}</h1>;

H1.propTypes = {
  children: PropTypes.node.isRequired,
};

export default H1;