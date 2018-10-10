import { Router } from 'express';
import eWalletMasterData from '../jsons/eWalletMasterData';
import eWalletAccountInfo from '../jsons/eWalletAccountInfo';
import eWalletTransactionHistory from '../jsons/eWalletTransactionHistory';
import eWalletTransactionHistoryNoResult from '../jsons/eWalletTransactionHistoryNoResult';
import eWalletTransactionHistoryPDF from '../jsons/eWalletTransactionHistoryPDF';
import eWalletCreditThreshold from '../jsons/eWalletCreditThreshold';
import confirmEWalletTopupSuccess from '../jsons/confirmEWalletTopupSuccess';

const router = Router();

router.post('/getEWalletMasterData', (req, res) => {
  const { userId, orgCode } = req.body;

  if (userId === 'mpancs04' && orgCode === 'MPA') {
    return res.status(200).json(eWalletMasterData);
  }

  return res.status(400).json(global.errors);
});

router.post('/getEWalletAccountInfo', (req, res) => {
  const { userId, orgCode } = req.body;

  if (userId === 'mpancs04' && orgCode === 'MPA') {
    return res.status(200).json(eWalletAccountInfo);
  }

  return res.status(400).json(global.errors);
});

router.post('/getEWalletTransactionHistory', (req, res) => {
  const {
    userId, orgCode, transType, dateType,
  } = req.body;

  if (userId === 'cabacc07' && orgCode === 'CAB' && transType === '9304' && dateType === '4') {
    return res.status(200).json(eWalletTransactionHistory);
  }

  return res.status(200).json(eWalletTransactionHistoryNoResult);
});

router.post('/getEWalletTransactionHistoryPDF', (req, res) => {
  const {
    userId, orgCode, transType, dateType,
  } = req.body;

  if (userId === 'cabacc07' && orgCode === 'CAB' && transType === '9304' && dateType === '4') {
    return res.status(200).json(eWalletTransactionHistoryPDF);
  }

  return res.status(400).json(global.errors);
});

router.post('/updateEWalletCreditThreshold', (req, res) => {
  const { userId, orgCode, creditThreshold } = req.body;

  if (userId === 'mpancs04' && orgCode === 'MPA' && creditThreshold === '10.00') {
    return res.status(200).json(eWalletCreditThreshold);
  }

  return res.status(400).json(global.errors);
});

router.post('/updateEWalletAutoUpdate', (req, res) => {
  const {
    userId, orgCode, autoTopup, autoTopupAccountNo, autoTopupAmount, mat,
  } = req.body;

  const amtValid = ['10.00', '50.00'];

  if (
    userId === 'mpancs04'
    && orgCode === 'MPA'
    && autoTopupAccountNo === '1234567'
    && amtValid.indexOf(autoTopupAmount) !== -1
  ) {
    return res.status(200).json({
      returnCode: 0,
      returnMessage: '',
      returnPayload: '',
    });
  }

  return res.status(400).json({
    returnCode: 1,
    returnMessage: 'An error has been encountered while trying to process your request.',
    returnPayload: '',
  });
});

router.post('/submitEWalletTopup', (req, res) => {
  const {
    userId, orgCode, purType, purValue, purMatCode, purAccountNo,
  } = req.body;

  if (
    userId === 'mpancs04'
    && orgCode === 'MPA'
    && purType === 'GIRO'
    && purMatCode === 'SGD'
    && purAccountNo === '1234567'
  ) {
    return res.status(200).json({
      returnCode: 0,
      returnMessage: '',
      returnPayload: 'd3b02b31-8fea-4d1d-a92b-a055712a9e8e',
    });
  }

  return res.status(400).json({
    returnCode: 1,
    returnMessage: 'An error has been encountered while trying to process your request.',
    returnPayload: '',
  });
});

router.post('/confirmEWalletTopup', (req, res) => {
  const { userId, orgCode, transId } = req.body;

  if (userId === 'mpancs04' && orgCode === 'MPA' && transId === 'd3b02b31-8fea-4d1d-a92b-a055712a9e8e') {
    return res.status(200).json(confirmEWalletTopupSuccess);
  }

  return res.status(400).json(global.errors);
});

export default router;
