/* App component
 * Top-level component for rendering the React App
 */
import _ from 'lodash'
import React, { Component } from 'react'

import { seed } from '../../server/data'

export default class App extends Component {

  /* ----------------- Life-Cycle Methods ----------------- */
  state = {
    companies: seed.companies,
    pairs: seed.pairs,
    pair: {},
    left: {},
    right: {}
  }

  componentDidMount () {
    let pair = this.selectPair(this.state.pairs)
    let left = this.getLeft(pair, this.state.companies)
    let right = this.getRight(pair, this.state.companies)
    this.setState({ pair, left, right })
  }

  render () {
    let leftVotes = parseInt(this.state.pair['left_votes'])
    let rightVotes = parseInt(this.state.pair['right_votes'])
    let leftPercent = _.round(100 * (leftVotes / ( leftVotes + rightVotes ) || 0))
    let rightPercent = _.round(100 * (rightVotes / ( leftVotes + rightVotes ) || 0))

    return (
      <div className='container'>
        <div className='header'>
          Which would you rather work at...
        </div>
        <div className='companies-container clearfix'>
          <div className='company-1'>
            <img className='company-logo'
              data-side='left'
              src={this.state.left['logo']}
              onClick={this.handleVote} />
            <div className='company-stats'>
              Votes: { this.state.pair['left_votes'] }<br/>
              Percentage: {leftPercent}%
            </div>
          </div>
          <div className='company-2'>
            <img className='company-logo'
              data-side='right'
              src={this.state.right['logo']}
              onClick={this.handleVote} />
            <div className='company-stats'>
              Votes: { this.state.pair['right_votes'] }<br/>
              Percentage: {rightPercent}%
            </div>
          </div>
        </div>
        <button className='next-button'>Another!</button>
      </div>
    )
  }

  /* ------------------- Utility Methods ------------------ */
  calculatePercent = (pair, side) => {
    let num = side === 'left' ? pair.left_votes : pair.right_votes
    let den = pair.left_votes + pair.right_votes
    return num / den
  };

  getLeft = (pair, companies) => {
    let company_idx = pair.left_id
    return companies[company_idx]
  };

  getRight = (pair, companies) => {
    let company_idx = pair.right_id
    return companies[company_idx]
  };

  selectPair = (pairs) => {
    let numPairs = Object.keys(pairs).length
    let idx = _.random(1, numPairs)
    return pairs[idx]
  };

  /* ------------------- Event Handlers ------------------- */
  handleVote = (e) => {
    e.preventDefault()
    let side = e.target.getAttribute('data-side')
    let pairClone = _.cloneDeep(this.state.pair)
    side === 'left' ? pairClone.left_votes += 1 : pairClone.right_votes += 1
    this.setState({ pair: pairClone })
  };

}
