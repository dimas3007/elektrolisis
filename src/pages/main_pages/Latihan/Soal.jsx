import React, { useEffect, useState } from "react";
import HeadingContent from "../../../layouts/components/HeadingContent";
import Modal from "react-modal";
import { FaTimes } from "react-icons/fa";
import { FaRegFaceSmileWink } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import Comment from "../../../layouts/components/Comment";
import {
  addExerciseToFirestore,
  fetchExercises,
} from "../../../store/ExcercisesSlice";
import Back from "../../../layouts/components/Back";
import SoalLatihan from "../../../data/SoalLatihan";

const alphabets = "abcdefghijklmnopqrstuvwxyz".split("");

const Soal = () => {
  const dispatch = useDispatch();

  const [questions, setQuestions] = useState(SoalLatihan.soalData);

  const users = useSelector((state) => state.users.usersArray);

  let data = useSelector((state) => state.exercises.exercisesArray);
  const [modalIsOpen, setIsOpen] = useState(false);

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState(
    new Array(questions.length).fill(null)
  );

  const handleOptionClick = (selectedOption) => {
    console.log(selectedOption);
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

      const score = {
        user_id: users.uid,
        user: users.email,
        score:
          calculateScore() == 0
            ? "000"
            : ((100 / questions.length) * score).toFixed(1),
      };
      dispatch(addExerciseToFirestore(score));
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

  useEffect(() => {
    dispatch(fetchExercises(users.uid));
  }, [dispatch]);

  return (
    <div>
      <HeadingContent title="Latihan Soal" />

      <div className="main-content">
        <Back url={"/latihan"} page={"Latihan"} />
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
                      <p
                        dangerouslySetInnerHTML={{
                          __html: index + 1 + ". " + question.question,
                        }}
                      />
                      {question.sub
                        ? question.sub.map((sub, item) => (
                            <p
                              className="sub-quest-result"
                              dangerouslySetInnerHTML={{
                                __html: item + 1 + ". " + sub,
                              }}
                            />
                          ))
                        : ""}
                      {question.question_addon ? (
                        <p
                          className="sub-quest-result"
                          dangerouslySetInnerHTML={{
                            __html: question.question_addon,
                          }}
                        />
                      ) : (
                        ""
                      )}
                      <p>
                        Jawaban Anda:{" "}
                        <span
                          dangerouslySetInnerHTML={{
                            __html: selectedOptions[index],
                          }}
                          className="result-answer"
                        />
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
                {questions[currentQuestion].img ? (
                  <img src={questions[currentQuestion].img} alt="" />
                ) : (
                  ""
                )}

                <p
                  dangerouslySetInnerHTML={{
                    __html: questions[currentQuestion].question,
                  }}
                />
                <div>
                  {questions[currentQuestion].sub.length
                    ? questions[currentQuestion].sub.map((sub, index) => (
                        <div className="sub-question">
                          <span
                            dangerouslySetInnerHTML={{
                              __html: index + 1 + ".",
                            }}
                          />
                          <p
                            dangerouslySetInnerHTML={{
                              __html: sub,
                            }}
                          />
                        </div>
                      ))
                    : ""}
                </div>
                {questions[currentQuestion]?.question_addon?.length ? (
                  <p
                    dangerouslySetInnerHTML={{
                      __html: questions[currentQuestion].question_addon,
                    }}
                  />
                ) : (
                  ""
                )}
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
                  <p
                    dangerouslySetInnerHTML={{
                      __html: option,
                    }}
                  />
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
