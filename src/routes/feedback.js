import { Router } from 'express';

const router = Router();

router.post('/sendFeedback', (req, res) => {
  const {
    subcategory,
    email,
    name,
    contact,
    message,
    imgName,
    imgBinary,
    latitude,
    longitude,
  } = req.query;

  res.json({
    returnCode: 0,
    isSuccessful: true,
    returnPayload: {
      subcategory,
      email,
      name,
      contact,
      message,
      imgName,
      imgBinary,
      latitude,
      longitude,
    },
    returnMessage: 'success',
  });
});

export default router;
