import React from 'react'
import PropTypes from 'prop-types'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import QuotesDisplay from './QuotesDisplay'

const App = (props) => (
  <Router startingQuoteId={props.startingQuoteId}>
    <div>
      <Route
        path='/'
        startingQuoteId={props.startingQuoteId}
        render={(routeProps) => <QuotesDisplay {...props} {...routeProps} />}
      />
    </div>
  </Router>
)

App.propTypes = {
  startingQuoteId: PropTypes.number.isRequired
}

// You will need this on the bottom of each component file
// to make it available through ES6 'import' statements.

export default App
