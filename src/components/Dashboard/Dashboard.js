import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import DashboardApiService  from '../../services/dashboard-api-service'
import './Dashboard.css'

class Dashboard extends Component {
  state = { 
    hasError: false,
    language_name: 'Loading...',
    total_score: 'Loading...',
    words: []
  }

  getLanguageData = async () => {
    //fetch language data from the API and update state
    const data = await DashboardApiService.getLanguage()
    const language_name = data.language.name;
    const total_score = data.language.total_score;
    const words = data.words;

    this.setState({
      language_name,
      total_score,
      words
    })
  }

  componentDidMount () {
    this.getLanguageData();
    //On mount, get data, then update state/context
  }


  render () {

    const wordList = this.state.words.map(word => {
      let difficulty = 'normal'
      const correctRate = (word.correct_count + 1) / (word.incorrect_count + 1)
      if (correctRate > 2) difficulty = 'easy'
      if (correctRate < .5) difficulty = 'hard'
      return (
        <li key={word.id} className={`dashboard-vocab-word difficulty-${difficulty}`}>
          <h4>{word.original}</h4>
          <p className="vocab-word-translation">{word.translation}</p>
          <p className="vocab-word-score">correct answer count: {word.correct_count}  ||  incorrect answer count: {word.incorrect_count}</p>
        </li>
      )
    })

    return (
      <div className="dashboard-screen">
        <h2 className="dashboard-language-header">Your languages: {this.state.language_name}</h2>
        <Link to='/learn' className="dashboard-learning-button">Start practicing</Link>

        <h3 className="dashboard-vocab-header">Words to practice</h3>
        <ul className="dashboard-vocab-list">
          {wordList}
        </ul>

        <h2 className="dashboard-answer-display">Total correct answers: {this.state.total_score}</h2>
      </div>
    );
  }
}

export default Dashboard