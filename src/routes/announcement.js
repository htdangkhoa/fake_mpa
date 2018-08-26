import { Router } from 'express';

import announcements from '../jsons/announcements';
import announcementsNone from '../jsons/announcements_none';

const router = Router();

router.get('/getAnnouncements', (req, res) => {
  const count = Math.round(Math.random() * 1);

  if (count !== 0) {
    return res.status(200).json(announcements);
  }

  return res.status(200).json(announcementsNone);
});

export default router;
