import React from 'react';

import styles from './questions.module.scss';
// import  './questions.module.scss';
const Questions = ({ currentQuestion, questions, handleAnswerOptionClick}) => {
    return <>
        <div className={styles.questionSection}>
            <div className={styles.questionCount}>
                <span>Question {currentQuestion + 1}</span>/{questions.length}
            </div>
            <div className={styles.questionText}>{questions[currentQuestion].questionText}</div>
        </div>
        <div className={styles.answerSection}>
            {questions[currentQuestion].answerOptions.map((answerOption) => (
                <button onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
            ))}
        </div>
    </>;
};

export default Questions;
