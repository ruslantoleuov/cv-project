const TextArea = (props) => {
  return (
    <div>
      <label htmlFor={props.id}>{props.children}</label>
      <textarea id={props.id} value={props.value} onChange={props.onChange} />
    </div>
  );
};

export default TextArea;
