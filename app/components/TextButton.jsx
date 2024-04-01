import propTypes from 'prop-types';

const TextButton = ({ onClick, isDisabled, label }) => (
  <button onClick={onClick} disabled={isDisabled} className="m-4">
    {label}
  </button>
);

TextButton.propTypes = {
  onClick: propTypes.func.isRequired,
  isDisabled: propTypes.bool,
  label: propTypes.string.isRequired,
};

export default TextButton;
