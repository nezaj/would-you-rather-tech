/* Use this module to bootstrap stores with sample data -- useful for dev */
import { UnsupportedStoreError } from '../errors'

function bootstrap (store_type, store, seed) {
  if (store_type === 'memory') {
    bootstrapMemory(store, seed)
  } else {
    throw UnsupportedStoreError(store_type)
  }
}

/* Bootstrap MemoryStore instance with seed data */
function bootstrapMemory (store, seed) {
  store.data = seed
}

export default bootstrap
