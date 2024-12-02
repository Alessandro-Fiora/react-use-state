import { useState } from "react";
import Button from "../ui/Button";
import languages from "../../db/languages";

export default function Main() {
  const buttonClickHandler = (id) => {
    console.log("bottone " + id + " cliccato");
  };

  let isOpen = true;

  return (
    <main>
      <div className="container">
        {/* BUTTONS */}
        <div className="buttons-container p-3">
          {languages.map((language) => (
            <Button
              buttonClickHandler={buttonClickHandler}
              key={language.id}
              id={language.id}
              text={language.title}
            />
          ))}
        </div>

        {/* LANGUAGE CARDS */}
        {languages.map((language) => (
          <div
            key={language.id}
            className={"card p-3 m-3" + (isOpen ? "" : " d-none")}
          >
            <div className="card-title fw-bold">{language.title}</div>
            <div className="card-description">{language.description}</div>
          </div>
        ))}
      </div>
    </main>
  );
}
