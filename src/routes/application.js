import { Router } from 'express';

import applicationList from '../jsons/applicationList';
import applicationDetail from '../jsons/applicationDetail';

const router = Router();

router.post('/getApplicationList', (req, res) => {
  const {
    userId, orgCode, refNo, status, location, submitStartDate, submitEndDate,
  } = req.query;

  if (
    orgCode === 'PSA'
    && refNo === 'AP18030002'
    && status === 'RJCT'
    && location === '145 AT 56'
    && submitStartDate === '26/02/2018'
    && submitEndDate === '26/04/2018'
  ) {
    return res.status(200).json(applicationList);
  }

  return res.status(400).json(global.errors);
});

router.post('/getApplicationDetail', (req, res) => {
  const { refNo } = req.query;

  if (refNo === 'AP18030002') return res.status(200).json(applicationDetail);

  return res.status(400).json(global.errors);
});

export default router;
