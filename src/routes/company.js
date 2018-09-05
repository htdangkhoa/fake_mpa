import { Router } from 'express';

import companyName from '../jsons/companyName';

const router = Router();

router.post('/getCompanyName', (req, res) => {
  const { orgCode } = req.body;

  if (orgCode === 'CAL') return res.status(200).json(companyName);

  return res.status(400).json(global.errors);
});

export default router;
