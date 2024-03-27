const Button = ({ buttonText, handleButtononClick, color }) => {
  return (
    <button style={{ backgroundColor: color }} onClick={handleButtononClick}>
      {buttonText}
    </button>
  );
};
export default Button;
