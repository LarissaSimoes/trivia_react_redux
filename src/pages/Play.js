import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Button from '../components/Button';
import Header from '../components/Header';
import { TOKEN_KEY } from '../utils/tokenFunctions';

class Play extends Component {
  state = { questions: [] };

  async componentDidMount() {
    const token = localStorage.getItem(TOKEN_KEY);
    if (token) {
      const endpointTrivia = `https://opentdb.com/api.php?amount=5&token=${token}`;
      const response = await fetch(endpointTrivia);
      const triviaData = await response.json();
      if (triviaData.response_code !== 0) {
        const { history } = this.props;
        localStorage.removeItem(TOKEN_KEY);
        history.push('/');
      }
      this.setState({ questions: triviaData.results });
    }
  }

  render() {
    const { questions } = this.state;
    if (questions.length > 0) {
      const correctAnswer = questions[0].correct_answer;
      const incorrectAnswers = questions[0].incorrect_answers;
      const allAnswers = [...incorrectAnswers, correctAnswer];
      console.log(allAnswers);
      const shuffledAnswers = allAnswers
        .map((value) => ({ value, sort: Math.random() }))
        .sort((a, b) => a.sort - b.sort)
        .map(({ value }) => value);

      const xablau = shuffledAnswers.map((question, index) => {
        if (question === questions[0].correct_answer) {
          return (
            <Button
              key={ question }
              data-testid="correct-answer"
              label={ question }
            />
          );
        }
        return (
          <Button
            key={ question }
            data-testid={ `wrong-answer-${index}` }
            label={ question }
          />
        );
      });
      console.log(shuffledAnswers);
    }

    return (
      <div>
        <Header />
        <h3 data-testid="question-category">
          {questions.length > 0 && questions[0].category}
        </h3>
        <p data-testid="question-text">
          {questions.length > 0 && questions[0].question}
        </p>
      </div>
    );
  }
}

Play.propTypes = {
  history: PropTypes.shape({ push: PropTypes.func }).isRequired,
};

export default Play;
