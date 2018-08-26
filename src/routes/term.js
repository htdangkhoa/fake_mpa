import { Router } from 'express';

import termList from '../jsons/termList';
import termDetail from '../jsons/termDetail';

const router = Router();

router.post('/getTermList', (req, res) => {
  const {
    userId, orgCode, mpaRefNo, location,
  } = req.query;

  if (orgCode === 'CAL' && mpaRefNo === 'TP17040002' && location === 'TEST11 AT TE') return res.status(200).json(termList);

  return res.status(400).json(global.errors);
});

router.post('/getTermDetail', (req, res) => {
  const { refNo } = req.query;

  if (refNo === 'TP17040002') return res.status(200).json(termDetail);

  return res.status(400).json(global.errors);
});

export default router;
