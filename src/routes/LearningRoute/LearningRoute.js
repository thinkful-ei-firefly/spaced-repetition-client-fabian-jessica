import React, { Component } from 'react'
import WordQuestion from '../../components/WordQuestion/WordQuestion'
//import WordFeedback from '../../components/WordFeedback/WordFeedback'

class LearningRoute extends Component {
  render() {
    return (
      <section aria-live="polite">
        <WordQuestion />
      </section>
    );
  }
}

export default LearningRoute
