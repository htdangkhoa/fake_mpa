import express from 'express';
import vesselInPortList from '../jsons/vesselInPortList';

import annualStatementList from '../jsons/annualStatementList';
import annualStatementDetail from '../jsons/annualStatementDetail';
import annualTariffItemDetail from '../jsons/annualTariffItemDetail';

const router = express.Router();

router.get('/annualStatementList', (req, res) => {
  res.json(annualStatementList);
});

router.get('/annualStatementDetail', (req, res) => {
  res.json(annualStatementDetail);
});

router.get('/annualTariffItemDetail', (req, res) => {
  res.json(annualTariffItemDetail);
});

router.get('/getVesselInPortList', (req, res) => {
  res.json(vesselInPortList);
});

export default router;
