import languages from "../../db/languages";

export default function Main() {
  return (
    <main>
      <div className="container">
        {/* BUTTONS */}
        <div className="buttons-container p-3">
          {languages.map((language) => (
            <button key={language.id} className="btn btn-primary me-2">
              {language.title}
            </button>
          ))}
        </div>

        {/* LANGUAGE CARDS */}
        {languages.map((language) => (
          <div key={language.id} className="card p-3 m-3">
            <div className="card-title fw-bold">{language.title}</div>
            <div className="card-description">{language.description}</div>
          </div>
        ))}
      </div>
    </main>
  );
}
