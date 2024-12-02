export default function Button({ id, text, buttonClickHandler }) {
  return (
    <button
      onClick={() => buttonClickHandler(id)}
      className="btn btn-primary me-2"
    >
      {text}
    </button>
  );
}
