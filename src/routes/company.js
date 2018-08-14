import { Router } from 'express';

import companyName from '../jsons/companyName';

const router = Router();

router.get('/getCompanyName', (req, res) => {
  const { orgCode } = req.query;

  if (orgCode === 'CAL') return res.json(companyName);

  return res.json(global.errors);
});

export default router;
