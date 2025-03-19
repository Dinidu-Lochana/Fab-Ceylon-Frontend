
import PropTypes from 'prop-types';

export function Button({ children, onClick, className }) {
    return (
      <button className={` px-4 py-2 bg-blue-500 text-white rounded ${className}`} onClick={onClick}>
        {children}
      </button>
    );
  }
  
  Button.propTypes = {
    children: PropTypes.node.isRequired,  // This ensures children prop is required and can be any React node (string, number, element)
    onClick: PropTypes.func.isRequired,   // This ensures onClick is a function
    className: PropTypes.string           // className is optional, default is ''
};