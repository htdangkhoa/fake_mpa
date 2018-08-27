import { Router } from 'express';
import { isObject, isArray } from 'lodash';
import stsApplication from '../jsons/stsApplication';
import stsApplicationError from '../jsons/stsApplicationError';
import stsApplicationListByCancellable from '../jsons/stsApplicationListByCancellable';
import stsApplicationListByRecent from '../jsons/stsApplicationListByRecent';
import stsApplicationListBySearchTerms from '../jsons/stsApplicationListBySearchTerms';
import stsMasterData from '../jsons/stsMasterData';
import stsVesselEntryListByVesselCraftLicenseOrVesselName from '../jsons/stsVesselEntryListByVesselCraftLicenseOrVesselName';
import cancelSTSOperation from '../jsons/cancelSTSOperation';

const router = Router();

router.post('/getSTSApplication', (req, res) => {
  const { userId, orgCode, appRefNo } = req.query;

  if (userId === 'vptacc01' && orgCode === 'VPT' && appRefNo === '201804000030') {
    return res.status(200).json(stsApplication);
  }

  return res.status(200).json(stsApplicationError);
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
    return res.status(200).json(stsApplicationListBySearchTerms);
  }

  return res.status(400).json(global.errors);
});

router.post('/getSTSApplicationListByRecent', (req, res) => {
  const { userId, orgCode } = req.query;

  if (userId === 'mpancs01' && orgCode === 'MPA') {
    return res.status(200).json(stsApplicationListByRecent);
  }

  return res.status(400).json(global.errors);
});

router.post('/getSTSApplicationListByCancellable', (req, res) => {
  const { userId, orgCode } = req.query;

  if (userId === 'hymaccs1' && orgCode === 'HYM') {
    return res.status(200).json(stsApplicationListByCancellable);
  }

  return res.status(400).json(global.errors);
});

router.get('/getSTSMasterData', (req, res) => res.json(stsMasterData));

router.post('/getSTSVesselEntryListByVesselCraftLicenseOrVesselName', (req, res) => {
  const { userId, searchTerm } = req.query;

  if (userId === 'mpancs04' && searchTerm === 'PRO') {
    return res.status(200).json(stsVesselEntryListByVesselCraftLicenseOrVesselName);
  }

  return res.status(400).json(global.errors);
});

router.post('/submitSTSApplication', (req, res) => {
  const {
    userId, orgCode, appRefNo, appDt, applicant, operations,
  } = req.body;

  if (!isObject(applicant) || !isArray(operations)) {
    return res.status(400).json(global.errors);
  }

  return res.status(200).json({
    userId,
    orgCode,
    appRefNo,
    appDt,
    applicant,
    operations,
  });
});

router.post('/cancelSTSOperation', (req, res) => {
  const {
    userId, orgCode, appRefNo, sno,
  } = req.query;

  if (userId === 'mpancs01' && orgCode === 'MPA' && appRefNo === '201709000070' && sno === '1') {
    return res.status(200).json(cancelSTSOperation);
  }

  return res.status(400).json(global.errors);
});

export default router;
