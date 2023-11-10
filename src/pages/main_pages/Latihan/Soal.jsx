import React, { useState } from "react";
import HeadingContent from "../../../layouts/components/HeadingContent";
import Modal from "react-modal";
import { FaTimes } from "react-icons/fa";
import { FaRegFaceSmileWink } from "react-icons/fa6";
import Comment from "../../../layouts/components/Comment";

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

const alphabets = "abcdefghijklmnopqrstuvwxyz".split("");

const Soal = () => {
  const [modalIsOpen, setIsOpen] = useState(false);

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState(
    new Array(questions.length).fill(null)
  );

  const handleOptionClick = (selectedOption) => {
    const updatedSelectedOptions = [...selectedOptions];
    updatedSelectedOptions[currentQuestion] = selectedOption;
    setSelectedOptions(updatedSelectedOptions);
  };

  const goToPreviousQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const goToNextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setIsOpen(false);
      setShowResult(true);
      setScore(calculateScore());
    }
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowResult(false);
    setSelectedOptions(new Array(questions.length).fill(null));
  };

  const calculateScore = () => {
    let newScore = 0;
    for (let i = 0; i < questions.length; i++) {
      if (selectedOptions[i] === questions[i].correctAnswer) {
        newScore++;
      }
    }
    return newScore;
  };

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div>
      <HeadingContent title="Latihan Soal" />

      <div className="main-content">
        {showResult ? (
          <>
            <div className="result">
              <h2>
                Terima kasih telah melakukan latihan soal, <br /> berikut hasil
                akhir yang kamu raih <FaRegFaceSmileWink />
              </h2>
              <h1>
                {score == 0
                  ? "000"
                  : ((100 / questions.length) * score).toFixed(1)}
              </h1>
              <div>
                <p className="soal-benar">
                  Jumlah jawaban benar: <span>{score}</span>
                </p>
                <p className="soal-salah">
                  Jumlah jawaban salah: <span>{questions.length - score}</span>
                </p>
              </div>
              <div className="rincian-result">
                {questions.map((question, index) => (
                  <div key={index} className="rincian-item">
                    <div>
                      <p>
                        {index + 1}. {question.question}
                      </p>
                      <p>
                        Jawaban Anda:{" "}
                        <span className="result-answer">
                          {selectedOptions[index]}
                        </span>
                      </p>
                    </div>
                    <span
                      className={`result-status ${
                        selectedOptions[index] ===
                        questions[index].correctAnswer
                          ? "correct"
                          : "wrong"
                      }`}
                    >
                      {selectedOptions[index] === questions[index].correctAnswer
                        ? "Benar"
                        : "Salah"}
                    </span>
                  </div>
                ))}
              </div>

              <button onClick={restartQuiz} className="btn-green">
                Ulangi latihan soal
              </button>
            </div>
            <Comment page="latihan" />
          </>
        ) : (
          <>
            <div className="question-wrap">
              <div className="no">
                <h3>{currentQuestion + 1}</h3>
              </div>
              <div className="question">
                {/* <img src="#" alt="" /> */}
                <p>{questions[currentQuestion].question}</p>
              </div>
            </div>
            <div className="multiple-choice">
              {questions[currentQuestion].options.map((option, index) => (
                <div
                  className={`choice-item ${
                    selectedOptions[currentQuestion] === option ? "active" : ""
                  }`}
                  key={index}
                  onClick={() => handleOptionClick(option)}
                >
                  <span>{alphabets[index]}.</span>
                  <p>{option}</p>
                </div>
              ))}
            </div>
            <div className="question-navigate">
              <button
                className="btn-green"
                onClick={goToPreviousQuestion}
                disabled={currentQuestion === 0}
              >
                Sebelumnya
              </button>
              <button
                className="btn-green"
                onClick={
                  currentQuestion === questions.length - 1
                    ? openModal
                    : goToNextQuestion
                }
                disabled={showResult}
              >
                {currentQuestion === questions.length - 1
                  ? "Selesai"
                  : "Selanjutnya"}
              </button>
            </div>
          </>
        )}
      </div>

      <Modal isOpen={modalIsOpen} onRequestClose={closeModal}>
        <div className="modal-header">
          <h4>Konfirmasi Selesai</h4>
          <FaTimes onClick={closeModal} className="modal-close" />
        </div>
        <div className="modal-content">
          <h4>Apakah anda yakin akan menyelesaikan latihan soal ini?</h4>
        </div>
        <div className="modal-footer">
          <button className="btn-red" onClick={closeModal}>
            Cancel
          </button>
          <button className="btn-green" onClick={goToNextQuestion}>
            Selesai
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default Soal;
