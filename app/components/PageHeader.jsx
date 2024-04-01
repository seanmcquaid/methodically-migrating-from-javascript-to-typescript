import PropTypes from 'prop-types';

const PageHeader = ({ title, subtitle }) => (
  <header className="flex items-center justify-center m-4">
    <h1 className="font-medium text-xl">{title}</h1>
    {subtitle && <h2 className="font-normal text-lg">{subtitle}</h2>}
  </header>
);

PageHeader.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
};

export default PageHeader;
