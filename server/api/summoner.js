const router = require('express').Router();
const { Summoner } = require('../db/models');
const axios = require('axios');
const API_KEY = 'RGAPI-1eaf67ed-905d-449b-a1d8-f9cc155bf3ad';

router.get('/:summonerName', async (req, res, next) => {
  try {
    const summonerName = req.params.summonerName;
    let summoner = await Summoner.findOne({ where: { name: summonerName } });
    if (!summoner) {
      const request = await axios.get(
        `https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${summonerName}?api_key=${API_KEY}`
      );
      summoner = await Summoner.create(request.data);
    }
    res.json(summoner);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
