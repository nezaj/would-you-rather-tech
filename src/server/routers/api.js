/* API Routes */
import express from 'express'

let router = express.Router()

/* --------- BEGIN Route declarations --------- */
router.get('/data', listData)
router.get('/companies', listCompanies)
router.get('/pairs', listPairs)
router.post('/pairs/:id', updatePair)

/* --------- BEGIN Route handlers --------- */
function listData (req, res) {
  let data = req.app.store.getData()
  res.json(data)
}

function listCompanies (req, res) {
  let companies = req.app.store.getCompanies()
  res.json(companies)
}

function listPairs (req, res) {
  let pairs = req.app.store.getPairs()
  res.json(pairs)
}

function updatePair (req, res) {
  let id = req.params.id
  let params = req.body
  let updated = req.app.store.updatePair(id, params)
  res.json(updated)
}

export default router
