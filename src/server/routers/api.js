/* API Routes */
import express from 'express'

let router = express.Router()

/* --------- BEGIN Route declarations --------- */
router.get('/data', listData)
router.get('/companies', listCompanies)
router.get('/pairs', listPairs)

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

export default router
