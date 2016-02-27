/* Seed data for bootstraping app */

const FACEBOOK = {
  id: 1,
  logo: 'img/facebook.jpg',
  meta: {}
}

const GOOGLE = {
  id: 2,
  logo: 'img/google.jpg',
  meta: {}
}

const FB_GOOGLE_PAIR = {
  id: 1,
  left_id: FACEBOOK.id,
  right_id: GOOGLE.id,
  left_votes: 0,
  right_votes: 0
}

const companies = {
  [FACEBOOK.id]: FACEBOOK,
  [GOOGLE.id]: GOOGLE
}

const pairs = {
  [FB_GOOGLE_PAIR.id]: FB_GOOGLE_PAIR
}

const data = {
  companies,
  pairs
}

export default data
