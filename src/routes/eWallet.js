import express from 'express';
import eWalletMasterData from '../jsons/eWalletMasterData';
import eWalletAccountInfo from '../jsons/eWalletAccountInfo';
import eWalletTransactionHistory from '../jsons/eWalletTransactionHistory';
import eWalletTransactionHistoryPDF from '../jsons/eWalletTransactionHistoryPDF';
import eWalletCreditThreshold from '../jsons/eWalletCreditThreshold';

const router = express.Router();

router.get('/getEWalletMasterData', (req, res) => {
  const { userId, orgCode } = req.query;

  if (userId === 'mpancs04' && orgCode === 'MPA') {
    return res.json(eWalletMasterData);
  }

  return res.json(global.errors);
});

router.get('/getEWalletAccountInfo', (req, res) => {
  const { userId, orgCode } = req.query;

  if (userId === 'mpancs04' && orgCode === 'MPA') {
    return res.json(eWalletAccountInfo);
  }

  return res.json(global.errors);
});

router.get('/getEWalletTransactionHistory', (req, res) => {
  const {
    userId, orgCode, transType, dateType,
  } = req.query;

  if (userId === 'cabacc07' && orgCode === 'CAB' && transType === '9304' && dateType === '4') {
    return res.json(eWalletTransactionHistory);
  }

  return res.json(global.errors);
});

router.get('/getEWalletTransactionHistoryPDF', (req, res) => {
  const {
    userId, orgCode, transType, dateType,
  } = req.query;

  if (userId === 'cabacc07' && orgCode === 'CAB' && transType === '9304' && dateType === '4') {
    return res.json(eWalletTransactionHistoryPDF);
  }

  return res.json(global.errors);
});

router.put('/updateEWalletCreditThreshold', (req, res) => {
  const { userId, orgCode, creditThreshold } = req.query;

  if (userId === 'mpancs04' && orgCode === 'MPA' && creditThreshold === '10.00') {
    return res.json(eWalletCreditThreshold);
  }

  return res.json(global.errors);
});

export default router;
