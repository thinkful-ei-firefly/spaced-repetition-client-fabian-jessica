import React from 'react'
import './WordFeedback.css'

class WordFeedback extends React.Component {
  state = {}

  goToNext = () => {
    console.log('next question!')
  }

  render () {
    let feedbackHeader;
    if (Math.random() < 0.5) feedbackHeader = 'You were correct! :D'
    else feedbackHeader = 'Good try, but not quite right :('

    return (
      <div className="word-answer-screen">
        <div className="word-feedback-card">
          <h2>{feedbackHeader}</h2>
          <p className="DisplayFeedback">The correct translation for (word) was (answer) and you chose (guess)!</p>
          <button type="button" className="next-word-button" onClick={this.goToNext}>Try another word!</button>
        </div>
      </div>
    );
  }
}

export default WordFeedback