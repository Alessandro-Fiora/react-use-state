import { useState } from "react";
import languages from "../../db/languages";
import Button from "../ui/Button";
import Card from "../ui/Card";

export default function Main() {
  // Creo array di appoggio con informazioni di quale elemento è stato selezionato (ho usato gli indici per comodità, avrei potuto usare gli id)
  const [isSelected, setIsSelected] = useState(languages.map(() => false));

  // Al click del bottone riporto su false tutti i valori che indicano quale elemento è selezionato e setto a true solo quello all'indice corrispondente
  const buttonClickHandler = (index) => {
    const newSelection = isSelected.map(() => false);
    newSelection[index] = !isSelected[index];
    setIsSelected(newSelection);
  };

  return (
    <main>
      <div className="container">
        {/* BOTTONI */}
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

        {/* CARDS */}
        {isSelected.includes(true) ? (
          languages.map((language, index) => (
            <Card
              key={language.id}
              isSelected={isSelected[index]}
              title={language.title}
              description={language.description}
            ></Card>
          ))
        ) : (
          <h2 className="p-3">Nessun linguaggio selezionato</h2>
        )}
      </div>
    </main>
  );
}
