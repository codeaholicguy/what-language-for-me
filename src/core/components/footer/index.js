import React, { Component } from 'react'
import Radium from 'radium'
import * as colors from 'material-ui/styles/colors'

const style = {
  footer: {
    position: 'fixed',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    bottom: 0,
    height: 40,
    width: '100%',
    backgroundColor: colors.white,
    zIndex: 5,
    '@media (max-width: 1024px)': {
      height: 80,
      fontSize: 40
    }
  },
  heart: {
    marginLeft: 5,
    marginRight: 5,
    color: colors.red600
  },
  link: {
    fontWeight: 600,
    textDecoration: 'none',
    marginLeft: 5,
    color: colors.cyan700
  }
}
@Radium
class Footer extends Component {
  render () {
    return (
      <div style={style.footer}>
        Made with <span style={style.heart}>♥</span> by
        <a style={style.link} href="https://codeaholicguy.com">
          Codeaholicguy
        </a>
      </div>
    )
  }
}
export default Footer
