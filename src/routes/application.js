import { Router } from 'express';

import applicationList from '../jsons/applicationList';
import applicationDetail from '../jsons/applicationDetail';

const router = Router();

router.get('/getApplicationList', (req, res) => {
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
    return res.json(applicationList);
  }

  return res.json(global.errors);
});

router.get('/getApplicationDetail', (req, res) => {
  const { refNo } = req.query;

  if (refNo === 'AP18030002') return res.json(applicationDetail);

  return res.json(global.errors);
});

export default router;
