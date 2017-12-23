import React from 'react'
import PropTypes from 'prop-types'

const QuoteText = (props) => (
  <div className='quote'>
    <div className='quote-open'>“</div>
    <div className='quote-close'>”</div>
    <div className='quote-text'>
      {props.quote.text}
    </div>
    <div className='quote-author'>
      <em>— {props.quote.author}</em>
    </div>
  </div>
)

QuoteText.propTypes = {
  quote: PropTypes.object.isRequired
}

export default QuoteText
