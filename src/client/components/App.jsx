/* App component
 * Top-level component for rendering the React App
 */
import _ from 'lodash'
import React, { Component } from 'react'
import request from 'superagent'

import Compare from './Compare'

export default class App extends Component {

  /* ----------------- Life-Cycle Methods ----------------- */
  state = {
    companies: {},
    pairs: {},
    currentPair: {}
  }

  componentDidMount () {
    let url = 'http://localhost:3000/api/data'
    this.fetchEntries = request.get(url, (err, res) => {
      if (err) { console.log('ERROR') } // XXX: Properly handle this later
      let data = res.body
      let currentPair = this.selectPair(data.pairs)
      this.setState({
        companies: data.companies,
        pairs: data.pairs,
        currentPair: currentPair
      })
    })
  }

  render () {
    if (_.isEmpty(this.state.currentPair)) {
      return <div/>
    }

    let left = this.getLeft(this.state.currentPair, this.state.companies)
    let right = this.getRight(this.state.currentPair, this.state.companies)

    return (
      <Compare pair={this.state.currentPair} left={left} right={right}
        updateVote={this.updateVote} />
    )
  }

  /* ------------------- Utility Methods ------------------ */
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
  updateVote = (e) => {
    e.preventDefault()
    let side = e.target.getAttribute('data-side')
    let pairClone = _.cloneDeep(this.state.currentPair)
    side === 'left' ? pairClone.left_votes += 1 : pairClone.right_votes += 1
    this.setState({ currentPair: pairClone })
  };

}
