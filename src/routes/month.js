import { Router } from 'express';

import monthDeclarationList from '../jsons/monthDeclarationList';
import monthDeclarationDetail from '../jsons/monthDeclarationDetail';
import monthlYears from '../jsons/monthlYears';

const router = Router();

router.post('/getMonthDeclarationList', (req, res) => {
  const {
    userId,
    orgCode,
    refNo,
    mpaRefNo,
    submitStartDate,
    submitEndDate,
    cargoOprYear,
    cargoOprMonth,
  } = req.body;

  if (
    orgCode === 'CAL'
    && refNo === 'DM17030207'
    && mpaRefNo === 'TP17040001'
    && submitStartDate === '26/02/2018'
    && submitEndDate === '26/04/2018'
    && cargoOprYear === '2018'
    && cargoOprMonth === '03'
  ) return res.status(200).json(monthDeclarationList);

  return res.status(400).json(global.errors);
});

router.post('/getMonthDeclarationDetail', (req, res) => {
  const { refNo } = req.body;

  if (refNo === 'DM17030207') return res.status(200).json(monthDeclarationDetail);

  return res.status(400).json(global.errors);
});

router.post('/monthlYears', (req, res) => {
  const { orgCode } = req.body;

  if (orgCode === 'CAL') return res.status(200).json(monthlYears);

  return res.status(400).json(global.errors);
});

export default router;
