import { Router } from 'express';

const router = Router();

router.post('/getMOVEVesselArrivedListV2', (req, res) => {
  res.redirect(307, '/api/getMoveVesselArrivedList');
});

router.post('/getMOVEVesselArrivedListPDFV2', (req, res) => {
  res.redirect(307, '/api/getMOVEVesselArrivedListPDF');
});

router.post('/getMOVEVesselDueToArriveListV2', (req, res) => {
  res.redirect(307, '/api/getMOVEVesselDueToArriveList');
});

router.post('/getMOVEVesselDueToArriveListPDFV2', (req, res) => {
  res.redirect(307, '/api/getMOVEVesselDueToArriveListPDF');
});

router.post('/getMOVEVesselDepartedListV2', (req, res) => {
  res.redirect(307, '/api/getMOVEVesselDepartedList');
});

router.post('/getMOVEVesselDepartedListPDFV2', (req, res) => {
  res.redirect(307, '/api/getMOVEVesselDepartedListPDF');
});

router.post('/getMOVEVesselDueToDepartListV2', (req, res) => {
  res.redirect(307, '/api/getMOVEVesselDueToDepartList');
});

router.post('/getMOVEVesselDueToDepartListPDFV2', (req, res) => {
  res.redirect(307, '/api/getMOVEVesselDueToDepartListPDF');
});

export default router;
