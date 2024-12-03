export default function Button({ children, buttonClickHandler, isSelected }) {
  return (
    <button
      onClick={buttonClickHandler}
      className={
        "btn me-2 my-2 " + (isSelected ? " btn-warning" : " btn-primary")
      }
    >
      {children}
    </button>
  );
}
