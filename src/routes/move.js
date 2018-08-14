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

router.get('/getMoveWatchList', (req, res) => {
  const { userId } = req.query;

  if (userId === 'mpancs02') return res.json(moveWatchList);

  return res.json(global.errors);
});

router.get('/getMoveVesselStatusInPortList', (req, res) => {
  const {
    userId, vslName, vslCallsign, vslIMO,
  } = req.query;

  if (userId === 'mpancs04' && vslName === 'PIL') return res.json(moveVesselStatusInPortList);

  return res.json(global.errors);
});

router.get('/getMoveVesselStatusInPortDetail', (req, res) => {
  const {
    userId, vslId, paymentRequired, orgCode,
  } = req.query;

  if (userId === 'mpancs04' && vslId === '30970' && paymentRequired === 'true' && orgCode === 'MPA') return res.json(moveVesselStatusInPortDetail);

  return res.json(global.errors);
});

router.get('/getMoveVesselStatusInPortDetailPDF', (req, res) => {
  const { userId } = req.query;

  if (userId === 'mpancs01') return res.json(moveVesselStatusInPortDetailPDF);

  return res.json(global.errors);
});

router.get('/getMoveVesselArrivedList', (req, res) => {
  const { orgCode } = req.query;

  if (orgCode === 'MPA') return res.json(moveVesselArrivedList);

  return res.json(global.errors);
});

router.get('/getMoveVesselArrivedListPDF', (req, res) => {
  const { orgCode } = req.query;

  if (orgCode === 'MPA') return res.json(moveVesselArrivedListPDF);

  return res.json(global.errors);
});

router.get('/getMoveVesselDueToArriveList', (req, res) => {
  const { appRefNo } = req.query;

  if (appRefNo === '201709000070') return res.json(moveVesselDueToArriveList);

  return res.json(global.errors);
});

router.get('/getMoveVesselDueToArriveListPDF', (req, res) => {
  const { appRefNo } = req.query;

  if (appRefNo === '201709000070') return res.json(moveVesselDueToArriveListPDF);

  return res.json(global.errors);
});

router.get('/getMoveVesselDepartedList', (req, res) => {
  const { sno } = req.query;

  if (sno === '1') return res.json(moveVesselDepartedList);

  return res.json(global.errors);
});

router.get('/getMoveVesselDepartedListPDF', (req, res) => {
  const { sno } = req.query;

  if (sno === '1') return res.json(moveVesselDepartedListPDF);

  return res.json(global.errors);
});

router.get('/getMoveVesselDueToDepartList', (req, res) => {
  const {
    userId, byProfile, date, time,
  } = req.query;

  if (byProfile === 'false' && time === '6') return res.json(moveVesselDueToDepartList);

  return res.json(global.errors);
});

router.get('/getMoveVesselDueToDepartListPDF', (req, res) => {
  const {
    userId, byProfile, date, time,
  } = req.query;

  if (byProfile === 'false' && time === '6') return res.json(moveVesselDueToDepartListPDF);

  return res.json(global.errors);
});

router.get('/getMoveDailyShippingStateList', (req, res) => {
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

router.get('/getMoveDailyShippingStateListPDF', (req, res) => {
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

router.post('/addMOVEWatchList', (req, res) => {
  const { userId, vslId } = req.body;

  if (userId === 'mpancs02' && vslId === '57023') {
    return res.json(addMOVEWatchList);
  }

  return res.json(global.errors);
});

router.delete('/removeMOVEWatchList', (req, res) => {
  const { userId, vslId } = req.query;

  if (userId === 'mpancs02' && vslId === '57023') {
    return res.json(removeMOVEWatchList);
  }

  return res.json(global.errors);
});

export default router;
