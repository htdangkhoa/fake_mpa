import { Router } from 'express';
import axios from 'axios';
import cheerio from 'cheerio';
import PDFParser from 'pdf2json';

const parser = new PDFParser();

const rootHost = 'https://www.mpa.gov.sg';

const router = Router();

router.get('/circulars', async (req, res) => {
  const { page } = req.query;

  const circulars = [];

  const response = await axios({
    baseURL: `${rootHost}/web/portal/home/port-of-singapore/circulars-and-notices/port-marine-circulars?page=${page || 1}`,
    method: 'GET',
  });

  try {
    const $ = cheerio.load(response.data);

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

router.get('/circular_detail', async (req, res) => {
  const { id } = req.query;

  const payload = {};

  const response = await axios({
    baseURL: 'https://www.mpa.gov.sg/web/portal/home/port-of-singapore/circulars-and-notices/port-marine-circulars/detail/6b8b3ece-ff98-4bb4-88ae-d3246e5dbd3b',
    method: 'GET',
  });

  const $ = cheerio.load(response.data);

  try {
    const wpthemeInner = $('#layoutContainers .wpthemeInner');

    const title = $(wpthemeInner).children('.pg_title').text();

    const content = $(wpthemeInner).find('.wpthemeControlBody .content_wrapper.circular');

    let date = null;

    $(wpthemeInner).find('.wpthemeControlBody .content_wrapper.circular p').each((i, p) => {
      const dateParsed = Date.parse($(p).text());

      if (!isNaN(dateParsed)) date = $(p).text();

      return;
    });

    const pdfUrl = $(content).find('.download > li > a').attr('href');

    payload.title = title;
    payload.date = date;
    payload.pdfUrl = `https://www.mpa.gov.sg${pdfUrl}`;
    
    const test = await axios({
      baseURL: payload.pdfUrl,
      method: 'GET',
    });
    console.log(test.data);

    return res.json(payload);
  } catch (error) {
    return res.json(error);
  }
});

export default router;
