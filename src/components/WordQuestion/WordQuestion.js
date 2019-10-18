import React from 'react'
import './WordQuestion.css'
import LanguageApiService  from '../../services/language-api-service'
import WordFeedback from '../WordFeedback/WordFeedback'

class WordQuestion extends React.Component {
  state = {
    word: {},
    answered: false,
    feedback: {},
    error: null
  }

  handleFormSubmit = async (ev) => {
    try{
      ev.preventDefault();
      const guess = ev.target['learn-guess-input']
      const res = await LanguageApiService.setGuess(guess.value)
      this.setState({
        answered: true,
        word: res,
        feedback: {
          ...res,
          current_word: this.state.word.nextWord,
          input_word: guess.value,
        }
      })
    }catch(e){
      if (e.error && e.error==='Unauthorized request'){
        this.props.history.push(`/login`)
      }else if (e.error){
        this.setState({ error: e.error })
      }else{
        this.setState({ error: 'You got error connection!' })
      }
    }
  }

  getHeadWord = async () => {
    try{
      const word = await LanguageApiService.getHead()

      this.setState({
        word,
        error: null
      })
    }catch(e){
      if (e.error && e.error==='Unauthorized request'){
        this.props.history.push(`/login`)
      }else if (e.error){
        this.setState({ error: e.error })
      }else{
        this.setState({ error: 'You got error connection!' })
      }
    }
  }

  nextQuestion = () => {
      this.setState({
        answered: false
      })
  }

  componentDidMount(){
    this.getHeadWord();
  }

  render() {
    const { error } = this.state
    const { nextWord, totalScore, wordCorrectCount, wordIncorrectCount } = this.state.word;
    let difficulty = 'normal'
    const correctRatio = (wordCorrectCount + 1) / (wordIncorrectCount + 1)
    if (correctRatio > 3) difficulty = 'easy'
    if (correctRatio < 0.6) difficulty = 'hard'

    return (<div>
        <div role='alert'>
          {error && <p className='error-message'>{error}</p>}
        </div>
      {!this.state.answered ?
        <div className="word-question-screen">
          <div className={`word-question-flashcard difficulty-${difficulty}`}>
            <h2>Translate the word:</h2>
            <span className="guess-word">{nextWord}</span>
            <form onSubmit={ev => this.handleFormSubmit(ev)}>
              <label htmlFor="learn-guess-input" className="guess-label">What's the translation for this word?</label>
              <input type="text" id="learn-guess-input" className="guess" maxlength="20" required></input>
              <button type="submit" className="guess-submit">Submit your answer</button>
            </form>
            <p className="DisplayScore">Your total score is: {totalScore}</p>
            <p>You have answered this word correctly {(wordCorrectCount)} times.</p>
            <p>You have answered this word incorrectly {(wordIncorrectCount)} times.</p>

          </div>
        </div>

        :

        <WordFeedback feedback={this.state.feedback} nextQuestion={this.nextQuestion} difficulty={difficulty} />
      }
      </div>
    );
  }
}

export default WordQuestion
