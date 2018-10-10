import { Router } from 'express';
import news from '../jsons/news';
import newsById from '../jsons/newsById';
import articles from '../jsons/articles';
import circularsShipping from '../jsons/circularsShipping';
import circularsShippingById from '../jsons/circularsShippingById';
import circularsPortMarine from '../jsons/circularsPortMarine';
import circularsPortMarineById from '../jsons/circularsPortMarineById';
import noticesPortMarine from '../jsons/noticesPortMarine';
import noticesPortMarineById from '../jsons/noticesPortMarineById';
import noticesMaritimeSecurity from '../jsons/noticesMaritimeSecurity';
import noticesMaritimeSecurityById from '../jsons/noticesMaritimeSecurityById';
import noticesSingaporeanNoticesToMariners from '../jsons/noticesSingaporeanNoticesToMariners';
import noticesSingaporeanNoticesToMarinersById from '../jsons/noticesSingaporeanNoticesToMarinersById';

const router = Router();

router.get('/articles', (req, res) => {
  res.status(200).json(articles);
});

router.get('/news', (req, res) => {
  const { id } = req.query;

  if (id) {
    return res.status(200).json(newsById);
  }

  return res.status(200).json(news);
});

router.get('/circulars', (req, res) => {
  const { category, id } = req.query;

  switch (category.toLowerCase()) {
    case 'shipping circulars': {
      if (id) return res.status(200).json(circularsShippingById);

      return res.status(200).json(circularsShipping);
    }
    case 'port marine circulars': {
      if (id) return res.status(200).json(circularsPortMarineById);

      return res.status(200).json(circularsPortMarine);
    }
    default:
      return res.status(400).json(global.errors);
  }
});

router.get('/notices', (req, res) => {
  const { category, id } = req.query;

  switch (category.toLowerCase()) {
    case 'port marine notices': {
      if (id) return res.status(200).json(noticesPortMarineById);

      return res.status(200).json(noticesPortMarine);
    }
    case 'maritime security notices': {
      if (id) return res.status(200).json(noticesMaritimeSecurityById);

      return res.status(200).json(noticesMaritimeSecurity);
    }
    case 'singaporean notices to mariners': {
      if (id) return res.status(200).json(noticesSingaporeanNoticesToMarinersById);

      return res.status(200).json(noticesSingaporeanNoticesToMariners);
    }
    default:
      return res.status(400).json(global.errors);
  }
});

export default router;
