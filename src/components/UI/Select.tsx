interface props {
  options: string[];
  onChange: (item: string) => void;
  label: string;
  value: string;
}

export const Select = ({ options, onChange, label, value }: props) => {
  const id = String(Math.random() * 5);
  return (
    <div>
      <label htmlFor={id} className="text-sm mb-2 block">
        {label}
      </label>
      <select className="bg-gray p-2 rounded-lg text-sm" id={id} onChange={(e) => onChange(e.target.value)} value={value || "All"}>
        <option value={"All"}>All</option>
        {options.map((option) => (
          <option value={option}>{option}</option>
        ))}
      </select>
    </div>
  );
};
