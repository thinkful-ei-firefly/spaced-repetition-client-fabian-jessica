import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Dashboard extends Component {
  state = { hasError: false }

  getLanguageData = () => {
    console.log('Trying to fetch from the API....')
    //API fetch data on words
  }

  componentDidMount () {
    this.getLanguageData();
    //On mount, get data, then update state/context
  }


  render () {
    return (
      <div>
        <h2>Your languages: Italian</h2>
        <Link to='/learn'>Start Practicing!</Link>
        <h3>Words to Practice</h3>
        <ul>
          <li>Word1</li>
          <li>Word2</li>
          <li>Word3</li>
          <li>...</li>
        </ul>
        <h2>Correct Answer Count: (numCorrect)</h2>
        <h2>Incorrect Answer Count: (numIncorrect)</h2>
        <h2>Total Score: (numCorrect) / (numCorrect + numIncorrect)</h2>
      </div>
    );
  }
}

export default Dashboard