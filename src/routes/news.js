import { Router } from 'express';
import axios from 'axios';
import cheerio from 'cheerio';

const rootHost = 'https://www.mpa.gov.sg';

const router = Router();

router.get('/news', async (req, res) => {
  const { page } = req.query;

  const news = [];

  const response = await axios({
    baseURL: `${rootHost}/web/portal/home/media-centre/news-releases/mpa-news-releases?page=${page || 1}`,
    method: 'GET',
  });

  const $ = cheerio.load(response.data);

  try {
    $('.listings.resize ul li').each((index, li) => {
      const dateTime = $(li).find('small').text();
      const title = $(li).find('a').text();
      const url = `${rootHost}${$(li).find('a').attr('href')}`;
      const id = url.substring(url.lastIndexOf('/') + 1);

      const newItem = {
        id,
        dateTime,
        title,
        url,
        type: 'NEWS',
      };

      news.push(newItem);
    });

    return res.json({
      returnCode: 0,
      returnMessage: 'success',
      returnPayload: news,
    });
  } catch (error) {
    return res.json(global.errors);
  }
});

router.get('/news_detail', async (req, res) => {
  const { id } = req.query;

  const payload = {};

  const response = await axios({
    baseURL: `${rootHost}/web/portal/home/media-centre/news-releases/mpa-news-releases/detail/${id}`,
    method: 'GET',
  });

  try {
    const $ = cheerio.load(response.data);

    const wpthemeInner = $('#layoutContainers .wpthemeInner');

    const title = $(wpthemeInner).children('.pg_title').text();

    const content = $(wpthemeInner).find('.wpthemeControlBody .content_wrapper.resize');

    let date = null;

    $(wpthemeInner).find('.wpthemeControlBody .content_wrapper.resize strong').each((i, strong) => {
      if (i === 0) date = $(strong).text();
    });

    const arrayContent = [];

    $(content).find('div, p').each((index, p) => {
      const pText = $(p).text().trim().replace(/  +/g, ' ') || null;

      const strong = $(p).find('strong').text().trim().replace(/  +/g, ' ') || null;

      const img = $(p).find('img').attr('src') || null;

      const realData = {
        p: pText,
        img,
        strong,
      };

      arrayContent.push(realData);
    });

    payload.title = title;
    payload.date = date;
    payload.content = arrayContent;

    return res.json({
      returnCode: 0,
      returnMessage: 'success',
      returnPayload: payload,
    });
  } catch (error) {
    return res.json(global.errors);
  }
});

export default router;
