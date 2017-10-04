import React, { Component } from 'react'
import Radium from 'radium'
import * as colors from 'material-ui/styles/colors'

import Answer from './answer'
import Result from './result'

class Question extends Component {
  componentWillMount () {
    this.setState({
      currentQuestion: window.question
    })
  }

  _handleAnswerClicked (question, code) {
    return () => {
      this.setState({
        currentQuestion: question,
        code
      })
    }
  }

  _handleAgainClicked = () => {
    this.setState({
      currentQuestion: window.question
    })
  }

  render () {
    const currentQuestion = this.state.currentQuestion
    const question = currentQuestion.question_string
    const answers = currentQuestion.children
    const title =
      answers.length > 0
        ? currentQuestion.item_string
        : 'Đây chính là ngôn ngữ lập trình dành cho bạn'
    const language = currentQuestion.children.length === 0

    return (
      <div style={styles.container}>
        {title && (
          <div style={styles.titleWrapper}>
            <h3 style={styles.title}>{title}</h3>
          </div>
        )}
        <div style={styles.questionWrapper}>
          <h1 style={styles.question}>{question}</h1>
        </div>
        <div style={styles.answersWrapper}>
          {answers.map((item, key) => (
            <Answer
              key={key}
              answer={item}
              code={this.state.code}
              onTouchTap={this._handleAnswerClicked(item, item.code_children)}
            />
          ))}
        </div>
        {language && (
          <Result
            question={this.state.currentQuestion}
            onAgainButtonClicked={this._handleAgainClicked}
          />
        )}
      </div>
    )
  }
}

const styles = {
  container: {
    display: 'flex',
    flexFlow: 'column',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    marginTop: 120,
    marginBottom: 40,
    '@media (max-width: 1024px)': {
      marginBottom: 80
    }
  },
  titleWrapper: {
    display: 'flex',
    justifyContent: 'center'
  },
  title: {
    fontSize: 24,
    fontWeight: 500,
    color: colors.white,
    backgroundColor: colors.cyan500,
    padding: '5px 30px 5px 30px',
    borderRadius: 20,
    '@media (max-width: 1024px)': {
      fontSize: 36
    }
  },
  questionWrapper: {
    display: 'flex',
    justifyContent: 'center',
    textAlign: 'center',
    padding: 20,
    zIndex: 1
  },
  question: {
    fontSize: 60,
    fontWeight: 500,
    color: colors.white,
    textShadow: `2px 2px ${colors.grey900}`
  },
  answersWrapper: {
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
    '@media (max-width: 1024px)': {
      display: 'block'
    }
  }
}

export default Radium(Question);
