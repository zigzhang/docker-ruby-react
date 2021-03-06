import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const QuoteNavigation = (props) => {
  let element = null
  if (props.direction === 'previous') {
    element = (
      <Link className='link-previous' to={props.link}>
        <i className='fa fa-angle-left' aria-hidden='true'><span /></i>
      </Link>
    )
  } else {
    element = (
      <Link className='link-next' to={props.link}>
        <i className='fa fa-angle-right' aria-hidden='true'><span /></i>
      </Link>
    )
  }
  return element
}

QuoteNavigation.propTypes = {
  direction: PropTypes.string
}
export default QuoteNavigation
