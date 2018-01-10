import React, { Component } from 'react'
import Radium from 'radium'
import PropTypes from 'prop-types'
import * as colors from 'material-ui/styles/colors'
import RaisedButton from 'material-ui/RaisedButton'
import { Card, CardTitle, CardText, CardActions } from 'material-ui/Card'
import Replay from 'material-ui/svg-icons/av/replay'

class Result extends Component {
  static propTypes = {
    question: PropTypes.object.isRequired,
    onAgainButtonClicked: PropTypes.func.isRequired
  };

  render () {
    return (
      <div style={styles.cardWrapper}>
        <Card style={styles.card}>
          <CardTitle style={styles.cardTitle}>
            {this.props.question.item_keys.map((item, key) => (
              <img
                alt="language-logo"
                key={key}
                style={styles.languageLogo}
                src={require(`../core/images/icons/${item.replace(
                  /-/g,
                  '_'
                )}@2x.png`)}
              />
            ))}
          </CardTitle>
          <CardText style={styles.cardText}>
            {this.props.question.reason}
          </CardText>
          <CardActions style={styles.cardActions}>
            <div style={styles.buttonWrapper}>
              <RaisedButton
                label="Làm lại"
                icon={<Replay color={colors.black} />}
                style={styles.button}
                onTouchTap={this.props.onAgainButtonClicked}
              />
            </div>
          </CardActions>
        </Card>
      </div>
    )
  }
}

const styles = {
  cardWrapper: {
    display: 'flex',
    flexFlow: 'column',
    alignItems: 'center'
  },
  card: {
    width: '50%',
    '@media (maxWidth: 1024px)': {
      width: '90%'
    }
  },
  cardTitle: {
    display: 'flex',
    justifyContent: 'center'
  },
  languageLogo: {
    height: 80,
    padding: '0px 10px 0px 10px'
  },
  cardText: {
    backgroundColor: colors.cyan500,
    color: colors.white,
    fontSize: 20
  },
  cardActions: {
    backgroundColor: colors.cyan500
  },
  buttonWrapper: {
    display: 'flex',
    justifyContent: 'center'
  },
  button: {
    marginRight: 10
  }
}
export default Radium(Result);