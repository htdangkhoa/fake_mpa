import express from 'express';

const router = express.Router();

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
  } = req.body;

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
