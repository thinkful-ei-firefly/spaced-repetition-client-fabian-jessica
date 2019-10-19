import React from 'react'
import './WordFeedback.css'
//import LanguageApiService  from '../../services/language-api-service'

class WordFeedback extends React.Component {
  state = {}

  render () {
    console.log(this.props.feedback);
    let feedbackHeader;
    let {wordCorrectCount, wordIncorrectCount}  = this.props.feedback.current_word
    if (this.props.feedback.isCorrect) {
      feedbackHeader = 'You were correct! :D'
      wordCorrectCount++
    }
    else {
      feedbackHeader = 'Good try, but not quite right :('
      wordIncorrectCount++
    }

    return (
      <div className="word-answer-screen">
        <div className={`word-feedback-card difficulty-${this.props.difficulty}`}>
          <h2>{feedbackHeader}</h2>
          <div className="DisplayScore">
            <p >Your total score is: {this.props.feedback.totalScore}</p>
          </div>
          <div className="DisplayFeedback">
            <p>The correct translation for {this.props.feedback.current_word.nextWord} was {this.props.feedback.answer} and you chose {this.props.feedback.input_word}!</p>
          </div>
          <button type="button" className="next-word-button" onClick={this.props.nextQuestion}>Try another word!</button>
          <p>You have answered this word correctly {wordCorrectCount} times.</p>
          <p>You have answered this word incorrectly {wordIncorrectCount} times.</p>
        </div>
      </div>
    );
  }
}

//The correct translation for Testnextword was test-answer-from-correct-guess and you chose test-guess-incorrect!

export default WordFeedback
