import express from 'express';

import monthDeclarationList from '../jsons/monthDeclarationList';
import monthDeclarationDetail from '../jsons/monthDeclarationDetail';
import monthlYears from '../jsons/monthlYears';

const router = express.Router();

router.get('/monthDeclarationList', (req, res) => {
  res.json(monthDeclarationList);
});

router.get('/monthDeclarationDetail', (req, res) => {
  res.json(monthDeclarationDetail);
});

router.get('/monthlYears', (req, res) => {
  res.json(monthlYears);
});

export default router;
