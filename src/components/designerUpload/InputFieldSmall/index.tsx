interface InputFieldSmallProps {
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
}

export default function InputFieldSmall({
  value,
  onChange,
  placeholder,
}: InputFieldSmallProps) {
  return (
    <input
      className={
        'text-center border-[1px] invalid:[&:not(:placeholder-shown):not(:focus)]:border-red-500 rounded-[6px] w-full h-[44px] px-[10px] border-grey-300 placeholder:grey-500 focus:placeholder:text-grey-300 w-[138px] h-[34px] caret-black'
      }
      type="text"
      required
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
    />
  );
}
