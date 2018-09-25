import { Router } from 'express';
import axios from 'axios';
import cheerio from 'cheerio';

const rootHost = 'https://www.mpa.gov.sg';

const router = Router();

router.get('/circulars', async (req, res) => {
  const { page } = req.query;

  const circulars = [];

  const response = await axios({
    baseURL: `${rootHost}/web/portal/home/port-of-singapore/circulars-and-notices/port-marine-circulars?page=${page || 1}`,
    method: 'GET',
  });

  const $ = cheerio.load(response.data);

  try {
    $('.listings.resize ul li').each((index, li) => {
      const small = $(li).find('small').text().split(' | ');

      const no = small[0];
      const dateTime = small[1];
      const title = $(li).find('a').text();
      const url = `${rootHost}${$(li).find('a').attr('href')}`;
      const id = url.substring(url.lastIndexOf('/') + 1);

      const circularItem = {
        id,
        dateTime,
        no,
        title,
        url,
        type: 'MARINE_CIRCULARS',
      };

      circulars.push(circularItem);
    });

    return res.json({
      returnCode: 0,
      returnMessage: 'success',
      returnPayload: circulars,
    });
  } catch (error) {
    return res.json(global.errors);
  }
});

export default router;
