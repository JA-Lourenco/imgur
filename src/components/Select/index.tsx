import { SelectComp } from "./styled";

interface SelectProps {
  value: string;
  options: string[];
  onChangeOptions: (value: string) => void;
}

export const Select = ({ value, options, onChangeOptions }: SelectProps) => {
  return (
    <SelectComp
      value={value}
      onChange={(event) => onChangeOptions(event.target.value)}
      style={{ padding: 10 }}
    >
      {options.map((opt) => {
        return (
          <option key={opt} value={opt}>
            {opt.toUpperCase()}
          </option>
        );
      })}
    </SelectComp>
  );
};
