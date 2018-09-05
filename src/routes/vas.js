import { Router } from 'express';
import vasVessel from '../jsons/vasVessel';
import addVASConfiguration from '../jsons/addVASConfiguration';
import vasConfiguration from '../jsons/vasConfiguration';

const router = Router();

router.post('/getVASVessel', (req, res) => {
  const {
    userId, vslName, vslCallsign, vslIMO,
  } = req.body;

  if (userId === 'mpancs04' && vslName === 'PIL') {
    return res.status(200).json(vasVessel);
  }

  return res.status(400).json(global.errors);
});

router.post('/addVASConfiguration', (req, res) => {
  const {
    userId, vslId, events, hours,
  } = req.body;

  if (userId === 'mpancs04' && vslId === '9999' && events === '1234' && hours === 'N') {
    return res.status(200).json(addVASConfiguration);
  }

  return res.status(400).json(global.errors);
});

router.post('/getVASConfiguration', (req, res) => {
  const { userId } = req.body;

  if (userId === 'mpancs04') {
    return res.status(200).json(vasConfiguration);
  }

  return res.status(400).json(global.errors);
});

export default router;
