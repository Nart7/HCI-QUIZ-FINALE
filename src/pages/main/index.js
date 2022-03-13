import React, { useState } from 'react';
import Questions from '../../components/Questions';
import Score from '../../components/Score';
import TransitionArray from '../../components/Transition';
import { questionsList } from '../../constants/questions';

import styles from './main.module.scss';


const Main = () => {
  const questions = questionsList;

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);
  const [isTestStart, setIsTestStart] = useState(false);

  const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  const resetAll = () => {
    setCurrentQuestion(0);
    setShowScore(false);
    setScore(0);
    setIsTestStart(false);
  }


  return <div className={styles.mainContainer}>
    {!isTestStart ?
      <div className={styles.headerContainer}>
        <div className={styles.head}>
          <TransitionArray />
          <h1 className={styles.headline}>HCI quiz</h1>
        </div>

        <h2 className={styles.about}>
          “Welcome to the HCI quiz! This quiz aims to develop your interaction with
          your computer through your environmental factors. You will be asked 10
          multiple choice questions about your environment, where we then mark you
          from a score out of 100. The better the score, the more comfortable you are
          behind your computer! To improve your comfort levels, simply read the
          improvements we give you as you progress through the quiz.”
        </h2>

        <button className={styles.startButton} onClick={() => setIsTestStart(true)}>Start quiz</button>
      </div>
      :
      <div className={styles.container}>
        <div className={styles.questionCotainer}>
          {showScore
            ? <Score score={score} questions={questions} resetAll={resetAll} />
            : <Questions currentQuestion={currentQuestion} questions={questions} handleAnswerOptionClick={handleAnswerOptionClick} />
          }
        </div>
      </div>
    }
  </div>;
};


export default Main;
