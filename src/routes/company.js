import express from 'express';

import companyName from '../jsons/companyName';

const router = express.Router();

router.get('/companyName', (req, res) => {
  res.json(companyName);
});

export default router;
