import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const UnstyledLink = ({ children, to }) => {
  return (
    <Link to={to} className="no-underline">
      {children}
    </Link>
  );
};

UnstyledLink.propTypes = {
  children: PropTypes.node.isRequired,
  to: PropTypes.string.isRequired,
};

export default UnstyledLink;
