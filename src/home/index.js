import React, { Component } from 'react'
import { browserHistory } from 'react-router'
import RaisedButton from 'material-ui/RaisedButton'
import * as colors from 'material-ui/styles/colors'

const styles = {
  container: {
    display: 'flex',
    flexFlow: 'column',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    marginTop: 120,
    marginBottom: 80
  },
  background: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    zIndex: 0,
    opacity: 0.4,
    filter: 'blur(5px)',
    backgroundImage: `url(${require('../core/images/background.jpg')})`, // eslint-disable-line
    backgroundSize: 'cover'
  },
  headerWrapper: {
    display: 'flex',
    justifyContent: 'center',
    textAlign: 'center',
    padding: 20,
    zIndex: 1
  },
  header: {
    fontSize: 60,
    fontWeight: 500,
    color: colors.white,
    textShadow: `2px 2px ${colors.grey900}`
  },
  beginButtonWrapper: {
    display: 'flex',
    justifyContent: 'center',
    padding: 20
  },
  beginButton: {
    height: 80
  },
  beginLabel: {
    fontSize: 36,
    fontWeight: 100,
    marginLeft: 20,
    marginRight: 20
  },
  fbLike: {
    display: 'flex',
    justifyContent: 'center'
  }
}

export default class Home extends Component {
  _handleClicked () {
    browserHistory.push('/q')
  }

  render () {
    return (
      <div style={styles.container}>
        <div style={styles.background} />
        <div style={styles.headerWrapper}>
          <h1 style={styles.header}>Nên học ngôn ngữ lập trình nào bây giờ?</h1>
        </div>
        <div style={styles.beginButtonWrapper}>
          <RaisedButton
            primary
            label="Tìm câu trả lời"
            style={styles.beginButton}
            labelStyle={styles.beginLabel}
            onTouchTap={::this._handleClicked} // eslint-disable-line
          />
        </div>
        <div style={styles.fbLike}>
          <div className="fb-like" data-href="https://language.codeaholicguy.com" data-width="" data-layout="standard" data-action="like" data-size="large" data-share="true"></div>
        </div>
      </div>
    )
  }
}
