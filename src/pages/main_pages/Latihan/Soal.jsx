import React, { useState } from "react";
import HeadingContent from "../../../layouts/components/HeadingContent";

const questions = [
  {
    question: "Apa ibu kota Indonesia?",
    options: ["Jakarta", "Surabaya", "Bandung", "Yogyakarta"],
    correctAnswer: "Jakarta",
  },
  {
    question: "Berapa jumlah provinsi di Indonesia?",
    options: ["32", "33", "34", "35"],
    correctAnswer: "34",
  },
  {
    question: "Apa warna bendera Indonesia?",
    options: ["Merah-Putih", "Merah-Hijau", "Biru-Putih", "Kuning-Merah"],
    correctAnswer: "Merah-Putih",
  },
];

const Soal = () => {
  // const [currentQuestion, setCurrentQuestion] = useState(0);
  // const [score, setScore] = useState(0);
  // const [showResult, setShowResult] = useState(false);

  // const handleOptionClick = (selectedOption) => {
  //   if (selectedOption === questions[currentQuestion].correctAnswer) {
  //     setScore(score + 1);
  //   }

  //   if (currentQuestion + 1 < questions.length) {
  //     setCurrentQuestion(currentQuestion + 1);
  //   } else {
  //     setShowResult(true);
  //   }
  // };

  // const restartQuiz = () => {
  //   setCurrentQuestion(0);
  //   setScore(0);
  //   setShowResult(false);
  // };

  return (
    <div>
      <HeadingContent title="Latihan Soal" />

      <div className="main-content">
        <div className="question-wrap">
          <div className="no">
            <h3>1</h3>
          </div>
          <div className="question">
            {/* <img src="#" alt="" /> */}
            <p>
              Dalam suatu percobaan di Laboratorium, Andi dan Budi mengukur
              titik didih larutan, Andi melarutkan 18 gram glukosa (Mr = 180)
              dalam 500 gram airlalu dipanaskan. Budi melarutkan 5,85 gram NaCl
              (Mr = 58,5) dalam 500 gram air lalu dipanaskan. Suhu larutan
              diukur dengan menggunakan thermometer.
            </p>
          </div>
        </div>
        <div className="multiple-choice">
          <div className="choice-item">
            <span>A.</span>
            <p>(1), (2), dan (3)</p>
          </div>
          <div className="choice-item">
            <span>A.</span>
            <p>(1), (2), dan (3)</p>
          </div>
          <div className="choice-item">
            <span>A.</span>
            <p>(1), (2), dan (3)</p>
          </div>
          <div className="choice-item">
            <span>A.</span>
            <p>(1), (2), dan (3)</p>
          </div>
        </div>
        <div className="question-navigate">
          <button className="btn-green">Sebelumnya</button>
          <button className="btn-green">Berikutnya</button>
        </div>
      </div>
    </div>
  );
};

export default Soal;
