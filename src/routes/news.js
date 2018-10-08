import { Router } from 'express';
import news from '../jsons/news';
import newsById from '../jsons/newsById';

const router = Router();

router.get('/news', (req, res) => {
  const { id } = req.query;

  if (id) {
    return res.status(200).json(newsById);
  }

  return res.status(200).json(news);
});

export default router;
