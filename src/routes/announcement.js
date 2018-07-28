import express from 'express';

import announcements from '../jsons/announcements';
import announcementsNone from '../jsons/announcements_none';

const router = express.Router();

router.get('/getAnnouncements', (req, res) => {
  const count = Math.round(Math.random() * 1);

  if (count !== 0) {
    return res.json(announcements);
  }

  return res.json(announcementsNone);
});

export default router;
