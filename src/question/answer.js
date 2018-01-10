import React, { Component } from 'react'
import Radium from 'radium'
import PropTypes from 'prop-types';
import * as colors from 'material-ui/styles/colors'

const styles = {
  container: {
    display: 'inline-flex',
    flexFlow: 'column',
    alignItems: 'center',
    width: 420,
    cursor: 'pointer',
    '@media (max-width: 1024px)': {
      width: '40%',
      padding: '5%'
    }
  },
  iconWrapper: {
    height: 200
  },
  icon: {
    width: 150
  },
  iconHovered: {
    width: 150,
    paddingTop: 20,
    transitionDuration: '.2s',
    '@media (max-width: 1024px)': {
      paddingTop: 0
    }
  },
  code: {
    width: 400
  },
  answer: {
    fontSize: 18,
    color: colors.white,
    textAlign: 'center',
    '@media (max-width: 1024px)': {
      fontSize: 30
    }
  },
  answerHovered: {
    fontSize: 18,
    color: colors.white,
    textAlign: 'center',
    backgroundColor: colors.cyan500,
    padding: '0px 30px 0px 30px',
    borderRadius: 20,
    '@media (max-width: 1024px)': {
      fontSize: 30
    }
  }
}

class Answer extends Component {
  static propTypes = {
    answer: PropTypes.object.isRequired,
    onTouchTap: PropTypes.func,
    code: PropTypes.bool
  };

  constructor (props) {
    super(props)

    this.state = {
      hovered: false,
      image: require(`../core/images/icons/${props.answer.image}`)
    }
  }

  componentWillReceiveProps (nextProps) {
    this.setState({
      hovered: false,
      image: require(`../core/images/icons/${nextProps.answer.image}`)
    })
  }

  _handleMouseOver = () => {
    if (!this.state.hovered) this.setState({ hovered: true })
  }

  _handleMouseOut = () => {
    if (this.state.hovered) this.setState({ hovered: false })
  }

  render () {
    const answerStyle = this.state.hovered
      ? styles.answerHovered
      : styles.answer
    const imageStyle = this.props.code
      ? styles.code
      : this.state.hovered ? styles.iconHovered : styles.icon

    return (
      <div
        style={styles.container}
        onTouchTap={this.props.onTouchTap}
        onMouseOver={this._handleMouseOver}
        onMouseOut={this._handleMouseOut}
      >
        <div style={styles.iconWrapper}>
          <img alt="answer-logo" style={imageStyle} src={this.state.image} />
        </div>
        <div style={answerStyle}>{this.props.answer.item_string}</div>
      </div>
    )
  }
}
export default Radium(Answer);