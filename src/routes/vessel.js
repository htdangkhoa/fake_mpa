import { Router } from 'express';
import vesselInPortList from '../jsons/vesselInPortList';
import vesselInPortDetail from '../jsons/vesselInPortDetail';
import vesselArrived from '../jsons/vesselArrived';

const router = Router();

router.post('/getVesselInPortList', (req, res) => {
  const { userId } = req.query;

  if (userId === 'mpancs01') return res.status(200).json(vesselInPortList);

  return res.status(400).json(global.errors);
});

router.post('/getVesselInPortDetail', (req, res) => {
  const { userId, vslId } = req.query;

  if (userId === 'mpancs01' && vslId === '57023') return res.status(200).json(vesselInPortDetail);

  return res.status(400).json(global.errors);
});

router.post('/getVesselArrived', (req, res) => res.json(vesselArrived));

export default router;
