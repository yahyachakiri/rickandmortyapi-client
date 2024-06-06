interface props {
  label: string;
  value?: string;
  onChange: (item: string) => void;
  className?: string;
}

export const Input = ({ className, label, value, onChange }: props) => {
  const id = String(Math.random() * 5);
  return (
    <div className={`${className ?? ""}`}>
      <label htmlFor={id} className="text-sm mb-2 block">
        {label}
      </label>
      <input
        id={id}
        className="bg-gray w-full p-2 rounded-lg text-sm"
        placeholder="Search by name"
        onChange={(e) => onChange(e.target.value)}
        value={value || ""}
      />
    </div>
  );
};
