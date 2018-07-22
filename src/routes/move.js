import express from 'express';
import moveWatchList from '../jsons/moveWatchList';
import moveVesselStatusInPortList from '../jsons/moveVesselStatusInPortList';
import moveVesselStatusInPortDetail from '../jsons/moveVesselStatusInPortDetail';
import moveVesselStatusInPortDetailPDF from '../jsons/moveVesselStatusInPortDetailPDF';
import moveVesselArrivedList from '../jsons/moveVesselArrivedList';
import moveVesselArrivedListPDF from '../jsons/moveVesselArrivedListPDF';
import moveVesselDueToArriveList from '../jsons/moveVesselDueToArriveList';
import moveVesselDueToArriveListPDF from '../jsons/moveVesselDueToArriveListPDF';
import moveVesselDepartedList from '../jsons/moveVesselDepartedList';
import moveVesselDepartedListPDF from '../jsons/moveVesselDepartedListPDF';
import moveVesselDueToDepartList from '../jsons/moveVesselDueToDepartList';
import moveVesselDueToDepartListPDF from '../jsons/moveVesselDueToDepartListPDF';
import moveDailyShippingStateList from '../jsons/moveDailyShippingStateList';
import moveDailyShippingStateListPDF from '../jsons/moveDailyShippingStateListPDF';

const router = express.Router();

router.get('/moveWatchList', (req, res) => {
  const { userId } = req.query;

  if (userId === 'mpancs02') return res.json(moveWatchList);

  return res.json(global.errors);
});

router.get('/moveVesselStatusInPortList', (req, res) => {
  const {
    userId, vslName, vslCallsign, vslIMO,
  } = req.query;

  if (userId === 'mpancs04' && vslName === 'PIL') return res.json(moveVesselStatusInPortList);

  return res.json(global.errors);
});

router.get('/moveVesselStatusInPortDetail', (req, res) => {
  const {
    userId, vslId, paymentRequired, orgCode,
  } = req.query;

  if (userId === 'mpancs04' && vslId === '30970' && paymentRequired === 'true' && orgCode === 'MPA') return res.json(moveVesselStatusInPortDetail);

  return res.json(global.errors);
});

router.get('/moveVesselStatusInPortDetailPDF', (req, res) => {
  const { userId } = req.query;

  if (userId === 'mpancs01') return res.json(moveVesselStatusInPortDetailPDF);

  return res.json(global.errors);
});

router.get('/moveVesselArrivedList', (req, res) => {
  const { orgCode } = req.query;

  if (orgCode === 'MPA') return res.json(moveVesselArrivedList);

  return res.json(global.errors);
});

router.get('/moveVesselArrivedListPDF', (req, res) => {
  const { orgCode } = req.query;

  if (orgCode === 'MPA') return res.json(moveVesselArrivedListPDF);

  return res.json(global.errors);
});

router.get('/moveVesselDueToArriveList', (req, res) => {
  const { appRefNo } = req.query;

  if (appRefNo === '201709000070') return res.json(moveVesselDueToArriveList);

  return res.json(global.errors);
});

router.get('/moveVesselDueToArriveListPDF', (req, res) => {
  const { appRefNo } = req.query;

  if (appRefNo === '201709000070') return res.json(moveVesselDueToArriveListPDF);

  return res.json(global.errors);
});

router.get('/moveVesselDepartedList', (req, res) => {
  const { sno } = req.query;

  if (sno === '1') return res.json(moveVesselDepartedList);

  return res.json(global.errors);
});

router.get('/moveVesselDepartedListPDF', (req, res) => {
  const { sno } = req.query;

  if (sno === '1') return res.json(moveVesselDepartedListPDF);

  return res.json(global.errors);
});

router.get('/moveVesselDueToDepartList', (req, res) => {
  const {
    userId, byProfile, date, time,
  } = req.query;

  if (byProfile === 'false' && time === '6') return res.json(moveVesselDueToDepartList);

  return res.json(global.errors);
});

router.get('/moveVesselDueToDepartListPDF', (req, res) => {
  const {
    userId, byProfile, date, time,
  } = req.query;

  if (byProfile === 'false' && time === '6') return res.json(moveVesselDueToDepartListPDF);

  return res.json(global.errors);
});

router.get('/moveDailyShippingStateList', (req, res) => {
  const {
    userId, byProfile, indicator, paymentRequired, orgCode,
  } = req.query;

  if (
    userId === 'mpancs04'
    && byProfile === 'false'
    && indicator === 'locn'
    && paymentRequired === 'true'
    && orgCode === 'MPA'
  ) return res.json(moveDailyShippingStateList);

  return res.json(global.errors);
});

router.get('/moveDailyShippingStateListPDF', (req, res) => {
  const {
    userId, byProfile, indicator, paymentRequired, orgCode,
  } = req.query;

  if (
    userId === 'mpancs04'
    && byProfile === 'false'
    && indicator === 'locn'
    && paymentRequired === 'true'
    && orgCode === 'MPA'
  ) return res.json(moveDailyShippingStateListPDF);

  return res.json(global.errors);
});

export default router;
