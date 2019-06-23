const router = require('express').Router();

router.use('/summoner', require('./summoner'));

router.use((req, res, next) => {
  const error = new Error('API Not Found');
  error.status = 404;
  next(error);
});

module.exports = router;
