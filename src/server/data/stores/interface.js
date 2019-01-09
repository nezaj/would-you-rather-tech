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
export default class StoreInterface {
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
