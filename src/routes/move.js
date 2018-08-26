import { Router } from 'express';
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
import addMOVEWatchList from '../jsons/addMOVEWatchList';
import removeMOVEWatchList from '../jsons/removeMOVEWatchList';

const router = Router();

router.post('/getMoveWatchList', (req, res) => {
  const { userId } = req.query;

  if (userId === 'mpancs02') return res.status(200).json(moveWatchList);

  return res.status(400).json(global.errors);
});

router.post('/getMoveVesselStatusInPortList', (req, res) => {
  const {
    userId, vslName, vslCallsign, vslIMO,
  } = req.query;

  if (userId === 'mpancs04' && vslName === 'PIL') return res.status(200).json(moveVesselStatusInPortList);

  return res.status(400).json(global.errors);
});

router.post('/getMoveVesselStatusInPortDetail', (req, res) => {
  const {
    userId, vslId, paymentRequired, orgCode,
  } = req.query;

  if (userId === 'mpancs04' && vslId === '30970' && paymentRequired === 'true' && orgCode === 'MPA') return res.status(200).json(moveVesselStatusInPortDetail);

  return res.status(400).json(global.errors);
});

router.post('/getMoveVesselStatusInPortDetailPDF', (req, res) => {
  const { userId } = req.query;

  if (userId === 'mpancs01') return res.status(200).json(moveVesselStatusInPortDetailPDF);

  return res.status(400).json(global.errors);
});

router.post('/getMoveVesselArrivedList', (req, res) => {
  const { orgCode } = req.query;

  if (orgCode === 'MPA') return res.status(200).json(moveVesselArrivedList);

  return res.status(400).json(global.errors);
});

router.post('/getMoveVesselArrivedListPDF', (req, res) => {
  const { orgCode } = req.query;

  if (orgCode === 'MPA') return res.status(200).json(moveVesselArrivedListPDF);

  return res.status(400).json(global.errors);
});

router.post('/getMoveVesselDueToArriveList', (req, res) => {
  const { appRefNo } = req.query;

  if (appRefNo === '201709000070') return res.status(200).json(moveVesselDueToArriveList);

  return res.status(400).json(global.errors);
});

router.post('/getMoveVesselDueToArriveListPDF', (req, res) => {
  const { appRefNo } = req.query;

  if (appRefNo === '201709000070') return res.status(200).json(moveVesselDueToArriveListPDF);

  return res.status(400).json(global.errors);
});

router.post('/getMoveVesselDepartedList', (req, res) => {
  const { sno } = req.query;

  if (sno === '1') return res.status(200).json(moveVesselDepartedList);

  return res.status(400).json(global.errors);
});

router.post('/getMoveVesselDepartedListPDF', (req, res) => {
  const { sno } = req.query;

  if (sno === '1') return res.status(200).json(moveVesselDepartedListPDF);

  return res.status(400).json(global.errors);
});

router.post('/getMoveVesselDueToDepartList', (req, res) => {
  const {
    userId, byProfile, date, time,
  } = req.query;

  if (byProfile === 'false' && time === '6') return res.status(200).json(moveVesselDueToDepartList);

  return res.status(400).json(global.errors);
});

router.post('/getMoveVesselDueToDepartListPDF', (req, res) => {
  const {
    userId, byProfile, date, time,
  } = req.query;

  if (byProfile === 'false' && time === '6') return res.status(200).json(moveVesselDueToDepartListPDF);

  return res.status(400).json(global.errors);
});

router.post('/getMoveDailyShippingStateList', (req, res) => {
  const {
    userId, byProfile, indicator, paymentRequired, orgCode,
  } = req.query;

  if (
    userId === 'mpancs04'
    && byProfile === 'false'
    && indicator === 'locn'
    && paymentRequired === 'true'
    && orgCode === 'MPA'
  ) return res.status(200).json(moveDailyShippingStateList);

  return res.status(400).json(global.errors);
});

router.post('/getMoveDailyShippingStateListPDF', (req, res) => {
  const {
    userId, byProfile, indicator, paymentRequired, orgCode,
  } = req.query;

  if (
    userId === 'mpancs04'
    && byProfile === 'false'
    && indicator === 'locn'
    && paymentRequired === 'true'
    && orgCode === 'MPA'
  ) return res.status(200).json(moveDailyShippingStateListPDF);

  return res.status(400).json(global.errors);
});

router.post('/addMOVEWatchList', (req, res) => {
  const { userId, vslId } = req.query;

  if (userId === 'mpancs02' && vslId === '57023') {
    return res.status(200).json(addMOVEWatchList);
  }

  return res.status(400).json(global.errors);
});

router.post('/removeMOVEWatchList', (req, res) => {
  const { userId, vslId } = req.query;

  if (userId === 'mpancs02' && vslId === '57023') {
    return res.status(200).json(removeMOVEWatchList);
  }

  return res.status(400).json(global.errors);
});

export default router;
