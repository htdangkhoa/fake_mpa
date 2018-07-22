import express from 'express';
import recentMessages from '../jsons/recentMessages';
import nacServices from '../jsons/nacServices';
import filterMessages from '../jsons/filterMessages';

const router = express.Router();

router.get('/recentMessages', (req, res) => {
  const { qty } = req.query;

  if (qty < 20 && qty >= 0) {
    recentMessages.returnPayload.length -= recentMessages.returnPayload.length - qty;
  }

  res.send(recentMessages.returnPayload);
});

router.get('/nacServices', (req, res) => {
  res.json(nacServices);
});

router.get('/filterMessage', (req, res) => {
  const {
    userId, serviceId, eventId, startDate, endDate, adminMode, targetId,
  } = req.query;

  if (
    userId === 'dnvacc17'
    && serviceId === '2'
    && eventId === '1'
    && startDate === '1520667837097'
    && endDate === '1523246153634'
    && targetId === '0'
  ) return res.json(filterMessages);

  return res.json(global.errors);
});

export default router;
