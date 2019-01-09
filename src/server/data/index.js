/* Exports logic for bootstraping and interacting with our datastores. */
import bootstrap from './bootstrap'
import seed from './seed'
import { MemoryStore, MongoStore } from './stores'

export { bootstrap, seed, MemoryStore }
