import React, { useCallback, useRef, useState } from "react";
import HeadingContent from "../../layouts/components/HeadingContent";
import Crossword from "@jaredreisinger/react-crossword";

const data = {
  across: {
    3: {
      clue: "Elektroda yang sangat sukar bereaksi",
      answer: "INERT",
      row: 2,
      col: 4,
    },
    5: {
      clue: "Elektroda tempat terjadinya reaksi oksidasi",
      answer: "KATODA",
      row: 5,
      col: 4,
    },
    7: {
      clue: "Elektroda tempat terjadinya reaksi reduksi",
      answer: "ANODA",
      row: 8,
      col: 8,
    },
    9: {
      clue: "Sel elektrokimia yang mana energi listrik diubah menjadi energi kimia",
      answer: "ELEKTROLISIS",
      row: 10,
      col: 0,
    },
    10: {
      clue: "Hukum elektrolisis",
      answer: "FARADAY",
      row: 13,
      col: 0,
    },
    11: {
      clue: "Ion bermuatan positif",
      answer: "KATION",
      row: 13,
      col: 9,
    },
  },
  down: {
    1: {
      clue: "Terdiri dari anoda dan katoda",
      answer: "ELEKTRODA",
      row: 0,
      col: 13,
    },
    2: {
      clue: "Ion bermuatan negatif",
      answer: "ANION",
      row: 1,
      col: 5,
    },
    4: {
      clue: "Menerima elektron",
      answer: "OKSIDASI",
      row: 4,
      col: 8,
    },
    6: {
      clue: "Zat yang dapat menghantarkan listrik",
      answer: "ELEKTROLIT",
      row: 8,
      col: 2,
    },
    8: {
      clue: "Melepas elektron",
      answer: "REDUKSI",
      row: 8,
      col: 11,
    },
  },
};

const Latihan = () => {
  const crossword = useRef();

  const [messages, setMessages] = useState([]);

  const addMessage = useCallback((message) => {
    setMessages((m) => m.concat(`${message}\n`));
  }, []);

  const onCorrect = useCallback(
    (direction, number, answer) => {
      alert("onCorrect");
      addMessage(`onCorrect: "${direction}", "${number}", "${answer}"`);
    },
    [addMessage]
  );

  const onLoadedCorrect = useCallback(
    (answers) => {
      addMessage(
        `onLoadedCorrect:\n${answers
          .map(
            ([direction, number, answer]) =>
              `    - "${direction}", "${number}", "${answer}"`
          )
          .join("\n")}`
      );
    },
    [addMessage]
  );

  // onCrosswordCorrect is called with a truthy/falsy value.
  const onCrosswordCorrect = useCallback(
    (isCorrect) => {
      alert("nitin");
      addMessage(`onCrosswordCorrect: ${JSON.stringify(isCorrect)}`);
    },
    [addMessage]
  );

  // onCellChange is called with the row, column, and character.
  const onCellChange = useCallback(
    (row, col, char) => {
      addMessage(`onCellChange: "${row}", "${col}", "${char}"`);
    },
    [addMessage]
  );

  // if (crossword.isCorrect) {
  //   alert("correct");
  // } else {
  //   console.log(crossword.isCorrect);
  //   console.log("incorrect");
  // }

  return (
    <div>
      <HeadingContent title="Latihan" />

      <div className="main-content">
        <Crossword
          data={data}
          ref={crossword}
          onCorrect={onCorrect}
          onLoadedCorrect={onLoadedCorrect}
          onCrosswordCorrect={onCrosswordCorrect}
          onCellChange={onCellChange}
          acrossLabel="Mendatar"
          downLabel="Menurun"
        />

        <pre>{messages}</pre>
      </div>
    </div>
  );
};

export default Latihan;
