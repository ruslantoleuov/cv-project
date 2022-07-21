const InputField = (props) => {
  return (
    <div>
      <label htmlFor={props.id}>{props.children}</label>
      <input
        id={props.id}
        type={props.type}
        value={props.value}
        onChange={props.onChange}
      />
    </div>
  );
};

export default InputField;
