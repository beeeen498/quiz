import React, { useState, useEffect } from 'react';
import "./Game.css";
import TechServiceEngineerQuiz from '../../../data/TechServiceEngineerQuiz';

function Game() {
    // Initialize the state for tracking the current question, answers, and wrong answers
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(null);
    const [wrongAnswers, setWrongAnswers] = useState([]);
    const [answeredQuestions, setAnsweredQuestions] = useState([]); // To track answered questions
    const [isGameOver, setGameOver] = useState(false);
    const [score, setScore] = useState(0); // Track score in state
    const [currentAnswer, setCurrentAnswer] = useState(""); // Track input for open-ended questions
    const numOfQuestions = TechServiceEngineerQuiz.questions.length;
    console.log(numOfQuestions);

    // Shuffle the questions initially and pick the first random question
    const shuffleQuestions = () => {
        const randomIndex = Math.floor(Math.random() * TechServiceEngineerQuiz.questions.length);
        return randomIndex;
    };

    const getNextQuestion = () => {
        console.log("Answered Questions:", answeredQuestions.length, "Total Questions:", numOfQuestions);

        if (answeredQuestions.length === numOfQuestions) {
            // All questions have been answered, game is over
            setGameOver(true);
            return;
        }

        let randomIndex = shuffleQuestions();

        // Ensure the new question is not repeated
        while (answeredQuestions.includes(randomIndex)) {
            randomIndex = shuffleQuestions();
        }

        // Update the current question index
        setCurrentQuestionIndex(randomIndex);
        setAnsweredQuestions(prevAnsweredQuestions => [...prevAnsweredQuestions, randomIndex]);
    };

    const handleAnswer = (selectedAnswer) => {
        const correctAnswer = TechServiceEngineerQuiz.questions[currentQuestionIndex].correctAnswer;
        if (selectedAnswer !== correctAnswer) {
            // If the answer is wrong, add the question to the wrongAnswers array
            setWrongAnswers(prevWrongAnswers => [
                ...prevWrongAnswers,
                {
                    question: TechServiceEngineerQuiz.questions[currentQuestionIndex].question,
                    userAnswer: selectedAnswer,
                    correctAnswer: correctAnswer,
                }
            ]);
        } else if (selectedAnswer === correctAnswer) {
            // Update score if answer is correct
            setScore(prevScore => prevScore + 1);
        }

        // Move to the next random question
        getNextQuestion();

        // Reset the current answer for the next question
        setCurrentAnswer("");
    };

    // Initialize the game by picking the first random question
    useEffect(() => {
        getNextQuestion();
    }, []);

    // Get current question data
    const currentQuestion = TechServiceEngineerQuiz.questions[currentQuestionIndex];

    // Handle the case where there might not be options (for open-ended questions)
    const options = currentQuestion && currentQuestion.options ? [...currentQuestion.options] : [];

    // Randomize the options order for multiple-choice questions
    const shuffleOptions = () => {
        return [...options].sort(() => Math.random() - 0.5);
    };

    // Restart the game
    const restartGame = () => {
        // Reset the game state properly
        setWrongAnswers([]);
        setAnsweredQuestions([]);
        setScore(0); // Reset score
        setGameOver(false); // Reset game over state
        getNextQuestion(); // Start a new game
    };

    // Quit the game
    const quitGame = () => {
        setGameOver(true);
    };

    return (
        <div className='gameDiv'>
            {isGameOver ? (
                // Game Over Screen
                <div className="gameOver">
                    <div className="gameOverInfo">
                        <h2>Game Over</h2>
                        <h3>Your wrong answers:</h3>

                        {/* listing wrong answers */}
                        {wrongAnswers.length > 0 ? (
                            <div>
                                {wrongAnswers.map((wrongAnswer, index) => (
                                    <div key={index} className="wrongAnswer">
                                        <p><strong>Question:</strong> {wrongAnswer.question}</p>
                                        <p><strong>Your Answer:</strong> {wrongAnswer.userAnswer}</p>
                                        <p><strong>Correct Answer:</strong> {wrongAnswer.correctAnswer}</p>
                                        <hr />
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <p>No wrong answers, great job!</p>
                        )}

                        {/* score */}
                        <h3 className='scoreDisplay'>SCORE: {score}</h3>
                    </div>

                    {/* Restart Game Button */}
                    <div className="restartGameDiv">
                        <button className="stylizedButton" onClick={restartGame}>Restart Game</button>
                    </div>
                </div>
            ) : (
                // Active Game Screen
                currentQuestion ? (
                    <>
                        {/* Question Display */}
                        <div className="questionDiv">
                            <h2 className='question'>{currentQuestion.question}</h2>
                        </div>

                        {/* Answers Section */}
                        <div className="answers">
                            {/* Check if options exist */}
                            {currentQuestion.options ? (
                                shuffleOptions().map((option, index) => (
                                    <button 
                                        key={index} 
                                        className='stylizedButton' 
                                        onClick={() => handleAnswer(option)}
                                    >
                                        {option}
                                    </button>
                                ))
                            ) : (
                                // Open-ended question input with "SEND" button
                                <div className='openEndedQuestionsDiv'>
                                    <input
                                        type="text"
                                        placeholder="Answer"
                                        value={currentAnswer}  // bind to state
                                        onChange={(e) => setCurrentAnswer(e.target.value)} // update input value
                                        className='openQuestionInput'
                                    />
                                    
                                    <button 
                                        onClick={() => handleAnswer(currentAnswer)} 
                                        className="sendButton"
                                    >
                                        SEND
                                    </button>
                                </div>
                            )}
                        </div>

                        {/* Quit button visible at all times */}
                        <div className="quitGame">
                            <button className="quitGameButton stylizedButton" onClick={quitGame}>Quit</button>
                        </div>
                    </>
                ) : (
                    <p>No questions available. Please check the quiz data!</p> 
                )
            )}
        </div>
    );
}

export default Game;
