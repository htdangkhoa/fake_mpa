import { Router } from 'express';
import tidalAtlasMap from '../jsons/tidalAtlasMap';
import tidalAtlasTimeSeriesReading from '../jsons/tidalAtlasTimeSeriesReading';

const router = Router();

router.post('/getTidalAtlasMap', (req, res) => {
  const { location, date, time } = req.body;

  if (location === 'SSP' && date === '20180409' && time === '0000') {
    return res.status(200).json(tidalAtlasMap);
  }

  return res.status(400).json(global.errors);
});

router.post('/getTidalAtlasTimeSeriesReading', (req, res) => {
  const { location, point } = req.body;

  if (location === 'SSP' && point === 'A') {
    return res.status(200).json(tidalAtlasTimeSeriesReading);
  }

  return res.status(400).json(global.errors);
});

export default router;
