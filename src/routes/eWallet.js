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
    return res.status(200).json(eWalletMasterData);
  }

  return res.status(400).json(global.errors);
});

router.post('/getEWalletAccountInfo', (req, res) => {
  const { userId, orgCode } = req.query;

  if (userId === 'mpancs04' && orgCode === 'MPA') {
    return res.status(200).json(eWalletAccountInfo);
  }

  return res.status(400).json(global.errors);
});

router.post('/getEWalletTransactionHistory', (req, res) => {
  const {
    userId, orgCode, transType, dateType,
  } = req.query;

  if (userId === 'cabacc07' && orgCode === 'CAB' && transType === '9304' && dateType === '4') {
    return res.status(200).json(eWalletTransactionHistory);
  }

  return res.status(400).json(global.errors);
});

router.post('/getEWalletTransactionHistoryPDF', (req, res) => {
  const {
    userId, orgCode, transType, dateType,
  } = req.query;

  if (userId === 'cabacc07' && orgCode === 'CAB' && transType === '9304' && dateType === '4') {
    return res.status(200).json(eWalletTransactionHistoryPDF);
  }

  return res.status(400).json(global.errors);
});

router.post('/updateEWalletCreditThreshold', (req, res) => {
  const { userId, orgCode, creditThreshold } = req.query;

  if (userId === 'mpancs04' && orgCode === 'MPA' && creditThreshold === '10.00') {
    return res.status(200).json(eWalletCreditThreshold);
  }

  return res.status(400).json(global.errors);
});

export default router;
