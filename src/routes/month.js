import { Router } from 'express';

import monthDeclarationList from '../jsons/monthDeclarationList';
import monthDeclarationDetail from '../jsons/monthDeclarationDetail';
import monthlYears from '../jsons/monthlYears';

const router = Router();

router.get('/getMonthDeclarationList', (req, res) => {
  const {
    userId,
    orgCode,
    refNo,
    mpaRefNo,
    submitStartDate,
    submitEndDate,
    cargoOprYear,
    cargoOprMonth,
  } = req.query;

  if (
    orgCode === 'CAL'
    && refNo === 'DM17030207'
    && mpaRefNo === 'TP17040001'
    && submitStartDate === '26/02/2018'
    && submitEndDate === '26/04/2018'
    && cargoOprYear === '2018'
    && cargoOprMonth === '03'
  ) return res.json(monthDeclarationList);

  return res.json(global.errors);
});

router.get('/getMonthDeclarationDetail', (req, res) => {
  const { refNo } = req.query;

  if (refNo === 'DM17030207') return res.json(monthDeclarationDetail);

  return res.json(global.errors);
});

router.get('/monthlYears', (req, res) => {
  const { orgCode } = req.query;

  if (orgCode === 'CAL') return res.json(monthlYears);

  return res.json(global.errors);
});

export default router;
