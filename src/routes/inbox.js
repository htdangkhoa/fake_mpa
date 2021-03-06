import { Router } from 'express';
import recentMessages from '../jsons/recentMessages';
import nacServices from '../jsons/nacServices';
import filterMessages from '../jsons/filterMessages';

const router = Router();

router.post('/getRecentMessages', (req, res) => {
  const { qty } = req.body;

  if (qty < 20 && qty >= 0) {
    recentMessages.returnPayload.length -= recentMessages.returnPayload.length - qty;
  }

  res.send(recentMessages);
});

router.post('/nacServices', (req, res) => {
  res.json(nacServices);
});

router.post('/getFilterMessage', (req, res) => {
  const {
    userId, serviceId, eventId, startDate, endDate, adminMode, targetId,
  } = req.body;

  if (
    userId === 'dnvacc17'
    && serviceId === '2'
    && eventId === '1'
    && startDate === '1520667837097'
    && endDate === '1523246153634'
    && targetId === '0'
  ) return res.status(200).json(filterMessages);

  return res.status(400).json(global.errors);
});

export default router;
