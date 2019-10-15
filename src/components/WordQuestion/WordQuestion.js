import React from 'react'
import './WordQuestion.css'

class WordQuestion extends React.Component {
  
  handleFormSubmit = (ev) => {
    ev.preventDefault();
    console.log('checking your answer....')
  }

  render() {
    const numCorrect = Math.floor(Math.random() * 10)
    const numIncorrect = Math.floor(Math.random() * 10)
    let difficulty = 'normal'
    const correctRatio = (numCorrect + 1) / (numIncorrect + 1)
    if (correctRatio > 2) difficulty = 'easy'
    if (correctRatio < 0.5) difficulty = 'hard'

    return (
      <div className="word-question-screen">
      <div className={`word-question-flashcard difficulty-${difficulty}`}>
        <h2>Translate the word:</h2>
        <span className="guess-word">(Italian Word)</span>
        <form onSubmit={ev => this.handleFormSubmit(ev)}>
          <label htmlFor="learn-guess-input" className="guess-label">What's the translation for this word?</label>
          <input type="text" id="learn-guess-input" className="guess" required></input>
          <button type="submit" className="guess-submit">Submit your answer</button>
        </form>
        <p>You have answered this word correctly {(numCorrect)} times.</p>
        <p>You have answered this word incorrectly {(numIncorrect)} times.</p>
        <p className="DisplayScore">Your total score is: {numCorrect}</p>
      </div>
      </div>
    );
  }
}

export default WordQuestion