export default function Button({
  index,
  text,
  buttonClickHandler,
  isSelected,
}) {
  return (
    <button
      onClick={() => buttonClickHandler(index)}
      className={"btn me-2 " + (isSelected ? " btn-warning" : " btn-primary")}
    >
      {text}
    </button>
  );
}
