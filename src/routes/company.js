import express from 'express';

import companyName from '../jsons/companyName';

const router = express.Router();

router.get('/companyName', (req, res) => {
  const { orgCode } = req.query;

  if (orgCode === 'CAL') return res.json(companyName);

  return res.json(global.errors);
});

export default router;
