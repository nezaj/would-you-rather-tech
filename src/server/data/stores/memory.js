/* In-memory datastore implementation */
import _ from 'lodash'

import StoreInterface from './interface'

export default class MemoryStore extends StoreInterface {
  constructor () {
    super()
    this.name = 'MemoryStore'
    this.data = {}
  }

  getData () {
    return this.data
  }

  getCompanies () {
    return this.data['companies']
  }

  getPairs () {
    return this.data['pairs']
  }

  updatePair (id, params) {
    let pair = this.getPairs()[id]
    if (pair) {
      return _.extend(pair, params)
    }
  }
}
