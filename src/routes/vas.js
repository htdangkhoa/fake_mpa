import express from 'express';
import vasVessel from '../jsons/vasVessel';
import addVASConfiguration from '../jsons/addVASConfiguration';
import vasConfiguration from '../jsons/vasConfiguration';

const router = express.Router();

router.get('/getVASVessel', (req, res) => {
  const {
    userId, vslName, vslCallsign, vslIMO,
  } = req.query;

  if (userId === 'mpancs04' && vslName === 'PIL') {
    return res.json(vasVessel);
  }

  return res.json(global.errors);
});

router.post('/addVASConfiguration', (req, res) => {
  const {
    userId, vslId, events, hours,
  } = req.body;

  if (userId === 'mpancs04' && vslId === '9999' && events === '1234' && hours === 'N') {
    return res.json(addVASConfiguration);
  }

  return res.json(global.errors);
});

router.get('/getVASConfiguration', (req, res) => {
  const { userId } = req.query;

  if (userId === 'mpancs04') {
    return res.json(vasConfiguration);
  }

  return res.json(global.errors);
});

export default router;
