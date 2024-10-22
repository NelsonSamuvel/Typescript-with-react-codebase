type ButtonTypes = {
  label: string;
  onClick(): void;
  disabled: boolean;
};

const Button = ({ label, onClick, disabled }: ButtonTypes) => {
  return (
    <button onClick={onClick} disabled={disabled}>
      {label}
    </button>
  );
};

export default Button;
