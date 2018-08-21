import { Router } from 'express';
import { isUndefined } from 'lodash';
import feedbackCategories from '../jsons/feedbackCategories';

const router = Router();

router.get('/getFeedbackCategories', (req, res) => {
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
  } = req.body;

  if (
    isUndefined(subcategory)
    || isUndefined(email)
    || isUndefined(name)
    || isUndefined(contact)
    || isUndefined(message)
  ) {
    return res.json(global.errors);
  }

  return res.json({
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
