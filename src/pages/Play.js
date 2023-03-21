import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Button from '../components/Button';
import Header from '../components/Header';
import { TOKEN_KEY } from '../utils/tokenFunctions';

class Play extends Component {
  state = {
    questions: [],
    counter: 0,
    isLoading: true,
    index: 0,
    timer: 30,
    showAlternatives: true,
  };

  async componentDidMount() {
    const token = localStorage.getItem(TOKEN_KEY);
    const endpointTrivia = `https://opentdb.com/api.php?amount=5&token=${token}`;
    const response = await fetch(endpointTrivia);
    const triviaData = await response.json();
    if (triviaData.response_code !== 0) {
      const { history } = this.props;
      localStorage.removeItem(TOKEN_KEY);
      history.push('/');
    }
    this.setState({ questions: triviaData.results, isLoading: false });

    // Implemnetação do Timer
    const oneSecondInterval = 1000;
    const intervalMax = 30000;

    const interval = setInterval(() => {
      this.setState((prevState) => ({
        timer: prevState.timer - 1,
      }));
    }, oneSecondInterval);

    setTimeout(() => {
      this.setState({ showAlternatives: false });
      clearInterval(interval);
    }, intervalMax);
  }

  shuffleAnswers = (question) => {
    const correctAnswer = question.correct_answer;
    const incorrectAnswers = question.incorrect_answers;
    const allAnswers = [...incorrectAnswers, correctAnswer];
    console.log(allAnswers);
    const shuffledAnswers = allAnswers
      .map((value) => ({ value, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ value }) => value);
    return shuffledAnswers;
  };

  handleCorrectClick = () => {
    this.setState((current) => ({ counter: current.counter + 1 }));
  };

  handleWrongClick = () => {
    this.setState((current) => (
      { counter: current.counter + 1,
        index: current.index + 1 }
    ));
  };

  render() {
    const { questions, counter, isLoading, index, showAlternatives, timer } = this.state;
    const loadingText = (
      <h3>Carregando...</h3>
    );

    return (
      <div>
        <Header />
        { isLoading
          ? loadingText
          : (
            <div>
              <h3 data-testid="question-category">
                { questions[counter].category }
              </h3>
              <p data-testid="question-text">
                { questions[counter].question }
              </p>
              {
                showAlternatives
                && <p>{ timer }</p>
              }
              <div data-testid="answer-options">
                { this.shuffleAnswers(questions[counter]).map((answer, i) => {
                  if (answer === questions[counter].correct_answer) {
                    return (
                      <Button
                        key={ i }
                        id="correct-answer"
                        label={ answer }
                        onClick={ this.handleCorrectClick }
                        disabled={ !showAlternatives }

                      />
                    );
                  }
                  return (
                    <Button
                      key={ i }
                      id={ `wrong-answer-${index}` }
                      label={ answer }
                      onClick={ this.handleWrongClick }
                      disabled={ !showAlternatives }
                    />
                  );
                })}
              </div>
            </div>
          )}
      </div>
    );
  }
}

Play.propTypes = {
  history: PropTypes.shape({ push: PropTypes.func }).isRequired,
};

export default Play;
