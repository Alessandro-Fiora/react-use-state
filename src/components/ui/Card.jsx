export default function Card({ isSelected, title, description }) {
  return (
    <div className={"card p-3 m-3" + (isSelected ? "" : " d-none")}>
      <div className="card-title fw-bold">{title || ""}</div>
      <div className="card-description">{description || ""}</div>
    </div>
  );
}
