/* MongoDB datastore implementation */
import { Server, Db, BSONPure } from 'mongodb'
import StoreInterface from './interface'

export default class MongoStore extends StoreInterface {
  constructor (host='localhost',port=27017, name='would-you-rather',
               options={auto_reconnect:true}) {
    super()
    this.name = 'MongoStore'
    this.server = new Server(host, port, options)
    this.db = new Db(name, server)
  }

  /* Helper function for bootstraping store with data */
  populate (data) {
    this.db.collection('companies', function (err, collection) {
      collection.insert(data.companies, {safe: true},
                        function (err, result) {})
    })
  }

  /* Helper function for truncating data */
  truncate () {
    this.db.collection('companies')
    .deleteMany({}, function (err, reuslt) {})

    this.db.collection('pairs')
    .deleteMany({}, function (err, reuslt) {})
  }

  getCompanies () {
    this.db.collection('companies', function (err, collection) {
      return collection.find()
    })
  }
}
