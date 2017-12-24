import React from 'react'
import queryString from 'query-string'
import axios from 'axios'
import QuoteNavigation from './QuoteNavigation'
import QuoteText from './QuoteText'
import PropTypes from 'prop-types'

class QuotesDisplay extends React.Component {
  constructor () {
    super()
    this.state = {
      quote: {}
    }
  }

  fetchQuote (id) {
    // console.log('Fetch Quote:')
    axios.get(`api/quotes/${id}`)
      .then(response => {
        // console.log(response)
        this.setState({ quote: response.data })
      })
      .catch(error => {
        console.error(error)
        this.redirectToStartingQuote()
      })
  }

  setQuoteIdFromQueryString (qs) {
    this.qsParams = queryString.parse(qs)
    if (this.qsParams.quote) {
      // assign quote ID from the URLs query string
      this.quoteId = Number(this.qsParams.quote)
    } else {
      this.redirectToStartingQuote()
    }
  }

  redirectToStartingQuote () {
    this.quoteId = this.props.startingQuoteId
    this.props.history.push(`/?quote=${this.quoteId}`)
  }

  componentDidMount () {
    // console.log('Component Did Mount:')
    // console.log(this.props)
    this.setQuoteIdFromQueryString(this.props.location.search)
    this.fetchQuote(this.quoteId)
  }

  componentWillReceiveProps (nextProps) {
    // console.log('Component Will Receive Props:')
    // console.log(nextProps)
    this.setQuoteIdFromQueryString(nextProps.location.search)
    this.fetchQuote(this.quoteId)
  }

  render () {
    const quote = this.state.quote
    const nextQuoteId = quote.next_id
    const nextLink = `/?quote=${nextQuoteId}`
    const previousQuoteId = quote.previous_id
    const previousLink = `/?quote=${previousQuoteId}`

    return (
      <div className='quote-container'>
        { previousQuoteId &&
          < QuoteNavigation direction='previous' link={previousLink}/>
        }
        < QuoteText quote={this.state.quote} />
        { nextQuoteId &&
           < QuoteNavigation direction='next' link={nextLink} />
        }

      </div>
    )
  }
}

QuotesDisplay.propTypes = {
  startingQuoteId: PropTypes.string.isRequired,
  history: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired
};

export default QuotesDisplay
