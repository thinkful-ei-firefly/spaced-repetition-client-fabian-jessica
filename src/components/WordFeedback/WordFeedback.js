import React from 'react'
import './WordFeedback.css'
//import LanguageApiService  from '../../services/language-api-service'

class WordFeedback extends React.Component {
  state = {}

  render () {
    let feedbackHeader;
    if (this.props.feedback.isCorrect) feedbackHeader = 'You were correct! :D'
    else feedbackHeader = 'Good try, but not quite right :('

    return (
      <div className="word-answer-screen">
        <div className="word-feedback-card">
          <h2>{feedbackHeader}</h2>
          <div className="DisplayScore">
            <p >Your total score is: {this.props.feedback.totalScore}</p>
          </div>
          <div className="DisplayFeedback">
            <p>The correct translation for {this.props.feedback.current_word} was {this.props.feedback.answer} and you chose {this.props.feedback.input_word}!</p>
          </div>
          <button type="button" className="next-word-button" onClick={this.props.nextQuestion}>Try another word!</button>
        </div>
      </div>
    );
  }
}

//The correct translation for Testnextword was test-answer-from-correct-guess and you chose test-guess-incorrect!

export default WordFeedback
