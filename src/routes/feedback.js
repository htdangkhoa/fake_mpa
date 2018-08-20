import { Router } from 'express';
import feedbackCategories from '../jsons/feedbackCategories';

const router = Router();

router.post('/getFeedbackCategories', (req, res) => {
  res.json(feedbackCategories);
});

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
