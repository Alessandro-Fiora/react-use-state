import { useState } from "react";
import Button from "../ui/Button";
import languages from "../../db/languages";

export default function Main() {
  const [selected, setIsSelected] = useState(
    languages.map((language) => false)
  );

  const buttonClickHandler = (index) => {
    console.log("bottone " + index + " cliccato");
    const newSelection = [...selected];
    newSelection[index] = !selected[index];
    setIsSelected(newSelection);
    console.log(newSelection);
  };

  return (
    <main>
      <div className="container">
        {/* BUTTONS */}
        <div className="buttons-container p-3">
          {languages.map((language, index) => (
            <Button
              isSelected={selected[index]}
              buttonClickHandler={buttonClickHandler}
              key={language.id}
              id={language.id}
              index={index}
              text={language.title}
            />
          ))}
        </div>

        {/* LANGUAGE CARDS */}
        {languages.map((language, index) => (
          <div
            key={language.id}
            className={"card p-3 m-3" + (selected[index] ? "" : " d-none")}
          >
            <div className="card-title fw-bold">{language.title}</div>
            <div className="card-description">{language.description}</div>
          </div>
        ))}
      </div>
    </main>
  );
}
