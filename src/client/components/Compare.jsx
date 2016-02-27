import _ from 'lodash'
import React, { Component, PropTypes } from 'react'

export default class Compare extends Component {
  static propTypes = {
    pair: PropTypes.object.isRequired,
    left: PropTypes.object.isRequired,
    right: PropTypes.object.isRequired,
    updateVote: PropTypes.func.isRequired
  }

  render () {
    let leftVotes = parseInt(this.props.pair['left_votes'], 10)
    let rightVotes = parseInt(this.props.pair['right_votes'], 10)
    let leftPercent = _.round(100 * (leftVotes / (leftVotes + rightVotes) || 0))
    let rightPercent = _.round(100 * (rightVotes / (leftVotes + rightVotes) || 0))

    return (
      <div className='container'>
        <div className='header'>
          Which would you rather work at...
        </div>
        <div className='companies-container clearfix'>

          <div className='company-1'>
            <img className='company-logo'
              data-side='left'
              src={this.props.left['logo']}
              onClick={this.props.updateVote} />
            <div className='company-stats'>
              Votes: { this.props.pair['left_votes'] }<br/>
              Percentage: {leftPercent}%
            </div>
          </div>

          <div className='company-2'>
            <img className='company-logo'
              data-side='right'
              src={this.props.right['logo']}
              onClick={this.props.updateVote} />
            <div className='company-stats'>
              Votes: { this.props.pair['right_votes'] }<br/>
              Percentage: {rightPercent}%
            </div>
          </div>

        </div>

        <button className='next-button'>Another!</button>
      </div>
    )
  }
}
