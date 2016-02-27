/* Datastore implementations */
import _ from 'lodash'

/* Helper method for raising errors on stores that do not conform
 * to the interface
 */
function NotImplementedError (storeName, method) {
  return {
    'name': 'NotImplementedError',
    'message': `${method}() not implemented on ${storeName}`
  }
}

/* Interface which defines all the methods that should be available
 * on our stores
 */
export class StoreInterface {
  constructor () { this.name = 'StoreInterface' }

  getData () {
    throw NotImplementedError(this.name, 'getData')
  }

  getCompanies () {
    throw NotImplementedError(this.name, 'getCompanies')
  }
  getPairs () {
    throw NotImplementedError(this.name, 'getPairs')
  }
  updatePair () {
    throw NotImplementedError(this.name, 'getPairs')
  }
}

/* In-memory datastore */
export class MemoryStore extends StoreInterface {
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
