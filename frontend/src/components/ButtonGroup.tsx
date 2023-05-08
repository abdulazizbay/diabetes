const ButtonGroup: React.FC<ButtonGroupProps> = ({
  options,
  onChange,
  value,
}) => {
  return (
    <div className="button-group flex gap-1 flex-wrap">
      {options.map((option) => (
        <button
          type="button"
          key={option.value}
          className={`button px-3 py-1 border rounded-lg hover:transform hover:-translate-y-1 ${
            value === option.value ? 'text-white bg-indigo-600' : 'bg-white'
          }`}
          onClick={() => onChange(option.value)}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
};

interface Option {
  value: string;
  label: string;
}

interface ButtonGroupProps {
  options: Option[];
  value: string;
  onChange: (value: string) => void;
}

export default ButtonGroup;
