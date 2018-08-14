import { Router } from 'express';
import eWalletMasterData from '../jsons/eWalletMasterData';
import eWalletAccountInfo from '../jsons/eWalletAccountInfo';
import eWalletTransactionHistory from '../jsons/eWalletTransactionHistory';
import eWalletTransactionHistoryPDF from '../jsons/eWalletTransactionHistoryPDF';
import eWalletCreditThreshold from '../jsons/eWalletCreditThreshold';

const router = Router();

router.post('/getEWalletMasterData', (req, res) => {
  const { userId, orgCode } = req.query;

  if (userId === 'mpancs04' && orgCode === 'MPA') {
    return res.json(eWalletMasterData);
  }

  return res.json(global.errors);
});

router.post('/getEWalletAccountInfo', (req, res) => {
  const { userId, orgCode } = req.query;

  if (userId === 'mpancs04' && orgCode === 'MPA') {
    return res.json(eWalletAccountInfo);
  }

  return res.json(global.errors);
});

router.post('/getEWalletTransactionHistory', (req, res) => {
  const {
    userId, orgCode, transType, dateType,
  } = req.query;

  if (userId === 'cabacc07' && orgCode === 'CAB' && transType === '9304' && dateType === '4') {
    return res.json(eWalletTransactionHistory);
  }

  return res.json(global.errors);
});

router.post('/getEWalletTransactionHistoryPDF', (req, res) => {
  const {
    userId, orgCode, transType, dateType,
  } = req.query;

  if (userId === 'cabacc07' && orgCode === 'CAB' && transType === '9304' && dateType === '4') {
    return res.json(eWalletTransactionHistoryPDF);
  }

  return res.json(global.errors);
});

router.post('/updateEWalletCreditThreshold', (req, res) => {
  const { userId, orgCode, creditThreshold } = req.query;

  if (userId === 'mpancs04' && orgCode === 'MPA' && creditThreshold === '10.00') {
    return res.json(eWalletCreditThreshold);
  }

  return res.json(global.errors);
});

export default router;
