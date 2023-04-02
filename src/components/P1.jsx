import PropTypes from 'prop-types';

const P1 = ({ children }) => <p>{children}</p>;

P1.propTypes = {
  children: PropTypes.node.isRequired,
};

export default P1;
