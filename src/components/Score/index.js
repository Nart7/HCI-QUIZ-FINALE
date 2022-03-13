import React, { useEffect, useState } from 'react';

import styles from './score.module.scss';


const initialStateOfQuestion = {
    questionText: '',
    answerOptions: [
        { answerText: '', isCorrect: true },
    ],
    description: ``
};

const Score = ({ score, questions = [], resetAll }) => {
    const [currentQustion, setCurrentQuestion] = useState(initialStateOfQuestion);
    const [nextQuestion, setNextQuestion] = useState(0);
    const [prevQuestion, setPrevQuestion] = useState(0);

    useEffect(() => {
        if (questions.length) setCurrentQuestion(questions[0]);
    }, [])

    const onNextQuestion = () => {
        const allQuestionsIndexs = questions.length ;
        const nextIndex = nextQuestion + 1;
        const prevIndex = nextIndex;
        if (nextIndex < allQuestionsIndexs) {

            if (nextIndex > allQuestionsIndexs) return;

            setNextQuestion(nextIndex)
            setPrevQuestion(prevIndex)
            setCurrentQuestion(questions[nextIndex])
        }
    };

    const onPreviousQuestion = () => {
        const allQuestionsIndexs = questions.length;
        if (prevQuestion > 0 && prevQuestion < allQuestionsIndexs) {
            setCurrentQuestion(questions[prevQuestion - 1])
            setPrevQuestion(prevQuestion - 1)
            setNextQuestion(nextQuestion - 1)
        }
    }
    


    return <div className={styles.container}>
        <div className={styles.scoreSection}>
            You scored {score* 10} out of {questions.length * 10}
        </div>

        <div  className={styles.questionDetailSection}>
            <h2>Question <span>{nextQuestion + 1}/10</span></h2>
            <h4>Question: <span>{currentQustion.questionText}</span></h4>
            <h4>Correct Answer: <span>{currentQustion.answerOptions.find(el => el.isCorrect).answerText}</span></h4>
            <h4>Description: </h4>
            <p>{currentQustion.description}</p>

            <div className={styles.buttonSection}>
                <button onClick={resetAll} className={styles.finishBtn}>Finish</button>
                <button onClick={onPreviousQuestion}>Previous Question</button>
                <button onClick={onNextQuestion}>Next Question</button>
            </div>
        </div>
    </div>
    
   ;
};

export default Score;
