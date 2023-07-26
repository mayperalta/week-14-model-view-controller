// Import modules
const router = require('express').Router();
const { Community } = require('../../models');

router.post('/', async (req, res) => {
  try {
    console.log("triggered")
    const communityData = await Community.create(req.body);
    console.log(communityData)
    res.status(200).json(communityData);
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;