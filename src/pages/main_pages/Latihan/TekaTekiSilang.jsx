import React, { useCallback, useRef, useState } from "react";
import HeadingContent from "../../../layouts/components/HeadingContent";
import Crossword, { ThemeProvider } from "@jaredreisinger/react-crossword";
import Comment from "../../../layouts/components/Comment";

const data = {
  across: {
    3: {
      clue: "Terdiri dari anoda dan katoda",
      answer: "ELEKTRODA",
      row: 3,
      col: 11,
    },
    6: {
      clue: "Adanya interaksi antara elektroda dan bagian yang terdapat dalam reaksi elektroda",
      answer: "OVERPOTENSIAL",
      row: 6,
      col: 5,
    },
    8: {
      clue: "Tempat terjadinya oksidasi",
      answer: "KATODA",
      row: 9,
      col: 12,
    },
    10: {
      clue: "Ion bermuatan negatif",
      answer: "ANION",
      row: 11,
      col: 10,
    },
    11: {
      clue: "Ion bermuatan positif",
      answer: "KATION",
      row: 13,
      col: 7,
    },
    12: {
      clue: "Zat yang mudah menghantarkan energi listrik",
      answer: "ELEKTROLIT",
      row: 16,
      col: 1,
    },
  },
  down: {
    1: {
      clue: "Hukum elektrolisis",
      answer: "FARADAY",
      row: 1,
      col: 16,
    },
    2: {
      clue: "Sukar bereaksi",
      answer: "INERT",
      row: 3,
      col: 8,
    },
    4: {
      clue: "Tempat terjadinya reduksi",
      answer: "ANODA",
      row: 3,
      col: 19,
    },
    5: {
      clue: "Menerima elektron",
      answer: "REDUKSI",
      row: 5,
      col: 12,
    },
    7: {
      clue: "Melepas elektron",
      answer: "OKSIDASI",
      row: 6,
      col: 10,
    },
    9: {
      clue: "Sel elektrokimia yang mana energi listrik menjadi energi kimia",
      answer: "ELEKTROLISIS",
      row: 10,
      col: 7,
    },
  },
};

const TekaTekiSilang = () => {
  const crossword = useRef();

  const theme = {
    allowNonSquare: true,
    gridBackground: "#fffae8",
    cellBackground: "#ffffff",
    cellBorder: "#344972",
    textColor: "#344972",
    numberColor: "#344972",
    focusBackground: "#97b3ec",
    highlightBackground: "#bbd2ff",
  };

  const [messages, setMessages] = useState([]);

  const addMessage = useCallback((message) => {
    setMessages((m) => m.concat(`${message}\n`));
  }, []);

  const onCorrect = useCallback(
    (direction, number, answer) => {
      // alert("onCorrect");
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
      // alert("nitin");
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
      <HeadingContent title="Latihan Teka Teki Silang" />

      <div className="main-content">
        <ThemeProvider theme={theme}>
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
        </ThemeProvider>
        {/* <pre>{messages}</pre> */}
        <Comment />
      </div>
    </div>
  );
};

export default TekaTekiSilang;
