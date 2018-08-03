import express from 'express';
import vesselInPortList from '../jsons/vesselInPortList';
import vesselInPortDetail from '../jsons/vesselInPortDetail';
import vesselArrived from '../jsons/vesselArrived';

const router = express.Router();

router.get('/getVesselInPortList', (req, res) => {
  const { userId } = req.query;

  if (userId === 'mpancs01') return res.json(vesselInPortList);

  return res.json(global.errors);
});

router.get('/getVesselInPortDetail', (req, res) => {
  const { userId, vslId } = req.query;

  if (userId === 'mpancs01' && vslId === '57023') return res.json(vesselInPortDetail);

  return res.json(global.errors);
});

router.get('/getVesselArrived', (req, res) => res.json(vesselArrived));

export default router;
