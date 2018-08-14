import { Router } from 'express';
import tidalAtlasMap from '../jsons/tidalAtlasMap';
import tidalAtlasTimeSeriesReading from '../jsons/tidalAtlasTimeSeriesReading';

const router = Router();

router.post('/getTidalAtlasMap', (req, res) => {
  const { location, date, time } = req.query;

  if (location === 'SSP' && date === '20180409' && time === '0000') {
    return res.json(tidalAtlasMap);
  }

  return res.json(global.errors);
});

router.post('/getTidalAtlasTimeSeriesReading', (req, res) => {
  const { location, point } = req.query;

  if (location === 'SSP' && point === 'A') {
    return res.json(tidalAtlasTimeSeriesReading);
  }

  return res.json(global.errors);
});

export default router;
