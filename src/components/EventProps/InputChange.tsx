type InputProps = {
  value: string;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export const InputChange = (props: InputProps) => {
  return (
    <>
      <input type="text" value={props.value} onChange={props.handleChange} />
    </>
  );
};
