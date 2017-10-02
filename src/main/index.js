import React, { Component } from 'react'
import { Router, browserHistory } from 'react-router'
import injectTapEventPlugin from 'react-tap-event-plugin'
import Helmet from 'react-helmet'

import createRoutes from './routes'
import Favicon from '../core/images/favicon.png'

injectTapEventPlugin()

export default class Main extends Component {
  componentWillMount () {
    this._routes = createRoutes()
  }

  render () {
    return (
      <div>
        <Helmet />
        <Helmet
          link={[
            { rel: 'shortcut icon', type: 'image/png', href: `${Favicon}` }
          ]}
        />
        <Router history={browserHistory} routes={this._routes} />
      </div>
    )
  }
}
