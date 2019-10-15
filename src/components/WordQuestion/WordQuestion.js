import React from 'react'
import './WordQuestion.css'
import DashboardApiService  from '../../services/dashboard-api-service'

class WordQuestion extends React.Component {
  state = {
    word: {}
  }

  handleFormSubmit = (ev) => {
    ev.preventDefault();
    console.log('checking your answer....')
  }

  getHeadWord = async () => {
    try{
      const word = await DashboardApiService.getHead()

      this.setState({
        word,
        error: null
      })
    }catch(e){
      console.log('error', e.error);
      if (e.error && e.error==='Unauthorized request'){
        this.props.history.push(`/login`)
      }else if (e.error){
        this.setState({ error: e.error })
      }else{
        this.setState({ error: 'You got error!' })
      }
    }
  }

  componentDidMount(){
    this.getHeadWord();
  }

  render() {
    const { nextWord, totalScore, wordCorrectCount, wordIncorrectCount } = this.state.word;
    let difficulty = 'normal'
    const correctRatio = (wordCorrectCount + 1) / (wordIncorrectCount + 1)
    if (correctRatio > 2) difficulty = 'easy'
    if (correctRatio < 0.5) difficulty = 'hard'

    return (
      <div className="word-question-screen">
      <div className={`word-question-flashcard difficulty-${difficulty}`}>
        <h2>Translate the word:</h2>
        <span className="guess-word">{nextWord}</span>
        <form onSubmit={ev => this.handleFormSubmit(ev)}>
          <label htmlFor="learn-guess-input" className="guess-label">What's the translation for this word?</label>
          <input type="text" id="learn-guess-input" className="guess" required></input>
          <button type="submit" className="guess-submit">Submit your answer</button>
        </form>
        <p className="DisplayScore">Your total score is: {totalScore}</p>
        <p>You have answered this word correctly {(wordCorrectCount)} times.</p>
        <p>You have answered this word incorrectly {(wordIncorrectCount)} times.</p>

      </div>
      </div>
    );
  }
}

export default WordQuestion
