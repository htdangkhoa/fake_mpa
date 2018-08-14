import { Router } from 'express';
import vesselInPortList from '../jsons/vesselInPortList';

import annualStatementList from '../jsons/annualStatementList';
import annualStatementDetail from '../jsons/annualStatementDetail';
import annualTariffItemDetail from '../jsons/annualTariffItemDetail';

const router = Router();

router.get('/getAnnualStatementList', (req, res) => {
  const {
    userId, orgCode, refNo, submitStartDate, submitEndDate, cargoOprYear,
  } = req.query;

  if (
    orgCode === 'CAL'
    && refNo === 'SY17040001'
    && submitStartDate === '26/02/2017'
    && submitEndDate === '26/04/2017'
    && cargoOprYear === '2016'
  ) return res.json(annualStatementList);

  return res.json(global.errors);
});

router.get('/getAnnualStatementDetail', (req, res) => {
  const { refNo } = req.query;

  if (refNo === 'SY17030005') return res.json(annualStatementDetail);

  return res.json(global.errors);
});

router.get('/getAnnualTariffItemDetail', (req, res) => {
  const {
    refNo,
    itemCode,
    mpaRefNo,
    cargoOprYear,
    indicator,
    primaryitemName,
    activityName,
  } = req.query;

  if (
    refNo === 'SY17030005'
    && itemCode === '1LD'
    && mpaRefNo === 'TP17030002'
    && cargoOprYear === '2016'
    && indicator === 'YES'
    && primaryitemName === 'All goods including general cargo--Loaded on vessel at wharf'
    && activityName === 'Loaded on vessel at wharf'
  ) return res.json(annualTariffItemDetail);

  return res.json(global.errors);
});

export default router;
