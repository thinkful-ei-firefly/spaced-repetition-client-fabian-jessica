import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import DashboardApiService  from '../../services/dashboard-api-service'
import { WSAEPROVIDERFAILEDINIT } from 'constants'

class Dashboard extends Component {
  state = { 
    hasError: false,
    language_name: 'Loading...',
    total_score: 'Loading...',
    words: []
  }

  getLanguageData = async () => {
    //fetch language data from the API and update state
    console.log('Fetching from the API....')
    const data = await DashboardApiService.getLanguage()
    console.log(data);
    const language_name = data.language.name;
    const total_score = data.language.total_score;
    const words = data.words;

    console.log({
      language_name,
      total_score,
      words
    })
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
      return (
        <tr key={word.id}>
          <td>{word.original}</td>
          <td>{word.correct_count}</td>
          <td>{word.incorrect_count}</td>
        </tr>
      )
    })

    return (
      <div>
        <h2>Your languages: {this.state.language_name}</h2>
        <Link to='/learn'>Start Practicing!</Link>
        
        <h3>Words to Practice</h3>
        <table>
          <thead>
            <tr>
              <th>Word</th>
              <th>Correct</th>
              <th>Incorrect</th>
            </tr>
          </thead>
          <tbody>
            {wordList}
          </tbody>
        </table>

        <h2>Total Score: {this.state.total_score}</h2>
      </div>
    );
  }
}

export default Dashboard