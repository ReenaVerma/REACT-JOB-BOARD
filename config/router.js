const router = require('express').Router();
const jobs = require('../controllers/jobsapi');


router.route('/jobresults')
  .get(jobs.index);

module.exports = router;
