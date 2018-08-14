import { Router } from 'express';

import termList from '../jsons/termList';
import termDetail from '../jsons/termDetail';

const router = Router();

router.get('/getTermList', (req, res) => {
  const {
    userId, orgCode, mpaRefNo, location,
  } = req.query;

  if (orgCode === 'CAL' && mpaRefNo === 'TP17040002' && location === 'TEST11 AT TE') return res.json(termList);

  return res.json(global.errors);
});

router.get('/getTermDetail', (req, res) => {
  const { refNo } = req.query;

  if (refNo === 'TP17040002') return res.json(termDetail);

  return res.json(global.errors);
});

export default router;
