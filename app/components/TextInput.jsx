import propTypes from 'prop-types';

const TextInput = ({ label, value, onChange, name, placeholder }) => (
  <label htmlFor={name}>
    {label}
    <input
      value={value}
      onChange={onChange}
      name={name}
      placeholder={placeholder}
      className="border border-black rounded-md p-2 m-2"
      id={name}
    />
  </label>
);

TextInput.propTypes = {
  label: propTypes.string.isRequired,
  value: propTypes.string.isRequired,
  onChange: propTypes.func.isRequired,
  name: propTypes.string.isRequired,
  placeholder: propTypes.string,
};

export default TextInput;
