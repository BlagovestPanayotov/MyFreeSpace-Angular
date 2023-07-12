const router = require('express').Router();

router.get('/', async (req, res) => {
  const users = {userName:"Banana"};
  res.status(200).json(users);
});



module.exports = router;