import { useState } from "react";
import Button from "../ui/Button";
import languages from "../../db/languages";

export default function Main() {
  const [isSelected, setIsSelected] = useState(languages.map(() => false));

  const buttonClickHandler = (index) => {
    const newSelection = isSelected.map(() => false);
    newSelection[index] = !isSelected[index];
    setIsSelected(newSelection);
  };

  return (
    <main>
      <div className="container">
        {/* BUTTONS */}
        <div className="buttons-container p-3">
          {languages.map((language, index) => (
            <Button
              isSelected={isSelected[index]}
              buttonClickHandler={buttonClickHandler}
              key={language.id}
              index={index}
              text={language.title}
            />
          ))}
        </div>

        {/* LANGUAGE CARDS */}
        {languages.map((language, index) => (
          <div
            key={language.id}
            className={"card p-3 m-3" + (isSelected[index] ? "" : " d-none")}
          >
            <div className="card-title fw-bold">{language.title}</div>
            <div className="card-description">{language.description}</div>
          </div>
        ))}
      </div>
    </main>
  );
}
