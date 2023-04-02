import PropTypes from 'prop-types';

const PageHeader = ({ title, subtitle }) => (
  <header>
    <h1>{title}</h1>
    {subtitle && <h2>{subtitle}</h2>}
  </header>
);

PageHeader.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
};

export default PageHeader;
