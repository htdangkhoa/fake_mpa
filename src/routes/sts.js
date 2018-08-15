import { Router } from 'express';
import stsApplication from '../jsons/stsApplication';
import stsApplicationError from '../jsons/stsApplicationError';
import stsApplicationListByCancellable from '../jsons/stsApplicationListByCancellable';
import stsApplicationListByRecent from '../jsons/stsApplicationListByRecent';
import stsApplicationListBySearchTerms from '../jsons/stsApplicationListBySearchTerms';
import stsMasterData from '../jsons/stsMasterData';
import stsVesselEntryListByVesselCraftLicenseOrVesselName from '../jsons/stsVesselEntryListByVesselCraftLicenseOrVesselName';

const router = Router();

router.post('/getSTSApplication', (req, res) => {
  const { userId, orgCode, appRefNo } = req.query;

  if (userId === 'vptacc01' && orgCode === 'VPT' && appRefNo === '201804000030') {
    return res.json(stsApplication);
  }

  return res.json(stsApplicationError);
});

router.post('/getSTSApplicationListBySearchTerms', (req, res) => {
  const {
    userId, orgCode, searchTerm, opsDt,
  } = req.query;

  if (
    userId === 'mpancs01'
    && orgCode === 'MPA'
    && searchTerm === 'CLEANSEAS'
    && opsDt === '1488375780000'
  ) {
    return res.json(stsApplicationListBySearchTerms);
  }

  return res.json(global.errors);
});

router.post('/getSTSApplicationListByRecent', (req, res) => {
  const { userId, orgCode } = req.query;

  if (userId === 'mpancs01' && orgCode === 'MPA') {
    return res.json(stsApplicationListByRecent);
  }

  return res.json(global.errors);
});

router.post('/getSTSApplicationListByCancellable', (req, res) => {
  const { userId, orgCode } = req.query;

  if (userId === 'hymaccs1' && orgCode === 'HYM') {
    return res.json(stsApplicationListByCancellable);
  }

  return res.json(global.errors);
});

router.post('/getSTSMasterData', (req, res) => res.json(stsMasterData));

router.post('/getSTSVesselEntryListByVesselCraftLicenseOrVesselName', (req, res) => {
  const { userId, searchTerm } = req.query;

  if (userId === 'mpancs04' && searchTerm === 'PRO') {
    return res.json(stsVesselEntryListByVesselCraftLicenseOrVesselName);
  }

  return res.json(global.errors);
});

export default router;
