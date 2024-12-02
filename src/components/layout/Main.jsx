import languages from "../../db/languages";

export default function Main() {
  return (
    <main>
      <div className="container">
        <div className="buttons-container p-3">
          {languages.map((language) => (
            <button key={language.id} className="btn btn-primary me-2">
              {language.title}
            </button>
          ))}
        </div>
      </div>
    </main>
  );
}
